// State variables
let isSurvivorMode = false;
let selectedTopics = [];
let incorrectQuestions = [];
let currentGameQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 15;

// DOM Elements
const topicListDiv = document.getElementById('topic-list');
const searchBar = document.getElementById('search-bar');
const startBtn = document.getElementById('start-btn');
const selectedCountSpan = document.getElementById('selected-count');

// Initialize Topics on Setup Screen
let initialX = 0;
let initialY = 0;

// Initialize Topics on Setup Screen
function initSetup() {
    renderTopics(allTopics);
    
    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allTopics.filter(t => t.toLowerCase().includes(term));
        renderTopics(filtered);
    });

    startBtn.addEventListener('click', startGame);
    document.getElementById('restart-btn').addEventListener('click', resetToSetup);

    const qCard = document.getElementById('current-question');

    document.getElementById('start-survivor-btn').addEventListener('click', startSurvivorMode);
    
    document.getElementById('survivor-back-btn').addEventListener('click', () => {
        document.body.classList.remove('survivor-end-bg');
        resetToSetup();
    });
    
    document.getElementById('survivor-repeat-btn').addEventListener('click', () => {
        document.body.classList.remove('survivor-end-bg');
        startSurvivorMode();
    });

    // === DESKTOP DRAG EVENT ===
    qCard.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'dummy-data'); 
    });

    // === MOBILE TOUCH EVENTS ===
    qCard.addEventListener('touchstart', (e) => {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        qCard.style.transition = 'none'; // Disable CSS transitions so it instantly tracks the finger
        qCard.style.position = 'relative';
        qCard.style.zIndex = '1000'; // Bring it to the front
    }, { passive: false });

    qCard.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Crucial: Stops the screen from scrolling down
        
        const touch = e.touches[0];
        const moveX = touch.clientX - initialX;
        const moveY = touch.clientY - initialY;
        
        // Physically move the card
        qCard.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Highlight the drop zone underneath the finger
        qCard.style.visibility = 'hidden'; // Briefly hide card to peek at what is underneath
        const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        qCard.style.visibility = 'visible'; // Unhide instantly

        // Remove highlight from all zones first
        document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
        
        // Add highlight if hovering over a valid zone
        if (elementBelow) {
            const zone = elementBelow.closest('.drop-zone');
            if (zone) {
                zone.classList.add('drag-over');
            }
        }
    }, { passive: false });

    qCard.addEventListener('touchend', (e) => {
        // Snap the card back to the center smoothly
        qCard.style.transition = 'transform 0.3s ease'; 
        qCard.style.transform = 'translate(0px, 0px)';
        qCard.style.zIndex = '1';

        const touch = e.changedTouches[0];
        
        // Find exactly where the finger was lifted
        qCard.style.visibility = 'hidden';
        const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        qCard.style.visibility = 'visible';

        // Clear all visual highlights
        document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));

        // If dropped over a valid zone, trigger the game logic!
        if (elementBelow) {
            const zone = elementBelow.closest('.drop-zone');
            if (zone) {
                handleDrop(zone.dataset.topic);
            }
        }
    });
}
function renderTopics(topicsToRender) {
    topicListDiv.innerHTML = '';
    topicsToRender.forEach(topic => {
        // Change the main container to a <label> instead of a <div>
        const labelContainer = document.createElement('label');
        labelContainer.className = 'topic-item';
        labelContainer.style.cursor = 'pointer'; // Makes it obvious it's clickable
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = topic;
        checkbox.checked = selectedTopics.includes(topic);
        
        // Handle max 10 selection
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                if (selectedTopics.length >= 10) {
                    e.target.checked = false;
                    alert("Maximum 10 topics allowed.");
                    return;
                }
                selectedTopics.push(topic);
            } else {
                selectedTopics = selectedTopics.filter(t => t !== topic);
            }
            updateStartButton();
        });

        // Use a <span> for the text instead of a label, since the container is now the label
        const spanText = document.createElement('span');
        spanText.textContent = topic;

        labelContainer.appendChild(checkbox);
        labelContainer.appendChild(spanText);
        topicListDiv.appendChild(labelContainer);
    });
}

function updateStartButton() {
    selectedCountSpan.textContent = selectedTopics.length;
    startBtn.disabled = selectedTopics.length === 0;
}

// Game Logic
// The Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Updated Game Logic
function startGame() {
    isSurvivorMode = false;
    // Filter question bank based on selected topics
    let availableQuestions = questionBank.filter(q => selectedTopics.includes(q.topic));
    
    if (availableQuestions.length === 0) {
        alert("No questions found for the selected topics in the database!");
        return;
    }

    // Shuffle the entire pool of available questions first
    availableQuestions = shuffleArray(availableQuestions);

    currentGameQuestions = [];
    
    if (availableQuestions.length >= TOTAL_QUESTIONS) {
        currentGameQuestions = availableQuestions.slice(0, TOTAL_QUESTIONS);
    } else {
        for (let i = 0; i < TOTAL_QUESTIONS; i++) {
            currentGameQuestions.push(availableQuestions[i % availableQuestions.length]);
        }
        currentGameQuestions = shuffleArray(currentGameQuestions);
    }

    // Reset stats & mistakes
    score = 0;
    currentQuestionIndex = 0;
    incorrectQuestions = []; // Reset the review list!
    
    document.getElementById('score').textContent = score;
    document.getElementById('restart-btn').classList.add('hidden');

    // Switch screens
    document.getElementById('setup-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('setup-screen').style.display = 'none';

    setupDropZones();
    loadNextQuestion();
}

// New Survivor Mode Logic
function startSurvivorMode() {
    isSurvivorMode = true;
    
    // 1. Pick 10 random topics from the master list
    let shuffledAll = shuffleArray([...allTopics]);
    selectedTopics = shuffledAll.slice(0, 10);
    
    // 2. Filter and shuffle all possible questions for those topics
    let availableQuestions = questionBank.filter(q => selectedTopics.includes(q.topic));
    currentGameQuestions = shuffleArray(availableQuestions);
    
    // 3. Reset Stats
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('restart-btn').classList.add('hidden');
    
    // 4. Switch screens
    document.getElementById('setup-screen').classList.remove('active');
    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('survivor-end-screen').classList.remove('active');
    document.getElementById('survivor-end-screen').style.display = 'none';
    
    document.getElementById('game-screen').classList.add('active');
    document.getElementById('game-screen').style.display = 'block';
    
    document.getElementById('current-question').draggable = true;
    
    setupDropZones();
    loadNextQuestion();
}

function setupDropZones() {
    const dropZonesDiv = document.getElementById('drop-zones');
    dropZonesDiv.innerHTML = '';

    selectedTopics.forEach(topic => {
        const zone = document.createElement('div');
        zone.className = 'drop-zone';
        zone.textContent = topic;
        zone.dataset.topic = topic; // Store correct topic for validation

        // Drag events
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Required to allow dropping
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            handleDrop(topic);
        });

        dropZonesDiv.appendChild(zone);
    });
}

function loadNextQuestion() {
    const maxQuestions = isSurvivorMode ? currentGameQuestions.length : TOTAL_QUESTIONS;
    
    if (currentQuestionIndex >= maxQuestions) {
        if (isSurvivorMode) {
            endSurvivorGame(); // They miraculously beat the whole database!
        } else {
            endGame();
        }
        return;
    }

    // Update Header Text cleanly based on mode
    const headerH2 = document.querySelector('.game-header h2');
    if (isSurvivorMode) {
        headerH2.innerHTML = `Question <span id="question-number">${currentQuestionIndex + 1}</span>`;
    } else {
        headerH2.innerHTML = `Question <span id="question-number">${currentQuestionIndex + 1}</span>/${TOTAL_QUESTIONS}`;
    }

    // ---> THESE TWO LINES WERE MISSING! <---
    const q = currentGameQuestions[currentQuestionIndex];
    const qElement = document.getElementById('current-question');
    
    qElement.innerHTML = ''; // Clear previous

    if (q.type === 'image') {
        const img = document.createElement('img');
        img.src = q.content;
        img.className = 'question-image';
        qElement.appendChild(img);
    } else {
        qElement.innerHTML = q.content;
        // Tell MathJax to re-render the new LaTeX content
        if (window.MathJax) {
            MathJax.typesetPromise([qElement]);
        }
    }
}

function handleDrop(droppedTopic) {
    const actualTopic = currentGameQuestions[currentQuestionIndex].topic;
    const body = document.body;
    
    body.classList.remove('flash-correct', 'flash-incorrect');
    void body.offsetWidth; 
    
    if (droppedTopic === actualTopic) {
        score++;
        body.classList.add('flash-correct');
        document.getElementById('score').textContent = score;
        currentQuestionIndex++;
        loadNextQuestion();
    } else {
        body.classList.add('flash-incorrect');
        
        if (isSurvivorMode) {
            // SUDDEN DEATH
            endSurvivorGame();
        } else {
            // Normal Mode Penalty
            score--;
            document.getElementById('score').textContent = score;
            incorrectQuestions.push({
                question: currentGameQuestions[currentQuestionIndex],
                guessed: droppedTopic,
                correct: actualTopic
            });
            currentQuestionIndex++;
            loadNextQuestion();
        }
    }
}

function endGame() {
    const qElement = document.getElementById('current-question');
    qElement.draggable = false;
    document.getElementById('drop-zones').innerHTML = '';
    document.getElementById('restart-btn').classList.remove('hidden');

    // Build the End Screen HTML
    let endMessage = `<h3>Game Over! Final Score: ${score}</h3>`;

    if (incorrectQuestions.length === 0) {
        endMessage += `<p>Perfect! You categorised everything correctly.</p>`;
    } else {
        endMessage += `<h4 style="margin-top: 20px;">Questions to Review:</h4><ul class="review-list">`;
        
        incorrectQuestions.forEach(item => {
            let qText = item.question.type === 'image' 
                ? `<img src="${item.question.content}" style="max-height: 80px;">` 
                : item.question.content;
                
            endMessage += `
                <li>
                    <div class="review-q">${qText}</div>
                    <div class="review-feedback">
                        ❌ You guessed: <span>${item.guessed}</span> <br>
                        ✅ Correct topic: <strong>${item.correct}</strong>
                    </div>
                </li>`;
        });
        
        endMessage += `</ul>`;
    }

    qElement.innerHTML = endMessage;

    // Tell MathJax to render all the math in our new review list!
    if (window.MathJax) {
        MathJax.typesetPromise([qElement]);
    }
}

function endSurvivorGame() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('game-screen').style.display = 'none';
    
    const survivorScreen = document.getElementById('survivor-end-screen');
    survivorScreen.classList.add('active');
    survivorScreen.style.display = 'block';
    
    document.getElementById('survivor-final-score').textContent = score;
    document.body.classList.add('survivor-end-bg'); // Triggers the Violet background!
}

function resetToSetup() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('survivor-end-screen').style.display = 'none';
    document.getElementById('setup-screen').style.display = 'block';
    document.getElementById('current-question').draggable = true;
    document.body.classList.remove('survivor-end-bg');
}

// Start app
initSetup();

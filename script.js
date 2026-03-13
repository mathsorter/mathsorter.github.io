// State variables
let selectedTopics = [];
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
function initSetup() {
    renderTopics(allTopics);
    
    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allTopics.filter(t => t.toLowerCase().includes(term));
        renderTopics(filtered);
    });

    startBtn.addEventListener('click', startGame);
    document.getElementById('restart-btn').addEventListener('click', resetToSetup);
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
    // Filter question bank based on selected topics
    let availableQuestions = questionBank.filter(q => selectedTopics.includes(q.topic));
    
    if (availableQuestions.length === 0) {
        alert("No questions found for the selected topics in the database!");
        return;
    }

    // Shuffle the entire pool of available questions first
    availableQuestions = shuffleArray(availableQuestions);

    currentGameQuestions = [];
    
    // Check if we have enough unique questions
    if (availableQuestions.length >= TOTAL_QUESTIONS) {
        // Take the first 15 unique, shuffled questions
        currentGameQuestions = availableQuestions.slice(0, TOTAL_QUESTIONS);
    } else {
        // If they pick a topic with fewer than 15 questions, loop through them
        for (let i = 0; i < TOTAL_QUESTIONS; i++) {
            currentGameQuestions.push(availableQuestions[i % availableQuestions.length]);
        }
        // Shuffle one more time so any repeating questions aren't in a predictable pattern
        currentGameQuestions = shuffleArray(currentGameQuestions);
    }

    // Reset stats
    score = 0;
    currentQuestionIndex = 0;
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
    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        endGame();
        return;
    }

    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
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

    // Setup drag event for question
    qElement.addEventListener('dragstart', (e) => {
        // We just need to trigger the drag, validation happens via global state index
        e.dataTransfer.setData('text/plain', 'dummy-data'); 
    });
}

function handleDrop(droppedTopic) {
    const actualTopic = currentGameQuestions[currentQuestionIndex].topic;
    
    if (droppedTopic === actualTopic) {
        score++;
    } else {
        score--;
    }
    
    document.getElementById('score').textContent = score;
    currentQuestionIndex++;
    loadNextQuestion();
}

function endGame() {
    document.getElementById('current-question').innerHTML = "Game Over! Final Score: " + score;
    document.getElementById('current-question').draggable = false;
    document.getElementById('drop-zones').innerHTML = '';
    document.getElementById('restart-btn').classList.remove('hidden');
}

function resetToSetup() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('setup-screen').style.display = 'block';
    document.getElementById('current-question').draggable = true;
}

// Start app
initSetup();

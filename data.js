// List all possible topics here
const allTopics = [
    "Completing the Square",
    "Factorising Double Brackets",
    "Using the Quadratic Formula",
    "Differentiation",
    "Pythagoras Theorem"
];

// Add your questions here. 
// type can be 'text' (which includes LaTeX) or 'image'
const questionBank = [
    {
        type: 'text',
        content: "Solve: \\( x^2 + 6x + 9 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Factorise: \\( x^2 + 5x + 6 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Find the roots of \\( 2x^2 - 4x - 3 = 0 \\)",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Find \\( \\frac{dy}{dx} \\) for \\( y = 3x^2 + 2x \\)",
        topic: "Differentiation"
    },
    {
        type: 'image',
        content: "images/triangle-q1.png", // Make sure this image exists in an 'images' folder
        topic: "Pythagoras Theorem"
    }
    // Add as many as you want! The game will randomly pick from these.
];

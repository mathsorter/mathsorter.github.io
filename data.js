// List all possible topics here
const allTopics = [
    "Completing the Square",
    "Factorising Double Brackets",
    "Using the Quadratic Formula",
    "Differentiation",
    "Expanding Single Brackets",
    "Pythagoras Theorem"
];

// Add your questions here. 
// type can be 'text' (which includes LaTeX) or 'image'
const questionBank = [
    // Expanding Single Brackets - Positives
    {
        type: 'text',
        content: "Expand: \\( 3(x + 4) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 5(y + 2) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 2(a + 7) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 4(m + 5) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 6(p + 3) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 7(k + 1) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 8(w + 6) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 9(n + 8) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( x(x + 5) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( y(y + 3) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 4(x - 3) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 6(y - 7) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 2(a - 9) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 5(m - 4) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 8(p - 2) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 3(k - 8) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( 7(w - 5) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( x(x - 2) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( m(m - 6) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( p(p - 1) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -2(x + 4) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -5(y - 3) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -3(a + 8) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -4(m - 7) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -6(p + 2) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -7(k - 5) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -x(x + 4) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -y(y - 9) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -2m(m + 3) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Expand: \\( -3p(p - 4) \\)",
        topic: "Expanding Single Brackets"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\(a(x+b)^2+c=0\\): \\( x^2 + 6x + 9 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(x+b)^2+c=0 \\): \\( x^2 + 4x - 5 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(y+b)^2+c=0 \\): \\( y^2 - 8y + 12 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(m+b)^2+c=0 \\): \\( m^2 + 10m + 21 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(p+b)^2+c=0 \\): \\( p^2 - 6p + 8 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(t+b)^2+c=0 \\): \\( t^2 + 2t - 15 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(q+b)^2+c=0 \\): \\( q^2 - 12q + 20 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(k+b)^2+c=0 \\): \\( k^2 + 14k + 45 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(w+b)^2+c=0 \\): \\( w^2 - 4w - 12 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(n+b)^2+c=0 \\): \\( n^2 + 8n - 9 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(v+b)^2+c=0 \\): \\( v^2 - 10v + 9 = 0 \\)",
        topic: "Completing the Square"
    },

    // Non-Monic Completing the Square
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(x+b)^2+c=0 \\): \\( 2x^2 + 8x - 10 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(y+b)^2+c=0 \\): \\( 3y^2 - 18y + 15 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(m+b)^2+c=0 \\): \\( 2m^2 + 12m + 10 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(p+b)^2+c=0 \\): \\( 4p^2 - 16p + 12 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(t+b)^2+c=0 \\): \\( 5t^2 + 20t - 25 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(q+b)^2+c=0 \\): \\( 2q^2 - 24q + 40 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(k+b)^2+c=0 \\): \\( 3k^2 + 6k - 24 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(w+b)^2+c=0 \\): \\( 4w^2 - 24w + 20 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(n+b)^2+c=0 \\): \\( 2n^2 + 16n - 18 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Solve by first rearranging into the form \\( a(v+b)^2+c=0 \\): \\( 5v^2 - 30v + 25 = 0 \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "Factorise: \\( x^2 + 5x + 6 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( x^2 + 7x + 10 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( y^2 - 5y + 6 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( p^2 + 3p - 4 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( m^2 - 8m - 20 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( t^2 + 10t + 25 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( q^2 - 9q + 14 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( a^2 + a - 12 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( w^2 - 12w + 35 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( n^2 + 6n - 27 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( x^2 + 5x + 6 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( k^2 - 2k - 15 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 2x^2 + 5x + 3 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 3y^2 - 10y + 8 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 5p^2 + 13p - 6 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 4m^2 - 4m - 15 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 6t^2 + 11t + 4 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 2q^2 - 7q - 4 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 3a^2 + 14a - 5 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 8w^2 - 10w + 3 \\)",
        topic: "Factorising Double Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 4n^2 + 12n + 9 \\)",
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

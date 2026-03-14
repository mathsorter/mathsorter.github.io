// List all possible topics here
const allTopics = [
    "Completing the Square",
    "Factorising Double Brackets",
    "Factorising Double Brackets (AC Method)",
    "Using the Quadratic Formula",
    "Differentiation",
    "Basic Laws of Indices",
    "Rationalising Denominators",
    "Factorising Single Brackets",
    "Factorising Algebraic Fractions",
    "Writing one value as a power of another",
    "Adding/Subtracting Algebraic Fractions",
    "Average Speed",
    "Linear Simultaneous Equations",
    "Non-linear Simultaneous Equations",
    "Changing the Subject",
    "Difference of Two Squares",
    "Triple Brackets",
    "Solving by Factorising (AC Method)",
    "Solving by Factorising",
    "Fractional & Negative Indices",
    "Expanding Single Brackets",
    "Expanding Multiple Single Brackets",
    "Expanding Double Brackets",
    "Multiplying/Dividing Algebraic Fractions",
    "Pythagoras Theorem"
];

// Add your questions here. 
// type can be 'text' (which includes LaTeX) or 'image'
const questionBank = [
    // Expanding Double Brackets - One Non-Monic Bracket (a >= 2)
    {
        type: 'text',
        content: "Expand and simplify: \\((2x+3)(x+5)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((3y-1)(y+6)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((4m+5)(m-2)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((5p-3)(p-4)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((2a+7)(a-3)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((8w+3)(w-2)\\)",
        topic: "Expanding Double Brackets"
    },

    // Expanding Double Brackets - Both Non-Monic Brackets (Advanced)
    {
        type: 'text',
        content: "Expand and simplify: \\((2x+1)(2x+5)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((3y-2)(2y+3)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((4m+1)(3m-2)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((5k-4)(2k-1)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((3n+5)(3n-4)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((6x-1)(2x+3)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((2p+7)(4p-3)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((7a-2)(2a-5)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((3x-5)(5x+2)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((x+2)(x+5)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((x+3)(x+4)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((y+6)(y+2)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((m+1)(m+7)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((a+4)(a+4)\\)",
        topic: "Expanding Double Brackets"
    },

    // Expanding Double Brackets - Mixed Signs
    {
        type: 'text',
        content: "Expand and simplify: \\((x+5)(x-2)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((y-4)(y+3)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((p+7)(p-5)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((k-6)(k+2)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((w+1)(w-8)\\)",
        topic: "Expanding Double Brackets"
    },

    // Expanding Double Brackets - Both Negative
    {
        type: 'text',
        content: "Expand and simplify: \\((x-3)(x-4)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((y-5)(y-6)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((m-2)(m-7)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((a-1)(a-9)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((p-8)(p-8)\\)",
        topic: "Expanding Double Brackets"
    },

    // Expanding Double Brackets - Non-Monic (Advanced)
    {
        type: 'text',
        content: "Expand and simplify: \\((2x+1)(x+3)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((3y-2)(y+4)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((4m+3)(2m-1)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((5p-2)(3p-4)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\((2x+5)(3x-2)\\)",
        topic: "Expanding Double Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 3(x + 2) + 2(x + 5) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 4(y - 3) + 3(2y + 1) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 5(2m + 1) + 2(m - 4) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 2(3p - 4) + 4(p - 2) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 6(a + 3) + 3(2a - 5) \\)",
        topic: "Expanding Multiple Single Brackets"
    },

    // Expanding Multiple Single Brackets - Negative Link (Positive terms inside)
    {
        type: 'text',
        content: "Expand and simplify: \\( 4(x + 5) - 2(x + 3) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 5(2k + 1) - 3(k + 4) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 7(w + 2) - 4(2w + 1) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 3(3t + 4) - 2(t + 5) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 8(n + 1) - 5(2n + 3) \\)",
        topic: "Expanding Multiple Single Brackets"
    },

    // Expanding Multiple Single Brackets - Negative Link (Negative terms inside - The tricky ones!)
    {
        type: 'text',
        content: "Expand and simplify: \\( 3(x + 7) - 2(6x - 2) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 5(y - 2) - 3(y - 4) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 4(2m + 3) - 5(m - 2) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 6(p - 1) - 2(3p - 5) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 2(4a + 5) - 3(2a - 7) \\)",
        topic: "Expanding Multiple Single Brackets"
    },

    // Expanding Multiple Single Brackets - Mixed Higher Coefficients
    {
        type: 'text',
        content: "Expand and simplify: \\( 3(2q - 5) + 4(3q - 1) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 7(2x - 3) - 4(x - 5) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 5(3y + 2) - 6(2y - 3) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 2(5k - 2) + 3(2k - 7) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 4(3w - 4) - 2(5w - 6) \\)",
        topic: "Expanding Multiple Single Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (x+2)(x+3)(x+4) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (x-1)(x+5)(x-2) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (x+3)(x-3)(x+1) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (x-2)(x-4)(x-5) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (x+1)(x-6)(x+5) \\)",
        topic: "Triple Brackets"
    },

    // Triple Brackets - Monic Cubics with No Constant (a=1, d=0)
    {
        type: 'text',
        content: "Expand and simplify: \\( x(x+4)(x-2) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( x(x-3)(x-5) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( x(x+1)(x+7) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( x(x-4)(x+4) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( x(x+6)(x-2) \\)",
        topic: "Triple Brackets"
    },

    // Triple Brackets - Non-Monic Cubics (a=2, d!=0)
    {
        type: 'text',
        content: "Expand and simplify: \\( (2x+1)(x+2)(x+3) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (2x-3)(x-1)(x+4) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (2x+5)(x-2)(x-3) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (2x-1)(x+4)(x-4) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( (2x+3)(x+1)(x-5) \\)",
        topic: "Triple Brackets"
    },

    // Triple Brackets - Non-Monic Cubics with No Constant (a=2, d=0)
    {
        type: 'text',
        content: "Expand and simplify: \\( 2x(x+3)(x-4) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( x(2x+1)(x-5) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 2x(x-2)(x-6) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( x(2x-3)(x+2) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Expand and simplify: \\( 2x(x+5)(x+1) \\)",
        topic: "Triple Brackets"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 + 5x + 6 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 + 5x + 4 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 + 7x + 10 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 + 9x + 18 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 + 10x + 16 = 0 \\)",
        topic: "Solving by Factorising"
    },

    // Solving by Factorising - Both Roots Positive (Negative Middle Term)
    {
        type: 'text',
        content: "Solve: \\( x^2 - 6x + 8 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 - 8x + 15 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 - 7x + 6 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 - 8x + 16 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 - 9x + 14 = 0 \\)",
        topic: "Solving by Factorising"
    },

    // Solving by Factorising - Mixed Signs
    {
        type: 'text',
        content: "Solve: \\( x^2 + 3x - 10 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 - 3x - 10 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 + 2x - 24 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 - 2x - 24 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( x^2 + 4x - 21 = 0 \\)",
        topic: "Solving by Factorising"
    },

    // Solving by Factorising - Larger Numbers & Different Variables
    {
        type: 'text',
        content: "Solve: \\( y^2 - 5y - 24 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( m^2 + 7m - 18 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( p^2 - 6p - 40 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( t^2 - 12t + 27 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve: \\( w^2 + 13w + 22 = 0 \\)",
        topic: "Solving by Factorising"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 2x^2 + 5x + 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 2x^2 + 5x + 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 3x^2 + 7x + 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 3x^2 + 5x + 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 4x^2 + 9x + 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },

    // Solving by Factorising (AC Method) - Both Roots Positive
    {
        type: 'text',
        content: "Solve by factorising: \\( 2x^2 - 5x + 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 2x^2 - 5x + 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 3x^2 - 7x + 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 3x^2 - 5x + 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 4x^2 - 13x + 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },

    // Solving by Factorising (AC Method) - Mixed Signs (One Positive, One Negative Root)
    {
        type: 'text',
        content: "Solve by factorising: \\( 2x^2 + 5x - 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 2x^2 - 5x - 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 3x^2 + 4x - 4 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 3x^2 - 4x - 4 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 5x^2 - 3x - 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 5x^2 + 3x - 2 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },

    // Solving by Factorising (AC Method) - Advanced / Composite Leading Coefficients
    {
        type: 'text',
        content: "Solve by factorising: \\( 4x^2 + 4x - 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 6x^2 - 7x - 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 6x^2 + 7x - 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve by factorising: \\( 8x^2 + 2x - 3 = 0 \\)",
        topic: "Solving by Factorising (AC Method)"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( y = x^2 \\)<br>\\( y = 2x + 3 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( y = x^2 - 4 \\)<br>\\( y = 3x \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( y = x^2 + 2x \\)<br>\\( y = x + 6 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( y = x^2 - x - 2 \\)<br>\\( y = 2x + 2 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( y = 2x^2 \\)<br>\\( y = 3x + 2 \\)",
        topic: "Non-linear Simultaneous Equations"
    },

    // Non-linear Simultaneous Equations - Circle & Line (Pre-arranged)
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 25 \\)<br>\\( y = x + 1 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 10 \\)<br>\\( y = 2x - 5 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 13 \\)<br>\\( x = y + 1 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 20 \\)<br>\\( y = x + 2 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 17 \\)<br>\\( y = x - 3 \\)",
        topic: "Non-linear Simultaneous Equations"
    },

    // Non-linear Simultaneous Equations - Rearranging Required
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 5 \\)<br>\\( x + y = 3 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 25 \\)<br>\\( x - y = 7 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y^2 = 34 \\)<br>\\( x + y = 8 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( xy = 12 \\)<br>\\( x + y = 7 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( xy = 8 \\)<br>\\( 2x + y = 8 \\)",
        topic: "Non-linear Simultaneous Equations"
    },

    // Non-linear Simultaneous Equations - Advanced Forms
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 - y^2 = 9 \\)<br>\\( x - y = 1 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + 2y^2 = 18 \\)<br>\\( x + y = 3 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 2x^2 - y^2 = 7 \\)<br>\\( 2x - y = 1 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( xy + y^2 = 10 \\)<br>\\( x - y = 3 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x^2 + y = 11 \\)<br>\\( x + y = 5 \\)",
        topic: "Non-linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x + y = 10 \\)<br>\\( x - y = 2 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 2x + y = 11 \\)<br>\\( x - y = 4 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 3x + 2y = 16 \\)<br>\\( x - 2y = 0 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 4x + 3y = 18 \\)<br>\\( x - 3y = -3 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 5x + y = 17 \\)<br>\\( 2x + y = 8 \\)",
        topic: "Linear Simultaneous Equations"
    },

    // Linear Simultaneous Equations - Scale One Equation
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x + 2y = 8 \\)<br>\\( 2x + 3y = 14 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 3x + y = 13 \\)<br>\\( 2x + 4y = 22 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 5x - 2y = 16 \\)<br>\\( x + 4y = 12 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 4x + 3y = 27 \\)<br>\\( 2x - y = 1 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 2x + 5y = 24 \\)<br>\\( 4x + 3y = 20 \\)",
        topic: "Linear Simultaneous Equations"
    },

    // Linear Simultaneous Equations - Scale Both Equations
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 2x + 3y = 13 \\)<br>\\( 3x + 2y = 12 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 3x + 4y = 18 \\)<br>\\( 4x + 5y = 23 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 5x - 2y = 11 \\)<br>\\( 3x + 3y = 15 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 4x - 3y = 17 \\)<br>\\( 3x + 4y = 19 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 7x + 2y = 23 \\)<br>\\( 2x + 5y = 11 \\)",
        topic: "Linear Simultaneous Equations"
    },

    // Linear Simultaneous Equations - Rearranging / Substitution
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( y = 2x + 1 \\)<br>\\( 3x + y = 16 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( x = y + 4 \\)<br>\\( 2x + 3y = 23 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 2x = 3y - 1 \\)<br>\\( 5x - 2y = 14 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( y - x = 5 \\)<br>\\( 3y + 2x = 25 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Solve the simultaneous equations:<br>\\( 4x = 10 - 2y \\)<br>\\( 3x + 5y = 11 \\)",
        topic: "Linear Simultaneous Equations"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{3x-9}{x-3} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^2+4x}{x} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{5x}{10x^2-15x} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^2-16}{x-4} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{y+5}{y^2-25} \\)",
        topic: "Factorising Algebraic Fractions"
    },

    // Factorising Algebraic Fractions - Monic Quadratics
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^2+5x+6}{x+2} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^2-7x+10}{x-5} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{a^2+8a+15}{a^2+3a} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{m^2-3m}{m^2-9} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{p^2-2p-8}{p^2-16} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^2+6x+9}{x^2-9} \\)",
        topic: "Factorising Algebraic Fractions"
    },

    // Factorising Algebraic Fractions - Quadratics on Top and Bottom
    {
        type: 'text',
        content: "Simplify: \\( \\frac{y^2+7y+12}{y^2+5y+4} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{n^2-n-20}{n^2-8n+15} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^2-1}{x^2+4x+3} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{a^2-2a+1}{a^2+a-2} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{w^2-10w+24}{w^2-3w-18} \\)",
        topic: "Factorising Algebraic Fractions"
    },

    // Factorising Algebraic Fractions - Non-Monic Quadratics (Advanced)
    {
        type: 'text',
        content: "Simplify: \\( \\frac{2x^2+5x+3}{x^2-1} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{3x^2-x-2}{3x^2+5x+2} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{2m^2+11m+5}{2m^2+m} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{4x^2-9}{2x^2+x-6} \\)",
        topic: "Factorising Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{10}{\\sqrt{5}} \\) <br>can be written in the form \\( a\\sqrt{b} \\) <br>where \\( a \\) and \\( b \\) are prime numbers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{14}{3\\sqrt{7}} \\) <br>can be written in the form \\( \\frac{a\\sqrt{b}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{6\\sqrt{2}}{\\sqrt{3}} \\) <br>can be written in the form \\( a\\sqrt{b} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{\\sqrt{12}}{\\sqrt{2}} \\) <br>can be written in the form \\( \\sqrt{a} \\) <br>where \\( a \\) is an integer.",
        topic: "Rationalising Denominators"
    },

    // Rationalising Denominators - Binomials, Integer Numerator (Medium)
    {
        type: 'text',
        content: "Show that \\( \\frac{3}{2 + \\sqrt{3}} \\) <br>can be written in the form \\( a - b\\sqrt{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{5}{4 - \\sqrt{11}} \\) <br>can be written in the form \\( a + \\sqrt{b} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{4}{3 + \\sqrt{5}} \\) <br>can be written in the form \\( a - \\sqrt{b} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{12}{5 - \\sqrt{7}} \\) <br>can be written in the form \\( \\frac{a + b\\sqrt{c}}{d} \\) <br>where \\( a, b, c, \\) and \\( d \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{2}{6 - 3\\sqrt{2}} \\) <br>can be written in the form \\( \\frac{a + \\sqrt{a}}{b} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{8}{3 - \\sqrt{5}} \\) <br>can be written in the form \\( a + b\\sqrt{5} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },

    // Rationalising Denominators - Surds on Top and Bottom (Hard)
    {
        type: 'text',
        content: "Show that \\( \\frac{\\sqrt{2}}{1 + \\sqrt{2}} \\) <br>can be written in the form \\( a - \\sqrt{b} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{1 + \\sqrt{3}}{2 - \\sqrt{3}} \\) <br>can be written in the form \\( a + b\\sqrt{3} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{3 - \\sqrt{5}}{3 + \\sqrt{5}} \\) <br>can be written in the form \\( \\frac{a - b\\sqrt{5}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{4 + \\sqrt{2}}{5 - 2\\sqrt{2}} \\) <br>can be written in the form \\( \\frac{a + b\\sqrt{2}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{\\sqrt{7} - 2}{\\sqrt{7} + 2} \\) <br>can be written in the form \\( \\frac{a - b\\sqrt{7}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },

    // Rationalising Denominators - Advanced / Mixed Surds (Challenge)
    {
        type: 'text',
        content: "Show that \\( \\frac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}} \\) <br>can be written in the form \\( \\frac{a + b\\sqrt{10}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{2\\sqrt{3} - 1}{3\\sqrt{3} + 2} \\) <br>can be written in the form \\( \\frac{a - b\\sqrt{3}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{5\\sqrt{2} + 3}{2\\sqrt{2} - 1} \\) <br>can be written in the form \\( \\frac{a + b\\sqrt{2}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{(2 + \\sqrt{3})^2}{4 - \\sqrt{3}} \\) <br>can be written in the form \\( \\frac{a + b\\sqrt{3}}{c} \\) <br>where \\( a, b, \\) and \\( c \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Show that \\( \\frac{\\sqrt{12} - \\sqrt{3}}{\\sqrt{8} + \\sqrt{2}} \\) <br>can be written in the form \\( \\frac{\\sqrt{a}}{b} \\) <br>where \\( a \\) and \\( b \\) are integers.",
        topic: "Rationalising Denominators"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{3x^2}{4y} \\times \\frac{8y^2}{9x} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{5a^3b}{2c} \\times \\frac{4c^2}{15ab^2} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{x-2}{3x} \\times \\frac{6x^2}{x-2} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{y+4}{y-1} \\times \\frac{y^2-1}{3y+12} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{m^2+2m}{5} \\times \\frac{15}{m^2-4} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{p^2-q^2}{p+q} \\times \\frac{p}{p-q} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{2x^2-8}{x^2-x-6} \\times \\frac{x-3}{x-2} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{a^2+6a+9}{a^2-9} \\times \\frac{a-3}{a+3} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{4x^2-1}{2x^2+x} \\times \\frac{x}{2x-1} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{n^2-5n+6}{n^2-4} \\times \\frac{n+2}{n-3} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },

    // Multiplying/Dividing Algebraic Fractions - Extra Division
    {
        type: 'text',
        content: "Simplify \\( \\frac{7x^3}{2y} \\div \\frac{14x}{6y^2} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{8a^2b^3}{3c} \\div \\frac{4ab^2}{9c^2} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{x+5}{4} \\div \\frac{x+5}{8x} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{m-3}{m^2} \\div \\frac{m^2-9}{m} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{y^2-16}{3y} \\div \\frac{y-4}{6y^2} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{p^2-25}{p^2+5p} \\div \\frac{p-5}{p} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{x^2+7x+10}{x+2} \\div \\frac{x+5}{x-1} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{2a^2-a-1}{a^2-1} \\div \\frac{2a+1}{a+1} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{n^2-n-12}{n^2-16} \\div \\frac{n+3}{n+4} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Simplify \\( \\frac{3x^2-12x}{x^2-x-12} \\div \\frac{3x}{x+3} \\)",
        topic: "Multiplying/Dividing Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Given that \\( 4^{k} = 8^{k-1} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 9^{k+1} = 27^k \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 25^{k-2} = 125^k \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 16^{k} = 64^{k-1} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 36^{k+1} = 216^k \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },

    // Writing one value as a power of another - With Multiplication
    {
        type: 'text',
        content: "Given that \\( 8^{k+1} = 4 \\times 2^k \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 9^{k} = 27 \\times 3^{k-2} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 16^{k-1} = 8 \\times 4^k \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 125^{k-1} = 25 \\times 5^{2k} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 32^k = 16 \\times 8^{k-2} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 100^k = 10 \\times 1000^{k-1} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },

    // Writing one value as a power of another - With Division
    {
        type: 'text',
        content: "Given that \\( 25^k = \\frac{125}{5^k} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 4^{k+2} = \\frac{32}{2^k} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 27^k = \\frac{9^{k+1}}{3} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( \\frac{27^k}{9} = 81^{k-1} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },

    // Writing one value as a power of another - Advanced/Negative Indices
    {
        type: 'text',
        content: "Given that \\( 8^k = \\frac{1}{4^{k-3}} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( \\frac{1}{9^k} = 27^{k+2} \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 2^k \\times 8^{k-1} = 16 \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 3^{k+2} \\times 9^k = 81 \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Given that \\( 8^{2k} = 4^{k+3} \\times 2 \\) <br>Find the value of \\( k \\).",
        topic: "Writing one value as a power of another"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{x}{3} + \\frac{x}{4} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{2x}{5} - \\frac{x}{2} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{x+2}{3} + \\frac{x-1}{4} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{2x-3}{5} - \\frac{x+1}{2} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },

    // Adding/Subtracting Algebraic Fractions - Algebraic Denominators (Single Terms)
    {
        type: 'text',
        content: "Write \\( \\frac{3}{x} + \\frac{5}{2x} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{4}{3x} - \\frac{1}{x} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{2}{x^2} + \\frac{5}{x} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{5}{2y} - \\frac{3}{4y} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },

    // Adding/Subtracting Algebraic Fractions - Algebraic Denominators (Binomials)
    {
        type: 'text',
        content: "Write \\( \\frac{3}{x+2} + \\frac{4}{x-1} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{5}{x-3} - \\frac{2}{x+4} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{2}{2x+1} + \\frac{3}{x-2} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{4}{3x-2} - \\frac{1}{x+5} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },

    // Adding/Subtracting Algebraic Fractions - Algebra in Both Numerator and Denominator
    {
        type: 'text',
        content: "Write \\( \\frac{x}{x+1} + \\frac{2}{x-3} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{x+1}{x-2} - \\frac{x}{x+3} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{2x}{x+4} + \\frac{x}{x-1} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{x-2}{x+2} - \\frac{x+1}{x-3} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },

    // Adding/Subtracting Algebraic Fractions - Advanced (Factorising Denominators First)
    {
        type: 'text',
        content: "Write \\( \\frac{3}{x^2-9} + \\frac{2}{x-3} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{5}{x^2-x-6} - \\frac{2}{x-3} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{x}{x^2-4} + \\frac{1}{x+2} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Write \\( \\frac{2x}{x^2-1} - \\frac{3}{x-1} \\) as a single fraction in its simplest form.",
        topic: "Adding/Subtracting Algebraic Fractions"
    },
    {
        type: 'text',
        content: "Factorise \\( x^2 - 16 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( y^2 - 49 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( a^2 - 81 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( m^2 - 1 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( p^2 - 144 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( k^2 - 121 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( w^2 - 64 \\)",
        topic: "Difference of Two Squares"
    },

    // Difference of Two Squares - Non-Monic (Perfect Squares)
    {
        type: 'text',
        content: "Factorise \\( 4x^2 - 9 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 25y^2 - 16 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 9a^2 - 64 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 36m^2 - 1 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 49p^2 - 100 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 64k^2 - 9 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 81w^2 - 4 \\)",
        topic: "Difference of Two Squares"
    },

    // Difference of Two Squares - Common Factor First
    {
        type: 'text',
        content: "Factorise \\( 2x^2 - 18 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 3y^2 - 75 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 5a^2 - 20 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 8m^2 - 50 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 12p^2 - 27 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Factorise \\( 50k^2 - 8 \\)",
        topic: "Difference of Two Squares"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\frac{2x - 7}{3x + 4} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( q \\) the subject of \\( p = \\frac{3q + 1}{q - 2} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( b \\) the subject of \\( a = \\frac{b - c}{b + c} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( R_1 \\) the subject of \\( \\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( u \\) the subject of \\( \\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v} \\)",
        topic: "Changing the Subject"
    },

    // Changing the Subject - Nested Roots and Powers
    {
        type: 'text',
        content: "Make \\( g \\) the subject of \\( T = 2\\pi\\sqrt{\\frac{l}{g}} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( P = \\sqrt{\\frac{x+y}{x-y}} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( n \\) the subject of \\( m = \\sqrt{\\frac{n - 3}{n + 2}} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\left(\\frac{2x+1}{x-3}\\right)^2 \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\frac{a}{\\sqrt{x-b}} \\)",
        topic: "Changing the Subject"
    },

    // Changing the Subject - Squares, Cubes, and Multiple Occurrences
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\frac{x^2 + 1}{x^2 - 1} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( p \\) the subject of \\( q = \\frac{p^2 + 4}{2p^2 - 3} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( r \\) the subject of \\( V = \\frac{1}{3}\\pi r^2 h \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\sqrt[3]{a x^2 + b} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( d \\) the subject of \\( F = \\frac{G m_1 m_2}{d^2} \\)",
        topic: "Changing the Subject"
    },

    // Changing the Subject - Advanced Physics/Geometry Formulas
    {
        type: 'text',
        content: "Make \\( h \\) the subject of \\( A = 2\\pi r^2 + 2\\pi r h \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( u \\) the subject of \\( v = \\sqrt{u^2 + 2as} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( c \\) the subject of \\( E = mc^2 \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( \\cos(C) \\) the subject of \\( c^2 = a^2 + b^2 - 2ab \\cos(C) \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( \\sin(\\theta) \\) the subject of \\( t = \\frac{2v \\sin(\\theta)}{g} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = 3x + 2 \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( a \\) the subject of \\( v = u + at \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( m \\) the subject of \\( y = mx + c \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( c \\) the subject of \\( A = \\frac{c}{y} - 5z \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( p \\) the subject of \\( q = 4(p - 3) \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\frac{x+1}{3} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( t \\) the subject of \\( s = \\frac{1}{2}(u+v)t \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\frac{2x - 3}{5} \\)",
        topic: "Changing the Subject"
    },

    // Changing the Subject - Squares & Roots
    {
        type: 'text',
        content: "Make \\( r \\) the subject of \\( A = \\pi r^2 \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( a \\) the subject of \\( v^2 = u^2 + 2as \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = x^2 + 5 \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( l \\) the subject of \\( T = 2\\pi\\sqrt{\\frac{l}{g}} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\sqrt{3x - 2} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( b \\) the subject of \\( a^2 = b^2 + c^2 \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( r \\) the subject of \\( V = \\frac{4}{3}\\pi r^3 \\)",
        topic: "Changing the Subject"
    },

    // Changing the Subject - Variable Appears Twice (Advanced)
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\frac{x}{x+2} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( p \\) the subject of \\( q = \\frac{p+1}{p-1} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( x \\) the subject of \\( y = \\frac{ax + b}{cx + d} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( m \\) the subject of \\( F = \\frac{Gm_1 m}{r^2} + ma \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "Make \\( t \\) the subject of \\( v = \\frac{t - 3}{t + 4} \\)",
        topic: "Changing the Subject"
    },
    {
        type: 'text',
        content: "A flight from London to New York takes 7 hours 45 minutes.<br>The distance travelled is 5580 km.<br>Work out the average speed of the plane in km/h.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A cyclist completes a 42 km route in 1 hour 45 minutes.<br>Work out their average speed.<br>Give your answer in km/h.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A train leaves a station at 08:45 and arrives at its destination at 11:15.<br>The total distance travelled is 185 km.<br>Work out the average speed of the train in km/h.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A bus departs at 14:30 and arrives at 16:50.<br>The route is 105 km long.<br>Work out the average speed of the bus in km/h.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A ferry crosses an 18 km channel.<br>The journey takes exactly 40 minutes.<br>Work out the average speed of the ferry in km/h.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A sprinter runs 100 metres in 10.4 seconds.<br>Work out their average speed.<br>Give your answer in kilometres per hour (km/h).",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A remote control boat travels 450 metres in 1.5 minutes.<br>Work out its average speed.<br>Give your answer in metres per second (m/s).",
        topic: "Average Speed"
    },

    // Average Speed - Finding Distance & Time
    {
        type: 'text',
        content: "A car travels at an average speed of 68 km/h for 2 hours 15 minutes.<br>Work out the total distance travelled.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A high-speed train travels at 240 km/h for 45 minutes.<br>Work out the distance travelled in km.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "An athlete cycles at an average speed of 36 km/h for 25 minutes.<br>Work out the distance travelled in km.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A snail moves at an average speed of 0.05 km/h.<br>It travels for 2 hours 12 minutes.<br>Work out the distance it travels, giving your answer in metres.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A marathon runner covers 42.2 km at an average speed of 12 km/h.<br>Work out the time taken.<br>Give your answer in hours and minutes, to the nearest minute.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A satellite orbits Earth at a speed of 28,000 km/h.<br>The orbit distance is 42,000 km.<br>How long does one complete orbit take? Give your answer in hours and minutes.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A car leaves home at 09:00, travelling 150 miles at an average speed of 40 mph.<br>At what time does the car reach its destination?",
        topic: "Average Speed"
    },

    // Average Speed - Multi-Stage Journeys (The tricky ones!)
    {
        type: 'text',
        content: "A driver travels 60 km at a speed of 40 km/h.<br>They then travel another 90 km at a speed of 60 km/h.<br>Work out the average speed for the whole journey in km/h.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A plane flies 800 km at 400 km/h.<br>It then encounters a tailwind and flies the next 1200 km at 600 km/h.<br>Work out the average speed for the entire flight.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "Sarah walks 3 km at 6 km/h.<br>She stops to rest for 15 minutes.<br>She then runs 2 km at 8 km/h.<br>Work out her average speed for the whole journey in km/h.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A hiker walks up a hill, a distance of 6 km, at an average speed of 2 km/h.<br>They walk down the exact same path at an average speed of 3 km/h.<br>Work out the average speed for the whole journey.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A delivery van travels for 2 hours at 50 mph.<br>It then travels for 3 hours at 40 mph.<br>Work out the average speed for the whole journey.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "A cyclist rides for 30 km at 15 km/h.<br>They get a flat tyre and walk the remaining 5 km at 5 km/h.<br>Work out their average speed for the entire journey.",
        topic: "Average Speed"
    },
    {
        type: 'text',
        content: "Simplify: \\( (x^4 y^6)^{\\frac{1}{2}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (8a^6 b^9)^{\\frac{1}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (16m^8 n^{12})^{\\frac{3}{4}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (25p^2 q^4)^{\\frac{3}{2}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (27x^9 y^6)^{\\frac{2}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (32u^{10} v^{15})^{\\frac{2}{5}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{16a^4}{b^8} \\right)^{\\frac{1}{4}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{8x^3}{y^6} \\right)^{\\frac{2}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },

    // Fractional & Negative Indices - Negative Fractional Powers
    {
        type: 'text',
        content: "Simplify: \\( (x^6 y^2)^{-\\frac{1}{2}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (64m^6 n^{12})^{-\\frac{1}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (16p^{12} q^8)^{-\\frac{3}{4}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{25a^4}{b^2} \\right)^{-\\frac{1}{2}} \\)",
        topic: "Fractional & Negative Indices"
    },

    // Fractional & Negative Indices - Negative Integer Powers
    {
        type: 'text',
        content: "Simplify: \\( (x^3 y^5)^{-2} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (2a^2 b^4)^{-3} \\)",
        topic: "Fractional & Negative Indices"
    },
    // Fractional & Negative Indices - Algebraic Quotients & Mixed Powers
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{16x^8}{y^{12}} \\right)^{-\\frac{1}{4}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{27a^6}{b^9} \\right)^{-\\frac{2}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{8m^9}{n^3} \\right)^{-\\frac{1}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{25p^4}{q^6} \\right)^{-\\frac{3}{2}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{32u^{10}}{v^{15}} \\right)^{-\\frac{2}{5}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{x^{-4}}{y^8} \\right)^{\\frac{1}{2}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{a^6 b^{-3}}{8} \\right)^{\\frac{1}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{16m^{-8}}{n^4} \\right)^{\\frac{3}{4}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{81p^{12}}{q^{-4}} \\right)^{\\frac{1}{4}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{x^{-6} y^9}{27z^{-3}} \\right)^{\\frac{1}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(x^4 y^{-2})^{\\frac{1}{2}}}{x^{-3} y} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(16a^8 b^{-4})^{\\frac{1}{4}}}{a^{-2} b^3} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{x^2 y^{-3}}{x^{-4} y^5} \\right)^{-\\frac{1}{2}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{2a^{-3} b^4}{16a^5 b^{-8}} \\right)^{-\\frac{1}{3}} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(m^6 n^{-9})^{-\\frac{1}{3}}}{m^{-2} n^4} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (3m^4 n)^{-2} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( (4u^5 v^3)^{-2} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{x^2}{y^5} \\right)^{-1} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{2p^3}{q^4} \\right)^{-3} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{m^4 n^2}{p^5} \\right)^{-2} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\left( \\frac{5x^3}{y^2 z^4} \\right)^{-2} \\)",
        topic: "Fractional & Negative Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{a^4 b^5 c^3}{a^2 b^2 c} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^6 y^4 z^7}{x^3 y z^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{15p^5 q^6 r^4}{3p^2 q^4 r^3} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{24m^8 n^5 p^7}{6m^4 n^2 p^5} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(x^2 y^3 z)^3}{x^4 y^5 z^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{20a^7 b^5 c^8}{4a b^3 c^4} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(2p^3 q r^2)^4}{8p^5 q^2 r^5} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{u^5 v^6 w^4 \\times u^2 v w^3}{u^4 v^3 w^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{18x^5 y^7 z^3}{9x^2 y^6 z} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{36a^9 b^4 c^5}{12a^4 b^2 c^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(m^4 n^2 p^3)^2}{m^5 n p^4} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{10x^4 y^6 z^5 \\times 3x^2 y z}{5x^3 y^4 z^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{45p^6 q^8 r^7}{15p^3 q^4 r^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(3a^2 b^4 c)^3}{9a^4 b^7 c^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{32u^8 v^6 w^9}{8u^3 v^2 w^2 \\times 2u v} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^5}{x^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{y^8}{y^3} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{m^{10}}{m^4} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{12a^6}{3a^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{15p^7}{5p^3} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{20n^9}{4n} \\)",
        topic: "Basic Laws of Indices"
    },

    // Basic Laws of Indices - Multiple Variables
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^4 y^5}{x^2 y^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{a^7 b^4}{a^3 b} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{18p^5 q^6}{6p^2 q^3} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{24m^8 n^5}{8m^4 n^4} \\)",
        topic: "Basic Laws of Indices"
    },

    // Basic Laws of Indices - Powers of Powers & Combined Operations
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(x^3)^4}{x^5} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(y^2)^5}{y^4} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(2a^3)^2}{a^4} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(3p^4)^2}{3p^5} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{x^6 \\times x^4}{x^3} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{y^5 \\times y^7}{y^8} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{4a^3 \\times 5a^4}{10a^2} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{12m^5 \\times 2m^3}{6m^4} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{(p^2 q^3)^3}{p^4 q^5} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Simplify: \\( \\frac{16x^7 y^6}{2x^3 y^2 \\times 4x y} \\)",
        topic: "Basic Laws of Indices"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 + 5x + 2 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 - 7x + 3 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 + 3x - 5 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 - 4x - 6 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 + 8x + 4 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 - 2x - 10 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 + 6x - 2 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 - 9x + 5 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 + 10x - 7 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( x^2 - 5x - 3 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },

    // Quadratic Formula (3sf) - Non-Monic
    {
        type: 'text',
        content: "Solve \\( 2x^2 + 7x + 4 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 3x^2 - 8x + 2 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 4x^2 + 5x - 3 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 5x^2 - 6x - 4 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 2x^2 + 9x - 1 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 3x^2 - 5x - 7 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 6x^2 + 11x + 2 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 4x^2 - 7x + 1 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 7x^2 + 2x - 4 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Solve \\( 5x^2 - 9x + 3 = 0 \\) leaving your answers to 3sf.",
        topic: "Using the Quadratic Formula"
    },
    {
        type: 'text',
        content: "Factorise: \\( 12x^2y^3 + 18x^3y^2 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 15a^3b - 20a^2b^2 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 24m^4n^2 + 16m^2n^3 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 9p^3q^3 - 27p^2q^4 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 14u^2v^4 + 21u^4v^2 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 30x^5y^2 - 12x^3y^4 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 45a^4b^3 + 18a^3b^4 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 16c^3d^5 - 24c^5d^3 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 25m^2n^5 + 35m^5n^2 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 42p^4q^2 - 28p^2q^4 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 10x^3y^2z + 15x^2y^3z^2 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 36a^5b^2 - 48a^2b^5 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 22u^3v^3 + 33u^4v \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 54c^6d^2 - 18c^4d^3 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 20x^2y^3z^2 + 30x^3y^2z \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 3x + 15 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 4y - 12 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 10a + 25 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 8m - 18 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 14p + 21 \\)",
        topic: "Factorising Single Brackets"
    },

    // Factorising Single Brackets - Variables
    {
        type: 'text',
        content: "Factorise: \\( x^2 + 5x \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( y^2 - 8y \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( a^2 + a \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 2m^2 + m \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( p^2 - 7p \\)",
        topic: "Factorising Single Brackets"
    },

    // Factorising Single Brackets - Numbers and Variables
    {
        type: 'text',
        content: "Factorise: \\( 4x^2 + 10x \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 6y^2 - 15y \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 9a^2 + 12a \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 12m^2 - 16m \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 15p^2 + 20p \\)",
        topic: "Factorising Single Brackets"
    },

    // Factorising Single Brackets - Higher Powers and Multiple Variables
    {
        type: 'text',
        content: "Factorise: \\( x^3 + 4x^2 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 5xy + 15x \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 8a^2b - 12ab \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 7m^3 - 14m^2 \\)",
        topic: "Factorising Single Brackets"
    },
    {
        type: 'text',
        content: "Factorise: \\( 18p^2q + 27pq^2 \\)",
        topic: "Factorising Single Brackets"
    },
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
    // Completing the Square - Formal Function Notation
    {
        type: 'text',
        content: "The function f is such that<br>\\( f(x) = 2x^2 + 12x + 7 \\)<br>Express \\( f(x) \\) in the form \\( a(x + b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function g is such that<br>\\( g(x) = 3x^2 - 18x + 14 \\)<br>Express \\( g(x) \\) in the form \\( a(x - b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function h is such that<br>\\( h(x) = 4x^2 + 16x - 5 \\)<br>Express \\( h(x) \\) in the form \\( p(x + q)^2 + r \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function f is such that<br>\\( f(x) = 5x^2 - 30x + 41 \\)<br>Express \\( f(x) \\) in the form \\( a(x - b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function g is such that<br>\\( g(x) = 2x^2 - 8x + 11 \\)<br>Express \\( g(x) \\) in the form \\( a(x - b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function h is such that<br>\\( h(x) = 3x^2 + 24x + 50 \\)<br>Express \\( h(x) \\) in the form \\( p(x + q)^2 + r \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function f is such that<br>\\( f(x) = 6x^2 - 12x + 1 \\)<br>Express \\( f(x) \\) in the form \\( a(x - b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function g is such that<br>\\( g(x) = 4x^2 - 24x + 27 \\)<br>Express \\( g(x) \\) in the form \\( a(x - b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function h is such that<br>\\( h(x) = 2x^2 + 20x + 45 \\)<br>Express \\( h(x) \\) in the form \\( a(x + b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function f is such that<br>\\( f(x) = -2x^2 + 16x - 20 \\)<br>Express \\( f(x) \\) in the form \\( a(x - b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function g is such that<br>\\( g(x) = -3x^2 - 12x + 5 \\)<br>Express \\( g(x) \\) in the form \\( a(x + b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function h is such that<br>\\( h(x) = 5x^2 + 10x - 4 \\)<br>Express \\( h(x) \\) in the form \\( p(x + q)^2 + r \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function f is such that<br>\\( f(x) = 7x^2 - 14x + 10 \\)<br>Express \\( f(x) \\) in the form \\( a(x - b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function g is such that<br>\\( g(x) = 2x^2 - 16x + 35 \\)<br>Express \\( g(x) \\) in the form \\( p(x - q)^2 + r \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "The function h is such that<br>\\( h(x) = -4x^2 - 24x - 30 \\)<br>Express \\( h(x) \\) in the form \\( a(x + b)^2 + c \\)",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 + 4x + 7 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 - 6x + 14 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 + 10x + 20 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 - 2x + 8 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 + 8x + 12 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 - 12x + 40 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 + 14x + 50 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 - 4x - 5 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 + 6x + 2 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( x^2 - 10x + 30 \\) into the form \\( (x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the minimum point.",
        topic: "Completing the Square"
    },

    // Completing the Square & Turning Points - Maximums
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 - 4x - 1 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 + 6x - 4 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 - 8x - 20 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 + 2x + 5 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 - 10x - 30 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 + 12x - 40 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 - 6x - 10 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 + 4x + 2 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 - 14x - 50 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
    },
    {
        type: 'text',
        content: "a) Rearrange \\( -x^2 + 10x - 21 \\) into the form \\( -(x+a)^2+b \\). <br>b) Hence, calculate the coordinates of the maximum point.",
        topic: "Completing the Square"
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
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 3y^2 - 10y + 8 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 5p^2 + 13p - 6 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 4m^2 - 4m - 15 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 6t^2 + 11t + 4 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 2q^2 - 7q - 4 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 3a^2 + 14a - 5 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 8w^2 - 10w + 3 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise: \\( 4n^2 + 12n + 9 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Find the roots of \\( 2x^2 - 4x - 3 = 0 \\)",
        topic: "Using the Quadratic Formula"
    },
    // Factorising Double Brackets (AC Method) - Positive Terms
    {
        type: 'text',
        content: "Factorise \\( 2x^2 + 5x + 3 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 3x^2 + 7x + 2 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 5x^2 + 11x + 2 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 2x^2 + 7x + 6 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 3x^2 + 8x + 4 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 4x^2 + 8x + 3 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },

    // Factorising Double Brackets (AC Method) - Mix of Positives and Negatives
    {
        type: 'text',
        content: "Factorise \\( 2x^2 - x - 1 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 3x^2 - 5x - 2 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 5x^2 - 13x - 6 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 2x^2 - 7x + 5 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 3x^2 - 10x + 8 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 4x^2 - 12x + 5 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },

    // Factorising Double Brackets (AC Method) - Trickier Composite Coefficients
    {
        type: 'text',
        content: "Factorise \\( 6x^2 + 7x - 3 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 6x^2 - 11x - 10 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Factorise \\( 8x^2 + 10x - 3 \\)",
        topic: "Factorising Double Brackets (AC Method)"
    },
    {
        type: 'text',
        content: "Find \\( \\frac{dy}{dx} \\) for \\( y = 3x^2 + 2x \\)",
        topic: "Differentiation"
    },
    // Differentiation - Volume & Area
    {
        type: 'text',
        content: "The volume of a swimming pool, \\( V \\) in cubic meters, \\( t \\) hours after a smart-pump is activated is given by the equation \\( V = 2t^3 - 15t^2 + 36t + 100 \\). Calculate the maximum volume of water in the pool before it begins to drain.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "An open-top box is made by cutting squares of side length \\( x \\) cm from a piece of cardboard. The volume, \\( V \\), of the box is given by \\( V = 4x^3 - 24x^2 + 36x \\). Find the value of \\( x \\) that gives the maximum volume.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "A farmer is fencing off a rectangular pen against a straight river. The area of the pen, \\( A \\) in square meters, for a given width \\( x \\) is modelled by \\( A = 120x - 3x^2 \\). Calculate the maximum possible area of the pen.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The volume of air in a weather balloon, \\( V \\) in liters, during its ascent is given by \\( V = -2x^3 + 27x^2 - 84x + 200 \\), where \\( x \\) is the altitude in kilometers. Find the maximum volume of the balloon.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The depth of a reservoir, \\( D \\) in meters, fluctuates over \\( t \\) months according to the formula \\( D = t^3 - 12t^2 + 36t + 15 \\). Find the minimum depth of the reservoir during this period.",
        topic: "Differentiation"
    },

    // Differentiation - Profit & Cost
    {
        type: 'text',
        content: "A tech company's weekly profit, \\( P \\) in thousands of dollars, from manufacturing \\( x \\) thousand smartwatches is modelled by \\( P = -x^3 + 9x^2 - 15x + 20 \\). Calculate the maximum possible weekly profit.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The production cost, \\( C \\) in dollars, of producing \\( x \\) batches of circuit boards is given by the equation \\( C = x^3 - 21x^2 + 120x + 500 \\). Find the minimum cost of production.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The daily revenue of a cinema, \\( R \\) in dollars, depending on the ticket price \\( p \\), is given by \\( R = -2p^2 + 48p + 150 \\). Calculate the ticket price that maximizes the revenue.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "A factory's energy consumption, \\( E \\) in kilowatts, over \\( t \\) hours of operation is modelled by \\( E = \\frac{1}{3}t^3 - 5t^2 + 24t + 100 \\). Find the minimum energy consumption.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The yield of a wheat crop, \\( Y \\) in kilograms, based on \\( x \\) liters of fertilizer applied per hectare, is given by \\( Y = -x^3 + 18x^2 - 81x + 300 \\). Find the amount of fertilizer that produces the maximum yield.",
        topic: "Differentiation"
    },

    // Differentiation - Kinematics
    {
        type: 'text',
        content: "A model rocket is launched into the air. Its height, \\( h \\) in meters, after \\( t \\) seconds is given by \\( h = -t^3 + 12t^2 + 60t \\). Calculate the maximum height reached by the rocket.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "A remote-controlled car's speed, \\( v \\) in meters per second, is modelled by \\( v = -t^3 + 6t^2 + 15t \\), where \\( t \\) is the time in seconds. Find the maximum speed of the car.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The displacement of a particle, \\( s \\) in meters, from a fixed point after \\( t \\) seconds is given by \\( s = \\frac{1}{3}t^3 - 4t^2 + 15t + 2 \\). Find the distance of the particle from the fixed point when it reaches its minimum displacement.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "A drone's altitude, \\( h \\) in meters, varies over time \\( t \\) in minutes according to the formula \\( h = -t^3 + 9t^2 + 48t + 20 \\). Calculate the maximum altitude the drone achieves.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "A ship's fuel consumption rate, \\( F \\), traveling at a speed of \\( v \\) knots, is given by \\( F = v^3 - 15v^2 + 48v + 20 \\). Calculate the speed that minimizes fuel consumption.",
        topic: "Differentiation"
    },

    // Differentiation - Science & Real-World Contexts
    {
        type: 'text',
        content: "The temperature of a chemical reaction, \\( T \\) in degrees Celsius, after \\( t \\) minutes is modelled by \\( T = t^3 - 9t^2 + 24t + 15 \\). Calculate the maximum temperature reached during the reaction.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The strength of a magnetic field, \\( M \\), at a distance \\( x \\) mm from a wire is given by \\( M = -2x^2 + 20x + 50 \\). Find the maximum strength of the magnetic field.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The population of a bacteria culture, \\( P \\) in thousands, after \\( t \\) hours is given by \\( P = -t^3 + 15t^2 + 33t + 100 \\). Calculate the maximum population size.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The power output of a solar panel, \\( W \\) in watts, over \\( t \\) hours of daylight is given by \\( W = -2t^3 + 30t^2 - 126t + 400 \\). Find the time \\( t \\) when the power output drops to its local minimum.",
        topic: "Differentiation"
    },
    {
        type: 'text',
        content: "The spread area of an oil leak, \\( A \\) in square meters, \\( t \\) hours after the breach, is given by \\( A = 2t^3 - 21t^2 + 60t + 50 \\) before containment measures take effect. Calculate the maximum area the leak reaches before containment.",
        topic: "Differentiation"
    },
    {
        type: 'image',
        content: "images/triangle-q1.png", // Make sure this image exists in an 'images' folder
        topic: "Pythagoras Theorem"
    }
    // Add as many as you want! The game will randomly pick from these.
];

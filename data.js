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

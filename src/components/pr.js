const math = require('mathjs');

function solveExpression(expression) {
    // Parse and evaluate the expression
    const result = math.evaluate(expression);
    console.log(" before ", result)
    
    // Convert result to a fraction
    const fraction = math.fraction(result);
    
    // Return the fraction as a string
    return `${fraction.n}/${fraction.d}`;
}

// Example usage
const expression = "8/2";
const result = solveExpression(expression);
console.log("Result as fraction:", result);

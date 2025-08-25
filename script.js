function calculateSum(num1, num2) {
    return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
    return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
    return num1 * num2;
}


// addintionl PRACTICE code for what i did today on email masking 

// 1. Create a function named maskEmail
function maskEmail(email) {
    // Find where the "@" is
    let atIndex = email.indexOf("@");

    // Separate username and domain
    let username = email.slice(0, atIndex);
    let domain = email.slice(atIndex);

    // If the username is too short (2 or fewer letters), just return it as is
    if (username.length <= 2) {
        return username + domain;
    }

    // First and last character of username remain the same
    let firstChar = username[0];
    let lastChar = username[username.length - 1];

    // Replace the middle with asterisks
    let masked = firstChar + "*".repeat(username.length - 2) + lastChar;

    // Combine with domain
    return masked + domain;
}

// 2. Declare a variable to store the email address
let email = "apple.pie@example.com";

// 3. Call the function and print to console
console.log(maskEmail(email));

// ✅ Tests
console.log(maskEmail("apple.pie@example.com")); // a***e@example.com
console.log(maskEmail("freecodecamp@example.com")); // f**p@example.com
console.log(maskEmail("info@test.dev")); // i**o@test.dev
console.log(maskEmail("user@domain.org")); // u**r@domain.org

// Practice ON Celsius to Fahrenheit Converter
function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Test cases
console.log(convertCtoF(0));    // 32
console.log(convertCtoF(-30));  // -22
console.log(convertCtoF(-10));  // 14
console.log(convertCtoF(20));   // 68
console.log(convertCtoF(30));   // 86

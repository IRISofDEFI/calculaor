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






// Practice on Recipe Object Manipulation, this is from the lesson i did today, 06-06-2024 and a recap fo
//for the weekend;
const recipes = [];

const recipe1 = {
    name: 'Spaghetti Carbonara',
    ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: '',
    ratings: [4, 5, 4, 5],
    averageRating: null,
};

const recipe2 = {
    name: 'Chicken Curry',
    ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: '',
    ratings: [4, 5, 5, 5],
    averageRating: null,
};

const recipe3 = {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrot', 'bell pepper'],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: '',
    ratings: [4, 3, 4, 5],
    averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

function getAverageRating(ratings) {
    const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
    return total / ratings.length;
}

function getTotalIngredients(ingredients) {
    return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
        return 'easy';
    } else if (cookingTime <= 60) {
        return 'medium';
    } else {
        return 'hard';
    }
}

const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating);

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients)
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime)

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)



// Quiz Game Implementation this is just recap practice of arrays and objects
// 1. Create the questions array
const questions = [
    {
        category: "JavaScript",
        question: "Which of the following is NOT a JavaScript data type?",
        choices: ["String", "Boolean", "StyleSheet"],
        answer: "StyleSheet"
    },
    {
        category: "HTML",
        question: "Which tag is used to create a hyperlink in HTML?",
        choices: ["<link>", "<a>", "<href>"],
        answer: "<a>"
    },
    {
        category: "CSS",
        question: "Which property is used to change text color in CSS?",
        choices: ["color", "font-color", "text-style"],
        answer: "color"
    },
    {
        category: "Programming",
        question: "Which symbol is used for comments in JavaScript?",
        choices: ["//", "/* */", "<!-- -->"],
        answer: "//"
    },
    {
        category: "Web Development",
        question: "What does HTML stand for?",
        choices: [
            "Hyper Trainer Markup Language",
            "Hyper Text Markup Language",
            "Hyper Tool Multi Language"
        ],
        answer: "Hyper Text Markup Language"
    }
];

// 2. Function to get a random question
function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// 3. Function to get a random choice for computer
function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// 4. Function to check results
function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}

// Example Run:
const randomQ = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQ.choices);
console.log("Category:", randomQ.category);
console.log("Question:", randomQ.question);
console.log("Choices:", randomQ.choices);
console.log("Computer's choice:", computerChoice);
console.log(getResults(randomQ, computerChoice));



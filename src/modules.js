const modules = {
  variables: {
    summary:
      'Learn how to store and manage data using let, const, and var. Understand naming rules and when to use each type of variable.',
    time: '40',
    quantity: '8',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/12.png?updatedAt=1751289017482',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/10.png?updatedAt=1751529310949',
    lessons: [
      {
        id: 1,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Declaring Variables',
        tag: 'Beginner',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: ['Variables store data using let or const.'],
          code: `let name = "Alice";
  console.log(name);`,
        },
        task: {
          title: 'Declare a Variable',
          steps: [
            'Write a JavaScript statement to declare a variable using let (or const if you prefer a constant).',
            'Assign your name or any string to this variable (e.g., let name = "John").',
            'Use console.log() to output the value of the variable to the console.',
          ],
          goal: 'Console should display the value of the declared variable.',
          code: '',
        },
      },
      {
        id: 2,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Using Numbers',
        tag: 'Beginner',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: ['You can perform math with numeric variables.'],
          code: `let x = 5;
  let y = 10;
  console.log(x + y);`,
        },
        task: {
          title: 'Create a Number Variable',
          steps: [
            'Create two variables with number values.',
            'Add them together using the + operator.',
            'Log the result.',
          ],
          goal: 'Console should show the sum of the two numbers.',
          code: '',
        },
      },
      {
        id: 3,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Using Strings',
        tag: 'Beginner',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: ['Strings can be joined with + or backticks.'],
          code: `let firstName = "Sam";
  let message = "Hello, " + firstName + "!";
  console.log(message);`,
        },
        task: {
          title: 'Create and Combine Strings',
          steps: [
            'Create two string variables: one for a greeting and one for a name.',
            'Combine them into a single message.',
            'Log the message.',
          ],
          goal: 'Console should display a complete greeting.',
          code: '',
        },
      },
      {
        id: 4,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Boolean Values',
        tag: 'Beginner',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: ['Booleans represent true or false values.'],
          code: `let isLoggedIn = true;
  console.log("Logged in:", isLoggedIn);`,
        },
        task: {
          title: 'Use a Boolean Variable',
          steps: [
            'Create a variable to represent a true or false condition.',
            'Log that value to the console.',
          ],
          goal: 'Console should show true or false.',
          code: '',
        },
      },
      {
        id: 5,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Undefined and Null',
        tag: 'Beginner',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: ['Undefined means no value assigned. Null is intentional absence.'],
          code: `let score;
  console.log(score); // undefined

  score = null;
  console.log(score); // null`,
        },
        task: {
          title: 'Use Undefined and Null',
          steps: [
            "Create a variable but don't assign a value.",
            'Log the variable (it will be undefined).',
            'Then assign it to null and log again.',
          ],
          goal: 'Console should first show undefined, then null.',
          code: '',
        },
      },
      {
        id: 6,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Reassigning Variables',
        tag: 'Beginner',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: ['let allows reassignment; const does not.'],
          code: `let mood = "happy";
  mood = "excited";
  console.log(mood);`,
        },
        task: {
          title: 'Reassign a Variable',
          steps: [
            'Create a variable and assign it a string value.',
            'Then reassign the variable to a different value.',
            'Log the variable both times.',
          ],
          goal: 'Console should show both the original and new values.',
          code: '',
        },
      },
      {
        id: 7,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Constants',
        tag: 'Beginner',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: ['const prevents reassignment.'],
          code: `const pi = 3.14;
  console.log(pi);`,
        },
        task: {
          title: 'Create a Constant',
          steps: [
            'Declare a constant variable with a numeric value.',
            'Log it to the console.',
            'Try reassigning it (optional: observe error).',
          ],
          goal: 'Console shows the value and optionally an error if reassigned.',
          code: '',
        },
      },
      {
        id: 8,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Template Literals',
        tag: 'Intermediate',
        date: 'April 29, 2025',
        time: '5',
        example: {
          description: [
            'Template literals allow you to embed variables inside a string using backticks (`).',
          ],
          code: `let name = "Alice";
let age = 25;
let message = \`My name is \${name} and I am \${age} years old.\`;
console.log(message);`,
        },
        task: {
          title: 'Create a Constant',
          steps: [
            'Declare a variable for your name and another for your job title.',
            'Use a template literal to create a sentence.',
            'Log the message to the console using console.log().',
            'Challenge: Try creating a more complex sentence with different variables using template literals!',
          ],
          goal: 'Console shows the value and optionally an error if reassigned.',
          code: '',
        },
      },
    ],
  },

  booleans: {
    summary:
      'Explore true and false values in JavaScript. Learn how Booleans help control logic and decision-making in programs.',
    time: '25',
    quantity: '5',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/6.png?updatedAt=1751289017547',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/4.png?updatedAt=1751529310962',
    lessons: [
      {
        id: 9,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Boolean Basics',
        tag: 'Booleans',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Booleans represent true or false values.'],
          code: `let isStudent = true;
  console.log(isStudent);
  return isStudent;`,
        },
        task: {
          title: 'Declare a Boolean',
          steps: [
            'Declare a variable using let and assign it a Boolean value (true or false).',
            'Use console.log() to output its value.',
          ],
          goal: 'After running your code, the console should display the Boolean value.',
          code: '',
        },
      },
      {
        id: 10,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Boolean Comparison',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['You can compare values using == and ===.'],
          code: `let result1 = 5 == "5";
  let result2 = 5 === "5";
  console.log(result1); // true
  console.log(result2); // false`,
        },
        task: {
          title: 'Compare Two Values',
          steps: [
            'Write a comparison using == or === between two values.',
            'Output the result with console.log().',
          ],
          goal: 'After running your code, the console should display true or false.',
          code: '',
        },
      },
      {
        id: 11,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Logical Operators',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Use &&, ||, and ! with Booleans.'],
          code: `let isWeekend = true;
  let isHoliday = false;
  console.log(isWeekend && isHoliday); // false
  console.log(isWeekend || isHoliday); // true
  console.log(!isWeekend); // false`,
        },
        task: {
          title: 'Use Logical Operators',
          steps: [
            'Create two Boolean variables.',
            'Use &&, ||, or ! to combine them.',
            'Output the result with console.log().',
          ],
          goal: 'The console should display the result of the logical operation.',
          code: '',
        },
      },
      {
        id: 12,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Truthy & Falsy Values',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Some values evaluate as true or false automatically.'],
          code: `console.log(Boolean(0));       // false
  console.log(Boolean("hello")); // true
  console.log(Boolean(""));      // false
  console.log(Boolean(null));    // false
  console.log(Boolean(1));       // true`,
        },
        task: {
          title: 'Test Truthy & Falsy Values',
          steps: [
            'Write a statement using Boolean() to check if a value is truthy or falsy.',
            'Output the result with console.log().',
          ],
          goal: 'The console should show true or false depending on the value passed to Boolean().',
          code: '',
        },
      },
      {
        id: 18,
        img_url: 'https://ik.imagekit.io/bertbigbite/short-circuit.webp',
        title: 'Short-Circuit Evaluation with && and ||',
        tag: 'Intermediate',
        date: 'June 24, 2025',
        time: '7',
        example: {
          description: [
            '`&&` and `||` are *short-circuiting* operators in JavaScript.',
            '`&&` returns the first falsy value or the last value if all are truthy.',
            '`||` returns the first truthy value or the last value if all are falsy.',
            'This behavior lets you use these operators to assign default values or guard logic.',
          ],
          code: `const name = "Alex";
const fallbackName = "Guest";

const displayName = name || fallbackName;
console.log(displayName); // "Alex"

const isLoggedIn = true;
isLoggedIn && console.log("User is logged in"); // logs the message

const isAdmin = false;
isAdmin && console.log("You have admin rights"); // does NOT log
`,
        },
        task: {
          title: 'Use Short-Circuit Logic to Control Execution',
          steps: [
            'Declare a variable called `username` and set it to an empty string.',
            "Use the `||` operator to assign a `displayName` that defaults to 'Guest'.",
            "Use the `&&` operator to log 'Welcome!' only if `isLoggedIn` is true.",
            'Try changing `username` and `isLoggedIn` to test different outcomes.',
          ],
          goal: 'Understand how logical operators return values and control what code runs.',
          code: '',
        },
      },
    ],
  },

  operators: {
    summary:
      'Learn how to perform operations on values using arithmetic (+, -, *), comparison (===, >, <), and logical (&&, ||, !) operators. Essential for calculations and logic checks.',
    time: '25',
    quantity: '5',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/8.png?updatedAt=1751289017159',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/6.png?updatedAt=1751529310959',
    lessons: [
      {
        id: 13,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Arithmetic Operators',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Arithmetic operators perform basic mathematical calculations.'],
          code: `let a = 10;
  let b = 5;

  console.log(a + b); // 15
  console.log(a - b); // 5
  console.log(a * b); // 50
  console.log(a / b); // 2
  console.log(a % b); // 0`,
        },
        task: {
          title: 'Use Arithmetic Operators',
          steps: [
            'Create two number variables.',
            'Use +, -, *, /, and % to calculate results.',
            'Log each result to the console.',
          ],
          goal: 'The console should display the results of all arithmetic operations.',
          code: '',
        },
      },
      {
        id: 14,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Comparison Operators',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: [
            'Comparison operators return true or false based on how values relate to each other.',
          ],
          code: `let x = 10;
  let y = 5;

  console.log(x > y);      // true
  console.log(x < y);      // false
  console.log(x == "10");  // true (loose equality)
  console.log(x === "10"); // false (strict equality)`,
        },
        task: {
          title: 'Use Comparison Operators',
          steps: [
            'Create two variables with different values.',
            'Compare them using >, <, ==, and ===.',
            'Log the results to the console.',
          ],
          goal: 'The console should show true/false based on each comparison.',
          code: '',
        },
      },
      {
        id: 15,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Logical Operators',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: [
            'Logical operators combine multiple conditions: AND (&&), OR (||), NOT (!).',
          ],
          code: `let isAdult = true;
  let hasID = false;

  console.log(isAdult && hasID); // false
  console.log(isAdult || hasID); // true
  console.log(!hasID);           // true`,
        },
        task: {
          title: 'Combine Conditions with Logic',
          steps: [
            'Declare two boolean variables.',
            'Use &&, ||, and ! to check logic.',
            'Output results to the console.',
          ],
          goal: 'The console should show the results of logical expressions.',
          code: '',
        },
      },
      {
        id: 16,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Ternary Operator',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['The ternary operator offers a shorthand way to write if-else logic.'],
          code: `let age = 18;

  let result = age >= 18 ? "Adult" : "Minor";
  console.log(result); // "Adult"`,
        },
        task: {
          title: 'Use a Ternary to Decide',
          steps: [
            "Create a variable like 'score'.",
            "Use the ternary operator to output a result like 'Pass' or 'Fail'.",
            'Log it to the console.',
          ],
          goal: 'The console should show the correct result based on your condition.',
          code: `let score = 72;

  let status = score >= 60 ? "Pass" : "Fail";
  console.log(status);`,
        },
      },
      {
        id: 17,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Compound Assignment Operators',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: [
            'Compound assignment operators combine an arithmetic operation with assignment.',
          ],
          code: `let x = 10;

  x += 5;
  x -= 3;
  x *= 2;
  x /= 4;
  x %= 4;

  console.log(x);`,
        },
        task: {
          title: 'Use Compound Assignments',
          steps: [
            'Start with a number variable.',
            'Modify it using +=, -=, *=, /=, and %=',
            'Print the final result to the console.',
          ],
          goal: 'The console should reflect the updated value after each operation.',
          code: '',
        },
      },
    ],
  },

  conditionals: {
    summary:
      'Use if, else if, and else to control which blocks of code run based on different conditions.',
    time: '40',
    quantity: '8',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/7.png?updatedAt=1751289017463',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/5.png?updatedAt=1751529310960',
    lessons: [
      {
        id: 27,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Basic If-Else',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: [
            'Use an `if` statement to execute a block of code only if a condition is true.',
          ],
          code: `let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}`,
        },
        task: {
          title: 'Check if Number is Positive',
          steps: [
            'Create a variable with a number value.',
            'Use an `if` statement to check if the number is greater than 0.',
            "If it is, print a message saying it's positive.",
          ],
          goal: 'Learn how to write a basic `if` condition to run code based on a true expression.',
          code: '',
        },
      },
      {
        id: 28,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'If...Else Statement',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: [
            'An `if...else` statement allows you to run one block if the condition is true and another if it’s false.',
          ],
          code: `let score = 45;

if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("You failed.");
}`,
        },
        task: {
          title: 'Login Access Check',
          steps: [
            'Create a boolean variable called `isLoggedIn`.',
            'Use an `if...else` statement to check the value.',
            "Print 'Welcome back!' if true, or 'Please log in.' if false.",
          ],
          goal: 'Understand how to handle two possible outcomes using `if...else`.',
          code: '',
        },
      },
      {
        id: 29,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Else If Ladder',
        tag: 'Basic',
        date: 'April 30, 2025',
        example: {
          description: ['Use `else if` to test multiple conditions in sequence.'],
          code: `let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`,
        },
        task: {
          title: 'Student Grade Evaluator',
          steps: [
            'Create a `marks` variable with a numeric value.',
            'Use `if...else if...else` to determine and print the grade.',
            'Use at least 3 grade ranges.',
          ],
          goal: 'Practice evaluating more than two outcomes using an `else if` ladder.',
          code: '',
        },
      },
      {
        id: 30,
        img_url: 'https://ik.imagekit.io/bertbigbite/conditions-logic.webp',
        title: 'Combining Conditions with &&, ||, and !',
        tag: 'Intermediate',
        date: 'June 24, 2025',
        time: '6',
        example: {
          description: [
            'Logical operators are used in `if` statements to combine multiple checks.',
            '`&&` requires all conditions to be true.',
            '`||` passes if at least one condition is true.',
            '`!` flips a condition from true to false or vice versa.',
            'You can mix them with parentheses to control logic flow.',
          ],
          code: `const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && !isAdmin) {
  console.log("Welcome, user.");
}

if (isLoggedIn || isAdmin) {
  console.log("Access granted.");
}

if (!(isLoggedIn || isAdmin)) {
  console.log("Access denied.");
}`,
        },
        task: {
          title: 'Control Access with Multiple Conditions',
          steps: [
            'Create three variables: `hasTicket`, `isMember`, and `isSuspended`.',
            'Use an `if` statement to allow entry only if the user has a ticket OR is a member AND is NOT suspended.',
            "Print 'Access granted' or 'Access denied' based on the logic.",
            'Try changing the values to test all possible outcomes.',
          ],
          goal: 'Learn how to control program flow using combined boolean logic in conditional statements.',
          code: '',
        },
      },
      {
        id: 31,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Ternary Operator',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['The ternary operator allows a compact if-else statement.'],
          code: `let age = 16;

let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote? " + canVote);`,
        },
        task: {
          title: 'Even or Odd Checker',
          steps: [
            'Create a variable with a number.',
            'Use a ternary operator to check if the number is even.',
            "Print 'Even' or 'Odd' based on the result.",
          ],
          goal: 'Use the ternary operator to make your conditionals more concise.',
          code: '',
        },
      },
      {
        id: 32,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Nested If Statements',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: [
            'Nested if statements are used when you need to check one condition inside another.',
          ],
          code: `let age = 20;
      let hasID = true;

      if (age >= 18) {
          if (hasID) {
              console.log("You may enter.");
          } else {
              console.log("You need an ID to enter.");
          }
      } else {
          console.log("You are not old enough to enter.");
      }`,
        },
        task: {
          title: 'Secure Login Check',
          steps: [
            'Create `username` and `password` variables.',
            "Use nested `if` statements to check if username is 'admin' and password is '1234'.",
            'Print access status accordingly.',
          ],
          goal: 'Learn how to structure conditional checks inside one another.',
          code: '',
        },
      },
      {
        id: 33,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Switch Statement',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: [
            'A switch statement checks a value against many cases more cleanly than multiple else ifs.',
            'In an If-Else statement all conditions must be checked, wheras in a switch statement, the code will be executed as soon as a condition is met.',
          ],
          code: `let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Tuesday":
    console.log("Second day.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Regular day.");
}`,
        },
        task: {
          title: 'Day Message Generator',
          steps: [
            'Declare a variable for a fruit name.',
            "Use a switch statement to print a message about the fruit (e.g., 'Apples are red').",
            'Include at least 3 specific cases and a default case, for unknown fruits.',
          ],
          goal: 'Practice using the `switch` statement for cleaner multi-option logic.',
          code: '',
        },
      },
      {
        id: 34,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Advanced logical conditions',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Combine logical operators to make complex conditions.'],
          code: `let temperature = 25;
      let isSunny = true;
      let isWeekend = false;

      if ((temperature > 20 && isSunny) || isWeekend) {
          console.log("Great day to go outside!");
      } else {
          console.log("Better stay indoors.");
      }`,
        },
        task: {
          title: 'Determine if a person can take a trip',
          steps: [
            'Declare variables for budget, hasPassport, and isHolidaySeason.',
            "Allow the trip if they have a passport **and** (enough budget **or** it's holiday season).",
            'Print a message accordingly.',
          ],
          goal: 'Learn to combine logical operators to make complex conditions.',
          code: '',
        },
      },
    ],
  },

  functions: {
    summary:
      'Discover how to group code into reusable blocks. Learn how to define, call, and pass values to functions to keep your programs organised and efficient.',
    time: '60',
    quantity: '8',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/9.png?updatedAt=1751289017368',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/7.png?updatedAt=1751529310951',
    lessons: [
      {
        id: 35,
        img_url:
          'https://ik.imagekit.io/bertbigbite/placeholder-image.webp?updatedAt=1746710764174',
        title: 'Basic JavaScript functions',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Learn how to define and call functions with arguments.'],
          code: `function greet(name) {
        console.log("Hello, " + name + "!");
    }

    greet("Alice");`,
        },
        task: {
          title: 'Define and Call Functions',
          steps: [
            'Create a function called calculateArea that takes width and height as parameters.',
            'The function should return the area (width * height).',
            'Call the function with different values and print the result.',
          ],
          goal: 'Learn how to write basic functions',
          code: '',
        },
      },
      {
        id: 36,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Function Return Values',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'Functions can return values that you can store or use.',
            'The following function adds up two numbers The sum function takes two parameters (a and b).',
            'It returns the sum of a and b. Calling sum(5, 3) passes 5 and 3 as arguments, and the function returns 8.',
          ],
          code: `function add(x, y) {
  return x + y;
}

let sum = add(3, 4);
console.log(sum);`,
        },
        task: {
          title: 'Return from a Function',
          steps: [
            'Create a function called multiply that returns the product of two numbers.',
            'Call the function and store the result in a variable.',
            'Log the result.',
          ],
          goal: 'Console should display the correct result of the multiplication.',
          code: '',
        },
      },

      {
        id: 37,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Conditional Logic',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'In this example, the isEven function checks if a number is even:',
            'It takes a number (num) as input.',
            "Uses the modulus operator (%) to check if it's divisible by 2.",
            'Returns true for even numbers and false for odd numbers.',
            'Calling isEven(4) returns true because 4 is even.',
          ],
          code: `function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(5));`,
        },
        task: {
          title: 'Return from a Function',
          steps: [
            'Create a function called checkNumber that takes a number as an argument.',
            "The function should return 'Even' if the number is even and 'Odd' if the number is odd.",
            'Call it with different numbers and print the results.',
          ],
          goal: "Console should display 'Even' or 'Odd' depending on the input number.",
          code: '',
        },
      },
      {
        id: 38,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'String Manipulation',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'Here, the reverseString function reverses a given string:',
            'split("") converts the string into an array of characters.',
            'reverse() reverses the array.',
            'join("") converts the array back into a string.',
            'Calling reverseString("hello") returns "olleh".',
          ],
          code: `function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"`,
        },
        task: {
          title: 'Reverse a String',
          steps: [
            'Create a function that takes a string as input.',
            'Split the string into an array of characters.',
            'Reverse the array and join it back into a string.',
            'Return the reversed string.',
          ],
          goal: 'Console should display the reversed version of the input string.',
          code: '',
        },
      },
      {
        id: 39,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Returning Boolean Values',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'We can extend the previous function by taking a reversed string and checking if it is a palindrome.',
            'Repeat the function as in the previous example.',
            'Compare the original string with the reversed one.',
            "Return true if they match (it's a palindrome), otherwise false.",
            'Calling isPalindrome("racecar") returns true.',
          ],
          code: `function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("racecar")); // true`,
        },
        task: {
          title: 'Find Palindromes in an Array',
          steps: [
            'Create a function that takes an array of strings as input.',
            "Loop through the array and check each word to see if it's a palindrome.",
            'Return a new array containing only the palindromes.',
          ],
          goal: 'Console should display an array of strings that are palindromes from the original list.',
          code: '',
        },
      },
      {
        id: 40,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Regular Expressions',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'This is an example of using regular expressions (regex) to match specific patterns in a string.',
            'The pattern /[aeiou]/gi is a regular expression that matches any vowel (a, e, i, o, u).',
            "The 'g' flag means global (find all matches), and 'i' makes it case-insensitive.",
            'The match() method searches the string for the pattern and returns an array of matches.',
            'If no matches are found, match() returns null, so we use matches ? matches.length : 0 to safely count vowels.',
          ],
          code: `function countVowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("hello world")); // 3`,
        },
        task: {
          title: 'Extract Digits from a String',
          steps: [
            'Create a function that takes a string as input.',
            'Use a regular expression to find all digits in the string (0-9).',
            'Return an array containing all the matched digits.',
            'If no digits are found, return an empty array.',
          ],
          goal: 'Console should display an array of digits found in the input string.',
          code: '',
        },
      },
      {
        id: 41,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Loops and Conditional Logic',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'The isPrime function is an example of algorithmic problem-solving using loops and conditional logic.',
            "The function first checks if the number is less than 2 — if so, it's not prime.",
            'It then loops from 2 to num - 1, checking if num is divisible by any number in that range.',
            'If num is divisible by any of those values (i.e., num % i === 0), it returns false.',
            'If no divisors are found, the function returns true — meaning the number is prime.',
          ],
          code: `function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // Output: true`,
        },
        task: {
          title: 'Check Multiple Numbers for Primality',
          steps: [
            'Create a function that takes an array of numbers.',
            'For each number, check whether it is prime using logic similar to the isPrime function.',
            'Return a new array containing only the prime numbers from the original array.',
          ],
          goal: 'Console should display an array of prime numbers filtered from the input.',
          code: '',
        },
      },
      {
        id: 42,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Email Validation',
        tag: 'Advanced',
        date: 'June 23, 2025',
        time: '7',
        example: {
          description: [
            'This example shows how to use regular expressions to validate an email address.',
            "The pattern checks for a common email format: some characters, an '@' symbol, a domain name, and a valid extension.",
            'The test() method is used to return true if the string matches the pattern, false otherwise.',
            'This type of validation is useful when accepting user input in forms.',
          ],
          code: `function isValidEmail(email) {
  let pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return pattern.test(email);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("not-an-email"));     // false`,
        },
        task: {
          title: 'Filter Valid Emails from a List',
          steps: [
            'Create a function that takes an array of strings.',
            'Use a regular expression to validate which of the strings are valid email addresses.',
            'Return a new array containing only the valid emails.',
          ],
          goal: 'Console should display an array of valid email addresses from the input list.',
          code: '',
        },
      },
    ],
  },

  arrays: {
    summary:
      'Learn how to store multiple values in a single variable. Discover how to access, modify, and loop through array items.',
    time: '35',
    quantity: '7',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/11.png?updatedAt=1751289017421',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/9.png?updatedAt=1751529310950',
    lessons: [
      {
        id: 53,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Creating an Array',
        tag: 'Basic',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: 'Arrays hold multiple values in one variable.',
          code: `let fruits = ["apple", "banana", "cherry"];
console.log(fruits);`,
        },
        task: {
          title: 'Declare an Array',
          steps: [
            'Create an array with at least three elements (e.g., strings or numbers).',
            'Log the array to the console.',
          ],
          goal: 'Console should show the full array.',
          code: '',
        },
      },
      {
        id: 54,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Accessing Items',
        tag: 'Beginner',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Access array items using their index.'],
          code: `let colors = ["red", "green", "blue"];
console.log(colors[0]); // red`,
        },
        task: {
          title: 'Get Array Items by Index',
          steps: [
            'Create an array with multiple items.',
            'Log the first and last items using index notation.',
          ],
          goal: 'Console should show individual items from the array.',
          code: '',
        },
      },
      {
        id: 55,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Modifying Arrays',
        tag: 'Beginner',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: 'You can change array elements using their index.',
          code: `let pets = ["dog", "cat"];
pets[1] = "hamster";
console.log(pets);`,
        },
        task: {
          title: 'Change Array Elements',
          steps: [
            'Create an array and change one of its items by index.',
            'Log the modified array.',
          ],
          goal: 'Console should reflect the change.',
          code: '',
        },
      },
      {
        id: 56,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Array Length',
        tag: 'Beginner',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Use .length to find how many items are in an array.'],
          code: `let numbers = [1, 2, 3, 4];
console.log(numbers.length);`,
        },
        task: {
          title: 'Use Array Length',
          steps: ['Create an array.', 'Log its length using .length.'],
          goal: 'Console should show the number of items in the array.',
          code: '',
        },
      },
      {
        id: 57,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Adding and Removing Items',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Use push() and pop() to add/remove items.'],
          code: `let tools = ["hammer", "wrench"];
tools.push("screwdriver");
tools.pop();
console.log(tools);`,
        },
        task: {
          title: 'Push and Pop Items',
          steps: [
            'Create an array.',
            'Add a new item using push().',
            'Remove the last item using pop().',
            'Log the array each time.',
          ],
          goal: 'Console shows the array after each change.',
          code: '',
        },
      },
      {
        id: 58,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Looping Through Arrays',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Use a for loop to access each item.'],
          code: `let names = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}`,
        },
        task: {
          title: 'Loop Through an Array',
          steps: [
            'Create an array of at least three items.',
            'Use a for loop to log each item one by one.',
          ],
          goal: 'Each item should be logged separately.',
          code: '',
        },
      },
      {
        id: 59,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Advanced Array Methods',
        tag: 'Intermediate',
        date: 'April 30, 2025',
        time: '5',
        example: {
          description: ['Use methods like forEach or map for cleaner loops.'],
          code: `let nums = [1, 2, 3];
nums.forEach(num => {
  console.log(num * 2);
});`,
        },
        task: {
          title: 'Use forEach or map',
          steps: [
            'Create an array of numbers.',
            'Use forEach to log each number multiplied by 2.',
            'Optional: use map to create a new array of doubled values.',
          ],
          goal: 'Console should show processed values from the array.',
          code: '',
        },
      },
    ],
  },

  loops: {
    summary:
      'Master how to repeat actions using for, while, and forEach loops. Loops let you efficiently run code multiple times, especially when working with arrays.',
    time: '50',
    quantity: '9',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/10.png?updatedAt=1751289017511',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/8.png?updatedAt=1751529310942',
    lessons: [
      {
        id: 61,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Basic For Loop',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'A for loop executes a block of code multiple times.',
            'In this example, a for loop counts from 1 to 5.',
            'The loop starts at 1 and runs while the counter is less than or equal to 5.',
            'Each iteration increases the counter by 1 and logs the current number.',
          ],
          code: `for (let i = 1; i <= 5; i++) {
  console.log("Iteration: " + i);
}`,
        },
        task: {
          title: 'Create a For Loop That Counts from 0 to 4',
          steps: [
            'Write a for loop that starts at 0 and runs while the counter is less than 5.',
            "On each iteration, log a message like 'Number: 0', 'Number: 1', etc.",
            'Use string concatenation or template literals to include the current value.',
          ],
          goal: 'Console should display five lines showing the numbers from 0 to 4 with messages.',
          code: '',
        },
      },
      {
        id: 62,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'While Loop',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'A while loop runs as long as a condition is true.',
            'This loop starts with a counter set to 1.',
            'While the counter is less than or equal to 5, it logs the current number.',
            'The counter is increased by 1 each time, until the condition becomes false.',
          ],
          code: `let num = 1;
while (num <= 5) {
  console.log("Number: " + num);
  num++;
}`,
        },
        task: {
          title: 'Use a While Loop to Count Down',
          steps: [
            'Create a variable starting at 5.',
            'Write a while loop that runs as long as the number is greater than 0.',
            'In each iteration, log the current number and decrease it by 1.',
          ],
          goal: 'Console should display numbers 5 to 1 in descending order using a while loop.',
          code: '',
        },
      },
      {
        id: 63,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Do...While Loop',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'A do...while loop executes the block of code at least once before checking the condition.',
            'In this example, the loop prints a message and then increases the counter.',
            'The condition is checked after each iteration, continuing while the counter is ≤ 3.',
          ],
          code: `let count = 1;
do {
  console.log("Count is: " + count);
  count++;
} while (count <= 3);`,
        },
        task: {
          title: 'Use a Do...While Loop to Print a Message',
          steps: [
            'Create a variable called tries and set it to 0.',
            "Use a do...while loop to print 'Attempt number: X' where X is the current value of tries + 1.",
            'Increment tries each time.',
            'Stop the loop once tries is equal to 3.',
          ],
          goal: 'Console should display three messages, each showing the attempt number using a do...while loop.',
          code: '',
        },
      },
      {
        id: 65,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Looping through arrays',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'You can use a for loop to iterate through each item in an array.',
            'The loop starts at index 0 and continues until the last index (length - 1).',
            'In this example, each fruit is printed one at a time.',
          ],
          code: 'const fruits = ["apple", "banana", "cherry"];\n\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}',
        },
        task: {
          title: 'Loop Through a List of Names',
          steps: [
            'Create an array of at least four names.',
            'Use a for loop to iterate over the array.',
            "Print a message for each name, like: 'Hello, NAME!'",
          ],
          goal: 'Console should log a custom greeting for each name in the array.',
          code: '',
        },
      },
      {
        id: 66,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Aborting a Loop with break',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'The break statement is used to stop a loop before it completes.',
            'In this example, a for loop counts from 1 to 10.',
            'If the counter reaches 5, a message is printed and the loop stops.',
            'No numbers greater than 5 are processed.',
          ],
          code: 'for (let i = 1; i <= 10; i++) {\n  if (i === 5) {\n    console.log("Stopping at 5!");\n    break;\n  }\n  console.log("Number:", i);\n}',
        },
        task: {
          title: 'Stop a loop when a number is found',
          steps: [
            'Create an array of numbers that includes the number 42 somewhere in the list.',
            'Use a for loop to loop through the array.',
            'Print each number until the number 42 is found.',
            "When 42 is found, print 'Found it!' and use break to stop the loop.",
          ],
          goal: 'Your code should loop through the array, print numbers up to 42, then stop with a message.',
          code: '',
        },
      },
      {
        id: 67,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Skipping with continue',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'The `continue` statement skips the current loop iteration and moves to the next one.',
            'This is useful when you want to avoid running part of the loop for specific values.',
            'In this example, we skip printing the number 3 but continue looping through the rest.',
            'Like `break`, it’s a helpful tool when used with care — it makes logic more readable when used intentionally.',
          ],
          code: 'for (let i = 1; i <= 5; i++) {\n  if (i === 3) {\n    continue;\n  }\n  console.log("Number:", i);\n}\n// Output:\n// Number: 1\n// Number: 2\n// Number: 4\n// Number: 5',
        },
        task: {
          title: 'Loop and skip even numbers',
          steps: [
            'Write a `for` loop from 1 to 10.',
            'Use an `if` statement with `continue` to skip even numbers.',
            'Inside the loop, log only the odd numbers (1, 3, 5, etc.).',
            'The loop should continue running until it reaches 10.',
          ],
          goal: 'Console should display only odd numbers between 1 and 10, using `continue` to skip the even ones.',
          code: '',
        },
      },
      {
        id: 68,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Filtering an array with continue',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '6',
        example: {
          description: [
            'This example demonstrates using `continue` to skip over elements in an array.',
            'The loop goes through each number in the array.',
            'If the number is negative, it skips that iteration using `continue`.',
            'Only non-negative numbers are logged, showing how `continue` helps filter data during iteration.',
          ],
          code: 'const numbers = [3, -1, 7, 0, -4, 5];\n\nfor (let i = 0; i < numbers.length; i++) {\n  if (numbers[i] < 0) {\n    continue;\n  }\n  console.log("Valid number:", numbers[i]);\n}\n// Output:\n// Valid number: 3\n// Valid number: 7\n// Valid number: 0\n// Valid number: 5',
        },
        task: {
          title: 'Log only short words',
          steps: [
            'Create an array of words, some short and some long.',
            'Write a `for` loop to go through each word.',
            'If a word has more than 4 characters, skip it using `continue`.',
            'Log only the short words (length 4 or less).',
          ],
          goal: 'Console should only log short words from the array, ignoring longer ones using `continue`.',
          code: '',
        },
      },
      {
        id: 69,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Using forEach with arrays',
        tag: 'Beginner',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'The `forEach` method executes a function once for each item in an array.',
            'In this example, `forEach` is used to print each fruit name.',
            'The callback function receives each item from the array automatically.',
            'This method is clean and concise for handling simple array loops.',
          ],
          code: 'let fruits = ["Apple", "Banana", "Cherry"];\n\nfruits.forEach(function(fruit) {\n  console.log("Fruit: " + fruit);\n});\n// Output:\n// Fruit: Apple\n// Fruit: Banana\n// Fruit: Cherry',
        },
        task: {
          title: 'Display each name in a greeting',
          steps: [
            'Create an array of names.',
            'Use `forEach` to loop through each name in the array.',
            "For each name, print a message like: 'Hello, [name]!' to the console.",
          ],
          goal: 'Console should display a custom greeting for each name using `forEach`.',
          code: '',
        },
      },
      {
        id: 70,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Transforming arrays with map()',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'The `map()` method creates a new array by applying a function to each element of an existing array.',
            'Unlike `forEach`, `map()` returns a new array with the results.',
            'This is useful for transforming values while keeping the original array unchanged.',
            'In this example, each number is doubled and returned in a new array.',
          ],
          code: 'let numbers = [1, 2, 3, 4];\n\nlet doubled = numbers.map(function(num) {\n  return num * 2;\n});\n\nconsole.log(doubled); // [2, 4, 6, 8]',
        },
        task: {
          title: 'Convert temperatures from Celsius to Fahrenheit',
          steps: [
            'Create an array of temperatures in Celsius.',
            'Use `map()` to convert each temperature to Fahrenheit using the formula: (c × 9/5) + 32.',
            'Store the result in a new array and log it to the console.',
          ],
          goal: 'Console should show the new array of Fahrenheit values.',
          code: '',
        },
      },
    ],
  },

  objects: {
    summary:
      'Understand how to group related data using key-value pairs. Learn to create, access, and update properties in JavaScript objects.',
    time: '80',
    quantity: '10',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/5.png?updatedAt=1751289017366',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/3.png?updatedAt=1751529310984',
    lessons: [
      {
        id: 43,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Working with Objects',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'This example demonstrates how to create and access data in an object.',
            'An object can store multiple key-value pairs, like name, age, or occupation.',
            "Dot notation (object.key) or bracket notation (object['key']) can be used to access values.",
            "This is useful for grouping related data together, like a person's profile.",
          ],
          code: `let person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

console.log(person.name);
console.log(person["age"]);`,
        },
        task: {
          title: 'Build a Book Object',
          steps: [
            'Create an object named book with properties: title, author, and pages.',
            'Log each of these properties to the console using dot notation.',
            'Then, add a new property called isAvailable and set it to true.',
            'Log the updated object to the console.',
          ],
          goal: 'Console should show each book property and the final object with the new property included.',
          code: '',
        },
      },
      {
        id: 44,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Modifying and Deleting Properties',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '6',
        example: {
          description: [
            'You can update existing properties on an object by assigning a new value.',
            'Properties can also be deleted using the delete keyword.',
            "The 'in' operator checks if a property exists in an object.",
          ],
          code: `let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2018
};

// Modify a property
car.year = 2020;

// Add a new property
car.color = "blue";

// Delete a property
delete car.model;

// Check if a property exists
console.log("model" in car);
console.log("make" in car);

console.log(car);`,
        },
        task: {
          title: 'Modify a User Object',
          steps: [
            'Create an object user with properties: username, email, and age.',
            "Change the user's email to a new value.",
            'Add a new property called isAdmin and set it to false.',
            'Delete the age property.',
            'Check if age exists in the object and log the result.',
            'Log the final user object.',
          ],
          goal: 'Console should display false for the age check and show the updated user object without the age property.',
          code: '',
        },
      },

      {
        id: 45,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Modifying Objects via Functions',
        tag: 'Basic',
        date: 'June 23, 2025',
        time: '6',
        example: {
          description: [
            'Objects are passed by reference, not by value.',
            'This means if you pass an object into a function, the function can modify the original object.',
            'In this example, the addCountry function adds a new property to the person object.',
            "After calling the function, the person object includes the new 'country' property.",
          ],
          code: `function addCountry(obj, value) {
  obj.country = value;
}

const person = { name: "Martin" };
addCountry(person, "Canada");
console.log(person.country); // Should log: "Canada"`,
        },
        task: {
          title: 'Add Properties to an Object Using a Function',
          steps: [
            'Create a function called addAge that takes an object and a number as arguments.',
            "The function should add an 'age' property to the object with the value of the number provided.",
            "Create an object with a 'name' property.",
            'Call the function and pass in the object and an age.',
            'Log the updated object to confirm the new property was added.',
          ],
          goal: "Console should display the updated object including the new 'age' property.",
          code: '',
        },
      },

      {
        id: 46,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Creating objects from function parameters',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '7',
        example: {
          description: [
            'Objects can be created using a function',
            'The function here requires parameters',
            'The object is then created and returned with the properties name and age set to the corresponding argument values',
          ],
          code: `function makePerson(name,age) {
    return {name:name, age:age};
}
    const James = makePerson('James', 37);
    const Jane = makePerson('Jane', 49);

    console.log("Name:",James.name, "Age:",James.age);
    console.log("Name:",Jane.name, "Age:",Jane.age);`,
        },
        task: {
          title: 'Create multiple objects with a function',
          steps: [
            'Write a function called createCar that takes three parameters: make, model, and year.',
            'The function should return an object with properties: make, model, and year, using the values from the arguments.',
            'Use the function to create at least two car objects with different values.',
            "Log each car’s make and model in a sentence like: 'This car is a Toyota Corolla.'",
          ],
          goal: 'Console should show at least two sentences describing different cars created using the function.',
          code: '',
        },
      },

      {
        id: 47,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Returning an Object with Derived Values',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '5',
        example: {
          description: [
            'This function returns an object based on the input word.',
            'It includes the original word, its length, and a check to see if it starts with a capital letter.',
            'The expression word[0] === word[0].toUpperCase() compares the first character with its uppercase version.',
            'The result is a structured object useful for further analysis or display.',
          ],
          code: `function describeWord(word) {
  return {
    original: word,
    length: word.length,
    startsWithCapital: word[0] === word[0].toUpperCase()
  };
}

const result = describeWord("Hello");
console.log(result);
// { original: 'Hello', length: 5, startsWithCapital: true }`,
        },
        task: {
          title: 'Create a Function That Describes a Sentence',
          steps: [
            'Write a function called describeSentence that takes a sentence as input.',
            'Return an object that includes:',
            '- The original sentence.',
            "- The number of words (hint: use .split(' ').length).",
            '- A boolean value indicating if the sentence ends with a period.',
            'Call your function with an example sentence and log the result.',
          ],
          goal: 'Console should display an object with the original sentence, word count, and punctuation check.',
          code: '',
        },
      },
      {
        id: 48,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Objects and Arrays',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '7',
        example: {
          description: [
            'Objects can be stored inside arrays, which is useful for handling lists of similar data.',
            'Each object in the array can be accessed using its index.',
            'You can loop through the array to access each object and its properties.',
          ],
          code: `let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 }
];

// Loop through the array and log each student's info
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + ": " + students[i].grade);
}`,
        },
        task: {
          title: 'Loop Through an Array of Books',
          steps: [
            'Create an array called library that contains 3 objects.',
            'Each object should have the properties: title, author, and year.',
            "Loop through the array and print each book’s title and year in the format 'Title (Year)'.",
            'Use dot notation to access the properties.',
          ],
          goal: 'Console should list each book’s title with its year in parentheses.',
          code: '',
        },
      },
      {
        id: 49,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Nested Objects',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '7',
        example: {
          description: [
            'Objects can contain other objects as values, creating a nested structure.',
            'To access nested values, use dot notation multiple times (e.g., object.property.subProperty).',
            'You can also mix dot and bracket notation when accessing deeply nested data.',
          ],
          code: `let user = {
  name: "Jane",
  contact: {
    email: "jane@example.com",
    phone: "123-456-7890"
  },
  address: {
    city: "London",
    postcode: "W1A 1AA"
  }
};

console.log(user.contact.email);
console.log(user["address"]["city"]);`,
        },
        task: {
          title: 'Access Nested Object Data',
          steps: [
            'Create an object called movie with the following structure:',
            '- title (string),',
            '- director (object with firstName and lastName),',
            '- release (object with year and country).',
            'Access and log the director’s full name and the release year.',
            'Use both dot and bracket notation for practice.',
          ],
          goal: 'Console should display the director’s full name and the movie’s release year.',
          code: '',
        },
      },

      {
        id: 50,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Iterating Over Objects',
        tag: 'Intermediate',
        date: 'June 23, 2025',
        time: '6',
        example: {
          description: [
            "You can loop over an object's properties using a for...in loop.",
            "Object.keys() returns an array of the object's keys.",
            "Object.values() returns an array of the object's values.",
            'Object.entries() returns an array of [key, value] pairs.',
          ],
          code: `let fruit = {
  name: "Apple",
  color: "red",
  taste: "sweet"
};

// Using for...in loop
for (let key in fruit) {
  console.log(key + ": " + fruit[key]);
}

// Using Object.keys()
console.log(Object.keys(fruit));

// Using Object.values()
console.log(Object.values(fruit));

// Using Object.entries()
console.log(Object.entries(fruit));`,
        },
        task: {
          title: 'Display User Profile Info',
          steps: [
            'Create an object userProfile with properties: firstName, lastName, age, and city.',
            "Use a for...in loop to print each key and its value in the format 'key: value'.",
            'Use Object.keys() to get all keys and log them.',
            'Use Object.values() to get all values and log them.',
            'Use Object.entries() to get all key-value pairs and log them.',
          ],
          goal: 'Console should display the userProfile properties and their keys, values, and entries as separate outputs.',
          code: '',
        },
      },

      {
        id: 51,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Object Methods',
        tag: 'Advanced',
        date: 'June 23, 2025',
        time: '8',
        example: {
          description: [
            'Objects can have functions as properties — these are called methods.',
            "Inside a method, the keyword 'this' refers to the object the method belongs to.",
            'Methods allow objects to perform actions using their own data.',
          ],
          code: `let person = {
  firstName: "Emma",
  lastName: "Watson",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());`,
        },
        task: {
          title: 'Add a Method to an Object',
          steps: [
            'Create an object named dog with properties: name and breed.',
            "Add a method called describe that returns a string like 'Buddy is a Golden Retriever'.",
            "Inside the method, use 'this' to access the object’s properties.",
            'Call the describe method and log the result.',
          ],
          goal: "Console should show the dog's name and breed using a method that returns the formatted string.",
          code: '',
        },
      },
      {
        id: 52,
        img_url: 'https://ik.imagekit.io/bertbigbite/placeholder-image.webp',
        title: 'Constructor Functions and Classes',
        tag: 'Advanced',
        date: 'June 23, 2025',
        time: '8',
        example: {
          description: [
            'Constructor functions allow you to create multiple similar objects using the same template.',
            "The 'this' keyword assigns values to the new object's properties.",
            'ES6 classes are a modern, cleaner way to define constructor functions with optional methods.',
          ],
          code: `// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let car1 = new Car("Honda", "Civic", 2022);
console.log(car1);

// ES6 class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return this.name + " says " + this.sound;
  }
}

let dog = new Animal("Rex", "woof");
console.log(dog.speak());`,
        },
        task: {
          title: 'Create a class and use it',
          steps: [
            'Create a class called Book with a constructor that takes title, author, and year.',
            "Add a method called getSummary that returns a string like 'Title by Author, published in Year'.",
            'Create a new Book instance with example data.',
            'Call the getSummary method and log the result.',
          ],
          goal: 'Console should show the summary string from the book object created using the class.',
          code: '',
        },
      },
    ],
  },

  scope: {
    summary:
      'Understand where variables exist and can be accessed. Learn the difference between global, function, and block scope.',
    time: '35',
    quantity: '7',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/13.png?updatedAt=1751289017501',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/11.png?updatedAt=1751529310953',
    lessons: [
      {
        id: 71,
        img_url: 'https://ik.imagekit.io/bertbigbite/scope-function-block.webp',
        title: 'Function Scope vs Block Scope',
        tag: 'Intermediate',
        date: 'June 24, 2025',
        time: '7',
        example: {
          description: [
            "`var` is function-scoped: it's available anywhere within the function it's declared in.",
            "`let` and `const` are block-scoped: they're only available inside the nearest `{ }` block.",
            'In this example, `x` (declared with `var`) is still accessible outside the if-block.',
            '`y` and `z`, declared with `let` and `const`, are not accessible outside the block.',
          ],
          code: `function demoScope() {
  if (true) {
    var x = "I'm var";
    let y = "I'm let";
    const z = "I'm const";
  }
  console.log(x);
  console.log(y);
  console.log(z);
}

demoScope();`,
        },
        task: {
          title: 'Compare Scope of var, let, and const',
          steps: [
            'Create a function called `checkScopeDifferences`.',
            'Inside an if-statement, declare one variable with `var`, one with `let`, and one with `const`.',
            'Assign each variable a string value.',
            'Outside the if-block but still inside the function, log each variable.',
            'Call the function and observe which variables are accessible.',
            'Try moving the console.logs inside the if-block to compare.',
          ],
          goal: "See that `var` can 'leak' outside the block, while `let` and `const` cannot.",
          code: '',
        },
      },
      {
        id: 72,
        img_url: 'https://ik.imagekit.io/bertbigbite/scope-shadowing.webp',
        title: 'Global Scope and Variable Shadowing',
        tag: 'Intermediate',
        date: 'June 24, 2025',
        time: '8',
        example: {
          description: [
            "A variable declared outside of any function or block has global scope — it's accessible anywhere in your code.",
            'Variable shadowing occurs when a variable in a local scope has the same name as one in an outer (usually global) scope.',
            "The local variable takes precedence inside its scope, 'shadowing' the outer one.",
            'In this example, the `message` inside the function overrides (or shadows) the global one.',
          ],
          code: `let message = "Hello from the global scope";

function greet() {
  let message = "Hello from inside the function";
  console.log(message); // Logs: "Hello from inside the function"
}

greet();
console.log(message); // Logs: "Hello from the global scope"`,
        },
        task: {
          title: 'Experiment with Global and Shadowed Variables',
          steps: [
            'Declare a global variable `status` and assign it a string.',
            'Create a function called `showStatus`.',
            'Inside the function, declare a new variable `status` with a different value.',
            'Log the `status` inside the function.',
            'Outside the function, log the global `status`.',
            'Call the function and observe the difference in outputs.',
          ],
          goal: 'Understand how variable shadowing works and how local variables override global ones within a specific scope.',
          code: '',
        },
      },
      {
        id: 73,
        img_url: 'https://ik.imagekit.io/bertbigbite/scope-lexical.webp',
        title: 'Lexical Scope: Accessing Outer Variables',
        tag: 'Intermediate',
        date: 'June 24, 2025',
        time: '9',
        example: {
          description: [
            "JavaScript uses *lexical scope*, which means a function’s scope is determined by where it's defined, not where it's called.",
            'Inner functions can access variables defined in their outer functions or scopes.',
            'In this example, the `inner()` function can access `outerVar` from its enclosing scope.',
          ],
          code: `function outer() {
  const outerVar = "I'm outside!";

  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }

  inner();
}

outer();`,
        },
        task: {
          title: 'Access Outer Variables from Inner Functions',
          steps: [
            'Create a function called `wrapper`.',
            'Inside it, declare a variable called `greeting` and assign it a value.',
            'Inside `wrapper`, define another function called `sayGreeting`.',
            'Inside `sayGreeting`, log the `greeting` variable.',
            'Call `sayGreeting` from within `wrapper`, and then call `wrapper`.',
            "Observe how `sayGreeting` can still access `greeting`, even though it's not defined inside it.",
          ],
          goal: 'Understand that inner functions can access variables from their outer lexical environment.',
          code: '',
        },
      },

      {
        id: 74,
        img_url: 'https://ik.imagekit.io/bertbigbite/scope-chain.webp',
        title: 'Scope Chain: How JavaScript Finds Variables',
        tag: 'Advanced',
        date: 'June 24, 2025',
        time: '10',
        example: {
          description: [
            'When you reference a variable, JavaScript starts looking in the current scope.',
            "If it doesn't find the variable there, it moves outward — to the parent scope — and continues this process until it reaches the global scope.",
            'This chain of scope lookups is called the *scope chain*.',
            'In this example, `message` is found in the outer function since the inner function doesn’t define it.',
          ],
          code: `const globalVar = "Global";

function outer() {
  const message = "Outer";

  function inner() {
    console.log(message); // Found in outer()
    console.log(globalVar); // Found in global scope
  }

  inner();
}

outer();`,
        },
        task: {
          title: 'Trace the Scope Chain',
          steps: [
            "Declare a global variable `level` and assign it the value `'Global Level'`.",
            "Create a function called `firstLevel` and inside it, declare a variable `level` with value `'First Level'`.",
            "Inside `firstLevel`, create another function called `secondLevel`, but don't declare a new `level` variable inside it.",
            'Inside `secondLevel`, log the value of `level`.',
            'Call `secondLevel` from inside `firstLevel`, and then call `firstLevel` from the global scope.',
            'Observe which `level` variable gets logged and why.',
          ],
          goal: 'Understand how JavaScript searches for variables using the scope chain, from innermost to outermost.',
          code: '',
        },
      },
      {
        id: 75,
        img_url: 'https://ik.imagekit.io/bertbigbite/closure-intro.webp',
        title: 'Introduction to Closures',
        tag: 'Advanced',
        date: 'June 24, 2025',
        time: '11',
        example: {
          description: [
            'A **closure** is created when a function remembers variables from its outer scope — even after the outer function has finished running.',
            'This is possible because functions in JavaScript retain access to their *lexical environment*.',
            'In this example, the `createGreeter` function returns a new function that still has access to `name`, even though `createGreeter` has already finished.',
          ],
          code: `function createGreeter(name) {
  return function greet() {
    console.log("Hello, " + name);
  };
}

const greeter = createGreeter("Sam");
greeter(); // Logs: "Hello, Sam"`,
        },
        task: {
          title: 'Create a Closure That Remembers a Variable',
          steps: [
            'Write a function called `makeMultiplier` that takes a number as a parameter.',
            'Inside it, return a new function that takes another number and multiplies it by the first.',
            'Store the result of `makeMultiplier(3)` in a variable called `triple`.',
            'Call `triple(5)` and log the result.',
            'Notice how the inner function remembers the original multiplier value, even after `makeMultiplier` has finished.',
          ],
          goal: 'Understand how closures allow inner functions to retain access to outer variables even after the outer function has returned.',
          code: '',
        },
      },
      {
        id: 76,
        img_url: 'https://ik.imagekit.io/bertbigbite/closure-practice.webp',
        title: 'Closures in Practice: Private State',
        tag: 'Advanced',
        date: 'June 24, 2025',
        time: '12',
        example: {
          description: [
            "Closures can be used to create *private state* — variables that can't be accessed or modified directly from outside.",
            'This technique is useful for creating functions that maintain internal data without exposing it globally.',
            'In this example, `counter` is not accessible outside `createCounter`, but `increment` still has access to it via closure.',
          ],
          code: `function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    console.log("Current count:", count);
  };
}

const counter = createCounter();
counter();
counter();

// 'count' is not accessible here
// console.log(count);
`,
        },
        task: {
          title: 'Use Closures to Encapsulate State',
          steps: [
            'Write a function called `createScoreKeeper`.',
            'Inside it, define a variable `score` and set it to 0.',
            'Return a function that increases `score` by a given number and logs the new score.',
            'Store the result in a variable `scoreTracker` and call it a few times with different values.',
            'Verify that the internal `score` variable updates correctly and remains private.',
          ],
          goal: 'Use a closure to maintain internal state across multiple function calls without exposing it directly.',
          code: '',
        },
      },
      {
        id: 77,
        img_url: 'https://ik.imagekit.io/bertbigbite/hoisting-scope.webp',
        title: 'Hoisting: When Are Variables and Functions Available?',
        tag: 'Advanced',
        date: 'June 24, 2025',
        time: '13',
        example: {
          description: [
            '**Hoisting** means that variable and function declarations are moved to the top of their scope during the compilation phase.',
            '`var` variables are hoisted but initialized as `undefined`.',
            "`let` and `const` are hoisted too — but they're not initialized until their line of declaration (they exist in the *temporal dead zone*).",
            "Function **declarations** are hoisted entirely and can be used before they're defined in the code.",
          ],
          code: `console.log(thing); // undefined
var thing = "Hoisted var";

try {
  console.log(blockThing); // ReferenceError
  let blockThing = "Not hoisted the same way";
} catch (e) {
  console.log("Error:", e.message);
}

sayHi(); // Works because function declaration is hoisted
function sayHi() {
  console.log("Hi there!");
}
`,
        },
        task: {
          title: 'Observe Hoisting Behavior',
          steps: [
            'Write `console.log` statements above `var`, `let`, and `const` variable declarations to test what happens.',
            'Observe how `var` logs `undefined`, while `let` and `const` throw errors.',
            'Create a function declaration and call it before the function is written.',
            'Now try creating a function expression (using `const`) and call it before it’s assigned — observe the difference.',
            'Comment your results to explain what’s happening.',
          ],
          goal: 'Understand how hoisting affects the availability of variables and functions in different scopes.',
          code: '',
        },
      },
    ],
  },

  async: {
    summary:
      'Dive into asynchronous code using setTimeout, Promises, and async/await. Learn how to handle operations that take time, like fetching data.',
    time: '40',
    quantity: '6',
    img_url: 'https://ik.imagekit.io/bertbigbite/module_icons/Learn.png?updatedAt=1751289621134',
    icon: 'https://ik.imagekit.io/bertbigbite/menu_icons/2.png?updatedAt=1751529310963',
    lessons: [
      {
        id: 70,
        img_url: 'https://ik.imagekit.io/bertbigbite/async-intro.webp',
        title: 'What is Asynchronous Code?',
        tag: 'Beginner',
        date: 'June 24, 2025',
        time: '6',
        example: {
          description: [
            'JavaScript runs in a single thread but can perform tasks asynchronously.',
            'Asynchronous code allows non-blocking operations, so the program can continue running while waiting for tasks like network requests.',
            'This example shows how `setTimeout` lets code run after a delay without stopping the rest of the program.',
          ],
          code: `console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 1000);

console.log("End");`,
        },
        task: {
          title: 'Observe Asynchronous Behavior with setTimeout',
          steps: [
            'Run the code and note the order of logs.',
            'Change the delay to different values and observe how it affects output order.',
            'Add more `setTimeout` calls with varying delays.',
            'Explain why the logs appear in this order.',
          ],
          goal: 'Understand that asynchronous operations do not block the main thread.',
          code: '',
        },
      },
      {
        id: 71,
        img_url: 'https://ik.imagekit.io/bertbigbite/async-callbacks.webp',
        title: 'Callbacks: Handling Asynchronous Tasks',
        tag: 'Beginner-Intermediate',
        date: 'June 24, 2025',
        time: '7',
        example: {
          description: [
            'A *callback* is a function passed as an argument to be executed later.',
            'Callbacks let us run code after an asynchronous operation completes.',
            'In this example, a callback function is called after a delay.',
          ],
          code: `function doAfterDelay(callback) {
  setTimeout(() => {
    callback("Done!");
  }, 1000);
}

doAfterDelay(message => {
  console.log(message);
});`,
        },
        task: {
          title: 'Write a Function that Uses a Callback',
          steps: [
            'Create a function called `fetchData` that accepts a callback.',
            "Inside `fetchData`, use `setTimeout` to simulate data fetching and then call the callback with a string 'Data received'.",
            'Call `fetchData` and log the message received in the callback.',
            'Modify the delay and observe the behavior.',
          ],
          goal: 'Use callbacks to handle asynchronous events.',
          code: '',
        },
      },
      {
        id: 72,
        img_url: 'https://ik.imagekit.io/bertbigbite/async-callback-hell.webp',
        title: 'Callback Hell and Its Drawbacks',
        tag: 'Intermediate',
        date: 'June 24, 2025',
        time: '8',
        example: {
          description: [
            'Callback hell happens when callbacks are nested inside other callbacks, leading to hard-to-read code.',
            "This 'pyramid of doom' makes debugging and maintenance difficult.",
            'Promises and async/await help avoid this problem.',
          ],
          code: `function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 500);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 done");
    callback();
  }, 500);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 done");
    callback();
  }, 500);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps done");
    });
  });
});`,
        },
        task: {
          title: 'Recognize and Refactor Callback Hell',
          steps: [
            'Run the nested callbacks example and note the structure.',
            'Try rewriting the nested callbacks as separate named functions to improve clarity.',
            'Explain why deeply nested callbacks can be problematic.',
          ],
          goal: 'Identify callback hell and understand why cleaner async patterns are needed.',
          code: '',
        },
      },
      {
        id: 73,
        img_url: 'https://ik.imagekit.io/bertbigbite/async-promises.webp',
        title: 'Promises: Cleaner Asynchronous Code',
        tag: 'Intermediate',
        date: 'June 24, 2025',
        time: '9',
        example: {
          description: [
            'Promises represent a value that may be available now, later, or never.',
            'They provide `.then()` and `.catch()` methods for chaining asynchronous tasks and handling errors.',
            'This example shows how to wrap `setTimeout` in a Promise.',
          ],
          code: `function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done waiting");
    }, ms);
  });
}

wait(1000).then(message => {
  console.log(message);
});`,
        },
        task: {
          title: 'Create and Use a Promise',
          steps: [
            'Write a function called `fetchNumber` that returns a Promise.',
            'Inside the Promise, use `setTimeout` to resolve with a random number after 1 second.',
            'Call `fetchNumber` and log the number when the Promise resolves.',
            'Add a `.catch()` block to handle any errors.',
          ],
          goal: 'Use Promises to manage asynchronous code instead of callbacks.',
          code: '',
        },
      },
      {
        id: 74,
        img_url: 'https://ik.imagekit.io/bertbigbite/async-async-await.webp',
        title: 'async/await: Writing Asynchronous Code Synchronously',
        tag: 'Advanced',
        date: 'June 24, 2025',
        time: '10',
        example: {
          description: [
            '`async/await` is syntactic sugar built on Promises.',
            'It allows writing asynchronous code that looks synchronous, improving readability.',
            'In this example, `await` pauses execution until the Promise resolves.',
          ],
          code: `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countDown() {
  console.log("Start");
  await delay(1000);
  console.log("1 second passed");
}

countDown();`,
        },
        task: {
          title: 'Rewrite Promise Code Using async/await',
          steps: [
            'Rewrite the `fetchNumber` function from the Promises lesson as an `async` function.',
            'Use `await` to wait for the number from the Promise.',
            'Log the result inside the async function.',
            'Call the async function and observe the output.',
          ],
          goal: 'Practice using async/await to write clearer asynchronous code.',
          code: '',
        },
      },
      {
        id: 75,
        img_url: 'https://ik.imagekit.io/bertbigbite/async-error-handling.webp',
        title: 'Error Handling with async/await',
        tag: 'Advanced',
        date: 'June 24, 2025',
        time: '11',
        example: {
          description: [
            'Errors in async functions can be caught using `try/catch` blocks.',
            'This allows graceful error handling without breaking the program.',
            'Here, we simulate a function that may reject the Promise and handle the error.',
          ],
          code: `function mightFail(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Error occurred!");
      } else {
        resolve("Success!");
      }
    }, 1000);
  });
}

async function run() {
  try {
    const result = await mightFail(true);
    console.log(result);
  } catch (error) {
    console.log("Caught error:", error);
  }
}

run();`,
        },
        task: {
          title: 'Handle Errors in async Functions',
          steps: [
            'Write an async function that calls a Promise which sometimes rejects.',
            'Use `try/catch` inside the async function to handle the rejection.',
            'Test the function with both successful and failing cases.',
            'Explain why this pattern improves async error handling.',
          ],
          goal: 'Use `try/catch` with async/await to manage errors effectively.',
          code: '',
        },
      },
    ],
  },
};

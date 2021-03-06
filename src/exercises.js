module.exports = [
  {
    name: 'intro',
    type: 'read',
    path: 'exercises/intro.js',
    hint: 'Read carefully.'
  },
  {
    name: 'variables1',
    path: 'exercises/variables/variables1.js',
    hint:
      'The declaration on line 9 is missing a keyword in order to create a new variable.'
  },
  {
    name: 'variables2',
    path: 'exercises/variables/variables2.js',
    hint: `The compiler is expecting something at line 4.
'const' variables need to be initialized with a value.
On the other hand, 'let' variable do not require being initialized.`
  },
  {
    name: 'variables3',
    path: 'exercises/variables/variables3.js',
    hint: `'const' variables can only be declared and assigned once.`
  },

  {
    name: 'ifs1',
    path: 'exercises/ifs/ifs1.js',
    hint: `In JS you have two ways of dealing with conditions:
    - through if...else
    - using the ternary operator 'condition ? valueA : valueB'`
  },

  {
    name: 'functions1',
    path: 'exercises/functions/functions1.js',
    hint: 'The callMe function does not exist, make sure it does.'
  },
  {
    name: 'functions2',
    type: 'read',
    path: 'exercises/functions/functions2.js',
    hint: 'When declaring a function you can specify different parameters.'
  },
  {
    name: 'functions3',
    path: 'exercises/functions/functions3.js',
    hint: 'Functions can optionally return an ouput'
  },
  {
    name: 'functions4',
    path: 'exercises/functions/functions4.js',
    hint: 'Functions can be passed as parameters of other functions.'
  },
  {
    name: 'functions5',
    path: 'exercises/functions/functions5.js',
    hint: 'Arrow functions are a shorter way to declare functions.'
  },

  {
    name: 'loops1',
    path: 'exercises/loops/loops1.js',
    hint: 'Use a for loop to add numbers to each other'
  },
  {
    name: 'loops2',
    path: 'exercises/loops/loops2.js',
    hint:
      'Add a condition on i to exit the while statement at the right time and do not forget to update i on every iteration'
  },
  {
    name: 'loops3',
    path: 'exercises/loops/loops3.js',
    hint: `You can loop from the end to the beginning by doing: for (let i=str.length - 1; i >= 0; i--)
If you want to interrupt the loop when you found the vowel, you can use the keyword "break" that will jump out of the loop statement and run what's after.
Or you can directly call "return ..." inside the loop in order to end your function's execution.`
  },

  {
    name: 'strings1',
    path: 'exercises/strings/strings1.js',
    hint: `Strings can be combined using the "+" operator.
Example: "a" + "b" === "ab"`
  },
  {
    name: 'strings2',
    path: 'exercises/strings/strings2.js',
    hint: 'Template strings allow you to execute any JS expression inside ${}'
  },
  {
    name: 'strings3',
    path: 'exercises/strings/strings3.js',
    hint: `The are many ways to extract parts of a string:
    - access the n-th character of a string by doing "string[n]"
    - separate a string in multiple pieces using "string.split(separator)"
    - replace part of the string with something else using "string.replace(stringToReplace, stringReplacement)"`
  },

  {
    name: 'arrays1',
    path: 'exercises/arrays/arrays1.js',
    hint: `You can either:
    - initialize the array with 1,2,3 
    - use "array.push(element)" to add them manually after initalization
    - initialize the array using "const array = Array(length)" and then doing "array[n] = n"`
  },
  {
    name: 'arrays2',
    path: 'exercises/arrays/arrays2.js',
    hint: `Inside a for loop, you can use an array's length to iterate through every item of this array.
    
This might also be a good occasion to use a while loop in combination with:
    - "array.shift()" which removes the first element of the array and returns it
    - "array.pop()" which removes the last element of the array and returns it + "array.reverse()"`
  },
  {
    name: 'arrays3',
    path: 'exercises/arrays/arrays3.js',
    hint: `Inside a for loop, you can use an array's length to iterate through every item of this array`
  },
  {
    name: 'arrays4',
    type: 'read',
    path: 'exercises/arrays/arrays4.js',
    hint: 'Follow the white rabbit'
  },

  {
    name: 'objects1',
    path: 'exercises/objects/objects1.js',
    hint:
      'You can directly initialize the object on declaration or manually add the wanted key/value pairs after'
  },
  {
    name: 'objects2',
    path: 'exercises/objects/objects2.js',
    hint: `The easiest way to loop through an object's keys it to use the "for (const key in object)" loop.
Another way it to use the "Object.keys(object)" or "Object.entries(object)" global functions: they return an array containing what you asked and allow you to use the functional iteration studied in the previous set of exercises`
  },

  {
    name: 'destructuring1',
    path: 'exercises/destructuring/destructuring1.js',
    hint: 'README.md'
  },

  {
    name: 'dom1',
    path: 'exercises/dom/dom1.js',
    hint:
      'Use "document.getElementById(id)" or "document.querySelector(selector)"'
  },
  {
    name: 'dom2',
    path: 'exercises/dom/dom2.js',
    hint:
      'Use "const childElement = document.createElement(tagName)" + "parentElement.append(childElement)", or directly edit parentElement.innerHTML (more dangerous)'
  },
  {
    name: 'dom3',
    type: 'read',
    path: 'exercises/dom/dom3.js',
    hint: `Detecting clicks is done through event listeners, there are 2 ways of registering them:
    - using "element.addEventListener("click", callback)"
    - filling "element.onclick = callback" but this allows only one click listener at a time
    
In both cases, "callback" should be a function that will be called every time the event is triggered
    `
  },

  {
    name: 'outro',
    type: 'read',
    path: 'exercises/outro.js',
    hint: 'Good job.'
  }
]

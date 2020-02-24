module.exports = [
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
  }
]

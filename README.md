# Brackets Validator

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Note that an empty string is also considered valid.

## Acceptance Criterias
```
Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
```

Function: getValidation(), return true or false according to the input
        - brackets must be closed by the same type
        - open brakets must be close in the correct order
        - empty string would return true

|     input       |     output    |
|    :--:         |   :--:        |
|     " "         |     true      |
|                 |               |

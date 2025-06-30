export const mockSnippets = [
  {
    _id: "1",
    title: "Reverse String",
    code: `function reverseString(str) {
  return str.split("").reverse().join("");
}`,
    language: "JavaScript",
    createdAt: "2025-06-30T10:00:00Z",
  },
  {
    _id: "2",
    title: "Factorial (Recursion)",
    code: `function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}`,
    language: "JavaScript",
    createdAt: "2025-06-30T10:05:00Z",
  },
  {
    _id: "3",
    title: "Python List Comprehension",
    code: `squares = [x**2 for x in range(10)]`,
    language: "Python",
    createdAt: "2025-06-30T10:10:00Z",
  },
  {
    _id: "4",
    title: "CSS Center a Div",
    code: `.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    language: "CSS",
    createdAt: "2025-06-30T10:15:00Z",
  },
  {
    _id: "5",
    title: "Fibonacci (Iterative)",
    code: `function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}`,
    language: "JavaScript",
    createdAt: "2025-06-30T10:20:00Z",
  },
  {
    _id: "6",
    title: "Fetch Data (React)",
    code: `useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, []);`,
    language: "JavaScript",
    createdAt: "2025-06-30T10:25:00Z",
  },
  {
    _id: "7",
    title: "Hello World in Go",
    code: `package main

import "fmt"

func main() {
  fmt.Println("Hello, world!")
}`,
    language: "Go",
    createdAt: "2025-06-30T10:30:00Z",
  },
  {
    _id: "8",
    title: "Node.js Server",
    code: `const http = require('http');

http.createServer((req, res) => {
  res.end('Hello World');
}).listen(3000);`,
    language: "Node.js",
    createdAt: "2025-06-30T10:35:00Z",
  },
  {
    _id: "9",
    title: "SQL Select All",
    code: `SELECT * FROM users;`,
    language: "SQL",
    createdAt: "2025-06-30T10:40:00Z",
  },
  {
    _id: "10",
    title: "Palindrome Check",
    code: `function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}`,
    language: "JavaScript",
    createdAt: "2025-06-30T10:45:00Z",
  },
];


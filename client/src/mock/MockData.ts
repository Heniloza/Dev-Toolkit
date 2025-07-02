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

export const colorPalettes = [
  {
    id:1,
    name: "Sunset Vibe",
    colors: ["#ff7e5f", "#feb47b", "#ff6f61", "#ffc371", "#fcb045"],
  },
  {
    id:2,
    name: "Ocean Breeze",
    colors: ["#56ccf2", "#2f80ed", "#00c9ff", "#92fe9d", "#38f9d7"],
  },
  {
    id:3,
    name: "Muted Pastels",
    colors: ["#a8edea", "#fed6e3", "#ffd3a5", "#ff9a9e", "#fbc2eb"],
  },
  {
    id:4,
    name: "Dark Mode Cool",
    colors: ["#121212", "#1f1f1f", "#2c2c2c", "#3d3d3d", "#00bcd4"],
  },
  {
    id:5,
    name: "Peachy Coral",
    colors: ["#fbd3e9", "#bb377d", "#ff7eb9", "#ff65a3", "#7afcff"],
  },
  {
    id:6,
    name: "Forest Calm",
    colors: ["#355c7d", "#6c5b7b", "#c06c84", "#f67280", "#f8b195"],
  },
  {
    id:7,
    name: "Cyber Neon",
    colors: ["#0f0c29", "#302b63", "#24243e", "#00f260", "#0575e6"],
  },
  {
    id:8,
    name: "Desert Sand",
    colors: ["#edc9af", "#e1a95f", "#c19a6b", "#a1866f", "#8b6b4f"],
  },
  {
    id:9,
    name: "Retro Vibes",
    colors: ["#ff6f61", "#6b4226", "#ffccbc", "#fcebb6", "#a1c181"],
  },
  {
    id:10,
    name: "Minimal Gray",
    colors: ["#eeeeee", "#cccccc", "#999999", "#666666", "#333333"],
  },
  {
    id: 11,
    name: "Aurora Dream",
    colors: ["#00c3ff", "#ffff1c", "#ff007f", "#8c52ff", "#00ff87"],
  },
  {
    id: 12,
    name: "Tokyo Lights",
    colors: ["#ff4e50", "#fc913a", "#f9d62e", "#eae374", "#e2f4c7"],
  },
  {
    id: 13,
    name: "Earthy Tones",
    colors: ["#d3c0b0", "#a67b5b", "#6f4e37", "#38220f", "#8b5e3c"],
  },
  {
    id: 14,
    name: "Royal Elegance",
    colors: ["#0f0524", "#260f26", "#470d21", "#6c0a1e", "#d90368"],
  },
  {
    id: 15,
    name: "Miami Vibes",
    colors: ["#12c2e9", "#c471ed", "#f64f59", "#ee0979", "#ff6a00"],
  },
  {
    id: 16,
    name: "Winter Frost",
    colors: ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da"],
  },
  {
    id: 17,
    name: "Golden Hour",
    colors: ["#ff9a00", "#ff6126", "#ff0066", "#cc00ff", "#6600ff"],
  },
  {
    id: 18,
    name: "Cyberpunk Glow",
    colors: ["#0f0c29", "#302b63", "#e400ff", "#00f0ff", "#ff0090"],
  },
  {
    id: 19,
    name: "Vintage Paper",
    colors: ["#f9f3df", "#e7d8c9", "#d3c0b0", "#c2b280", "#a1887f"],
  },
  {
    id: 20,
    name: "Tropical Sunrise",
    colors: ["#f83600", "#f9d423", "#ff7e5f", "#feb47b", "#ffd194"],
  },
  {
    id: 21,
    name: "Modern Lavender",
    colors: ["#f8e3ff", "#e6ccff", "#d1b3ff", "#b399ff", "#9973ff"],
  },
  {
    id: 22,
    name: "Mint Condition",
    colors: ["#e0f7ec", "#b2f2bb", "#80ed99", "#57cc99", "#38a3a5"],
  },
  {
    id: 23,
    name: "Night Sky",
    colors: ["#0b0c10", "#1f2833", "#c5c6c7", "#66fcf1", "#45a29e"],
  },
  {
    id: 24,
    name: "Floral Romance",
    colors: ["#ffb6b9", "#fae3d9", "#bbded6", "#61c0bf", "#d6eadf"],
  },
  {
    id: 25,
    name: "Sahara Heat",
    colors: ["#eabf9f", "#d9946c", "#c76e3e", "#a0522d", "#7b3f00"],
  },
  {
    id: 26,
    name: "Teal Tech",
    colors: ["#e0ffff", "#b2f7ef", "#86e3ce", "#41b3a3", "#1d3557"],
  },
  {
    id: 27,
    name: "Neon Pop",
    colors: ["#ff00ff", "#00ffff", "#00ff00", "#ffff00", "#ff0000"],
  },
  {
    id: 28,
    name: "Calm Breeze",
    colors: ["#edf6f9", "#d9ed92", "#b5ead7", "#00bbf9", "#3a86ff"],
  },
  {
    id: 29,
    name: "Earth & Sky",
    colors: ["#fffcf2", "#ccc5b9", "#403d39", "#252422", "#eb5e28"],
  },
  {
    id: 30,
    name: "Cotton Candy",
    colors: ["#fcb9b2", "#f7c59f", "#f6e2b3", "#b5ead7", "#c7ceea"],
  },
   {
    id: 31,
    name: "Faded Sunset",
    colors: ["#ffafbd", "#ffc3a0", "#ffd3b6", "#ffaaa5", "#ff8b94"],
  },
  {
    id: 32,
    name: "Ocean Blues",
    colors: ["#0077b6", "#00b4d8", "#90e0ef", "#caf0f8", "#03045e"],
  },
  {
    id: 33,
    name: "Firecracker",
    colors: ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f"],
  },
  {
    id: 34,
    name: "Peach Lemonade",
    colors: ["#f6bd60", "#f7ede2", "#f5cac3", "#84a59d", "#f28482"],
  },
  {
    id: 35,
    name: "Retro Pop",
    colors: ["#ff6f61", "#6b5b95", "#88b04b", "#f7cac9", "#92a8d1"],
  },
  {
    id: 36,
    name: "Modern Minimal",
    colors: ["#ffffff", "#f8f9fa", "#dee2e6", "#adb5bd", "#6c757d"],
  },
  {
    id: 37,
    name: "Emerald Forest",
    colors: ["#2a9d8f", "#264653", "#e9c46a", "#f4a261", "#e76f51"],
  },
  {
    id: 38,
    name: "Candy Pop",
    colors: ["#ffb3c1", "#ffcbf2", "#cdb4db", "#ffc8dd", "#b5ead7"],
  },
  {
    id: 39,
    name: "Deep Woods",
    colors: ["#2e382e", "#4a5759", "#6e7f80", "#b9b7bd", "#d3d3d3"],
  },
  {
    id: 40,
    name: "Electric Neon",
    colors: ["#39ff14", "#ccff00", "#ff6ec7", "#f000ff", "#0ff0fc"],
  },
  {
    id: 41,
    name: "Citrus Splash",
    colors: ["#fef9ef", "#fcd5ce", "#f8edeb", "#e8a598", "#ffb703"],
  },
  {
    id: 42,
    name: "Twilight Magic",
    colors: ["#5f0f40", "#9a031e", "#fb8b24", "#e36414", "#0f4c5c"],
  },
  {
    id: 43,
    name: "Matte Shadows",
    colors: ["#121212", "#2b2b2b", "#3c3c3c", "#5a5a5a", "#8d8d8d"],
  },
  {
    id: 44,
    name: "Lagoon Dream",
    colors: ["#00bcd4", "#009688", "#4db6ac", "#80cbc4", "#b2dfdb"],
  },
  {
    id: 45,
    name: "Funky Fiesta",
    colors: ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
  },
  {
    id: 46,
    name: "Warm Dusk",
    colors: ["#e0aaff", "#c77dff", "#9d4edd", "#7b2cbf", "#5a189a"],
  },
  {
    id: 47,
    name: "Muted Earth",
    colors: ["#eae2b7", "#fcbf49", "#f77f00", "#d62828", "#003049"],
  },
  {
    id: 48,
    name: "Ice Cream Tones",
    colors: ["#fcd5ce", "#fae1dd", "#f8edeb", "#f9dcc4", "#fec89a"],
  },
  {
    id: 49,
    name: "Monochrome Gray",
    colors: ["#111111", "#333333", "#555555", "#777777", "#999999"],
  },
  {
    id: 50,
    name: "Skyfall",
    colors: ["#d0f4f0", "#8ecae6", "#219ebc", "#023047", "#001d3d"],
  },
  {
    id: 51,
    name: "Sandy Beach",
    colors: ["#ffe5b4", "#fcd5ce", "#f8edeb", "#fad2e1", "#cdb4db"],
  },
  {
    id: 52,
    name: "Berry Mix",
    colors: ["#6411ad", "#d6336c", "#e85d75", "#f28482", "#ffb5a7"],
  },
  {
    id: 53,
    name: "Aqua Marine",
    colors: ["#b5f7ef", "#9df3c4", "#62c370", "#0f4c5c", "#183a37"],
  },
  {
    id: 54,
    name: "Night Club",
    colors: ["#0f0c29", "#302b63", "#24243e", "#ee0979", "#ff6a00"],
  },
  {
    id: 55,
    name: "Retro Orange",
    colors: ["#ff9f1c", "#ffbf69", "#cbf3f0", "#2ec4b6", "#ff6b6b"],
  },
  {
    id: 56,
    name: "Green Fields",
    colors: ["#d9ed92", "#b5e48c", "#99d98c", "#76c893", "#52b69a"],
  },
  {
    id: 57,
    name: "Choco Mint",
    colors: ["#3e2f23", "#8d6a56", "#c9ada7", "#b8f2e6", "#a9def9"],
  },
  {
    id: 58,
    name: "Tangerine",
    colors: ["#f77f00", "#fcbf49", "#eae2b7", "#003049", "#d62828"],
  },
  {
    id: 59,
    name: "Futuristic Metal",
    colors: ["#343a40", "#495057", "#6c757d", "#adb5bd", "#ced4da"],
  },
  {
    id: 60,
    name: "Purple Night",
    colors: ["#3d348b", "#7678ed", "#f7b801", "#f18701", "#f35b04"],
  },
  {
    id: 61,
    name: "Minty Ice",
    colors: ["#d8f3dc", "#b7e4c7", "#95d5b2", "#74c69d", "#52b788"],
  },
  {
    id: 62,
    name: "Canyon Clay",
    colors: ["#f2cc8f", "#f4a261", "#e76f51", "#2a9d8f", "#264653"],
  },
  {
    id: 63,
    name: "Soft Petals",
    colors: ["#fcefee", "#fad4d4", "#f6c1c1", "#f3a7a7", "#ef8d8d"],
  },
  {
    id: 64,
    name: "Cool Tech",
    colors: ["#001f3f", "#0074d9", "#7fdbff", "#39cccc", "#3d9970"],
  },
  {
    id: 65,
    name: "Golden Dust",
    colors: ["#fff3b0", "#f9dc5c", "#f4a261", "#e76f51", "#e63946"],
  },
  {
    id: 66,
    name: "Dreamscape",
    colors: ["#a393eb", "#f2c57c", "#9ad4d6", "#c98474", "#f5e6e8"],
  },
  {
    id: 67,
    name: "Shadow Storm",
    colors: ["#0f0e17", "#2e2f3e", "#7f5af0", "#a786df", "#fffffe"],
  },
  {
    id: 68,
    name: "Bold Ink",
    colors: ["#1a1a1d", "#4e4e50", "#6f2232", "#950740", "#c3073f"],
  },
  {
    id: 69,
    name: "Cherry Blossom",
    colors: ["#ffe5ec", "#ffc2d1", "#ffb3c6", "#ff8fab", "#fb6f92"],
  },
  {
    id: 70,
    name: "Sunset Melt",
    colors: ["#ff5e62", "#ff9966", "#ffcc70", "#f6e27a", "#86e3ce"],
  },
  {
    id: 71,
    name: "Olive Grove",
    colors: ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"],
  },
  {
    id: 72,
    name: "Jelly Bean",
    colors: ["#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#ffe2e2"],
  },
  {
    id: 73,
    name: "Cool Slate",
    colors: ["#b8c1ec", "#a9def9", "#d0f4de", "#fdfcdc", "#ffcbf2"],
  },
  {
    id: 74,
    name: "Bold Neon",
    colors: ["#ff4d6d", "#ff9a8b", "#fad0c4", "#fbc2eb", "#a18cd1"],
  },
  {
    id: 75,
    name: "Midnight Haze",
    colors: ["#232931", "#393e46", "#4ecca3", "#eeeeee", "#00adb5"],
  },
  {
    id: 76,
    name: "Sunshine Citrus",
    colors: ["#fff9c4", "#ffe082", "#ffca28", "#ffa000", "#ff6f00"],
  },
  {
    id: 77,
    name: "Peacock",
    colors: ["#081c15", "#1b4332", "#2d6a4f", "#40916c", "#52b788"],
  },
  {
    id: 78,
    name: "Cotton Frost",
    colors: ["#faf3dd", "#c8d5b9", "#8fc0a9", "#68b0ab", "#4a7c59"],
  },
  {
    id: 79,
    name: "Wild Orchid",
    colors: ["#ffcad4", "#f4acb7", "#9d8189", "#6d6875", "#4a4e69"],
  },
  {
    id: 80,
    name: "Clean Contrast",
    colors: ["#ffffff", "#f8f9fa", "#212529", "#343a40", "#495057"],
  },
  {
    id: 81,
    name: "Earthy Warmth",
    colors: ["#8d6a9f", "#c3aed6", "#f3e9d2", "#c9ada7", "#9a8c98"],
  },
  {
    id: 82,
    name: "Neon Lights",
    colors: ["#fcf300", "#ff5733", "#c70039", "#900c3f", "#581845"],
  },
  {
    id: 83,
    name: "Cocoa Cream",
    colors: ["#4e342e", "#6d4c41", "#8d6e63", "#a1887f", "#d7ccc8"],
  },
  {
    id: 84,
    name: "Frozen Mint",
    colors: ["#edf6f9", "#d6f6eb", "#ade8f4", "#caf0f8", "#90e0ef"],
  },
  {
    id: 85,
    name: "Classic Blues",
    colors: ["#0d1b2a", "#1b263b", "#415a77", "#778da9", "#e0e1dd"],
  },
  {
    id: 86,
    name: "Urban Dust",
    colors: ["#3e2723", "#4e342e", "#5d4037", "#6d4c41", "#795548"],
  },
  {
    id: 87,
    name: "Rose Garden",
    colors: ["#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63"],
  },
  {
    id: 88,
    name: "Pastel Cream",
    colors: ["#fdfcdc", "#e4c1f9", "#c1fba4", "#a1c3d1", "#ffe5ec"],
  },
  {
    id: 89,
    name: "Ocean Breeze",
    colors: ["#caf0f8", "#ade8f4", "#90e0ef", "#48cae4", "#00b4d8"],
  },
  {
    id: 90,
    name: "Spicy Sunset",
    colors: ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d"],
  },
  {
    id: 91,
    name: "Tech Tones",
    colors: ["#0f4c75", "#3282b8", "#bbe1fa", "#1b262c", "#f9f7f7"],
  },
  {
    id: 92,
    name: "Muted Rainbow",
    colors: ["#9d8189", "#f4acb7", "#fbc4ab", "#fec89a", "#ffe5d9"],
  },
  {
    id: 93,
    name: "Crisp Air",
    colors: ["#edf2fb", "#d7e3fc", "#ccdbfd", "#c1d3fe", "#b6ccfe"],
  },
  {
    id: 94,
    name: "Moody Nature",
    colors: ["#081c15", "#1b4332", "#2d6a4f", "#40916c", "#52b788"],
  },
  {
    id: 95,
    name: "Autumn Vibes",
    colors: ["#ffe8d6", "#f8edeb", "#e0afa0", "#b5838d", "#6d6875"],
  },
  {
    id: 96,
    name: "Citrus Tones",
    colors: ["#ff9f1c", "#ffbf69", "#cbf3f0", "#2ec4b6", "#006d77"],
  },
  {
    id: 97,
    name: "Luxe Gold",
    colors: ["#f9f7f3", "#e0c097", "#cbb279", "#a68a64", "#6f5846"],
  },
  {
    id: 98,
    name: "Ink & Paper",
    colors: ["#f8f9fa", "#e9ecef", "#dee2e6", "#343a40", "#212529"],
  },
  {
    id: 99,
    name: "Pink Sorbet",
    colors: ["#ffe5ec", "#ffc2d1", "#ffb3c6", "#ff8fab", "#fb6f92"],
  },
  {
    id: 100,
    name: "Deep Sea",
    colors: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8"],
  },
];

export const commonRegexPatterns = [
  {
    name: "Email Address",
    pattern: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$",
    example: "example@mail.com",
  },
  {
    name: "Phone Number (India)",
    pattern: "^(\\+91)?[6-9][0-9]{9}$",
    example: "+919876543210",
  },
  {
    name: "URL",
    pattern: "^(https?:\\/\\/)?([\\w.-]+)\\.([a-z\\.]{2,6})([\\/\\w .-]*)*\\/?$",
    example: "https://example.com",
  },
  {
    name: "Postal Code (India)",
    pattern: "^[1-9][0-9]{5}$",
    example: "370001",
  },
  {
    name: "Username (alphanumeric, 3-16 chars)",
    pattern: "^[a-zA-Z0-9_]{3,16}$",
    example: "henil_dev123",
  },
  {
    name: "IPv4 Address",
    pattern:
      "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
    example: "192.168.0.1",
  },
  {
    name: "Hex Color Code",
    pattern: "^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
    example: "#ff5733",
  },
  {
    name: "Password (min 8 chars, 1 uppercase, 1 number)",
    pattern: "^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,}$",
    example: "Henil@2024",
  },
  {
    name: "Date (YYYY-MM-DD)",
    pattern: "^\\d{4}-\\d{2}-\\d{2}$",
    example: "2025-07-02",
  },
  {
    name: "Only Digits",
    pattern: "^\\d+$",
    example: "123456",
  },
  {
    name: "UUID v4",
    pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
  },
  {
    name: "ISO 8601 Date (YYYY-MM-DD)",
    pattern: "^\\d{4}-\\d{2}-\\d{2}$",
  },
  {
    name: "24-Hour Time Format",
    pattern: "^([01]\\d|2[0-3]):[0-5]\\d$",
  },
  {
    name: "Credit Card Number (Basic)",
    pattern: "^\\d{4}-?\\d{4}-?\\d{4}-?\\d{4}$",
  },
  {
    name: "US Phone Number (123-456-7890)",
    pattern: "^\\d{3}-\\d{3}-\\d{4}$",
  },
  {
    name: "Only Lowercase Letters",
    pattern: "^[a-z]+$",
  },
  {
    name: "Only Uppercase Letters",
    pattern: "^[A-Z]+$",
  },
  {
    name: "Only Letters (Both Cases)",
    pattern: "^[a-zA-Z]+$",
  },
  {
    name: "HTML Tags",
    pattern: "<(\"[^\"]*\"|'[^']*'|[^'\">])*>",
  },
  {
    name: "IP Address (IPv4)",
    pattern: "^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$",
  },
  {
    name: "Hexadecimal Color (#fff or #ffffff)",
    pattern: "^#(?:[0-9a-fA-F]{3}){1,2}$",
  },
  {
    name: "Strong Password (8+ chars, upper/lower, number, symbol)",
    pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
  },
  {
    name: "Base64 String",
    pattern: "^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$",
  },
  {
    name: "Positive Integer",
    pattern: "^\\d+$",
  },
  {
    name: "Negative Integer",
    pattern: "^-\\d+$",
  },
  {
    name: "Alphanumeric",
    pattern: "^[a-zA-Z0-9]+$",
  },
  {
    name: "URL Slug",
    pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
  },
  {
    name: "File Name with Extension",
    pattern: "^[\\w,\\s-]+\\.[A-Za-z]{3}$",
  },
  {
    name: "MAC Address",
    pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
  },
  {
    name: "Whitespace Only",
    pattern: "^\\s+$",
  },
];

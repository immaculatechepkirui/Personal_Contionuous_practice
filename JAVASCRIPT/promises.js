
// Create a Simple Promise:
// 1. Write a JavaScript function that returns a Promise that resolves 
// with a "Hello, World!" message after 1 second

const greeting = () => {
    setTimeout((resolve) => {
        resolve(("Hello, World!"));
    }, 1000);
};

greeting();
// 1. Get references to the HTML elements
const changeButton = document.getElementById('change-btn');
const colorCodeText = document.getElementById('color-code');

// 2. Function to generate a random RGB color string
function generateRandomColor() {
    // Generate random values between 0 and 255 for Red, Green, and Blue
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

// 3. Listen for a click on the button
changeButton.addEventListener('click', () => {
    const newColor = generateRandomColor();
    
    // Update the background color of the page
    document.body.style.backgroundColor = newColor;
       

    // Update the text to display the current RGB value
    colorCodeText.textContent = newColor;
});

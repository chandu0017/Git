// // 1. Get references to the HTML elements
// const changeButton = document.getElementById('change-btn');
// const colorCodeText = document.getElementById('color-code');

// // 2. Function to generate a random RGB color string
// function generateRandomColor() {
//     // Generate random values between 0 and 255 for Red, Green, and Blue
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
    
//     return `rgb(${r}, ${g}, ${b})`;
// }

// // 3. Listen for a click on the button
// changeButton.addEventListener('click', () => {
//     const newColor = generateRandomColor();
    
//     // Update the background color of the page
//     document.body.style.backgroundColor = newColor;
       

//     // Update the text to display the current RGB value
//     colorCodeText.textContent = newColor;
// });
let colorcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const change = () =>{
    let display = document.getElementById("dispaly")
    let randcolor = "#"
}let color = document.getElementById("color")
for(let index = 0 ; index <6 ;index++){
    let random = Math.floor(Math.random()*16)
    rendcolor += colorcode(random)
}
color.innerHTML = randcolor
display.style.backround = randcolor
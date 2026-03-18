
let numbers = [];

document.getElementById('processBtn').addEventListener('click', () => {
    const input = document.getElementById('numInput').value;
    numbers = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));

    // Show original numbers
    document.getElementById('original').textContent = numbers.join(', ');

    // Filter odd numbers and double them
    const newNumbers = numbers.filter(n => n % 2 !== 0).map(n => n * 2);

    // Show doubled numbers
    document.getElementById('doubled').textContent = newNumbers.join(', ');
});
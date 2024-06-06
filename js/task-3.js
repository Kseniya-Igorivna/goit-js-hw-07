
const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
    const name = input.value.trim();
    output.textContent = name === '' ? 'Anonymous' : name;
});
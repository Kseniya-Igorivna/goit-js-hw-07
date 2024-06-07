function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//list.classList.add(input6)
//list.classList.add(btn-cr)
//list.classList.add(btn-des)
const input = document.querySelector('#controls input');
        const createBtn = document.querySelector('[data-create]');
        const destroyBtn = document.querySelector('[data-destroy]');
        const boxesContainer = document.getElementById('boxes');

        createBtn.addEventListener('click', () => {
            const amount = parseInt(input.value);
            if (amount >= 1 && amount <= 100) {
                createBoxes(amount);
                input.value = '';
            }
        });

        destroyBtn.addEventListener('click', destroyBoxes);

        function createBoxes(amount) {
            destroyBoxes(); // Удаляем предыдущие элементы
            const boxSize = 30;
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < amount; i++) {
                const box = document.createElement('div');
                const size = boxSize + i * 10;
                box.style.width = `${size}px`;
                box.style.height = `${size}px`;
                box.style.backgroundColor = getRandomHexColor();
                box.textContent = i + 1; // Добавляем номер квадрата для удобства
                fragment.appendChild(box);
            }

            boxesContainer.appendChild(fragment);
        }

        function destroyBoxes() {
            boxesContainer.innerHTML = '';
        }
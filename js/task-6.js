function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
    const input = controls.querySelector('input[type="number"]');
    const createButton = controls.querySelector('button[data-create]');
    const destroyButton = controls.querySelector('button[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    function createBoxes(amount) {
      destroyBoxes();
      const boxElements = [];
      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.textContent = i + 1;
        boxElements.push(box);
        size += 10;
      }

      boxesContainer.append(...boxElements);
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    createButton.addEventListener('click', () => {
      const amount = parseInt(input.value.trim());
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      } else {
        alert('Please enter a number between 1 and 100');
      }
    });

    destroyButton.addEventListener('click', () => {
      destroyBoxes();
    });
    const style = document.createElement('style');
style.textContent =
#boxes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

#boxes div {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
document.head.appendChild(style);
const title = document.getElementById('title');
const button = document.getElementById('changeColorBtn');
let currentColorIndex = 0;
const colors = ['white', 'lightblue', 'lightgreen', 'pink', 'lightyellow', 'darkblue', 'darkgreen', 'purple', 'darkgray'];

button.addEventListener('click', function() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const newColor = colors[currentColorIndex];
  document.body.style.backgroundColor = newColor;
  title.textContent = 'Текущий цвет фона: ' + newColor;

  if (isDarkColor(newColor)) {
    button.classList.remove('btn-dark');
    button.classList.add('btn-light');
  } else {
    button.classList.remove('btn-light');
    button.classList.add('btn-dark');
  }
});

function isDarkColor(color) {
  const rgb = getRGBValues(color);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness < 128;
}

function getRGBValues(color) {
  const div = document.createElement('div');
  div.style.backgroundColor = color;
  document.body.appendChild(div);
  const computedStyle = getComputedStyle(div);
  const rgb = computedStyle.backgroundColor.match(/\d+/g);
  document.body.removeChild(div);
  return {
    r: parseInt(rgb[0]),
    g: parseInt(rgb[1]),
    b: parseInt(rgb[2])
  };
}



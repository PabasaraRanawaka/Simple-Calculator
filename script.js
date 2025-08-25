let display = document.getElementById('result');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate(func) {
  let current = display.value;

  try {
    if (func === '=') {
      display.value = eval(current);
    } else if (func === 'sqrt') {
      display.value = Math.sqrt(eval(current));
    } else if (func === '^') {
      display.value = Math.pow(eval(current), 2);
    } else if (func === 'sin') {
      display.value = Math.sin(eval(current) * Math.PI / 180);
    } else if (func === 'cos') {
      display.value = Math.cos(eval(current) * Math.PI / 180);
    } else if (func === 'tan') {
      display.value = Math.tan(eval(current) * Math.PI / 180);
    } else if (func === 'log') {
      display.value = Math.log10(eval(current));
    }
  } catch (err) {
    display.value = 'Error';
  }
}

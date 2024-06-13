import noUiSlider, { PipsMode } from "../../../plugins/nouislider/dist/nouislider.js";
const onReady = () => {
  // example 1
  const slider = document.querySelector('#slider');
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
  // example 2
  const sliderPips = document.querySelector('#slider-pips');
  const sliderPipsUI = noUiSlider.create(sliderPips, {
    start: [20, 80],
    margin: 20,
    connect: true,
    range: {
      'min': 0,
      'max': 100
    },
    step: 20,
    pips: {
      mode: PipsMode.Steps,
      density: 3
    }
  });
  let activePips = [null, null];
  sliderPipsUI.on('update', function (values, handle) {
    // Remove the active class from the current pip
    if (activePips[handle]) {
      activePips[handle].classList.remove('active-pip');
    }
    // Match the formatting for the pip
    var dataValue = +values[handle];
    // Find the pip matching the value
    activePips[handle] = sliderPips.querySelector('.noUi-value[data-value="' + dataValue + '"]');
    // Add the active class
    if (activePips[handle]) {
      activePips[handle].classList.add('active-pip');
    }
  });
  // example 3
  const stepsSlider = document.querySelector('#steps-slider');
  const input0 = document.querySelector('#input-with-keypress-0');
  const input1 = document.querySelector('#input-with-keypress-1');
  const inputs = [input0, input1];
  const stepsSliderUI = noUiSlider.create(stepsSlider, {
    start: [20, 80],
    connect: true,
    tooltips: true,
    format: {
      to: function (value) {
        return value.toFixed(1);
      },
      from: function (value) {
        Log.d(value);
        return Number(value.replace(',-', ''));
      }
    },
    range: {
      'min': [0],
      '10%': [10, 10],
      '50%': [80, 20],
      '80%': 150,
      'max': 200
    }
  });
  stepsSliderUI.on('update', function (values, handle) {
    Log.d(values);
    inputs[handle].value = values[handle].toString();
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
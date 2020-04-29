// INITIALISE DOM VARIABLES
const tapTarget = document.getElementsByClassName('tapTarget')[0];


const resetTapCount = () => {
  
  tapCount.taps = 0;
  tapCount.time = (new Date().getTime() / 1000);
  tapTarget.removeAttribute('data-tap-count');
  tapTarget.classList.remove('fadeTapCount');
  setTimeout(() => tapTarget.classList.add('fadeTapCount'), 20);
};


const requiredTapsCompleted = () => {

  // quadTap ACTIVATION FUNCTION HERE:

  let redValue = Math.floor(Math.random() * 256);
  let greenValue = Math.floor(Math.random() * 256);
  let blueValue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}


const countTaps = (timeWindow, requiredTaps) => {

  tapTarget.classList.add('fadeTapCount');

  if ((tapCount.time + timeWindow) < (new Date().getTime() / 1000)) {

    resetTapCount();
    tapCount.taps++;
    tapTarget.dataset.tapCount = tapCount.taps;
  }

  else {

    tapCount.taps++;
    tapTarget.dataset.tapCount = tapCount.taps;
  }

  if (tapCount.taps > (requiredTaps - 1)) {

    resetTapCount();
    requiredTapsCompleted();
  }
}


const initialiseApp = () => {

  const requiredTapsSpan = document.getElementsByClassName('required-taps')[0];
  const timeWindowSpan = document.getElementsByClassName('time-window')[0];

  requiredTapsSpan.textContent = requiredTaps;
  timeWindowSpan.textContent = timeWindow;

  tapTarget.style.setProperty('--fade-tap-count', `fadeTapCount ${timeWindow}s linear forwards`);
}


// INITIALISE TAP COUNT
let tapCountFade;
const tapCount = {};
resetTapCount();


// SET TAP VARIABLES
const requiredTaps = 4;
const timeWindow = 2.5; // in seconds


// EVENT LISTENERS
tapTarget.addEventListener('click', () => countTaps(timeWindow, requiredTaps), false);

window.addEventListener('load', initialiseApp, false);

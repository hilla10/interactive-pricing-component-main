const view = document.querySelector('.views-count');
const trafficLg = document.querySelector('.traffic-lg');
const price = document.querySelector('.price');
const toggle = document.querySelector('.toggle');
const btn = document.querySelector('.btn');

// Add event listeners to both sliders
trafficLg.oninput = function () {
  updatePricing(this.value);
};

btn.addEventListener('click', () => {
  btn.textContent = 'Trial is started';
});

toggle.addEventListener('click', changePayment);

// Function to update pricing based on traffic value
function updatePricing(value) {
  let cost;
  let page;

  // Define pricing tiers based on input value
  if (value <= 15) {
    cost = 8.0;
    page = '10k';
  } else if (value <= 25) {
    cost = 12.0;
    page = '50k';
  } else if (value <= 50) {
    cost = 16.0;
    page = '100k';
  } else if (value <= 75) {
    cost = 24.0;
    page = '500k';
  } else if (value > 75) {
    cost = 36.0;
    page = '1m';
  }

  if (toggle.classList.contains('checked')) {
    // Apply 25% discount if toggle is checked
    cost *= 0.75 * 12; // Apply discount
    price.innerHTML = `$${cost.toFixed(2)} <span>/ yearly</span>`;
  } else {
    // Update the displayed price and page views
    price.innerHTML = `$${cost.toFixed(2)} <span>/ month</span>`;
  }

  view.textContent = page;
  // Update slider background
  updateSliderBackground(trafficLg, value);
  updateSliderBackground(trafficSm, value);
}

// Function to update slider background based on the value
function updateSliderBackground(slider, value) {
  const percentage = (value / slider.max) * 100;
  slider.style.background = `linear-gradient(to right, rgb(165, 243, 235) ${percentage}%, rgb(234, 238, 251) ${percentage}%)`;
}

function changePayment() {
  toggle.classList.toggle('checked');
  updatePricing(trafficLg.value);
  //   updatePricing(trafficSm.value);
}

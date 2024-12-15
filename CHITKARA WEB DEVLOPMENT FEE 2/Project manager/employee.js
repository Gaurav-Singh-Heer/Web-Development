// employee.js

// Function to set up the progress circles with animations
function setupProgressCircles(progressValues) {
  document.querySelectorAll('.progress-circle').forEach((circle, index) => {
      let radius = circle.querySelector('.foreground-circle').r.baseVal.value;
      let circumference = 2 * Math.PI * radius;

      // Set the stroke dash properties
      circle.querySelector('.foreground-circle').style.strokeDasharray = `${circumference} ${circumference}`;
      circle.querySelector('.foreground-circle').style.strokeDashoffset = circumference - (progressValues[index] / 100) * circumference;
      circle.parentElement.querySelector('.progress-text').textContent = `${progressValues[index]}%`;
  });
}

// Chart.js Graph
function setupChart() {
  var ctx = document.getElementById('progressGraph').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['2020', '2021', '2022', '2023', '2024'], // X-axis labels (Years)
          datasets: [{
              label: 'Progress Percentage',
              data: [30, 45, 60, 75, 90], // Y-axis data (Increment in Percentage)
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
          }]
      },
      options: {
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Years'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Progress (%)'
                  }
              }
          }
      }
  });
}

// Dynamic Button Text Change
function setupButtons() {
  const buttons = document.querySelectorAll('.course .box button');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          button.textContent = 'Completed'; // Change text on click
          button.disabled = true; // Optionally disable the button
      });
  });
}

// Initialize all functionalities
function init() {
  const progress = [70, 50, 40]; // Example progress values for You, Gaurav, Agam
  setupProgressCircles(progress);
  setupChart();
  setupButtons();
}

// Call the init function on page load
window.onload = init;

// Update Progress Function (Optional for dynamic updates)
function updateProgress(circleSelector, percent) {
  const circle = document.querySelector(circleSelector + ' .foreground-circle');
  const text = document.querySelector(circleSelector + ' .progress-text');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  text.textContent = `${percent}%`; // Ensure percentage is displayed correctly
}

// Example: Update progress dynamically (optional)
// updateProgress('.progress-circle', 50); // Call this function as needed

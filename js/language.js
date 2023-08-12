const progressBars = document.querySelectorAll(".progress");
  const percentages = document.querySelectorAll(".number");
  const intervals = []; // Store the interval IDs for each progress bar

  // Animation function to update each progress bar's percentage value
  function animateProgressBar(element, targetPercentage, index) {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= targetPercentage) {
        clearInterval(intervals[index]);
      } else {
        counter++;
        element.innerHTML = counter + "%";
      }
    }, 29);
    intervals[index] = interval;
  }

  // Loop through each progress bar and animate its percentage
  progressBars.forEach((progressBar, index) => {
    const targetPercentage = parseFloat(progressBar.style.getPropertyValue("--per"));
    animateProgressBar(percentages[index], targetPercentage, index);
  });

//click to show detailes
function toggleSize(box) {
    box.classList.toggle('enlarged');
    if (box.classList.contains('enlarged')) {
        document.addEventListener('scroll', handleScroll);
    } else {
        document.removeEventListener('scroll', handleScroll);
    }
}

function handleScroll() {
    const enlargedBox = document.querySelector('.box.enlarged');
    if (enlargedBox) {
        enlargedBox.classList.remove('enlarged');
        document.removeEventListener('scroll', handleScroll);
    }
}

//compare
$(document).ready(function() {
    // Function to display the selected class in the selected main div
    function displaySelectedClass(mainSelector, classSelector, resultSelector) {
      $(mainSelector).change(function() {
        const mainId = $(this).val();
        const className = $(classSelector).val();
        const mainDiv = $('div.main-div[data-id="' + mainId + '"]');
        const selectedElement = mainDiv.find('div.' + className);
        const selectedValue = selectedElement.html();
        $(resultSelector).html('Selected section in Language ' + mainId + ': ' + selectedValue);
      });

      $(classSelector).change(function() {
        const mainId = $(mainSelector).val();
        const className = $(this).val();
        const mainDiv = $('div.main-div[data-id="' + mainId + '"]');
        const selectedElement = mainDiv.find('div.' + className);
        const selectedValue = selectedElement.html();
        $(resultSelector).html('Selected section in Language ' + mainId + ': ' + selectedValue);
      });

      // Trigger initial display with default selections
      $(mainSelector).trigger('change');
      $(classSelector).trigger('change');
    }

    displaySelectedClass('#main-selectors', '#class-selectors', '#selected-class');
    displaySelectedClass('#main-selectors2', '#class-selectors2', '#selected-class2');
  });


const wrapper = document.querySelector('.circle-wrapper');
const progressCircle = wrapper.querySelector('.progress-circle');

const radius = 44;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference}`;
progressCircle.style.strokeDashoffset = `${circumference}`;

const percent = wrapper.dataset.percent;

// Funkce pro animaci
function animateProgress() {
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

// Reset při odjetí myší (pokud chceš, můžeš smazat)
function resetProgress() {
  progressCircle.style.strokeDashoffset = circumference;
}

// Spuštění animace při najetí myší
wrapper.addEventListener('mouseenter', animateProgress);
wrapper.addEventListener('mouseleave', resetProgress);

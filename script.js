document.addEventListener('DOMContentLoaded', () => {

    const wrappers = document.querySelectorAll('.icon-wrapper');

    wrappers.forEach(wrapper => {
        const progressRect = wrapper.querySelector('.progress-rect');
        const percentLabel = wrapper.querySelector('.percent-label');
        const targetPercent = parseInt(wrapper.dataset.percent);

        const side = 80; // velikost obdélníku
        const perimeter = 4 * side;

        progressRect.style.strokeDasharray = perimeter;
        progressRect.style.strokeDashoffset = perimeter;

        let counterInterval = null;
        let numbersVisible = false;

        function animateProgress() {
            const offset = perimeter - (targetPercent / 100) * perimeter;
            progressRect.style.strokeDashoffset = offset;

            if (!numbersVisible) {
                percentLabel.style.opacity = 1;
                numbersVisible = true;
            }

            let current = 0;
            clearInterval(counterInterval);

            counterInterval = setInterval(() => {
                if (current >= targetPercent) {
                    clearInterval(counterInterval);
                } else {
                    current++;
                    percentLabel.textContent = current + "%";
                }
            }, 15);
        }

        function resetProgress() {
            progressRect.style.strokeDashoffset = perimeter;
            percentLabel.style.opacity = 0;
            numbersVisible = false;
            percentLabel.textContent = "0%";
            clearInterval(counterInterval);
        }

        wrapper.addEventListener('mouseenter', animateProgress);
        wrapper.addEventListener('mouseleave', resetProgress);
    });

});

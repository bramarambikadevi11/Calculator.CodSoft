document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');

            if (value === 'C') {
                displayValue = '';
                updateDisplay();
                return;
            }

            if (value === '=') {
                try {
                    displayValue = eval(displayValue).toString();
                } catch {
                    displayValue = 'Error';
                }
                updateDisplay();
                return;
            }

            displayValue += value;
            updateDisplay();
        });
    });

    function updateDisplay() {
        display.textContent = displayValue || '0';
    }
});

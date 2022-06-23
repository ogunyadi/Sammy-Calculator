display = document.getElementById('display');
buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'E':
                display.innerText = ''; break;
            case '=' :
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'CE':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                default:
                display.innerText += e.target.innerText;
        }
    });
});
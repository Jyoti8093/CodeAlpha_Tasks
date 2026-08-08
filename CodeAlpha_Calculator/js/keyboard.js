const keyMap = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '.': '.',
    '/': '÷',
    '*': '×',
    '-': '−',
    '+': '+',
    '%': '%',
    Enter: '=',
    '=': '=',
    Backspace: '⌫',
    Delete: 'AC',
    Escape: 'AC',
};

function pressButton(value) {
    const button = [...document.querySelectorAll('.button-grid button')].find(
        (btn) => btn.textContent.trim() === value
    );
    if (!button) return;
    button.focus();
    button.click();
}

window.addEventListener('keydown', (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const key = event.key;
    if (!(key in keyMap)) return;
    event.preventDefault();
    pressButton(keyMap[key]);
});

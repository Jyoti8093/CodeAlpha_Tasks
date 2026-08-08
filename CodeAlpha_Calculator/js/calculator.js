const expressionEl = document.getElementById('expression');
const resultEl = document.getElementById('result');
const buttons = document.querySelectorAll('.button-grid button');

let currentExpression = '';
let lastInputType = '';

const operators = ['+', '−', '×', '÷'];

function normalizeExpression(expr) {
    if (!expr) return '';
    let normalized = expr.replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/');
    normalized = normalized.replace(/([0-9.]+)%/g, '($1/100)');
    normalized = normalized.replace(/([*/+-])+/g, (match, op) => {
        if (match.endsWith('-') && !match.endsWith('--')) {
            return match.slice(-2).replace('--', '+');
        }
        return match[match.length - 1];
    });
    return normalized;
}

function formatNumber(value) {
    if (Number.isInteger(value)) return String(value);
    return String(parseFloat(value.toFixed(10))).replace(/\.0+$/, '');
}

function calculatePreview() {
    if (!currentExpression) return '';
    const normalized = normalizeExpression(currentExpression);
    if (!normalized || /[^0-9().+\-*/% ]/.test(normalized)) return '';
    try {
        const result = eval(normalized);
        if (!isFinite(result)) return 'Error';
        return formatNumber(result);
    } catch {
        return '';
    }
}

function updateDisplay() {
    expressionEl.textContent = currentExpression || '0';
    resultEl.textContent = calculatePreview() || '0';
}

function appendCharacter(char) {
    if (char === '.') {
        const lastToken = currentExpression.split(/[^0-9.]/).pop();
        if (lastToken.includes('.')) return;
        if (!lastToken) {
            currentExpression += '0';
        }
        currentExpression += '.';
        lastInputType = 'digit';
        return;
    }

    if (operators.includes(char)) {
        if (!currentExpression && char !== '−') return;
        if (operators.includes(currentExpression.slice(-1))) {
            currentExpression = currentExpression.slice(0, -1) + char;
            lastInputType = 'operator';
            return;
        }
        currentExpression += char;
        lastInputType = 'operator';
        return;
    }

    if (char === '%') {
        if (!currentExpression || !/[0-9)]$/.test(currentExpression)) return;
        currentExpression += '%';
        lastInputType = 'percent';
        return;
    }

    currentExpression += char;
    lastInputType = 'digit';
}

function clearAll() {
    currentExpression = '';
    lastInputType = '';
}

function deleteLast() {
    if (!currentExpression) return;
    currentExpression = currentExpression.slice(0, -1);
    if (!currentExpression) {
        lastInputType = '';
        return;
    }
    const lastChar = currentExpression.slice(-1);
    lastInputType = operators.includes(lastChar) ? 'operator' : 'digit';
}

function toggleSign() {
    if (!currentExpression) return;
    const match = /(-?\d+\.?\d*|\([^()]+\))$/.exec(currentExpression);
    if (!match) return;
    let value = match[1];
    let replacement;
    if (value.startsWith('(') && value.endsWith(')')) {
        value = value.slice(1, -1);
    }
    if (value.startsWith('-')) {
        replacement = value.slice(1);
    } else {
        replacement = `(-${value})`;
    }
    currentExpression = currentExpression.slice(0, match.index) + replacement;
}

function evaluateExpression() {
    const normalized = normalizeExpression(currentExpression);
    if (!normalized) return;
    try {
        const result = eval(normalized);
        if (!isFinite(result)) {
            resultEl.textContent = 'Error';
            return;
        }
        currentExpression = formatNumber(result);
        lastInputType = 'digit';
    } catch {
        resultEl.textContent = 'Error';
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();
        switch (value) {
            case 'AC':
                clearAll();
                break;
            case '⌫':
                deleteLast();
                break;
            case '=':
                evaluateExpression();
                break;
            case '±':
                toggleSign();
                break;
            case '%':
                appendCharacter('%');
                break;
            default:
                appendCharacter(value);
        }
        updateDisplay();
    });
});

updateDisplay();

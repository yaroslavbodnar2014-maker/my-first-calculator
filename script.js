const screen = document.querySelector('.calc-screen');

// Функція для цифр та знаків (+, -, / тощо)
function addSymbol(symbol) {
    if (screen.textContent === '0') {
        screen.textContent = symbol;
    } else {
        screen.textContent = screen.textContent + symbol;
    }
}

//--- ГРУПА ЦИФР ТА ЗНАКІВ (просто додають текст на екран) ---
document.getElementById('btn1')?.addEventListener('click', () => addSymbol('1'));
document.getElementById('btn2')?.addEventListener('click', () => addSymbol('2'));
document.getElementById('btn3')?.addEventListener('click', () => addSymbol('3'));
document.getElementById('btn4')?.addEventListener('click', () => addSymbol('4'));
document.getElementById('btn5')?.addEventListener('click', () => addSymbol('5'));
document.getElementById('btn6')?.addEventListener('click', () => addSymbol('6'));
document.getElementById('btn7')?.addEventListener('click', () => addSymbol('7'));
document.getElementById('btn8')?.addEventListener('click', () => addSymbol('8'));
document.getElementById('btn9')?.addEventListener('click', () => addSymbol('9'));
document.getElementById('btn0')?.addEventListener('click', () => addSymbol('0'));

// Додаємо сюди ж знаки + - * /
document.getElementById('btn+')?.addEventListener('click', () => addSymbol('+'));
document.getElementById('btn-')?.addEventListener('click', () => addSymbol('-')); 
document.getElementById('btn*')?.addEventListener('click', () => addSymbol('*'))
document.getElementById('btn/')?.addEventListener('click', () => addSymbol('/'))
//--- ГРУПА ОЧИЩЕННЯ ---
document.getElementById('btnC')?.addEventListener('click', () => {
    screen.textContent = '0';
});

//--- ВІДСОТКИ ---
document.getElementById('btn%')?.addEventListener('click', () => {
    // Ділимо поточне число на екрані на 100
    screen.textContent = eval(screen.textContent) / 100;
});
// --- () ---
document.getElementById('btn()')?.addEventListener('click', () => {
    const text = screen.textContent;
    
    // Рахуємо скільки зараз на екрані відкритих і закритих дужок
    const openBrackets = (text.match(/\(/g) || []).length;
    const closeBrackets = (text.match(/\)/g) || []).length;
    
    // Беремо самий останній символ на екрані
    const lastChar = text.slice(-1);

    // Якщо на екрані просто "0", замінюємо його на відкриту дужку
    if (text === '0') {
        screen.textContent = '(';
        return;
    }

    // Якщо відкритих дужок більше і попередній символ — цифра або закрита дужка, то закриваємо
    if (openBrackets > closeBrackets && (!isNaN(lastChar) || lastChar === ')')) {
        screen.textContent = text + ')';
    } else {
        // Інакше — відкриваємо нову дужку
        screen.textContent = text + '(';
    }
});
// --- delete ---
// Перевірте, чи в HTML у цієї кнопки id="btndel"
document.getElementById('btndel')?.addEventListener('click', () => {
    const text = screen.textContent;

    // Якщо на екрані більше одного символу — відрізаємо останній
    if (text.length > 1) {
        screen.textContent = text.slice(0, -1);
    } else {
        // Якщо символ був один, повертаємо нуль
        screen.textContent = '0';
    }
});


//--- ГРУПА ОБЧИСЛЕННЯ (кнопка дорівнює) ---
document.getElementById('btn=')?.addEventListener('click', () => {
    try {
        // eval рахує все, що назбиралося на екрані (наприклад: "5+2")
        screen.textContent = eval(screen.textContent);
    } catch (error) {
        screen.textContent = 'Помилка';
    }
});

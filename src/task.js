
// Дана строка, содержащая скобки трёх видов(круглые, квадратные и фигурные) и любые другие символы.
// Посчитайте сколько скобок
// расставлено корректно а сколько нет.

// Например, в строке([]{})[] скобки расставлены корректно, а в строке([]] — нет.
// В первом случае правильно расставлено 8 скобок.
// Во втором случае указаны 2 скобки правильно, и 2 не правильно.

const hooks = {
    ']': '[',
    '}': '{',
    ')': '(',
}

const opening = ['[', '{', '('];
const closing = [']', '}', ')'];

function checkString(str) {
    const stack = [];
    const rigth = [];
    const wrong = [];
    for (let simbol of str) {
        if (opening.includes(simbol)) {
            stack.push(simbol)
        } if (closing.includes(simbol)) {
            const last = stack.pop();
            if (last === hooks[simbol]) {
                rigth.push(last)
                rigth.push(hooks[simbol])
            } else {
                wrong.push(last)
                wrong.push(hooks[simbol])
            }
        }
    }
    return `правильно ${rigth.length}, неправильно ${wrong.length}`
}

console.log(checkString('([]{})[]'));
console.log(checkString('([]]'));




let mouth = document.getElementById('mouth');
let operators = ['+', '-', '×', '÷'];
let status = true;

let pushed=[];
let array1=[];
let array2=[];

function resetArrays() {
    array1 = [];
    array2 = [];
    already = false;
}

//already typed in an operator
let already = false;
let operator;

document.querySelectorAll('.button').forEach(val => {
    val.onclick = function() {
        if (status === false) {
            let div = document.createElement('div');
            div.textContent = 'sleeping...';
            div.classList.add('max');
            document.body.append(div);
            setTimeout(() => {
                div.remove();
            }, 4000);
            return;
        }
    }
})

document.querySelectorAll('.number').forEach(val => {
    val.addEventListener('click', (e) => {
        if (status === false) {
            return;
        }
        if (mouth.textContent.length === 10) {
            let div = document.createElement('div');
            div.textContent = 'Max capacity reached';
            div.classList.add('max');
            document.body.append(div);
            setTimeout(() => {
                div.remove();
            }, 4000);
            return;
        }
        if (already === true) {
            pushed.push(e.target.id[1]);
            mouth.textContent = pushed.join('');
            array2.push(e.target.id[1]);
            return;
        }
        pushed.push(e.target.id[1]);
        mouth.textContent = pushed.join('');
        array1.push(e.target.id[1]);
    })
});

document.querySelectorAll('.operator').forEach(val => {
    val.addEventListener('click', (e) => {
        if (status === false) {
            return;
        }
        if (mouth.textContent.length === 10) {
            let div = document.createElement('div');
            div.textContent = 'Max capacity reached';
            div.classList.add('max');
            document.body.append(div);
            setTimeout(() => {
                div.remove();
            }, 4000);
            return;
        }
        pushed.push(e.target.id[1]);
        mouth.textContent = pushed.join('');
        already = true;
        operator = e.target.id[2];
    })
})

document.getElementById('ce').onclick = function() {
    mouth.textContent = '';
    resetArrays();
    pushed = [];
    already = false;
}

const checkLength = x => {
    x = x.toString().split('');
    if (x.length > 10) {
        x.splice(10);
        return x.join('');
    }
    return x.join('');
}
let answer;
document.getElementById('equal').onclick = function() {
    pushed = [];
    if (array2.length === 0) {
        mouth.textContent = array1.join('');
        resetArrays();
        return;
    }
    array1 = array1.join('');
    array1 = parseFloat(array1);
    array2 = array2.join('');
    array2 = parseFloat(array2);
    console.log(array1, array2);
    switch (operator) {
        case 'd':
            answer = array1 / array2;
            mouth.textContent = checkLength(answer);
            answer = '';
            resetArrays();
            return;
        case 'm':
            answer = array1 * array2;
            mouth.textContent = checkLength(answer);
            answer = '';
            resetArrays();
            return;
        case 's':
            answer = array1 - array2;
            mouth.textContent = checkLength(answer);
            answer = '';
            resetArrays();
            return;
        case 'a':
            answer = array1 + array2;
            mouth.textContent = checkLength(answer);
            answer = '';
            resetArrays();
            return;
    }
}

document.getElementById('sqrt').onclick = function() {
    array1 = array1.join('');
    let answer = Math.sqrt(array1);
    answer = checkLength(answer);
    mouth.textContent = answer;
}

document.getElementById('off').onclick = function() {
    if (status === false) {
        return;
    }
    status = false;
    document.querySelectorAll('.openeye').forEach(val => {
        val.remove();
    });
    document.querySelectorAll('.eye').forEach(val => {
        let div = document.createElement('div');
        div.classList.add('closeeye');
        val.append(div);
    })
}

document.getElementById('on').onclick = function() {
    if (status === true) {
        return;
    }
    status = true;
    document.querySelectorAll('.closeeye').forEach(val => {
        val.remove();
    });
    document.querySelectorAll('.eye').forEach(val => {
        let div = document.createElement('div');
        div.classList.add('openeye');
        val.append(div);
    });
}
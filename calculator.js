let mouth = document.getElementById('mouth');
let operators = ['+', '-', '×', '÷'];

let pushed=[];
let array1=[];
let array2=[];

let already = false;
let operator;
document.querySelectorAll('.number').forEach(val => {
    val.addEventListener('click', (e) => {
        if (mouth.textContent.length === 14) {
            alert('maximum capacity reached');
            return;
        }
        if (already === true) {
            pushed.push(e.target.id[1]);
            mouth.textContent = pushed.join('');
            array2.push(parseInt(e.target.id[1]));
            return;
        }
        pushed.push(e.target.id[1]);
        mouth.textContent = pushed.join('');
        array1.push(parseInt(e.target.id[1]));
    })
});

document.querySelectorAll('.operator').forEach(val => {
    val.addEventListener('click', (e) => {
        pushed.push(e.target.id[1]);
        mouth.textContent = pushed.join('');
        already = true;
        operator = e.target.id[2];
    })
})

document.getElementById('ce').onclick = function() {
    mouth.textContent = '';
    array1 = [];
    array2 = [];
    pushed = [];
    already = false;
}

//dmsa
document.getElementById('equal').onclick = function() {
    array1 = array1.join('');
    array1 = Number(array1);
    array2 = array2.join('');
    array2 = Number(array2);
    console.log(array1, array2);
    switch (operator) {
        case 'd':
            mouth.textContent = array1 / array2;
            return;
        case 'm':
            mouth.textContent = array1 * array2;
            return;
        case 's':
            mouth.textContent = array1 - array2;
            return;
        case 'a':
            mouth.textContent = array1 + array2;
            return;
    }
}
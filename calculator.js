let mouth = document.getElementById('mouth');
let operators = ['+', '-', '×', '÷'];
let status = true;

let pushed= [];
let array = [];
let r = /[+\-÷×]/;
let rarray = /[+\-/*]/;
let maxcap = false;

//if robot is sleeping, user can't type
document.querySelectorAll('.button').forEach(val => {
    val.onclick = function() {
        console.log(array);
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
        let marray = mouth.textContent.split('');
        let length = marray.length;
        if (length >= 35) {
            let div = document.createElement('div');
            div.textContent = 'Max capacity reached';
            div.classList.add('max');
            document.body.append(div);
            setTimeout(() => {
                div.remove();
            }, 4000);
            maxcap = true;
            return;
        }
    }

})

let operator = false;
document.querySelectorAll('.number').forEach(val => {
    val.addEventListener('click', (e) => {
        if (status === false) {
            return;
        }
        if (maxcap === true) {
            return;
        }
        let marray = mouth.textContent.split('');
        let bad = marray.length - 10;
        if (mouth.textContent.length === 10 && (marray.includes('+') === false || marray.includes('-') === false || marray.includes('÷') === false || marray.includes('×') === false)) {
            let div = document.createElement('div');
            div.textContent = 'Max capacity reached';
            div.classList.add('max');
            document.body.append(div);
            setTimeout(() => {
                div.remove();
            }, 4000);
            return;
        }
        if (r.test(marray[bad])) {
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
        array.push(e.target.id[1]);
        mouth.scrollLeft += 500;
    })
});

document.querySelectorAll('.operator').forEach(val => {
    val.addEventListener('click', (e) => {
        if (status === false) {
            return;
        }
        let marray = mouth.textContent.split('');
        let last = mouth.textContent.length - 1;
        if (r.test(marray[last])) {
            return;
        }
        pushed.push(e.target.id[1]);
        mouth.textContent = pushed.join('');
        array.push(e.target.id[2]);
        operator = true;
        mouth.scrollLeft += 500;
    })
})

document.getElementById('ce').onclick = function() {
    mouth.textContent = '';
    array = [];
    pushed = [];
    operator = false;
}

const checkLength = x => {
    x = x.toString().split('');
    if (x.length > 10) {
        x.splice(10);
        return x.join('');
    }
    return x.join('');
}


document.getElementById('equal').onclick = function() {
    if (rarray.test(array[array.length - 1])) {
        return;
    }
    if (typeof array === "object") {
        array = array.join('');
    }
    let answer = eval(array);
    answer = checkLength(answer);
    mouth.textContent = answer;
    array = answer.split('');
    pushed = [answer];
}

document.getElementById('sqrt').onclick = function() {
    let marray = mouth.textContent;
    marray = Number(marray);
    let answer = Math.sqrt(marray);
    answer = checkLength(answer);
    mouth.textContent = answer;
    array = answer.split('');
    pushed = [answer];
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

//erase
document.getElementById('nose').onclick = function() {
    let moutharray = mouth.textContent.split('');
    moutharray.pop();
    moutharray = moutharray.join('');
    mouth.textContent = moutharray;
    array.pop();
    pushed = [moutharray];
}
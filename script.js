const btnNext = document.querySelector('.btn-next');
const btnPlay = document.querySelector('.btn-playagain');
const Allopt = document.querySelectorAll('.opt');
const question = document.querySelector('.question h3');

let score = 0;
btnPlay.style.display = 'none';


function answer() {

    Allopt.forEach(opt => {
        opt.addEventListener('click', function (e) {

            Allopt.forEach(opt => opt.style.backgroundColor = '');
            if (e.target.classList.contains('true')) {
                e.target.style.backgroundColor = 'green';
                score++;
            } else {
                e.target.style.backgroundColor = 'red';
                Allopt.forEach(opt => {
                    if (opt.classList.contains('true')) {
                        opt.style.backgroundColor = 'green';
                    }
                })
            }
        })
    })
}
answer();

btnNext.addEventListener('click', function () {
    ShowQuestion2();
});




function ShowQuestion2() {
    Allopt.forEach(opt => opt.style.backgroundColor = '');
    question.innerHTML = '2. Bagian tumbuhan yang berfungsi untuk menyerap air dan mineral dari tanah adalah?';
    Allopt.forEach(opt => {
        opt.classList.remove('false', 'true');
        if (opt.classList.contains('opt-1')) {
            opt.innerHTML = 'Batang';
            opt.classList.add('false');
        } else if (opt.classList.contains('opt-2')) {
            opt.innerHTML = 'Akar';
            opt.classList.add('true');
        } else if (opt.classList.contains('opt-3')) {
            opt.innerHTML = 'Daun';
            opt.classList.add('false');
        } else {
            opt.innerHTML = 'Bunga';
            opt.classList.add('false');
        }
    });


    btnNext.addEventListener('click', function () {
        ShowQuestion3();
    });
};


function ShowQuestion3() {
    Allopt.forEach(opt => opt.style.backgroundColor = '');
    question.innerHTML = '3. Perubahan wujud benda dari padat menjadi cair disebut?';
    Allopt.forEach(opt => {
        opt.classList.remove('false', 'true');
        if (opt.classList.contains('opt-1')) {
            opt.innerHTML = 'Membeku';
            opt.classList.add('false');
        } else if (opt.classList.contains('opt-2')) {
            opt.innerHTML = 'Menguap';
            opt.classList.add('false');
        } else if (opt.classList.contains('opt-3')) {
            opt.innerHTML = 'Mencair';
            opt.classList.add('true');
        } else {
            opt.innerHTML = 'Mengembun';
            opt.classList.add('false');
        }
    });


    btnNext.addEventListener('click', function () {
        ShowQuestion4();
    });
};


function ShowQuestion4() {
    Allopt.forEach(opt => opt.style.backgroundColor = '');
    question.innerHTML = '4. Manakah berikut ini yang termasuk sumber energi terbarukan?';
    Allopt.forEach(opt => {
        opt.classList.remove('false', 'true');
        if (opt.classList.contains('opt-1')) {
            opt.innerHTML = 'Batu bara';
            opt.classList.add('false');
        } else if (opt.classList.contains('opt-2')) {
            opt.innerHTML = 'Minyak bumi';
            opt.classList.add('false');
        } else if (opt.classList.contains('opt-3')) {
            opt.innerHTML = 'Energi matahari';
            opt.classList.add('true');
        } else {
            opt.innerHTML = 'Gas alam';
            opt.classList.add('false');
        }
    });


    btnNext.addEventListener('click', function () {
        showPoin();
    });
};


function showPoin() {
    question.innerHTML = `Your scored ${score} out of 4!`;
    Allopt.forEach(opt => {
        opt.parentElement.remove();
    })
    btnNext.style.display ='none';
    btnPlay.style.display ='block';
}

btnPlay.addEventListener('click', function () {
    location.reload();
})


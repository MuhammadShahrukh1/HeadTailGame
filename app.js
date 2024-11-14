var firstUserName;
var secondUserName;
var coinValue;

document.getElementById('submit_btn').addEventListener('click', function () {
    event.preventDefault();
    firstUserName = document.getElementById('firstUser').value;
    secondUserName = document.getElementById('secondUser').value;
    if (firstUserName !== '') {
        if (secondUserName !== '') {
            document.getElementById('userName').innerText = firstUserName;
            document.getElementById('selection').classList.remove('hidden');
            document.getElementById('form').classList.add('hidden');
        }
        else {
            document.getElementById('secondUser').focus()
        }
    }
    else {
        document.getElementById('firstUser').focus();
    }
})

document.getElementById('head').addEventListener('click', function () {
    coinValue = 'head';
    swal.fire({
        html: `<p><span class='text-xl font-extrabold'>${coinValue.toUpperCase()}</span> is call from <span class='text-xl font-extrabold'>${firstUserName}</span>
        <br /><span class='text-lg font-bold'>Tail</span> is for <span class='text-lg font-extrabold'>${secondUserName}</span></p>`
    })
    document.getElementById('selection').classList.add('hidden');
    document.getElementById('coinToss').classList.remove('hidden');
})

document.getElementById('tail').addEventListener('click', function () {
    coinValue = 'tail';
    swal.fire({
        html: `<p><span class='text-xl font-extrabold'>${coinValue.toUpperCase()}</span> is call from <span class='text-xl font-extrabold'>${firstUserName}</span>
        <br /><span class='text-lg font-bold'>Head</span> is for <span class='text-lg font-extrabold'>${secondUserName}</span></p>`
    })
    document.getElementById('selection').classList.add('hidden');
    document.getElementById('coinToss').classList.remove('hidden');
})

document.getElementById('toss-button').addEventListener('click', coinTossFunction);
var coinFace = ['head', 'tail'];
var imagesUrl = ['./images/heads.png', '/images/tails.png']
function coinTossFunction() {
    var randomValue = Math.floor((Math.random() * 2) + 1);
    console.log(randomValue - 1);
    if (coinFace[randomValue - 1] === coinValue) {
        document.getElementById('coinImages').classList.add('flip');
        setTimeout(() => {
            document.getElementById('coinImages').src = imagesUrl[randomValue - 1];
            document.getElementById('coinImages').classList.remove('flip');
            swal.fire({
                title: `${coinFace[randomValue - 1].toUpperCase()}`,
                text: `${firstUserName}, You Have Won`,
                icon: 'success'
            });
            document.getElementById('selection').classList.add('hidden');
            document.getElementById('coinToss').classList.add('hidden');
            document.getElementById('form').classList.remove('hidden');
            document.getElementById('firstUser').value = '';
            document.getElementById('secondUser').value = ''
        }, 1500)
    }
    else {
        document.getElementById('coinImages').classList.add('flip');
        setTimeout(() => {
            document.getElementById('coinImages').src = imagesUrl[randomValue - 1];
            document.getElementById('coinImages').classList.remove('flip');
            swal.fire({
                title: `${coinFace[randomValue - 1].toUpperCase()}`,
                text: `${secondUserName}, You Have Won`,
                icon: 'success'
            });
            document.getElementById('selection').classList.add('hidden');
            document.getElementById('coinToss').classList.add('hidden');
            document.getElementById('form').classList.remove('hidden');
            document.getElementById('firstUser').value = '';
            document.getElementById('secondUser').value = '';
        }, 1500)
    }

}
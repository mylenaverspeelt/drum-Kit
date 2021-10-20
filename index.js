document.querySelector(".w").addEventListener('click', clicando)
document.querySelector(".a").addEventListener('click', clicando)
document.querySelector(".s").addEventListener('click', clicando)
document.querySelector(".d").addEventListener('click', clicando)
document.querySelector(".j").addEventListener('click', clicando)
document.querySelector(".k").addEventListener('click', clicando)
document.querySelector(".l").addEventListener('click', clicando)

function clicando(){
alert('oi');
}


//////////////////////////////

var qtdeBotoes = document.querySelectorAll('.drum').length;

for (var i=0; i<qtdeBotoes; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        alert('oi');
    });
}


//////////////

document.querySelectorAll(".drum").addEventListener('click', clicando);

function clicando(){
alert('oi');
}

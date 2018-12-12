
function resetaCalc(){
    var resetar = document.getElementById('reset').classList.add('esconder');

    var recebeEsconde = document.getElementById('recebe').classList.add('esconder');
    var calcAparece = document.getElementById('formulario').classList.remove('esconder');
    var calculaBotao = document.getElementById('submit').classList.remove('esconder');

    var j3 = document.getElementById('j3').classList.remove('esconder');
        console.log(j3);
        var j4 = document.getElementById('j4').classList.remove('esconder');
    
    calcAparece = document.getElementById('formulario').reset();

}
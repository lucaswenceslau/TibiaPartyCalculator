function calculaGastos(optHunt){
    var huntopt = document.getElementsByName('huntopt').value;

    
    var playerWaste1 = document.getElementById('p1').value;
    var playerWaste2 = document.getElementById('p2').value;
    var playerWaste3 = document.getElementById('p3').value;
    var playerWaste4 = document.getElementById('p4').value;

    playerWaste1 = parseFloat(playerWaste1);
    playerWaste2 = parseFloat(playerWaste2);
    playerWaste3 = parseFloat(playerWaste3);
    playerWaste4 = parseFloat(playerWaste4);

    var totalLoot = document.getElementById('loot').value;
    console.log(totalLoot);
    totalLoot = parseFloat(totalLoot);

     if(playerWaste1 > 0){
        totalWaste = playerWaste1;
     }
     if(playerWaste2 > 0){
        totalWaste += playerWaste2;
     }
     if(playerWaste3 > 0){
        totalWaste += playerWaste3;
     }
     if(playerWaste4 > 0){
        totalWaste += playerWaste4;
     }

    totalProfit = totalLoot - totalWaste;
    divisaoProfit = totalProfit / 4;

    
    divisaoP1 = playerWaste1 + divisaoProfit;
    divisaoP2 = playerWaste2 + divisaoProfit;
    divisaoP3 = playerWaste3 + divisaoProfit;
    divisaoP4 = playerWaste4 + divisaoProfit;
    
    var recebe = document.getElementById('recebe');

    recebe = recebe.classList.remove('esconder');
    var formulario = document.getElementById('formulario');
    formulario = formulario.classList.add('esconder');
        
    var recebeLoot = document.getElementById('recebeLoot').value = totalLoot;
    var recebeWasteTotal = document.getElementById('wasteTotal').value = totalWaste;
    var recebeTotalProfit = document.getElementById('profitWaste').value = totalProfit;
    var recebeDivisaoProfit = document.getElementById('profitEach').value = divisaoProfit;
    var p1recebe = document.getElementById('p1recebe').value = divisaoP1;
    var p2recebe = document.getElementById('p2recebe').value = divisaoP2;
    var p3recebe = document.getElementById('p3recebe').value = divisaoP3;
    var p4recebe = document.getElementById('p4recebe').value = divisaoP4;

var calculaBotao = document.getElementById('submit').classList.add('esconder');
var resetBotao = document.getElementById('reset').classList.remove('esconder');


}






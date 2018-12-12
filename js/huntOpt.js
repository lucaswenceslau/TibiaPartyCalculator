let playerWaste1, playerWaste2,playerWaste3,playerWaste4,totalLoot,totalWaste,divisaoProfit;

function optHunt(valor){
    valor = document.getElementById('huntopt').value;
    if(valor == '0'){ 

       var   totalWaste = playerWaste1 + playerWaste2;
       var  totalProfit = totalLoot - totalWaste;
       var divisaoProfit = totalProfit / 2;
        
        var divisaoP1 = playerWaste1 + divisaoProfit;
        var divisaoP2 = playerWaste1 + divisaoProfit;

        var j3 = document.getElementById('j3').classList.add('esconder');
        var j4 = document.getElementById('j4').classList.add('esconder');
    }
    


    else if(valor == '1'){ //3x
       // totalWaste = playerWaste1 + playerWaste2 + playerWaste3;
        totalProfit = totalLoot - totalWaste;
        divisaoProfit = totalProfit / 3;

        divisaoP1 = playerWaste1 - divisaoProfit;
        divisaoP2 = playerWaste2 - divisaoProfit;
        divisaoP3 = playerWaste3 - divisaoProfit;

        var j3 = document.getElementById('j4').classList.add('esconder');
        var j3 = document.getElementById('j3').classList.remove('esconder');

        
    }
    else if(valor =='2'){ //4x
        totalWaste = playerWaste1 + playerWaste2 + playerWaste3 + playerWaste4;
        totalProfit = totalLoot - totalWaste;
        divisaoProfit = totalProfit / 4;
        
        divisaoP1 = playerWaste1 + divisaoProfit;
        divisaoP2 = playerWaste2 + divisaoProfit;
        divisaoP3 = playerWaste3 + divisaoProfit;
        divisaoP4 = playerWaste4 + divisaoProfit;


        var j3 = document.getElementById('j3').classList.remove('esconder');
        console.log(j3);
        var j4 = document.getElementById('j4').classList.remove('esconder');
    }
    
    
}
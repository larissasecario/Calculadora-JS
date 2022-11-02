const btnNumeros = document.querySelectorAll(".numeros");
const btnOperadores = document.querySelectorAll(".operacao");
const btnEspeciais = document.querySelectorAll('.especiais');
const displayOperacao = document.querySelector('#display-operacao');
const displayEntrada = document.querySelector('#display-entrada');

let primeiroValor = 0;
let segundoValor = 0;
let igualdade = false;
let operador = '';
let total = 0;


btnNumeros.forEach(function(itemBtn){
    itemBtn.addEventListener('click',()=>{
    if(displayEntrada.value.length < 20){   
        if(igualdade == true){
            primeiroValor = 0;
            segundoValor = 0;
            operador = '';
            total = 0;
            displayEntrada.value = '';
            displayOperacao.value = '';
            igualdade = false;
        }

        if(displayEntrada.value == total){
            displayEntrada.value = '';
            displayEntrada.value+= itemBtn.value;
            
        }else{
            displayEntrada.value+= itemBtn.value;
           

        }

    }else{
        displayOperacao.value = String(total);
        displayEntrada.style.color = '#9c988c';

    }         
    });
});



btnOperadores.forEach(function(itemBtn){
    itemBtn.addEventListener('click', ()=>{
    if(displayEntrada.value != ""){
        adicionarCaracter(itemBtn.value);
    }
})});

btnEspeciais.forEach(function(itemBtn){
    itemBtn.addEventListener('click', ()=>{
    if(displayEntrada.value != ""){
        acoesEspeciais(itemBtn.value);
    }

})});





function acoesEspeciais(acoes){
    switch(acoes){
        case 'c':
            primeiroValor = 0;
            segundoValor = 0;
            operador = 0;
            total = 0;
            displayEntrada.value = '';
            displayOperacao.value = '';

            break;
        
        case '=':
            if(primeiroValor != 0){
                segundoValor = parseFloat(displayEntrada.value);
                calcularNumero(operador);
                displayEntrada.value = String(total);
                displayOperacao.value =  String(total) + '=';
                igualdade = true;
            }    
            break;


        case 'del':
            const ultimoCaracter = displayOperacao.value.slice(-1);
            if(ultimoCaracter != '='){
            const apagarCaracter = displayEntrada.value.slice(0,-1);
            displayEntrada.value = apagarCaracter;
            }

            break;
        
        case '+-':
            const primeiroCaracter = displayEntrada.value.charAt(0);
            if(primeiroCaracter == "-"){
                const semValor = displayEntrada.value.slice(1,displayEntrada.value.length);
                displayEntrada.value = semValor;
            }else{
                displayEntrada.value = "-" + displayEntrada.value;

            }
            break;
        
        case '.':
            if(displayEntrada.value != ""){
                displayEntrada.value = displayEntrada.value + ".";
            
            }
            break;


    }
}


function adicionarCaracter(caracter){
    
        if(igualdade == true){
            primeiroValor = parseFloat(displayEntrada.value);
            total = primeiroValor;
            operador = caracter;
            displayEntrada.value = String(total);
            displayOperacao.value = String(primeiroValor) + caracter;
            igualdade = false;

        }else{

            if(primeiroValor == ''){
                primeiroValor = parseFloat(displayEntrada.value);
                total = primeiroValor;
                operador = caracter;
                displayEntrada.value = String(total);
                displayOperacao.value = String(primeiroValor) + caracter;
        
            }else{
                segundoValor = parseFloat(displayEntrada.value);
                displayOperacao. value+= displayEntrada.value + caracter;
                calcularNumero(operador);
                primeiroValor = total;
                segundoValor = 0;
                operador = caracter;
        }
    }
}



function calcularNumero(operac)
{
    if(displayOperacao.value.length < 50){
        switch(operac){

            case '+':
                total = primeiroValor + segundoValor;
                break;
        
            case '-':
                total = primeiroValor - segundoValor;
                break;

            case '*':
                total = primeiroValor * segundoValor;
                break;   
            
            case '/':
                total = primeiroValor / segundoValor;
               
                break;
        }
        displayEntrada.value = String(total);   

    }
    else{
        displayOperacao.value = String(total);

    }
   
        
}













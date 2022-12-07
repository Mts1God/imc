function imc(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado').value

    if(nome !== '' && altura !== '' && peso !==''){
        resultado = peso / (altura * altura).toFixed(1)

    if(resultado < 18.5){
        valorIMC = 'ABAIXO DO PESO'
    }else if(resultado > 18.6 && resultado < 24.9){
        valorIMC = 'Peso ideal'
    }else if(resultado > 25.0 && resultado <  29.9){
        valorIMC = 'Levemente acima do peso'
    }else if(resultado > 30.0 && resultado <  34.9){
        valorIMC = 'Obsidade grau 1'
    }else if(resultado > 35.0 && resultado < 39.9){
        valorIMC = 'Obesidade gral 2 (severa)'
    }else if(resultado > 40){
        valorIMC = 'Obsidade 3 (mórbida'
    }


    } else{
        resultado.innerHTML = "Preencha todos os campos"
    }
}
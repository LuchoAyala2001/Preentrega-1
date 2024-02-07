function saltarlinea(){
    document.write("<br>");
    }
    
    function escribir(frase){
    
    document.write(frase);
    
    saltarlinea();
    }
    function calcularImc(peso,altura){
    
    
    
    return peso / (altura * altura);
    }
    
    nombreInformado= prompt("Informe su nombre");
    pesoInformado = prompt("Informe su peso");
    alturaInformada = prompt("Informe su altura");
    imcCalculado = calcularImc(pesoInformado,alturaInformada);
    
    if ( imcCalculado <19){
    escribir(nombreInformado + " su imc es de " + imcCalculado+ " se encuentra flaco");  
    }
    if (19<imcCalculado && imcCalculado<25){
    escribir(nombreInformado + " su imc es de " + imcCalculado+ " se encuentra en peso normal");  
    }
    if (25<imcCalculado && imcCalculado<30){
    escribir(nombreInformado + " su imc es de " + imcCalculado+ " se encuentra en sobrepeso");  
    }
    if (imcCalculado>30){
    escribir(nombreInformado + " su imc es de " + imcCalculado+ " se encuentra en obesidad");  
    }
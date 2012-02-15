arabic2roman = function(numero) {

  var retorno = "";

  while(numero >= 10){
    retorno += "X";
    numero -= 10
  }
    
  while(numero >= 9){
    retorno += "IX";
    numero -= 9;
  }

  while(numero >= 5){
    retorno += "V";
    numero -= 5;
  }
  
  while(numero >= 4){
    retorno += "IV";
    numero -= 4;
  }

  
  while(numero >= 1){
    retorno += "I";
    numero -= 1;
  }  
  //  retorno += replicar("I", numero);

  return retorno;
  
}


replicar = function(texto, vezes){
  var retorno = ""; 
  for(i = 0; i < vezes; i++ )
    retorno += texto;
  return retorno;
}
window.cipher = {
  encode: (offset,texto) => {
    /* Acá va tu código */
    let result1 = '';
    let numMayuscula='';
    let Espacio='';
    let numMINUSCULA='';
    let Num='';

    for(let i = 0; i< texto.length; i++){
    let toAscii = texto.charCodeAt(i);
    //console.log(toAscii);
    if (toAscii>=65 && toAscii<=90){
    numMayuscula = String.fromCharCode((toAscii- 65 + offset)%26 + 65);
    result1 += numMayuscula;
    
    }else if (toAscii === 32){
    toAscii = ((toAscii- 32 + offset)%1 + 32);
    Espacio  = String.fromCharCode(toAscii);
    result1 += Espacio;
    }else if (toAscii>=97 && toAscii<=122){
    numMINUSCULA = String.fromCharCode((toAscii- 97 + offset)%26 + 97);
    result1 += numMINUSCULA;
    }else if (toAscii>=48 && toAscii<=57){
    Num = String.fromCharCode((toAscii-48 + offset)%10 + 48);
    result1 += Num;
  
  }
}
//console.log(result1);
return result1;
  
},
decode: (offset, texto) => { 
  let result2 = '';
  let numMayuscula1='';
  let Espacio1='';
  let numMINUSCULA1='';
  let Num1='';

  for(let i = 0; i< texto.length; i++){
  let toAscii = texto.charCodeAt(i);
  //console.log(toAscii);
  if (toAscii>=65 && toAscii<=90){
  numMayuscula1 = String.fromCharCode((toAscii+ 65 - offset-26)%26 + 65);
  result2 += numMayuscula1;
  // espacios
  }else if (toAscii === 32){
  toAscii = ((toAscii+ 32 - offset-1)%1 + 32);
  Espacio1 = String.fromCharCode(toAscii);
  result2 += Espacio1;
 // mayusculas
  }else if (toAscii>=97 && toAscii<=122){
  numMINUSCULA1 = String.fromCharCode((toAscii+97 - offset-38)%26 + 97);
  result2 += numMINUSCULA1;
  // numeros
}else if (toAscii>=48 && toAscii<=57){
  Num1 = String.fromCharCode((toAscii-57 - offset)%10 + 57);
  result2 += Num1;
  }
}
//console.log(result2); rsultado
return result2;
}
};

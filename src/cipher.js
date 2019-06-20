window.cipher = {
  encode: (offset,ciEncode) => {
    /* Acá va tu código */
    let result1 = '';
    let numMayuscula='';
    let Espacio='';
    let numMINUSCULA='';
    
    for(let i = 0; i< ciEncode.length; i++){
    let toAscii = ciEncode.charCodeAt(i);
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
    
  }
}
//console.log(result1);
return result1;
  }
};

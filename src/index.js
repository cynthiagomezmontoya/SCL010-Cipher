/*Acá va tu código*/
let containerResult = document.getElementById('container');
  
document.getElementById("btnCifrar").addEventListener("click", () => {
//console.log("");
  let ciEncode= document.getElementById("mensaje").value;
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.encode(offset,ciEncode);

 
  });

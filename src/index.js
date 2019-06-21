/*Acá va tu código*/
let containerResult = document.getElementById('container');

document.getElementById("btnCifrar").addEventListener("click", () => {
  let ciEncode= document.getElementById("mensaje").value;
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.encode(offset,ciEncode);
  
  document.getElementById("btnDescifrar").addEventListener("click", () => {
    let deDecode = document.getElementById("mensaje").value;
    let offset = parseInt(document.getElementById("offset").value);
    containerResult.innerHTML = cipher.decode(offset,deDecode);
  
  });
  document.getElementById("btnBorrar").addEventListener("click", () => {
    document.getElementById("mensaje").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("container").value = "";
  
});
});
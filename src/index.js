//CIFRA
document.getElementById("enc").addEventListener("click", () => {
    let message = document.getElementById("user_text").value;
    let numOffset = parseInt(document.getElementById("offset").value);
    document.getElementById("result_text").value = cipher.encode(message, numOffset);
  });
    document.getElementById("clear").addEventListener('click', function(){
      location.reload();
  });
  
  //DESCIFRA
  document.getElementById("dec").addEventListener("click", () => {
    let numOffset = parseInt(document.getElementById("offset").value);
    let message = document.getElementById("user_text").value;
 
    document.getElementById("result_text").value = cipher.decode(message, numOffset);
  });
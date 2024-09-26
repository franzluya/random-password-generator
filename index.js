let passwordEl = document.getElementById("password-el")
let passwordEl2 = document.getElementById("password-el2")



const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generatePass() {
  let inputLength = document.getElementById("input-length").value
  if (inputLength == NaN || inputLength == "") {
    alert("Please enter length first")
  } else if (inputLength <= 6 || inputLength > 64) {
    alert("Choose between 6 and 64 characters length only")
  } else {
    passwordEl.textContent = ""
    passwordEl2.textContent = ""
  for (let i = 0; i < inputLength; i++) {
    passwordEl.textContent += characters[Math.floor(Math.random() * characters.length)]
    passwordEl2.textContent += characters[Math.floor(Math.random() * characters.length)]
  }
  }
}

//uvecacanje fonta
document.getElementById("fontPlus").addEventListener("click", function() {
document.body.style.fontSize = "larger";
});
  
//smanjivanje fonta
document.getElementById("fontMinus").addEventListener("click", function() {
document.body.style.fontSize = "smaller";
});
  
//svetla tema
document.getElementById("lightMode").addEventListener("click", function() {
document.body.classList.remove("dark-mode");
});
  
//tmna tema
document.getElementById("darkMode").addEventListener("click", function() {
document.body.classList.add("dark-mode");
});
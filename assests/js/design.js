alert("welcome to my website!")
console.log(document.getElementById("item4"));
var addcolor=document.getElementById("item4");
addcolor.onclick = function() {
    addcolor.classList.add("active");
  };
  var changetogreen=document.getElementById("changetogreen");
  var sourceproducts=document.getElementById("sourceproducts"); 
changetogreen.onclick=green;
  function green(){
sourceproducts.classList.toggle("greencolor");
  }
  var changetoblue=document.getElementById("changetoblue");
  changetoblue.onclick=blue;
  function blue(){
sourceproducts.classList.toggle("bluecolor");
  }
  var changetopink=document.getElementById("changetopink");
  changetopink.onclick=pink;
  function pink(){
sourceproducts.classList.toggle("pinkcolor");
  }


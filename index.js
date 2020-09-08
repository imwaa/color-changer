const hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btn = document.getElementById("color-changer");
const color = document.querySelector(".color");

var hexColor;

btn.addEventListener('click', function(){
    let hexcolor = "#";
    for( var i = 0; i< 6; i++){
        hexcolor += hex[getRandomInt()];
    }

    document.body.style.backgroundColor = hexcolor ;
    color.textContent = hexcolor;
});

function getRandomInt() {
    return Math.floor(Math.random() * hex.length);
  }
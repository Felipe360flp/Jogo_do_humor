const bt = document.querySelector("#bt");
const nav_name = document.querySelector("h2");
const classe = document.querySelector("#classe")
const info = document.querySelector("#info")

let image_list=["razor.png","jedistarship.png","txwing.png"];

image_Set=image_list[0];

document.getElementById("imagem").src = image_Set;

function troca(){
    if(bt.value=="1"){
        document.getElementById("imagem").src = image_list[1];
        nav_name.innerText="Jedi starship";
        classe.innerText="classe:"
        info.innerText = "Defender-Light Corvette";
        bt.value="2";
    } else if(bt.value=="2"){
        document.getElementById("imagem").src = image_list[2];
        nav_name.innerText="x-T70";
        classe.innerText="classe:"
        info.innerText = "Caça estelar";
        bt.value="0";
    }else{
        document.getElementById("imagem").src = image_list[0];
        nav_name.innerText="Razor crest"
        classe.innerText="classe:"
        info.innerText = "Canhoneira 1";
        bt.value="1";
    }
}

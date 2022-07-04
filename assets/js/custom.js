// document.getElementById('mydiv').style.display='block';
var nombres = ['marcos', 'celeste'];
var apellidos = ['soto', 'caceres'];
// Leer();
countdown();

function countdown(){

    var tabla = document.getElementById("datos-tabla");

    var now = new Date();
    var eventDate = new Date(2022, 11, 19, 18);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remainingTime = eventTime - currentTime;
    var s = Math.floor(remainingTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    h %= 24;
    m %= 60;
    s %= 60;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    document.getElementById("D").innerHTML = d+" ";
    document.getElementById("H").innerHTML = h+" ";
    document.getElementById("M").innerHTML = m+" ";
    document.getElementById("S").innerHTML = s+" ";
    setTimeout(countdown, 1000);

}

function mostrar(nombre, apellido){
    
    apellido = apellido.toLowerCase();
    nombre = nombre.toLowerCase();
    console.log(nombres.includes(nombre));
    console.log(nombre);
    if (nombres.includes(nombre)){
        if (apellidos.includes(apellido)){
            alert("Hola " + nombre + " " + apellido);
            document.getElementById('mydiv1').style.display='block';
            document.getElementById('mydiv2').style.display='block';
            document.getElementById('buscate').style.display='none';
        }
    }else{
        alert("No estas registrado");
    }

}

function Leer() {

    //leer datos from json file
    fetch("./assets/data/invitados.json")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++){
            nombres.push((data[i].nombre));
            apellidos.push(data[i].apellido);
        }
        });
    console.log(nombres);
    console.log(apellidos);
    // iterating over the nombres
    for (let index = 0; index < nombres.length; index++) {
        const element = nombres[index];
        console.log(element);
    }


}
   

    



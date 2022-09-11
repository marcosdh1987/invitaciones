
countdown();
// document.body.addEventListener("click", Buscar(nombre, apellido), {once:true})
flag = 0;

function countdown(){

    var tabla = document.getElementById("datos-tabla");

    var now = new Date();
    var eventDate = new Date("Nov 19, 2022 18:00:00");
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

function Buscar(nombre, apellido) {
    if (nombre == "" || apellido == ""){
        alert("Ingrese nombre y apellido");
    }else {
        
    apellido = apellido.toLowerCase();
    nombre = nombre.toLowerCase();
    Leer(nombre, apellido);
}

}

function Mostrar(){
    
    document.getElementById('mydiv1').style.display='block';
    document.getElementById('mydiv2').style.display='block';
    document.getElementById('buscate').style.display='none';

}

function Leer(nombre, apellido) {

    //leer datos from url
    // var url = "https://181.231.239.219:8000/"+nombre+"/"+apellido;

    // console.log(url);
    // fetch(url)
    // .then(response => response.json())
    // .then(data => data.result)
    // .then(result => {
    //     console.log(result);
    //     res = result;
    //     if (res == "true"){
    //         console.log("user found");
    //         alert("Hola " + nombre + " " + apellido);
    //         Mostrar();

    //     } else{
    //         console.log("user not found");
    //         alert(nombre+" no estas registrado, volve a intentarlo")};
    //     }
        
    // );

    var url = "https://raw.githubusercontent.com/marcosdh1987/test_lc_demo_001/main/datos.csv";



    fetch(url)
    .then(response => response.text())
    .then(data => {
        // console.log(data);
        res = data;
        //iterate over csv content
        var lines = res.split("\n");
        nombre = nombre.replace(/ /g, '');
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var parts = line.split(",");
            var nombre_csv = parts[0];
            var apellido_csv = parts[1];
            var nombre_csv = nombre_csv.toLowerCase();
            nombre_csv = nombre_csv.replace(/ /g, '');
            var apellido_csv = apellido_csv
            if (nombre_csv.toString() === nombre.toString()){
                console.log("name found");
                if (apellido_csv == apellido){
                console.log("lastname found");}
                flag = 1;
            }   
        }
        if (flag == 0){
            alert(nombre+" no estas registrado, volve a intentarlo")}
        else{
            alert("Hola " + nombre + " " + apellido);
            Mostrar();
        }

    });


    

}
   

    



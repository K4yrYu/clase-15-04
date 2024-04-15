

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

let btnENVIAR = document.getElementById("btnENVIAR");

btnENVIAR.addEventListener("click", function(e){
    e.preventDefault();
    
    nombre = nombre.value;
    apellido = apellido.value;

    req.push({
        nombre,
        apellido
    });

    console.log(`el nombre es: ${nombre}`);
    console.log(`el nombre es: ${apellido}`);
});

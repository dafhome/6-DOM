// 2- RELLENAR TICKET DE CINE
// Tienes una imagen de ticket de entrada para el cine, vacío, y unos inputs para rellenar: se te pide el nombre, fecha y la butaca (fila y asiento). Y al darle botón 'enviar', que se muestren en la imagen del ticket de entrada las opciones elegidas por el usuario. Esto implica maquetar el ticket mediante divs y CSS (puedes usar también una imagen de fondo para el papel).

function datosEntrada (){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let asiento = document.getElementById("asiento").value;
    let fila = document.getElementById("fila").value;
    console.log(nombre);
    console.log(apellidos);
    console.log(email);
    console.log(fecha);
    console.log(hora);
    console.log(asiento);
    console.log(fila);

    let radio;
    let sala;
    for (let i=1; i<17; i++ ){
        let r = "radio"+i;
        if (document.getElementById(r).checked == true){
            radio = r;
            sala = i;
        }
        }
    let pelicula = document.getElementById(radio).value;



    document.getElementById("cinema-ticket").style.opacity = "100%";
    document.getElementById("logo-cine").style.display = "block";
    document.getElementById("qr").style.display = "block";



    document.getElementById("pelicula").innerText = pelicula;
    document.getElementById("nombre-entrada").innerText = nombre + " " + apellidos;
    document.getElementById("mail-entrada").innerText = email;
    document.getElementById("fecha-hora").innerText = fecha + " " + hora;
    document.getElementById("asiento-entrada").innerText = "S1 F"+fila+" B"+asiento;
    document.getElementById("pelicula2").innerText = pelicula;
    document.getElementById("fecha-hora2").innerText = fecha + " " + hora;
    document.getElementById("asiento-entrada2").innerText = "S"+sala+" F"+fila+" B"+asiento;

}
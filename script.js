const banderas = [
    "img/img.jpg", "img/img1.jpg", "img/img2.webp", "img/img3.jpg", "img/img4.jpg", 
    "img/img5.jfif", "img/img6.avif", "img/img7.jfif", "img/img8.jpg", "img/img9.avif",
    "img/img10.jpg", "img/img11.jpg", "img/img12.jpg", "img/img13.jpg", "img/img14.jpeg",
    "img/img15.jpg", "img/img16.jpg", "img/img17.jfif", "img/img18.jpg", "img/img19.jpg", 
    "img/img20.jpg"
];

const correcta = [2, 1, 1, 3, 2, 1, 2, 3, 1, 2, 3, 1, 2, 1, 3, 2, 1, 3, 2, 1]; 

const preguntas = [
    ["¿En qué fecha se celebra el Día de la Fundación del Estado Plurinacional de Bolivia?", "6 de agosto", "22 de enero", "14 de septiembre"],
    ["¿En qué fecha se celebra el Día del Trabajo en Bolivia?", "1 de mayo", "16 de julio", "6 de diciembre"],
    ["¿Qué pintor italiano del Renacimiento es conocido por obras maestras como de la última cena?", "Leonardo da Vinci", "Miguel Ángel", "Leonardo DiCaprio"],
    ["¿Qué tipo de software permite realizar tareas específicas, como editar texto, navegar por internet o jugar videojuegos?", "Software de sistema", "Software libre", "software aplicativo"],
    ["¿Cuál es la ciencia que estudia la vida?", "Química", "Biología", "Bioquímica"],
    ["¿Cuál es la capital de Francia?", "París", "Londres", "Berlín"],
    ["¿Qué planeta es conocido como el planeta rojo?", "Venus", "Marte", "Júpiter"],
    ["¿Quién escribió 'Cien años de soledad'?", "Mario Vargas Llosa", "Julio Cortázar", "Gabriel García Márquez"],
    ["¿Cuál es el río más largo del mundo?", "Nilo", "Amazonas", "Yangtsé"],
    ["¿Qué instrumento musical tiene teclas blancas y negras?", "Violín", "Piano", "Guitarra"],
    ["¿Quién es el autor de la teoría de la relatividad?", "Isaac Newton", "Galileo Galilei", "Albert Einstein"],
    ["¿En qué continente se encuentra Egipto?", "África", "Asia", "Europa"],
    ["¿Qué gas es esencial para la respiración humana?", "Oxígeno", "Dióxido de Carbono", "Nitrógeno"],
    ["¿Quién pintó la Mona Lisa?", "Leonardo da Vinci", " Miguel Ánge", "Vincent van Gogh"],
    ["¿Qué número es considerado como el número pi?", "3.14", "2.71", "1.41"],
    ["¿Cuál es el país más grande del mundo?", "Canadá", "Rusia", "China"],
    ["¿Quién es conocido como el padre de la medicina?", "Hipócrates", "Galeno", "Aristóteles"],
    ["¿Cuál es el océano más grande?", "Atlántico", "Índico", "Pacífico"],
    ["¿Qué lenguaje de programación es conocido por su uso en desarrollo web?", "Python", "JavaScript", "C++"],
    ["¿Quién es el autor de 'Don Quijote de la Mancha'?", "Miguel de Cervantes", "William Shakespeare", "Jorge Luis Borges"]
];

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();
}

function cargarPregunta() {
    if (preguntas.length <= posActual) {
        terminarJuego();
    } else {
        limpiarOpciones();
        document.getElementById("imgBandera").src = banderas[posActual];
        document.getElementById("preguntaActual").innerHTML = preguntas[posActual][0];
        document.getElementById("n1").innerHTML = preguntas[posActual][1];
        document.getElementById("n2").innerHTML = preguntas[posActual][2];
        document.getElementById("n3").innerHTML = preguntas[posActual][3];
    }
}

function limpiarOpciones() {
    document.getElementById("n1").className = "nombre";
    document.getElementById("l1").className = "letra";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l2").className = "letra";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida === correcta[posActual]) {
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarPregunta, 1000);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}

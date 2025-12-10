// ===========================
// BASE DE DATOS DE CITAS
// ===========================
const citas = [
    // --------------------- DEFREDS ---------------------
    {texto: "Por el día sobrevivía a base de amigos y poesía. Pero cada noche era una agonía. Deseaba que no llegara nunca, para no tener que tumbarme y pensar en su melena.", autor: "Defreds", obra: "Casi sin querer", temas: ["soledad","dependencia emocional","nostalgia","amor","amistad","tristeza","miedo","noche"] },
    {texto: "Como llorar sin ganas. Como follar sin ansias. Como la vida sin ti.", autor: "Defreds", obra: "Casi sin querer",temas: ["tristeza", "vacío", "desamor", "rutina","deseo frustrado","deseo"]},
    {texto: "Te odio, te quiero.", autor: "Defreds", obra: "Casi sin querer",temas: ["amor tóxico","amor", "odio", "confusión", "dualidad"},
    {texto: "Esa persona que da igual el tiempo que pase, da igual dónde vivas y con quién. Esa que recuerdas en cualquier lugar inesperado. Y que solo con recordarla eres capaz de temblar.", autor: "Defreds", obra: "Casi sin querer",temas: ["]},
    {texto: "Habla mucho. Justo lo que calla es lo que no se puede saber.", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Si te mirara a los ojos una vez más, no me atrevería a decir nada, quizá te abrazaría. O lloraría, no lo sé.", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Que, aunque tú no lo sabías, yo en el fondo te esperaba.", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Pero he de confesarte que nunca he disfrutado tanto como entre tus brazos: ese fue mi viaje preferido.", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Ver que ese desconocido, en algún momento, fue tu mayor conocido. Y sobretodo, saber que dos personas que se recuerdan cuando ni hablan son capaces de todo.", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Y aunque no lo creas, sus silencios dicen más que el resto del mundo a gritos.", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Respiro. Pero ya no vivo...", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Algunas veces recuerda aquello que pudo ser y dejó pasar por miedo.", autor: "Defreds", obra: "Casi sin querer"},
    {texto: "Y ahora quiero un billete para huir de recuerdos. Y sale demasiado caro. Dicen que está agotado.", autor: "Defreds", obra: "Casi sin querer"},

    // --------------------- GABRIEL GARCÍA MÁRQUEZ ---------------------
    {texto: "No hay un anciano que olvide dónde escondió su tesoro.", autor: "Gabriel García Márquez", obra: "Memoria de mis putas tristes"},
    {texto: "La fuerza invencible que ha impulsado al mundo no son los amores felices sino los contrariados.", autor: "Gabriel García Márquez", obra: "Memoria de mis putas tristes"},
    {texto: "El sexo es el consuelo que uno tiene cuando no le alcanza el amor.", autor: "Gabriel García Márquez", obra: "Memoria de mis putas tristes"},
    {texto: "Los celos saben más que la verdad.", autor: "Gabriel García Márquez", obra: "Memoria de mis putas tristes"},
    {texto: "Es imposible no terminar siendo como los otros creen que uno es.", autor: "Gabriel García Márquez", obra: "Memoria de mis putas tristes"},
    {texto: "No hay peor desgracia que morir solo.", autor: "Gabriel García Márquez", obra: "Memoria de mis putas tristes"},

    // Citas duplicadas para Cicerón y Julio César sin obra
    {texto: "No hay un anciano que olvide dónde escondió su tesoro.", autor: "Cicerón", obra: ""},
    {texto: "Es imposible no terminar siendo como los otros creen que uno es.", autor: "Julio César", obra: ""},

    // --------------------- HEMINGWAY ---------------------
    {texto: "Pensó que aburrimiento era una palabra que ningún campesino del mundo usaría en ninguna otra lengua. Y sin embargo, es la palabra más corriente en boca de un español de cualquier clase.", autor: "Ernest Hemingway", obra: "Por quién doblan las campanas"},
    {texto: "Quiero lo que tú quieras. Quiero hacerlo todo, y si lo hacemos todo, quizá sea como si lo otro no hubiese ocurrido.", autor: "Ernest Hemingway", obra: "Por quién doblan las campanas"},
    {texto: "La llegada de la noche le hacía sentirse siempre más solo, y aquella noche se sentía tan solo, que se había hecho dentro de él un vacío como si fuera de hambre.", autor: "Ernest Hemingway", obra: "Por quién doblan las campanas"},
    {texto: "Pero un hombre inteligente se ve obligado a emborracharse algunas veces para poder pasar el tiempo con los imbéciles.", autor: "Ernest Hemingway", obra: "Por quién doblan las campanas"}
];

/* =======================
     CITA DEL DÍA ROTATIVA
   ======================= */

// Mezcla aleatoriamente un array (algoritmo Fisher–Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Devuelve la cita del día
function getQuoteOfTheDay() {
    const today = new Date().toDateString();

    // Si ya se mostró una cita hoy, úsala
    const storedDate = localStorage.getItem("quoteDate");
    const storedQuote = localStorage.getItem("quoteOfTheDay");

    if (storedDate === today && storedQuote) {
        return JSON.parse(storedQuote);
    }

    // Obtener cita aleatoria sin repetir demasiado
    if (!window.quoteQueue || window.quoteQueue.length === 0) {
        // Clonar todas las citas y mezclarlas
        window.quoteQueue = shuffle([...citas]);
    }

    // Elegir la siguiente cita de la cola
    const nextQuote = window.quoteQueue.pop();

    // Guardarla para hoy
    localStorage.setItem("quoteDate", today);
    localStorage.setItem("quoteOfTheDay", JSON.stringify(nextQuote));

    return nextQuote;
}

// Mostrar en pantalla
function renderQuoteOfTheDay() {
    const quote = getQuoteOfTheDay();
    const container = document.getElementById("quote-of-day");

    container.innerHTML = `
        <h2 class="titulo-cita-dia">CITA DEL DÍA</h2>
        <p class="texto-cita">"${quote.text}"</p>
        <p class="autor-cita">— ${quote.author} (${quote.book})</p>
    `;
}

document.addEventListener("DOMContentLoaded", renderQuoteOfTheDay);


// ===========================
// FUNCIONES PRINCIPALES
// ===========================

// Mostrar resultados
function mostrarResultados(lista, titulo = "") {
    const cont = document.getElementById("contenido");
    cont.innerHTML = titulo ? `<h2>${titulo}</h2>` : "";

    if(lista.length === 0){
        cont.innerHTML += "<p>No se encontraron resultados.</p>";
        return;
    }

    lista.forEach(c => {
        cont.innerHTML += `
            <div class="cita">
                "${c.texto}"<br>
                <small>${c.autor}${c.obra ? ' — ' + c.obra : ''}</small>
            </div>
        `;
    });
}

// ===========================
// BUSCADOR LIVE
// ===========================
function buscar() {
    const q = document.getElementById("buscador").value.toLowerCase();

    if(q === ""){
        document.getElementById("contenido").innerHTML = "";
        return;
    }

    const resultados = citas.filter(c => 
        c.texto.toLowerCase().includes(q) || 
        c.autor.toLowerCase().includes(q) ||
        c.obra.toLowerCase().includes(q)
    );

    mostrarResultados(resultados, `Resultados para "${q}"`);
}

// ===========================
// AUTORES Y OBRAS
// ===========================
function mostrarAutores() {
    const autores = [...new Set(citas.map(c => c.autor))].sort();
    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Autores</h2>";

    autores.forEach(a => {
        cont.innerHTML += `<p class="link" onclick="verAutor('${a}')">${a}</p>`;
    });
}

function verAutor(nombre) {
    const resultados = citas.filter(c => c.autor === nombre);
    mostrarResultados(resultados, `Citas de ${nombre}`);
}

function mostrarObras() {
    const obras = [...new Set(citas.map(c => c.obra))].filter(o => o !== "").sort();
    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Libros</h2>";

    obras.forEach(o => {
        cont.innerHTML += `<p class="link" onclick="verObra('${o}')">${o}</p>`;
    });
}

function verObra(titulo) {
    const resultados = citas.filter(c => c.obra === titulo);
    mostrarResultados(resultados, `Citas de "${titulo}"`);
}

// ===========================
// INICIO
// ===========================
function mostrarInicio() {
    citaDelDia();
    document.getElementById("contenido").innerHTML = "";
}
// Función para mostrar cita del día
function citaDelDia() {
    const hoy = new Date().getDate();
    const index = hoy % citas.length;
    const cita = citas[index];

    document.getElementById("cita-texto").innerText = `"${cita.texto}"`;
    document.getElementById("cita-autor").innerText = `— ${cita.autor}${cita.obra ? ', ' + cita.obra : ''}`;

    mostrarInicioDestacados();
}

// ================= BUSCADOR =================
function buscar() {
    const q = document.getElementById("buscador").value.toLowerCase();
    buscarGenerico(q);
}

function buscarHeader() {
    const q = document.getElementById("buscador-header").value.toLowerCase();
    buscarGenerico(q);
}

function buscarGenerico(q) {
    const cont = document.getElementById("contenido");
    if(q === ""){
        cont.innerHTML = "";
        return;
    }
    const resultados = citas.filter(c => 
        c.texto.toLowerCase().includes(q) || 
        c.autor.toLowerCase().includes(q) ||
        c.obra.toLowerCase().includes(q)
    );
    mostrarResultados(resultados, `Resultados para "${q}"`);
}

// ================= MOSTRAR RESULTADOS =================
function mostrarResultados(lista, titulo = "") {
    const cont = document.getElementById("contenido");
    cont.innerHTML = titulo ? `<h2>${titulo}</h2>` : "";

    if(lista.length === 0){
        cont.innerHTML += "<p>No se encontraron resultados.</p>";
        return;
    }

    lista.forEach(c => {
        cont.innerHTML += `
            <div class="cita">
                "${c.texto}"<br>
                <small>${c.autor}${c.obra ? ' — ' + c.obra : ''}</small>
            </div>
        `;
    });
}

// ================= AUTORES Y LIBROS =================
function mostrarAutores() {
    const autores = [...new Set(citas.map(c => c.autor))].sort();
    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Autores</h2>";
    autores.forEach(a => {
        cont.innerHTML += `<p class="link" onclick="verAutor('${a}')">${a}</p>`;
    });
}

function verAutor(nombre) {
    const resultados = citas.filter(c => c.autor === nombre);
    mostrarResultados(resultados, `Citas de ${nombre}`);
}

function mostrarObras() {
    const obras = [...new Set(citas.map(c => c.obra))].filter(o => o !== "").sort();
    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Libros</h2>";
    obras.forEach(o => {
        cont.innerHTML += `<p class="link" onclick="verObra('${o}')">${o}</p>`;
    });
}

function verObra(titulo) {
    const resultados = citas.filter(c => c.obra === titulo);
    mostrarResultados(resultados, `Citas de "${titulo}"`);
}

// ================= INICIO =================
function mostrarInicio() {
    citaDelDia();
    document.getElementById("contenido").innerHTML = "";
    mostrarInicioDestacados();
}

// ================= DESTACADOS =================
function mostrarInicioDestacados() {
    const cont = document.getElementById("contenido");
    
    // Simular visitas: para demo, ordenamos por autor y obra al azar
    const autoresPorVisitas = [...new Set(citas.map(c => c.autor))].slice(0,5);
    const obrasPorVisitas = [...new Set(citas.map(c => c.obra))].filter(o => o!=="").slice(0,5);

    let html = `<section class="section-destacados">
        <h3>Libros Destacados</h3>
        <div class="destacados-list">`;
    obrasPorVisitas.forEach(o => {
        html += `<div onclick="verObra('${o}')">${o}</div>`;
    });
    html += `</div>`;

    html += `<h3>Personajes Destacados</h3>
        <div class="destacados-list">`;
    autoresPorVisitas.forEach(a => {
        html += `<div onclick="verAutor('${a}')">${a}</div>`;
    });
    html += `</div></section>`;

    cont.innerHTML = html;
}

// ================= INICIO AUTOMÁTICO =================
citaDelDia();






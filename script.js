// ===========================
// BASE DE DATOS DE CITAS
// ===========================
const citas = [
    // --------------------- DEFREDS ---------------------
    {
        texto: "Por el día sobrevivía a base de amigos y poesía. Pero cada noche era una agonía. Deseaba que no llegara nunca, para no tener que tumbarme y pensar en su melena.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Soledad","Tristeza","Miedo","Noche","Amistad","Amor","Deseo","Nostalgia","Recuerdo","Desesperación","Dualidad","Dolor"]
    },
    {
        texto: "Como llorar sin ganas. Como follar sin ansias. Como la vida sin ti.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Tristeza","Desamor","Deseo","Sexo","Amor perdido","Desesperación","Dolor"]
    },
    {
        texto: "Te odio, te quiero.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Amor","Odio","Dualidad","Conflicto","Desamor","Toxicidad","Amor imposible","Pasión"]
    },
    {
        texto: "Esa persona que da igual el tiempo que pase, da igual dónde vivas y con quién. Esa que recuerdas en cualquier lugar inesperado. Y que solo con recordarla eres capaz de temblar.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Amor","Desamor","Nostalgia","Recuerdo","Destino","Tiempo","Amor perdido","Deseo"]
    },
    {
        texto: "Habla mucho. Justo lo que calla es lo que no se puede saber.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Silencio","Secreto","Verdad","Identidad"]
    },
    {
        texto: "Si te mirara a los ojos una vez más, no me atrevería a decir nada, quizá te abrazaría. O lloraría, no lo sé.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Amor","Tristeza","Vulnerabilidad","Deseo","Amistad"]
    },
    {
        texto: "Que, aunque tú no lo sabías, yo en el fondo te esperaba.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Amor","Esperanza","Destino","Amor imposible"]
    },
    {
        texto: "Pero he de confesarte que nunca he disfrutado tanto como entre tus brazos: ese fue mi viaje preferido.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Amor","Pasión","Erotismo","Deseo","Placer"]
    },
    {
        texto: "Ver que ese desconocido, en algún momento, fue tu mayor conocido. Y sobretodo, saber que dos personas que se recuerdan cuando ni hablan son capaces de todo.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Recuerdo","Nostalgia","Amor","Destino","Amistad"]
    },
    {
        texto: "Y aunque no lo creas, sus silencios dicen más que el resto del mundo a gritos.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Silencio","Verdad","Identidad"]
    },
    {
        texto: "Respiro. Pero ya no vivo...",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Tristeza","Desamor","Dolor","Desesperación","Soledad","Muerte"]
    },
    {
        texto: "Algunas veces recuerda aquello que pudo ser y dejó pasar por miedo.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Miedo","Nostalgia","Recuerdo","Pasado","Desilusión"]
    },
    {
        texto: "Y ahora quiero un billete para huir de recuerdos. Y sale demasiado caro. Dicen que está agotado.",
        autor: "Defreds",
        obra: "Casi sin querer",
        temas: ["Deseo","Recuerdo","Dolor","Desesperación","Soledad","Tristeza"]
    },

    // --------------------- GABRIEL GARCÍA MÁRQUEZ ---------------------
    {
        texto: "No hay un anciano que olvide dónde escondió su tesoro.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes",
        temas: ["Memoria","Vejez","Recuerdo","Tiempo","Vida"]
    },
    {
        texto: "La fuerza invencible que ha impulsado al mundo no son los amores felices sino los contrariados.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes",
        temas: ["Amor","Desamor","Pasión","Amor imposible","Dualidad","Deseo"]
    },
    {
        texto: "El sexo es el consuelo que uno tiene cuando no le alcanza el amor.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes",
        temas: ["Amor","Sexo","Soledad","Deseo","Erotismo","Placer"]
    },
    {
        texto: "Los celos saben más que la verdad.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes",
        temas: ["Celos","Verdad","Odio","Envidia","Desilusión"]
    },
    {
        texto: "Es imposible no terminar siendo como los otros creen que uno es.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes",
        temas: ["Identidad","Cambio","Transformación"]
    },
    {
        texto: "No hay peor desgracia que morir solo.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes",
        temas: ["Soledad","Muerte","Tristeza","Desesperación","Dolor"]
    },

    // --------------------- HEMINGWAY ---------------------
    {
        texto: "Pensó que aburrimiento era una palabra que ningún campesino del mundo usaría en ninguna otra lengua. Y sin embargo, es la palabra más corriente en boca de un español de cualquier clase.",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas",
        temas: ["Conocimiento","Existencia","Vida","Realidad"]
    },
    {
        texto: "Quiero lo que tú quieras. Quiero hacerlo todo, y si lo hacemos todo, quizá sea como si lo otro no hubiese ocurrido.",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas",
        temas: ["Amor","Deseo","Amor imposible","Pasión","Dualidad"]
    },
    {
        texto: "La llegada de la noche le hacía sentirse siempre más solo, y aquella noche se sentía tan solo, que se había hecho dentro de él un vacío como si fuera de hambre.",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas",
        temas: ["Soledad","Noche","Tristeza","Desesperación","Muerte"]
    },
    {
        texto: "Pero un hombre inteligente se ve obligado a emborracharse algunas veces para poder pasar el tiempo con los imbéciles.",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas",
        temas: ["Humor","Ironía","Sarcasmo","Desilusión","Alcohol","Adicción"]
    },
    {
        texto: "No hay un anciano que olvide dónde escondió su tesoro.",
        autor: "Cicerón",
        obra: "",
        temas: ["Vejez","Recuerdo","Memoria","Tiempo","Sabiduría"]
    },
    {
        texto: "Es imposible no terminar siendo como los otros creen que uno es.",
        autor: "Julio César",
        obra: "",
        temas: ["Identidad","Cambio","Transformación","Percepción","Sociedad"]
];

// ===========================
// UTILIDADES
// ===========================

// Mezclar array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===========================
// CITA DEL DÍA
// ===========================
function getQuoteOfTheDay() {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("quoteDate");
    const storedQuote = localStorage.getItem("quoteOfTheDay");

    if (storedDate === today && storedQuote) {
        return JSON.parse(storedQuote);
    }

    if (!window.quoteQueue || window.quoteQueue.length === 0) {
        window.quoteQueue = shuffle([...citas]);
    }

    let nextQuote = window.quoteQueue.pop();

    if (storedQuote) {
        const prev = JSON.parse(storedQuote);
        if (prev.autor === nextQuote.autor && window.quoteQueue.length > 0) {
            nextQuote = window.quoteQueue.pop();
        }
    }

    localStorage.setItem("quoteDate", today);
    localStorage.setItem("quoteOfTheDay", JSON.stringify(nextQuote));
    return nextQuote;
}

function renderQuoteOfTheDay() {
    const quote = getQuoteOfTheDay();
    document.getElementById("cita-texto").innerText = `"${quote.texto}"`;
    document.getElementById("cita-autor").innerText =
        `— ${quote.autor}${quote.obra ? ", " + quote.obra : ""}`;
}

// ===========================
// MOSTRAR RESULTADOS
// ===========================
function mostrarResultados(lista, titulo = "") {
    const cont = document.getElementById("contenido");
    cont.innerHTML = titulo ? `<h2>${titulo}</h2>` : "";

    if (lista.length === 0) {
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
// BUSCADOR
// ===========================
function buscarGenerico(q) {
    const cont = document.getElementById("contenido");
    if (q === "") {
        cont.innerHTML = "";
        return;
    }

    const resultados = citas.filter(c =>
        c.texto.toLowerCase().includes(q) ||
        c.autor.toLowerCase().includes(q) ||
        c.obra.toLowerCase().includes(q) ||
        (c.temas && c.temas.some(t => t.toLowerCase().includes(q)))
    );

    mostrarResultados(resultados, `Resultados para "${q}"`);
}

function buscar() {
    const q = document.getElementById("buscador").value.toLowerCase();
    buscarGenerico(q);
}

function buscarHeader() {
    const q = document.getElementById("buscador-header").value.toLowerCase();
    buscarGenerico(q);
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
// TEMAS
// ===========================
function mostrarTemas() {
    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Temas</h2>";
    const temas = [...new Set(citas.flatMap(c => c.temas || []))].sort();
    temas.forEach(t => {
        cont.innerHTML += `<p class="link" onclick="verTema('${t}')">${t}</p>`;
    });
}

function verTema(nombreTema) {
    const resultados = citas.filter(c => c.temas && c.temas.includes(nombreTema));
    mostrarResultados(resultados, `Citas del tema "${nombreTema}"`);
}

// ===========================
// INICIO Y DESTACADOS
// ===========================
function mostrarInicio() {
    renderQuoteOfTheDay();
    mostrarInicioDestacados();
}

function mostrarInicioDestacados() {
    const cont = document.getElementById("contenido");

    const autoresPorVisitas = [...new Set(citas.map(c => c.autor))].slice(0,5);
    const obrasPorVisitas = [...new Set(citas.map(c => c.obra))].filter(o => o !== "").slice(0,5);
    const temasPorFrecuencia = [...new Set(citas.flatMap(c => c.temas || []))].slice(0,5);

    let html = `<section class="section-destacados">
        <h3>Libros Destacados</h3>
        <div class="destacados-list">`;
    obrasPorVisitas.forEach(o => html += `<div onclick="verObra('${o}')">${o}</div>`);
    html += `</div>`;

    html += `<h3>Personajes Destacados</h3>
        <div class="destacados-list">`;
    autoresPorVisitas.forEach(a => html += `<div onclick="verAutor('${a}')">${a}</div>`);
    html += `</div>`;

    html += `<h3>Temas Populares</h3>
        <div class="destacados-list">`;
    temasPorFrecuencia.forEach(t => html += `<div onclick="verTema('${t}')">${t}</div>`);
    html += `</div></section>`;

    cont.innerHTML = html;
}

// ===========================
// INICIO AUTOMÁTICO
// ===========================
document.addEventListener("DOMContentLoaded", mostrarInicio);

















// ===========================
// BASE DE DATOS DE CITAS
// ===========================
// ===========================
// BASE DE DATOS DE CITAS CON TEMAS REVISADOS
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
        temas: ["Amor","Tristeza","Deseo","Amistad"]
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
        texto: "No hay un anciano que olvide dónde escondió su tesoro. (Atribuida a Cicerón)",
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
        texto: "Es imposible no terminar siendo como los otros creen que uno es. (Atribuida a Julio César)",
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

    // --------------------- Cicerón / Julio César ---------------------
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
     // --------------------- JAIME PEÑAFIEL (Alto y claro) ---------------------
    {
        texto: "Sería mala señal que el recuerdo de aquel gozo ya no sea gozo, mientras que el recuerdo del dolor que le produce si sea dolo porque, cuando el desamor se ha apoderado de la vida de un matrimonio los recuerdos no sirven para provocar reconciliaciones, sino que son vientos que levantan tempestades en el corazón.",
        autor: "Jaime Peñafiel",
        obra: "Alto y claro",
        temas: ["Desamor","Dolor","Memoria","Recuerdo","Tristeza","Amor perdido"]
    },
    {
        texto: "No hay duda de que la convivencia aporta mucha vulgaridad a la vida matrimonial de un hombre y una mujer, y mucho más si se trata de una relación mal avenida.",
        autor: "Jaime Peñafiel",
        obra: "Alto y claro",
        temas: ["Desamor","Tristeza","Conflicto","Sociedad","Vida"]
    },
    {
        texto: "El cumplir con el deber no ha sido para mí nunca un sacrificio sino una íntima satisfacción. Hay que sacrificarse por el bien de los demás y no solo de boquilla. (Don Juan de Borbón)",
        autor: "Jaime Peñafiel",
        obra: "Alto y claro",
        temas: ["Sacrificio","Vida","Cambio","Conocimiento"]
    },
    {
        texto: "No es lo mismo estar dormido que estar durmiendo, como tampoco estar jodido que estar jodiendo. (Atribuida a Camilo José Cela)",
        autor: "Jaime Peñafiel",
        obra: "Alto y claro",
        temas: ["Dualidad","Ironía","Humor"]
    },
    {
        texto: "Nadie ama al mensajero que trae malas noticias. (Sófocles)",
        autor: "Jaime Peñafiel",
        obra: "Alto y claro",
        temas: ["Desilusión","Conflicto","Dolor"]
    },
    {
        texto: "Si volviera a vivir, haría lo mismo. No porque piense que todo lo he hecho bien, sino porque estoy convencida de que volvería a cometer incluso las mismas equivocaciones. (Isabel Preysler)",
        autor: "Jaime Peñafiel",
        obra: "Alto y claro",
        temas: ["Vida","Cambio","Dualidad","Desilusión"]
    },
    {
        texto: "Las palabras no están hechas para encubrir la verdad, sino para exponerla. (Atribuida a José Martí)",
        autor: "Jaime Peñafiel",
        obra: "Alto y claro",
        temas: ["Verdad","Conocimiento","Comunicación"]
    },

    // --------------------- AUTORES ORIGINALES ---------------------
    {
        texto: "El cumplir con el deber no ha sido para mí nunca un sacrificio sino una íntima satisfacción. Hay que sacrificarse por el bien de los demás y no solo de boquilla.",
        autor: "Don Juan de Borbón",
        obra: "",
        temas: ["Sacrificio","Vida","Cambio","Conocimiento"]
    },
    {
        texto: "No es lo mismo estar dormido que estar durmiendo, como tampoco estar jodido que estar jodiendo.",
        autor: "Camilo José Cela",
        obra: "",
        temas: ["Dualidad","Ironía","Humor"]
    },
    {
        texto: "Nadie ama al mensajero que trae malas noticias.",
        autor: "Sófocles",
        obra: "",
        temas: ["Desilusión","Conflicto","Dolor"]
    },
    {
        texto: "Si volviera a vivir, haría lo mismo. No porque piense que todo lo he hecho bien, sino porque estoy convencida de que volvería a cometer incluso las mismas equivocaciones.",
        autor: "Isabel Preysler",
        obra: "",
        temas: ["Vida","Cambio","Dualidad","Desilusión"]
    },
    {
        texto: "Las palabras no están hechas para encubrir la verdad, sino para exponerla.",
        autor: "José Martí",
        obra: "",
        temas: ["Verdad","Conocimiento","Comunicación"]
    },
    // --------------------- MIGUEL DELIBES ---------------------
{
    texto: "El vicio o la virtud de leer dependían del primer libro. Aquel que llegaba a interesarse por un libro se convertía inevitablemente en esclavo de la lectura. Un libro te remitía a otro libro, un autor a otro autor, porque, en contra de lo que solía decirse, los libros nunca te resolvían problemas sino que te los creaban, de modo que la curiosidad del lector siempre quedaba insatisfecha. Y, al apelar a otros títulos, iniciabas una cadena que ya no podía concluir sino con la muerte.",
    autor: "Miguel Delibes",
    obra: "Señora de rojo sobre fondo gris",
    temas: ["Infancia", "Literatura", "Curiosidad", "Muerte"]
},
{
    texto: "Los cuentos no interesaban en absoluto a los niños, que lo que los niños deseaban leer eran los libros que sus padres cerraban con llave en su biblioteca.",
    autor: "Miguel Delibes",
    obra: "Señora de rojo sobre fondo gris",
    temas: ["Infancia", "Literatura", "Deseo", "Curiosidad"]
},
{
    texto: "¿Crees tú que hay más de media docena de personas en el mundo que merezcan ser amadas?",
    autor: "Miguel Delibes",
    obra: "Señora de rojo sobre fondo gris",
    temas: ["Amor", "Infancia", "Literatura"]
},
{
    texto: "El campo por sí solo no aliviaba la melancolía, que era preciso traer la alegría dentro para disfrutarlo.",
    autor: "Miguel Delibes",
    obra: "Señora de rojo sobre fondo gris",
    temas: ["Infancia", "Literatura", "Tristeza", "Alegría"]
},
{
    texto: "¿Qué valor tenía saber que había sido, si había dejado de ser?",
    autor: "Miguel Delibes",
    obra: "Señora de rojo sobre fondo gris",
    temas: ["Infancia", "Literatura", "Nostalgia", "Tiempo"]
}, 
    // --------------------- FRANCISCO UMBRAL ---------------------
{
  texto: "¿Qué sería de los niños sin la desobediencia?",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Infancia", "Libertad", "Identidad"]
},
{
  texto: "España siempre llora a un torero, a un general o a un político. España es viuda de varios grandes toreros, de varios grandes tribunos, de varios grandes de España.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Nostalgia", "Pasado"]
},
{
  texto: "La prensa diaria, sin duda, es una inercia de la guerra que se prolonga en tiempo de paz.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Conflicto", "Verdad"]
},
{
  texto: "El recuerdo de la posguerra es el de un largo invierno de varios años, y sin duda debió de nevar mucho.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Recuerdo", "Pasado", "Tristeza"]
},
{
  texto: "los vencedores asimilan la cultura de los vencidos, desfigurándola y trivializándola inevitablemente.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Poder", "Sociedad", "Conflicto"]
},
{
  texto: "el azar y la necesidad lo rigen todo en los destinos humanos",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Destino", "Existencia", "Vida"]
},
{
  texto: "Más vale honra sin barcos que barcos sin honra",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Identidad", "Honor", "Valor"]
},
{
  texto: "entre la Justicia y mi madre prefiero a mi madre",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Conflicto", "Familia", "Lealtad"]
},
{
  texto: "El destino del cuerpo era otro cuerpo",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Deseo", "Cuerpo", "Sexo"]
},
{
  texto: "La sexualidad del cine no encuentra correspondencia en la vida.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sexo", "Realidad", "Percepción"]
},
{
  texto: "El árbol es hermoso con sus ramas y sus pájaros y sus hojas. Cualquier simbolismo que se haga con el árbol, se hace siempre a costa de cargarse el árbol, a costa de talarlo para sacar de él leña de conceptos.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Naturaleza", "Verdad", "Percepción"]
},
{
  texto: "Los poetas, los predicadores y los filósofos han venido a ensuciar la naturaleza con sus alegorías, con sus símbolos, y de un pájaro han hecho un alma y de un árbol una vida. Él utilizar la naturaleza como ejemplo moral es un fraude, es un atentado contra la naturaleza que debiera estar prohibido.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Naturaleza", "Arte", "Ironía"]
},
{
  texto: "Lo que mejor nos daba la medida de nuestra humildad era la ropa.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Identidad", "Sociedad", "Realidad"]
},
{
  texto: "la resignación es una forma última y menor de la libertad.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Libertad", "Desesperación", "Vida"]
},
{
  texto: "Sacarle la lengua a la humanidad en general es un socorrido recurso para cuando uno no puede sacarle la lengua a unos señores en particular.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Ironía", "Rebelión", "Sociedad"]
},
{
  texto: "España es país de grandes entierros.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Muerte", "Sociedad", "Tradición"]
},
{
  texto: "Porque la noción de patria es, efectivamente, una noción ecuestre, una idea a caballo, un concepto que cabalga, y todos los generales, todas las estatuas y todos los héroes están a caballo en la historia. Por muy patriota que sea, un hombre no encarna la patria hasta que no se sube a un caballo",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Identidad", "Poder", "Ironía"]
},
{
  texto: "el recordar es volver a vivir",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Recuerdo", "Vida", "Memoria"]
},
{
  texto: "Y a se sabe que son esos libros que el niño lee a escondidas los que verdaderamente le forman, los que echan las bases de su cultura, que será así, siempre, una cultura de orígenes clandestinos, de cimientos contradictorios, incapaces de soportar las nociones oficiales y burguesas, tradicionales, asépticas, que vendrán después.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Infancia", "Literatura", "Identidad"]
},
{
  texto: "el deseado o la deseada no pueden dejar de participar, involuntariamente, de la condición, el pecado, el deseo y la fiebre que les asigna el deseador.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Deseo", "Pasión", "Erotismo"]
},
{
  texto: "El niño entiende la vida como participación. Sólo con los años se llega a la lamentable categoría de espectador. El niño no sabe ser espectador puro de nada. O participa o no se divierte.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Infancia", "Vida", "Identidad"]
},
{
  texto: "Una educación burguesa de derechas es una educación que no llega nunca a resolver dos problemas fundamentales, el del sexo y el del dinero.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Sexo", "Hipocresía"]
},
{
  texto: "La propina, como concepto económico, está a medias entre el jornal y la limosna.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Economía", "Realidad"]
},
{
  texto: "Dentro de nuestra civilización y nuestra cultura, el sexo y el dinero son las claves de una personalidad.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Identidad", "Sexo", "Vida"]
},
{
  texto: "La diferencia entre el erotismo y la picardía puede que sea ésa: el erotismo es el sexo como desafío y la picardía era el sexo como culpabilidad.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Erotismo", "Sexo", "Dualidad"]
},
{
  texto: "este país podíamos arreglarlo poniendo a todo el mundo un poco más abajo de donde está.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Ironía", "Sociedad", "Poder"]
},
{
  texto: "No queremos un país lleno de pisapapeles",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Identidad", "Crítica"]
},
{
  texto: "Burgués es o era el habitante del burgo, según la socorrida definición etimológica, de modo que en cuanto el burgués se sale del burgo pierde toda su armadura burguesa y se convierte en otra cosa.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Identidad", "Cambio"]
},
{
  texto: "Todo viaje, aunque sea breve, supone la puesta en marcha de un proceso anímico implacable.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Transformación", "Existencia", "Vida"]
},
{
  texto: "La moral, por muy concienzuda que sea, rara vez supera sus propios términos municipales. No hay una moral universal. Sólo hay morales municipales.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Moral", "Relativismo"]
},
{
  texto: "Las naciones se buscan un modelo, como las personas, y tratan de seguirlo, de imitarlo, o ni siquiera eso: se conforman con vivir por delegación.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Sociedad", "Identidad", "Destino"]
}
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
// PERSONAJES / AUTORES
// ===========================
function mostrarPersonajes() {
    const personajes = [...new Set(citas.map(c => c.autor))].sort();
    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Personajes</h2>";
    personajes.forEach(p => {
        cont.innerHTML += `<p class="link" onclick="verPersonaje('${p}')">${p}</p>`;
    });
}

function verPersonaje(nombre) {
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

    const personajesPorVisitas = [...new Set(citas.map(c => c.autor))].slice(0,5);
const obrasPorVisitas = [...new Set(citas.map(c => c.obra))].filter(o => o !== "").slice(0,5);
const temasPorFrecuencia = [...new Set(citas.flatMap(c => c.temas || []))].slice(0,5);

let html = `<section class="section-destacados">
    <h3>Libros Destacados</h3>
    <div class="destacados-list">`;
obrasPorVisitas.forEach(o => html += `<div onclick="verObra('${o}')">${o}</div>`);
html += `</div>`;

html += `<h3>Personajes Destacados</h3>
    <div class="destacados-list">`;
personajesPorVisitas.forEach(p => html += `<div onclick="verPersonaje('${p}')">${p}</div>`);
html += `</div>`;

    html += `<h3>Temas Populares</h3>
        <div class="destacados-list">`;
    temasPorFrecuencia.forEach(t => html += `<div onclick="verTema('${t}')">${t}</div>`);
    html += `</div></section>`;

    cont.innerHTML = html;
}
// =======================
// MINIJUEGOS
// =======================

// Función para obtener n citas aleatorias
function getRandomCitas(n) {
    const shuffled = [...citas].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// =======================
// JUEGO DE TARJETAS
// =======================
function iniciarTarjetas() {
    const cont = document.getElementById("juego-contenido");
    const tarjetas = getRandomCitas(5); // 5 tarjetas aleatorias

    cont.innerHTML = '<h3>Juego de Tarjetas</h3><div id="tarjetas-container"></div>';
    const container = document.getElementById("tarjetas-container");

    tarjetas.forEach((cita, i) => {
        const card = document.createElement("div");
        card.className = "tarjeta";
        card.innerHTML = `
            <div class="frente">
                <p>${cita.texto}</p>
                <input type="text" placeholder="¿Quién dijo esto?" id="input-${i}">
                <button onclick="voltearTarjeta(${i}, '${cita.autor.replace("'", "\\'")}')">Verificar</button>
            </div>
            <div class="detras" id="detras-${i}" style="display:none;">
                <p>Respuesta: ${cita.autor}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function voltearTarjeta(i, autor) {
    const input = document.getElementById(`input-${i}`);
    const detras = document.getElementById(`detras-${i}`);
    const userAnswer = input.value.trim().toLowerCase();
    const correct = autor.toLowerCase();

    if(userAnswer === correct) {
        detras.innerHTML = `<p>¡Correcto! ✅ ${autor}</p>`;
    } else {
        detras.innerHTML = `<p>Incorrecto ❌ La respuesta correcta es: ${autor}</p>`;
    }

    detras.style.display = "block";
}

// =======================
// JUEGO TIPO TEST
// =======================
function iniciarTest() {
    const cont = document.getElementById("juego-contenido");
    const testCitas = getRandomCitas(5);
    let score = 0;
    let current = 0;

    cont.innerHTML = '<h3>Juego Tipo Test</h3><div id="test-container"></div>';
    mostrarPregunta();

    function mostrarPregunta() {
        if(current >= testCitas.length) {
            cont.innerHTML = `<h3>Test finalizado</h3><p>Tu puntuación: ${(score / testCitas.length * 100).toFixed(0)}%</p>`;
            return;
        }

        const cita = testCitas[current];
        const container = document.getElementById("test-container");

        // Generar 3 autores incorrectos aleatorios
        const otrosAutores = [...new Set(citas.map(c => c.autor))]
            .filter(a => a !== cita.autor)
            .sort(() => 0.5 - Math.random())
            .slice(0,3);

        const opciones = [cita.autor, ...otrosAutores].sort(() => 0.5 - Math.random());

        container.innerHTML = `
            <p>${cita.texto}</p>
            ${opciones.map((a, idx) => `<button onclick="respuestaTest('${a.replace("'", "\\'")}', '${cita.autor.replace("'", "\\'")}')">${a}</button>`).join('')}
        `;
    }

    window.respuestaTest = function(elegida, correcta) {
        if(elegida === correcta) score++;
        current++;
        mostrarPregunta();
    }
}
function mostrarMinijuegos() {
    const cont = document.getElementById("contenido");
    cont.innerHTML = `
        <h2>Minijuegos</h2>
        <div class="seleccion-juego">
            <button onclick="iniciarTarjetas()">Juego de Tarjetas</button>
            <button onclick="iniciarTest()">Juego Tipo Test</button>
        </div>
        <div id="juego-contenido"></div>
    `;
}

// ===========================
// INICIO AUTOMÁTICO
// ===========================
document.addEventListener("DOMContentLoaded", mostrarInicio);



























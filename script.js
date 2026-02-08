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
    // --------------------- FRANCISCO UMBRAL Memorias de un niño de derechas---------------------
{
  texto: "¿Qué sería de los niños sin la desobediencia? (Jean Cocteau)",
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
  texto: "Los vencedores asimilan la cultura de los vencidos, desfigurándola y trivializándola inevitablemente.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Poder", "Sociedad", "Conflicto"]
},
{
  texto: "El azar y la necesidad lo rigen todo en los destinos humanos.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Destino", "Existencia", "Vida"]
},
{
  texto: "Más vale honra sin barcos que barcos sin honra. (Casto Méndez Núñez)",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Identidad", "Honor", "Valor"]
},
{
  texto: "Entre la Justicia y mi madre prefiero a mi madre. (Atribuida a Albert Camus)",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Conflicto", "Familia", "Lealtad"]
},
{
  texto: "El destino del cuerpo era otro cuerpo.",
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
  texto: "La resignación es una forma última y menor de la libertad.",
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
  texto: "El recordar es volver a vivir.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Recuerdo", "Vida", "Memoria"]
},
{
  texto: "Ya se sabe que son esos libros que el niño lee a escondidas los que verdaderamente le forman, los que echan las bases de su cultura, que será así, siempre, una cultura de orígenes clandestinos, de cimientos contradictorios, incapaces de soportar las nociones oficiales y burguesas, tradicionales, asépticas, que vendrán después.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Infancia", "Literatura", "Identidad"]
},
{
  texto: "El deseado o la deseada no pueden dejar de participar, involuntariamente, de la condición, el pecado, el deseo y la fiebre que les asigna el deseador.",
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
  texto: "Una educación burguesa de derechas es una educación que no llega nunca a resolver dos problemas fundamentales, el del sexo y el del dinero. Se trata de un doble tabú que ese tipo de educación trata de ignorar, de obviar, y entonces, a fuerza de querer hacer inexistente la relación sexual o la relación monetaria (por meras razones de hipocresía moral) lo que se consigue es tornar esas relaciones profundamente inmorales.",
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
  texto: "La diferencia entre el erotismo y la picardía puede que sea esa: el erotismo es el sexo como desafío y la picardía era el sexo como culpabilidad.",
  autor: "Francisco Umbral",
  obra: "Memorias de un niño de derechas",
  temas: ["Erotismo", "Sexo", "Dualidad"]
},
{
  texto: "No queremos un país lleno de pisapapeles. (Atribuida a Eugenio D'Ors)",
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
},
    // --------------------- FRANCISCO UMBRAL ---------------------
{
  texto: "Al escritor nuevo se le suele quedar corto el material. La novedad es impaciencia y la impaciencia lleva a resumir , naturalmente. Hay escritores nuevos que hacen un primer libro muy largo, pero esto es también por impaciencia, sólo que entendida o practicada a la inversa: la impaciencia de decirlo todo de una vez.",
  autor: "Francisco Umbral",
  obra: "Balada de gamberros",
  temas: ["Literatura", "Tiempo", "Conocimiento"]
},
{
  texto: "Las cosas no son como son, sino como las recordamos. (Atribuida a Ramón María del Valle-Inclán)",
  autor: "Francisco Umbral",
  obra: "Balada de gamberros",
  temas: ["Recuerdo", "Memoria", "Percepción"]
},
{
  texto: "Un hombre es su imaginación. Lo que imagina y, sobre todo, cómo se imagina a sí mismo.",
  autor: "Francisco Umbral",
  obra: "Balada de gamberros",
  temas: ["Identidad", "Imaginación", "Existencia"]
},
{
  texto: "Con Napoleón andaría mejor el mundo. Debía haber un Napoleón en cada siglo.",
  autor: "Francisco Umbral",
  obra: "Balada de gamberros",
  temas: ["Poder", "Historia", "Ironía"]
},
{
  texto: "La calle envenena. Cuando uno ha vivido mucho en la calle, lo ha visto todo. Y no tiene paciencia para meterse en una habitación a estudiar un libro, a aprender un oficio. En la calle, parece que está todo al alcance de la mano. Pero si alargas la mano, en seguida sale un guardia. Estás en casa, miras la calle desde el cristal de la ventana y dices: \"Me voy. Hay muchas cosas ahí fuera. Ya saldrá algo. Hay que vivir\". Pero luego, en la calle se te pasa el tiempo mirando escaparates, o siguiendo a una mujer. Cuando te quieres dar cuenta, todos se han ido a sus casas y estás solo en la calle, lleno de frío y con las manos en los bolsillos. Pero uno no quiere irse a casa.",
  autor: "Francisco Umbral",
  obra: "Balada de gamberros",
  temas: ["Soledad", "Vida", "Desilusión"]
},
{
  texto: "Vas a llegar a eso que llaman la mayoría de edad virgen y mártir",
  autor: "Francisco Umbral",
  obra: "Balada de gamberros",
  temas: ["Juventud", "Destino", "Ironía"]
},
    // --------------------- FRANCISCO UMBRAL dias sin escuela ---------------------
{
  texto: "Lo que más se nota cuando cambia uno de sitio es el agua, que parece una cosa tan tonta y, sin embargo, en cada sitio sabe de una forma y te pone la lengua gorda o la lengua suavecita, y te quita la sed o no te la quita, según.",
  autor: "Francisco Umbral",
  obra: "Días sin escuela",
  temas: ["Vida", "Percepción", "Cambio"]
},
{
  texto: "Olores y sabores, una musiquilla, recuerdos, digo, apenas los elementos imprescindibles para componer una canción muy corta y más bien mediocre, es lo que le queda al hombre cuando hace recuento de tanta vida y tanta muerte, y lo que cree que es un libro muy gordo y por escribir —su existencia—, no es sino un breve cuplé que, por otra parte, da igual no escribirlo, pues se parece en la letra a todos los demás cuplés que a los hombres les canta en el corazón o en la memoria",
  autor: "Francisco Umbral",
  obra: "Días sin escuela",
  temas: ["Recuerdo", "Memoria", "Existencia"]
},
{
  texto: "Uno ha perdido su inocencia cuando insiste en las gracias o en las torpezas de niño sabiendo que por ellas, precisamente, es por lo que los demás le toman en cuenta.",
  autor: "Francisco Umbral",
  obra: "Días sin escuela",
  temas: ["Infancia", "Identidad", "Cambio"]
},
{
  texto: "El cobarde que engaña y gana ha hecho una obra de arte de su cobardía, es de la raza de los sinuosos, puede llegar lejos.",
  autor: "Francisco Umbral",
  obra: "Días sin escuela",
  temas: ["Engaño", "Poder", "Ironía"]
},
{
  texto: "La calle y la casa se disputan al niño.",
  autor: "Francisco Umbral",
  obra: "Días sin escuela",
  temas: ["Infancia", "Destino", "Identidad"]
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

// ===========================
// INICIO AUTOMÁTICO
// ===========================
document.addEventListener("DOMContentLoaded", mostrarInicio);






























const questions = [
    {
        letter: "a",
        status: 0,
        questions: [
            {answer: "anillo", question: "Con la A. Elemento circular metálico. Propio de las bodas"},
            {answer: "adornar", question: "Con la A. Embellecer  o hacer que algo resulte más bonito y agradable."},
            {answer: "amargo", question: "Con la A. Que tiene el sabor característico de la hiel, de la quinina y de otros alcaloides"
            }
        ],
    },
    {
        letter: "b",
        status: 0,
        questions: [
            {
                answer: "babosa",
                question: "Con la B. Que resulta molesto e impertinente cuando intenta agradar a una mujer:"
            },
            {
                answer: "búho",
                question: "Con la B. Autobús urbano que circula durante toda la noche en sustitución del servicio normal:"
            },
            {
                answer: "buzo",
                question: "Con la B. Persona que se dedica profesionalmente a trabajar sumergido en el agua:"
            }
        ],
    },
    {
        letter: "c",
        status: 0,
        questions: [
            {
                answer: "calabaza",
                question: "Con la C. Fruto globoso de la calabacera, de variadas formas y colores, con muchas pepitas:"
            },
            {
                answer: "calendario",
                question: "Con la C. Distribución de determinadas actividades humanas en un periodo de tiempo:"
            },
            {
                answer: "cinturón",
                question: "Con la C. Cinto o correa que ciñe la cintura, especialmente el que se usa para ajustar la ropa:"
            }
        ],
    },
    {
        letter: "d",
        status: 0,
        questions: [
            {answer: "delito", question: "Con la D. Acción u omisión voluntaria, castigada por la ley con pena grave:"},
            {answer: "democrático", question: "Con la D. De la democracia o relacionada con ella:"},
            {answer: "diabetes", question: "Con la D. Enfermedad causada por un desorden de nutrición y que se caracteriza por una concentración excesiva de azúcar en la sangre:"}
        ],
    },
    {
        letter: "e",
        status: 0,
        questions: [
            {
                answer: "ecografía",
                question: "Con la E. Técnica que se emplea en medicina para exploración del interior de un cuerpo mediante ondas electromagnéticas o acústicas:"
            },
            {
                answer: "escultura",
                question: "Con la E. Arte de modelar, tallar y esculpir figuras a partir de un material cualquiera :"
            },
            {answer: "enriquecer", question: "Con la E. Mejorar, prosperar:"}
        ],
    },
    {
        letter: "f",
        status: 0,
        questions: [
            {answer: "fractura", question: "Con la F. Rotura de un hueso:"},
            {answer: "financiero", question: "Con la F. Persona experta en finanzas:"},
            {answer: "familiar", question: "Con la F. De la familia o relativo a ella:"}
        ],
    },
    {
        letter: "g",
        status: 0,
        questions: [
            {answer: "gigante", question: "Con la G. Personaje imaginario de gran tamaño:"},
            {answer: "glacial", question: "Con la G. Indiferente, sin sentimientos:"},
            {answer: "graznido", question: "Con la G. Voz propia de algunas aves:"}
        ],
    },

    {
        letter: "h",
        status: 0,
        questions: [
            {
                answer: "hangar",
                question: "Con la H. Cobertizo grande y abierto, de techo sólido, destinado a guardar o reparar aparatos de aviación:"
            },
            {answer: "hidratación", question: "Con la H. Combinación de un cuerpo o compuesto químico con el agua:"},
            {
                answer: "hígado",
                question: "Con la H. Órgano glandular del aparato digestivo del hombre y demás mamíferos, de color rojo oscuro:"
            }
        ],
    },

    {
        letter: "i",
        status: 0,
        questions: [
            {answer: "incipiente", question: "Con la I. Que se está iniciando:"},
            {answer: "incoherente", question: "Con la I. Que no tiene coherencia:"},
            {answer: "increíble", question: "Con la I. Que no puede creerse o es muy difícil de creer:"}
        ],
    },

    {
        letter: "j",
        status: 0,
        questions: [
            {
                answer: "jerga",
                question: "Con la J. Conjunto de expresiones especiales y particulares de una profesión o clase social:"
            },
            {answer: "juego", question: "Con la J. Acción y resultado de jugar, divertimento:"},
            {answer: "jadear", question: "Con la J. Respirar con dificultad, generalmente por efecto del cansancio:"}
        ],
    },

    {
        letter: "k",
        status: 0,
        questions: [
            {
                answer: "kevlar",
                question: "Con la K. Especie de resina o fibra artificial ligera, muy fuerte y resistente al calor, que se utiliza para hacer cascos de embarcaciones, carrocería:"
            },
            {
                answer: "karaoke",
                question: "Con la K. Establecimiento lúdico donde hay uno de estos aparatos para que los clientes puedan cantar:"
            },
            {
                answer: "karma",
                question: "Con la K. Principio hinduista según el cual el comportamiento en una vida influye en las sucesivas:"
            }
        ],
    },

    {
        letter: "l",
        status: 0,
        questions: [
            {answer: "ladear", question: "Con la L. Andar o caminar por las laderas:"},
            {
                answer: "labio",
                question: "Con la L. Cada una de los rebordes exteriores, carnosos y móviles, de la boca:"
            },
            {answer: "litigar", question: "Con la L. Pleitear, disputar en juicio sobre una cosa:"}
        ],

    },
    {
        letter: "m",
        status: 0,
        questions: [
            {answer: "masivo", question: "Con la M. Que es muy numeroso o se realiza en gran cantidad:"},
            {
                answer: "máscara",
                question: "Con la M. Pieza de cartón, tela, etc., para taparse la cara y no ser conocido o para protegerse de algo:"
            },
            {
                answer: "mecer",
                question: "Con la M. Mover rítmica y lentamente algo que vuelve siempre al punto de partida:"
            }
        ],
    },

    {
        letter: "n",
        status: 0,
        questions: [
            {
                answer: "necesidad",
                question: "Con la N. Lo que hace que las cosas sucedan infaliblemente de cierta manera:"
            },
            {answer: "necio", question: "Con la N. Imprudente:"},
            {answer: "nefasto", question: "Con la N. Trsite, funesto:"}
        ],
    },

    {
        letter: "ñ",
        status: 0,
        questions: [
            {answer: "tiña", question: "Contiene la Ñ. Sucidad, porquería:"},
            {answer: "antaño", question: "Contiene la Ñ. En tiempo pasado:"},
            {
                answer: "Guiño",
                question: "Contiene la Ñ. Movimiento rápido de aproximación de los párpados, voluntario o involuntario:"
            }
        ],
    },

    {
        letter: "o",
        status: 0,
        questions: [
            {answer: "olfatear", question: "Con la O. Mancha, impureza, falta de aseo:"},
            {answer: "olivar", question: "Con la O. Terreno plantado de olivos:"},
            {answer: "orgánico", question: "Con la O. Que tiene armonía y orden:"}
        ],
    },

    {
        letter: "p",
        status: 0,
        questions: [
            {answer: "persuadir", question: "Con la P. Convencer a alguien para que haga o deje de hacer algo:"},
            {answer: "picante", question: "Con la P. Que pica en el paladar:"},
            {
                answer: "purificar",
                question: "Con la P. Eliminar lo que es extraño a alguna cosa, devolviéndola a su estado original:"
            }
        ],
    },

    {
        letter: "q",
        status: 0,
        questions: [
            {answer: "quesadilla", question: "Con la Q. Pastel hecho con masa de harina y queso:"},
            {answer: "quijada", question: "Con la Q. Cada una de las dos grandes mandíbulas de los vertebrados:"},
            {answer: "quejoso", question: "Con la Q. Que tiene queja de alguien o de algo:"}
        ],
    },

    {
        letter: "r",
        status: 0,
        questions: [
            {
                answer: "remolque",
                question: "Con la R. Desplazamiento de una embarcación o de un vehículo, arrastrándolo:"
            },
            {
                answer: "retrógrado",
                question: "Con la R. Partidario de ideas, actitudes, etc., propias exclusivamente de tiempos pasados, y enemigo de cambios e innovaciones:"
            },
            {answer: "riguroso", question: "Con la R. Muy severo, cruel:"}
        ],
    },

    {
        letter: "s",
        status: 0,
        questions: [
            {
                answer: "sabueso",
                question: "Con la S. Persona hábil para investigar o seguir el rastro de alguien o algo:"
            },
            {
                answer: "sainete",
                question: "Con la S. Pieza teatral en un acto, de carácter jocoso, que se representaba en el intermedio o al final de una función:"
            },
            {answer: "selva", question: "Con la S. Terreno extenso, sin cultivar y muy poblado de árboles:"}
        ],
    },

    {
        letter: "t",
        status: 0,
        questions: [
            {
                answer: "títere",
                question: "Con la T. Figurilla que se mueve con alguna cuerda o introduciendo una mano en su interior:"
            },
            {
                answer: "tambor",
                question: "Con la T. Instrumento musical de percusión consistente en una caja de forma cilíndrica, hueca:"
            },
            {
                answer: "tapioca",
                question: "Con la T. Fécula que en forma de harina fina se extrae de la raíz de la mandioca o yuca:"
            }
        ],
    },
    {
        letter: "u",
        status: 0,
        questions: [
            {
                answer: "uretra",
                question: "Con la U. Conducto a través del cual los mamíferos expulsan la orina de la vejiga:"
            },
            {answer: "urbanista", question: "Con la U. Del urbanismo o relativo a él:"},
            {answer: "usurero", question: "Con la U. Persona que presta algo con usura:"}
        ],
    },

    {
        letter: "v",
        status: 0,
        questions: [
            {answer: "vago", question: "Con la V. Perezoso, holgazán:"},
            {answer: "valor", question: "Con la V. Precio, suma de dinero en que se valora o aprecia algo:"},
            {
                answer: "vecindario",
                question: "Con la V. Conjunto de los vecinos de una población, barrio, calle o casA:"
            }
        ],
    },

    {
        letter: "w",
        status: 0,
        questions: [
            {answer: "kuwait", question: "Contiene la W. País árabe del Golfo Pérsico:"},
            {
                answer: "taekwondo",
                question: "Contiene la W. Arte marcial coreano de carácter defensivo en que se usan principalmente los ataques de pierna y salto:"
            },
            {
                answer: "hardware",
                question: "Contiene la W. Conjunto de elementos materiales que constituyen el soporte físico de un ordenador:"
            }
        ],
    },

    {
        letter: "x",
        status: 0,
        questions: [
            {answer: "exhumación", question: "Contiene la X. Desenterramiento de un cadáver:"},
            {answer: "xenofobia", question: "Contiene la X. Odio u hostilidad hacia los extranjeros:"},
            {answer: "axioma", question: "Contiene la X. Proposición clara y evidente que no necesita demostración:"}
        ],
    },

    {
        letter: "y",
        status: 0,
        questions: [
            {answer: "mayordomo", question: "Contiene la Y. Criado principal de una casa o hacienda:"},
            {answer: "subrayado", question: "Contiene la Y. Que va en un formato de resalte tipográfico:"},
            {
                answer: "ensayo",
                question: "Contiene la Y. Obra en prosa, de extensión variable, en la que un autor reflexiona sobre determinado tema:"
            }
        ],
    },

    {
        letter: "z",
        status: 0,
        questions: [
            {answer: "hallazgo", question: "Contiene la Z. Descubrimiento, invento o encuentro::"},
            {
                answer: "onza",
                question: "Contiene la Z. Medida de peso empleada por el sistema inglés, equivalente a 28,7 g o a la decimosexta parte del peso de la libra:"
            },
            {
                answer: "sollozo",
                question: "Contiene la Z. Serie de varias inspiraciones bruscas, entrecortadas, seguidas de una espiración, que suele acompañar al llanto:"
            }
        ],
    },
];

export default questions;
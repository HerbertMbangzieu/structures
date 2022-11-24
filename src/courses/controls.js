import { loop, loop2, orgExple, pour, pour1, pour2, repeter, repeter1, repeter2, seq, si, siEx, SiFlow, sinon, sinon1, sinon2, siSinon, tableFlow, tantque, tantque1, tantque2 } from "../resources/images";

export const controls = {
    title: "Structures de contrôle",
    introduction: "On appelle structure de contrôle un ensemble d'instruction qui s'exécute dans un ordre donné. En algorithmique on distingue principalement trois structure de contrôle à savoir les strucures séquentielle, les structures alternatives et les structures itératives",
    paragraphs : [
        {
            title: "Organigramme",
            content: "Un organigramme ou encore algorigramme est une la représentation graphique d'un algorithme, à l'aide de symboles. Ainsi il existe un symbole différent pour chaque type d'élément. on utlisisera donc: un parallelogramme pour représenter les entrées et sorties (saisie et affichage) - un ellipse (ovale) pour représenter le début et la fin de l'algorithme - un rectangle pour représenter un traitement (affectation d'une valeur, ou d'une opération - un losage pour représenter une condition.",
            subParagraphs: [],
            image: tableFlow,
            examples:[
                {
                    text: "Ecrire un algorithme qui demande l'année de naissance, puis calcule et affiche l'age.",
                    solution: orgExple,
                    visible: false,
                },

            ]
        },
        {
            title: "Structures séquentielles",
            content: "On parle de structure séquentielle lorsque toutes les instructions sont exécutées l'une après l'autre.",
            subParagraphs: [],
            image: '',
            examples:[
                {
                    text: "Ecrire un algorithme qui demande trois nombres et affiche la somme de ces nombres.",
                    solution: seq,
                    visible: false,
                },

            ]
        },

        {
            title: "Structures alternatives",
            content: "On appelle structure alternative un ensemble d'instructions qui s'exécute en fonction d'une condition. Une condition est une expression booléenne (c'est-à-dire qu'elle peut être vraie ou fausse). En général on écrit les condition sous la forme d'une comparaison. Exemple: age > 21, moyenne < 10, ou classe = \"Première Industrielle\". Les deux principales structures alterntives que nous étuduerons sont: SI...ALORS...FINSI et SI... ALORS...SINON..FINSI ",
            subParagraphs: [
                {
                    title:"SI... ALORS...FINSI",
                    content: "Dans cette structure si la condition est vraie àlors les instructions sont exécutées. Par exemple on dira, Si le feu est vert alors la voiture passe. la condition ici est la couleur du feu (c'est vert?) et l'instruction à exécuter est 'La voiture passe'. Sa syntaxe est la suivante:",
                    image: SiFlow,
                    syntaxe: si,
                    examples:[
                        {
                            text: "Ecrire un algorithme qui demande d'entrer l'année en cours et affiche Bonne Année! si l'utilisateur saisit 2023 .",
                            solution: siEx,
                        },
                        {
                            text: "Ecrire un algorithme",
                            solution: "Quis eiusmod velit commodo",
                            visible: false,
                        },
        
                    ]
                },
                {
                    title:"SI... ALORS...SINON...FINSI",
                    content: "Dans cette structure si la condition est vraie, un bloc d'instruction est exécuté, si elle est fausse, c'est un autre bloc qui est exécuté. Par exemple on dira, Si le feu est vert alors la voiture passe. la condition ici est la couleur du feu (c'est vert?) et l'instruction à exécuter est 'La voiture passe'. sinon (ce n'est pas vert) l'instruction à exécuter est la voiture s'arrête. Sa syntaxe est la suivante:",
                    image: siSinon,
                    syntaxe: sinon,
                    examples:[
                        {
                            text: "Ecrire un algorithme qui demande un nombre et affiche son signe (positif ou négatif).",
                            solution: sinon1,
                            visible: false,
                        },
                        {
                            text: "Ecrire un algorithme qui demande deux notes sur 20, calcule la moyenne et retourne le résultat echec ou réussite.",
                            solution: sinon2,
                            visible: false,
                        },
        
                    ]
                },

            ],
            image: [],
        },
        {
            title: "Structures itératives",
            content: "On appelle structure itérative, ou structure répétitive ou encre boucle, un bloc d'instruction qui s'exécute plusieurs fois en fonction d'une condition. Notez Bien que l'une des instructions doit modifier la variable qui est comparée dans dans la condition, sinon la répétition ne s'arretera jamais. Par exemple on a l'incrémentation qui consiste à ajouter 1 à un nombre, et la décrémentation qui consiste à retrancher 1 à un nombre. Les trois principales structures conditionnelles sont: la boucle tantque, la boucle répéter jusqu'à et enfin la boucle pour.",
            subParagraphs: [
                {
                    title:"TANTQUE... FAIRE...FINTANTQUE",
                    content: "Chaque fois que la condition est vraie, on exécute le même bloc d'instruction. on arrête l'exécution lorsque la condition devient fausse avant qu'on arrête. ",
                    image: loop,
                    syntaxe: tantque,
                    examples:[
                        {
                            text: "Ecrire avec la boucle Tantque un algorithme qui affiche 10 fois Bonjour",
                            solution: tantque1,
                            visible: false,
                        },
                        {
                            text: "Ecrire avec la boucle Tantque un algorithme qui affiche les 8 premières lignes de la table de multiplication par 13.",
                            solution: tantque2,
                            visible: false,
                        },
        
                    ]
                },
                {
                    title:"REPETER ... JUSQU'A",
                    content: "On exécute les instructions, puis on vérifie la condition. Si elle est fausse on répète l'exécution des instructions, jusqu'à ce que la condition soit vraie avant qu'on arrête. sa syntaxe est la suivante:",
                    image: loop2,
                    syntaxe: repeter,
                    examples:[
                        {
                            text: "Ecrire avec la boucle répéter jusqu'à, un algorithme qui affiche 10 fois Bonjour",
                            solution: repeter1,
                            visible: false,
                        },
                        {
                            text: "Ecrire avec la boucle répéter jusqu'à, un algorithme qui affiche les 8 premières lignes de la table de multiplication par 13.",
                            solution: repeter2,
                            visible: false,
                        },
        
                    ]
                },
                {
                    title:"POUR",
                    content: "La particularité de cette boucle est que on l'utilise seulement quand on connait le nombre de fois que les instructions sont répétées. Sa syntaxe est la suivante.",
                    image: loop,
                    syntaxe: pour,
                    examples:[
                        {
                            text: "NEcrire avec la boucle répéter jusqu'à, un algorithme qui affiche 10 fois Bonjour.",
                            solution: pour1,
                            visible: false,
                        },
                        {
                            text: "Ecrire avec la boucle pour un algorithme qui affiche les 8 premières lignes de la table de multiplication par 13",
                            solution: pour2,
                            visible: false,
                        },
        
                    ]
                },


            ],
            image: [],
        },

        
    ],
}
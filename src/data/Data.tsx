
export interface produits {
    id: number;
    nom: string;
    imageUrl: string;
    description: string;
    imageDescription: string;
}

interface Avis {
    id: number;
    nom: string;
    imageUrl: string;
    avis: string;
}

interface Profil {
    imageUrl: string;
    description?: string;
}

export const products: produits[] = [
    {
        id: 1,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0001.jpg",
        description: "Bruleur de grisse pour les gros ventres",
        imageDescription: ""
    },
    {
        id: 2,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0002.jpg",
        description: "La boisson du bien-être (Préparée avec du lait d'origine végétale) ...",
        imageDescription: "/pictures/produits/IMG-20240108-WA0009.jpg"
    },
    {
        id: 3,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0003.jpg",
        description: "Omega3 pour bien faire caca",
        imageDescription: ""
    },
    {
        id: 4,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0004.jpg",
        description: "Baies pour drainer ton corps des saletés",
        imageDescription: "/pictures/produits/IMG-20240108-WA0007.jpg"
    },
    {
        id: 5,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0005.jpg",
        description: "Une barre pour un style de vie actif et un goût délicieux ...",
        imageDescription: "/pictures/produits/IMG-20240108-WA0008.jpg"
    },
    {
        id: 6,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0006.jpg",
        description: "Baie pour manger moins et dégonfler le ventre",
        imageDescription: ""
    },



];

export const avis: Avis[] = [
    {
        id: 1,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0002.jpg",
        avis: "-15Kg"
    },
    {
        id: 2,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0003.jpg",
        avis: "-8kg"
    },
    {
        id: 3,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0004.jpg",
        avis: "Je me suis raffermie"
    },
    {
        id: 4,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0011.jpg",
        avis: "Mes cheveux ont poussé"
    },
    {
        id: 5,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0012.jpg",
        avis: "J'ai plus la galle"
    },
    {
        id: 6,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0013.jpg",
        avis: "J'ai moins de boutons"
    },
    {
        id: 7,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0005.jpg",
        avis: "J'ai moins de boutons"
    },

];


export const profil: Profil = {
    imageUrl: "/pictures/profilChoups.jpeg",
}


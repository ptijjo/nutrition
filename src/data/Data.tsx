
interface produits{
    id: number;
    nom: string;
    imageUrl: string;
    description: string;
}

interface Detox{
    id: number;
    nom: string;
    imageUrl: string;
    description: string;
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
        description: ""
    },
    {
        id: 2,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0002.jpg",
        description: ""
    },
    {
        id: 3,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0003.jpg",
        description: ""
    },
    {
        id: 4,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0004.jpg",
        description: "gros ventre"
    },
    {
        id: 5,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0005.jpg",
        description: ""
    },
    {
        id: 6,
        nom: "",
        imageUrl: "/pictures/produits/IMG-20240108-WA0006.jpg",
        description: ""
    },


];

export const avis: Avis[] = [
    {
        id: 1,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0002.jpg",
        avis: ""
    },
    {
        id: 2,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0003.jpg",
        avis: ""
    },
    {
        id: 3,
        nom: "",
        imageUrl: "/pictures/resultats/IMG-20240117-WA0004.jpg",
        avis: ""
    },

];

export const tox: Detox[] = [
    {
        id: 1,
        nom: "",
        imageUrl: "/pictures/detox/IMG-20240117-WA0011.jpg",
        description: ""
    },
    {
        id: 2,
        nom: "",
        imageUrl: "/pictures/detox/IMG-20240117-WA0012.jpg",
        description: ""
    },
    {
        id: 3,
        nom: "",
        imageUrl: "/pictures/detox/IMG-20240117-WA0013.jpg",
        description: ""
    },
];

export const profil: Profil = {
    imageUrl: "/pictures/profilChoups.jpeg",
}
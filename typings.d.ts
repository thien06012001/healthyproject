interface SanityBody{
    _createdAt: string;
    _id:string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: ReferenceError;
    };
}

export interface UnderWeight extends SanityBody{
    _type: "underweight";
    name: string;
    price: number;
    image: Image;
    ingredients: string;
    calories: number;
    categories: string;
}

export interface NormalWeight extends SanityBody{
    _type: "normalweight";
    name: string;
    price: number;
    image: Image;
    ingredients: string;
    calories: number;
    categories: string;
}

export interface OverWeight extends SanityBody{
    _type: "overweight";
    name: string;
    price: number;
    image: Image;
    ingredients: string;
    calories: number;
    categories: string;
}

export interface Obese extends SanityBody{
    _type: "obese ";
    name: string;
    price: number;
    image: Image;
    ingredients: string;
    calories: number;
    categories: string;
}

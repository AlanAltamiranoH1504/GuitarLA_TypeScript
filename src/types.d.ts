type Guitarra = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

type CarritoItem = Guitarra & {
    cantidad: number
}

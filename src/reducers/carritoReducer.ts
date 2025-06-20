//Acciones disponibles para el carrito
import {db} from "../data/db.ts";

export type AccionesCarrito =
    { type: "AddToCarrito", payload: { item: Guitarra } } |
    { type: "EliminarDeCarrito", payload: { id: Guitarra['id'] } } |
    { type: "DisminuirCantidad", payload: { id: Guitarra['id'] } } |
    { type: "AumentarCantidad", payload: { id: Guitarra['id'] } } |
    { type: "VaciarCarrito" }

// Estado inicial
export type CarritoState = {
    data: Guitarra[],
    carrito: CarritoItem[]
}
export const initialState: CarritoState = {
    data: db,
    carrito: []
}

// useReducer
export const carritoReducer = (
    state: CarritoState = initialState,
    action: AccionesCarrito
) => {
    if (action.type === "AddToCarrito") {
        const itemExiste = state.carrito.find(guitarra => guitarra.id === action.payload.item.id);
        let updatedCarrito: CarritoItem[] = [];

        //Si ya existe el elemento solo aumenta cantidad
        if (itemExiste) {
            updatedCarrito = state.carrito.map((item) => {
                if (item.id === action.payload.item.id) {
                    if (item.cantidad < 10) {
                        return {
                            ...item,
                            cantidad: item.cantidad + 1
                        }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })
        } else {
            //Si no existia el elemento le agregamos una cantidad
            const newItem: CarritoItem = {...action.payload.item, cantidad: 1}
            updatedCarrito = [...state.carrito, newItem]
        }
        return {
            ...state,
            carrito: updatedCarrito
        }
    }
    if (action.type === "EliminarDeCarrito") {
        const carritoActual = [...state.carrito];
        const carritoNuevo = carritoActual.filter((guitarra) => {
            return guitarra.id !== action.payload.id;
        });
        // setCarrito(carritoNuevo);
        return {
            ...state,
            carrito: carritoNuevo
        }
    }
    if (action.type === "DisminuirCantidad") {
        const carritoNuevo = state.carrito.map((item) => {
            if (item.id === action.payload.id) {
                const cantidad = item.cantidad - 1;
                if (cantidad <= 0) {
                    return null;
                }
                return {...item, cantidad: cantidad};
            }
            return item;
        }).filter((item) : item is CarritoItem => item !== null);
        return {
            ...state,
            carrito: carritoNuevo
        }
    }
    if (action.type === "AumentarCantidad") {
        const carritoNuevo = state.carrito.map((item) => {
            if (item.id === action.payload.id && item.cantidad < 10) {
                return {
                    ...item,
                    cantidad: item.cantidad + 1
                }
            }
            return item;
        })
        return {
            ...state,
            carrito: carritoNuevo
        }
    }
    if (action.type === "VaciarCarrito") {
        return {
            ...state,
            carrito: []
        }
    }
}
import {useEffect, useState} from "react";
// import {db} from "../data/db.ts";

const useCarrito = () => {

    const carritoInicial = (): CarritoItem[] => {
        const carritoLocalStorage = localStorage.getItem("carrito");
        if (carritoLocalStorage) {
            return JSON.parse(carritoLocalStorage);
        } else {
            return [];
        }
    }
    // const [data, setData] = useState<Guitarra[]>([]);
    const [carrito, setCarrito] = useState(carritoInicial);

    // function addToCarrito(item: Guitarra) {
    //     const itemExiste = carrito.findIndex(guitarra => guitarra.id === item.id);
    //
    //     //Si ya existe el elemento solo aumenta cantidad
    //     if (itemExiste >= 0) {
    //         const updatedCarrito = [...carrito];
    //         updatedCarrito[itemExiste].cantidad++;
    //         setCarrito(updatedCarrito);
    //     } else {
    //         //Si no existia el elemento le agregamos una cantidad
    //         const newItem: CarritoItem = {...item, cantidad: 1}
    //         setCarrito([...carrito, newItem]);
    //     }
    // }

    function saveLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function clearLocalStorage() {
        localStorage.clear();
    }

    // Funciones del Header
    function totalCarrito(): number {
        const costoTotalCarrito = carrito.reduce((total, guitarra) => {
            return total + (guitarra.price * guitarra.cantidad);
        }, 0);
        return costoTotalCarrito;
    }

    // function aumentarCantidadProducto(id: Guitarra['id']) {
    //     const carritoNuevo = carrito.map((item) => {
    //         if (item.id === id && item.cantidad < 10) {
    //             return {
    //                 ...item,
    //                 cantidad: item.cantidad + 1
    //             }
    //         }
    //         return item;
    //     })
    //     setCarrito(carritoNuevo);
    // }

    // function disminuirCantidadProducto(id: Guitarra['id']) {
    //     const carritoNuevo = carrito.map((item) => {
    //         if (item.id === id) {
    //             const cantidad = item.cantidad - 1;
    //             if (cantidad <= 0) {
    //                 return null;
    //             }
    //             return {...item, cantidad: cantidad};
    //         }
    //         return item;
    //     }).filter((item) : item is CarritoItem => item !== null);
    //     setCarrito(carritoNuevo);
    // }

    // function eliminarElementoCarrito(id: Guitarra['id']) {
    //     const carritoActual = [...carrito];
    //     const carritoNuevo = carritoActual.filter((guitarra) => {
    //         return guitarra.id !== id;
    //     });
    //     setCarrito(carritoNuevo);
    // }

    // function vaciarCarrito() {
    //     setCarrito([]);
    //     clearLocalStorage();
    // }

    // useEffect(() => {
    //     setData(db);
    // }, []);
    useEffect(() => {
        saveLocalStorage();
    }, [carrito]);

    return {
        // data,
        carrito,
        setCarrito,
        // addToCarrito,
        saveLocalStorage,
        clearLocalStorage,
        totalCarrito,
        // aumentarCantidadProducto,
        // disminuirCantidadProducto,
        // eliminarElementoCarrito,
        // vaciarCarrito
    }
}

export default useCarrito;
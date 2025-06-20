import Header from "./components/Header.tsx";
import Guitarra from "./components/Guitarra.tsx";
import Footer from "./components/Footer.tsx";
import useCarrito from "./hooks/useCarrito.ts";
import {useReducer} from "react";
import {carritoReducer, initialState} from "./reducers/carritoReducer.ts";

function App() {
    const {
        // carrito,
        // setCarrito,
        // addToCarrito,
        clearLocalStorage,
        totalCarrito,
        // aumentarCantidadProducto,
        // disminuirCantidadProducto,
        // eliminarElementoCarrito,
        // vaciarCarrito
    } = useCarrito();

    const [state, dispatch] = useReducer(carritoReducer, initialState)
    return (
        <>
            <Header
                carrito={state.carrito}
                // setCarrito={setCarrito}
                // clearLocalStorage={clearLocalStorage}
                totalCarrito={totalCarrito}
                // aumentarCantidadProducto={aumentarCantidadProducto}
                // disminuirCantidadProducto={disminuirCantidadProducto}
                // eliminarElementoCarrito={eliminarElementoCarrito}
                // vaciarCarrito={vaciarCarrito}
                dispatch={dispatch}
            />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    {state.data.map((guitarra) => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra}
                            // addToCarrito={addToCarrito}
                            dispatch={dispatch}
                        />
                    ))}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App

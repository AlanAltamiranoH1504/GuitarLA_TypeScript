import Header from "./components/Header.tsx";
import Guitarra from "./components/Guitarra.tsx";
import Footer from "./components/Footer.tsx";
import useCarrito from "./hooks/useCarrito.ts";

function App() {
    const {
        data,
        carrito,
        setCarrito,
        addToCarrito,
        clearLocalStorage,
        totalCarrito,
        aumentarCantidadProducto,
        disminuirCantidadProducto,
        eliminarElementoCarrito,
        vaciarCarrito
    } = useCarrito();

    return (
        <>
            <Header
                carrito={carrito}
                setCarrito={setCarrito}
                clearLocalStorage={clearLocalStorage}
                totalCarrito={totalCarrito}
                aumentarCantidadProducto={aumentarCantidadProducto}
                disminuirCantidadProducto={disminuirCantidadProducto}
                eliminarElementoCarrito={eliminarElementoCarrito}
                vaciarCarrito={vaciarCarrito}
            />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    {data.map((guitarra) => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra}
                            addToCarrito={addToCarrito}
                        />
                    ))}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App

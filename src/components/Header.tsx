import {Fragment} from "react";

type HeaderProps = {
    carrito: CarritoItem[];
    totalCarrito: () => number;
    aumentarCantidadProducto: (id: Guitarra["id"]) => void;
    disminuirCantidadProducto: (id: Guitarra["id"]) => void;
    eliminarElementoCarrito: (id: Guitarra["id"]) => void;
    vaciarCarrito: () => void;
    clearLocalStorage: () => void;
}

const Header = (
    {
        carrito,
        totalCarrito,
        aumentarCantidadProducto,
        disminuirCantidadProducto,
        eliminarElementoCarrito,
        vaciarCarrito
    }: HeaderProps) => {
    return (
        <Fragment>
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src="/img/logo.svg" alt="imagen logo"/>
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div
                                className="carrito"
                            >
                                <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito"/>

                                <div id="carrito" className="bg-white p-3">
                                    {carrito.length <= 0 ? (
                                        <p className="text-center">El carrito esta vacio</p>
                                    ) : (
                                        <Fragment>
                                            <table className="w-100 table">
                                                <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {carrito.map(guitarra => (
                                                    <tr key={guitarra.id}>
                                                        <td>
                                                            <img className="img-fluid"
                                                                 src={`/img/${guitarra.image}.jpg`}
                                                                 alt="Imagen guitarra"/>
                                                        </td>
                                                        <td>{guitarra.name}</td>
                                                        <td className="fw-bold">${guitarra.price}</td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => {
                                                                    disminuirCantidadProducto(guitarra.id);
                                                                }}
                                                            >
                                                                -
                                                            </button>
                                                            {guitarra.cantidad}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => {
                                                                    aumentarCantidadProducto(guitarra.id);
                                                                }}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => {
                                                                    eliminarElementoCarrito(guitarra.id);
                                                                }}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <p className="text-end">Total pagar: <span
                                                className="fw-bold">${totalCarrito()}</span></p>
                                            <button className="btn btn-dark w-100 mt-3 p-2"
                                                    onClick={vaciarCarrito}>Vaciar Carrito
                                            </button>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
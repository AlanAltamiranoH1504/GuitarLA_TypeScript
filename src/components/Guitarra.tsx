import {Fragment} from "react";
import type {AccionesCarrito} from "../reducers/carritoReducer.ts";
type GuitarraProps = {
    guitarra: Guitarra,
    // addToCarrito: (item: Guitarra) => void,
    dispatch:  React.ActionDispatch<[action: AccionesCarrito]>
}

const Guitarra = ({guitarra, dispatch} : GuitarraProps) => {

    return (
        <Fragment>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${guitarra.image}.jpg`} alt="imagen guitarra"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{guitarra.name}</h3>
                    <p>{guitarra.description}</p>
                    <p className="fw-black text-primary fs-3">${guitarra.price}</p>
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => {
                            dispatch({type: "AddToCarrito", payload: {item: guitarra}})
                        }}
                    >Agregar al Carrito
                    </button>
                </div>
            </div>
        </Fragment>
    );
}

export default Guitarra;
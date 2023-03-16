import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import useFirebase from "../hook/useFirebase";
import Swal from "sweetalert2";
import './styles/Checkout.css'

const CartForm = () => {
    const { totalPrice, clearCart } = useContext(CartContext);
    const { sendOrder } = useFirebase();
    const [buyerInfo, setBuyerInfo] = useState({
        firstName:'',
        lastName:'',
        email:'',
        emailConfirm:'',
    });

    const [emailCheck,setEmailCheck] = useState(false)

    const handleChange = (e) => {
        setEmailCheck(false)
        const name = e.target.name;
        const value = e.target.value;
        setBuyerInfo({...buyerInfo,[name]:value});
        
    };

    const handleBlur = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBuyerInfo({...buyerInfo,[name]:value});
        let email1 = buyerInfo.email
        let email2 = buyerInfo.emailConfirm
        if (email1 === email2) {
            setEmailCheck(true)
        } else{
            setEmailCheck(false)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation()
        if (emailCheck !== true) {
            Swal.fire({
                title: "Algo anda mal!",
                text: "Por favor, chequea tu info",
                icon: "error",
                });
            return;
        }
        sendOrder({info: buyerInfo})
        setTimeout(() => {
            clearCart()
        }, 4000);
    };

    return (
        <>
        <div className="form-container">
            {/* <div>
            <p>Total: </p>
            <p> ${totalPrice}</p> */}
            {/* </div> */}
            <div className="form">
            <form onSubmit={onSubmit}>
                <div className="form-item">
                <label htmlFor="firstName">Nombre:</label>
                <input 
                    type="text" 
                    name='firstName'
                    id="firstName"
                    value={buyerInfo.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                </div>
                <div className="form-item">
                <label htmlFor="lastName">Apellido: </label>
                <input 
                    type="text" 
                    name="lastName"
                    id="lastName" 
                    value={buyerInfo.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                </div>
                <div className="form-item">
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    name="email"
                    value={buyerInfo.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    required />
                </div>
                <div className="form-item">
                <label htmlFor="emailConfirm">Confirmar email: </label>
                <input 
                    type="email"
                    name="emailConfirm"
                    value={buyerInfo.emailConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="emailConfirm"
                    required />
                </div>
                <div className="d-flex justify-content-center py-3">
                    <button type='sumbit' className="btn btn-danger" >Comprar</button>
                </div>
            </form>
            </div>
        </div>
        </>
    );
};

export default CartForm;
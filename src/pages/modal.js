import React, {useState} from 'react';
import "./modal.css"

function Confirm({open, handleConfirm}) {
    return (
        <>
            <div
                className={
                    open
                        ? "in_confirm in_show"
                        : "in_confirm"
                }
            >
                <div className="in_confirm_contents">
                    <div>
                        <p>Modal window</p>
                    </div>
                </div>
            </div>
            <div
                className="in_overlay"
                onClick={() => handleConfirm(false)}
            />
        </>
    );
}


const Modal = () => {
    const [open, setOpen] = useState(false);

    const handleConfirm = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpen(false);
    };

    return (
        <>
            <div className="new_invoice_btn">
                <button
                    className="new_inv_btn"
                    onClick={() => setOpen(true)}
                >
                    <p className="new_inv_btn_p">Create new invoice +</p>
                </button>
            </div>

            <Confirm open={open} handleConfirm={handleConfirm}/>
        </>
    );
};

export default Modal;
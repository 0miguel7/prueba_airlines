import React from "react";

interface Props {
    handleClose: () => void;
}

const SuccesAlert = ({ handleClose }: Props) => {
    return (
        <div className="flex relative p-1 bg-green-500 justify-center  text-white font-bold ">
            <h1>Pasajero añadido exitosamente</h1>
            <p className="absolute right-0 top-1 mr-10 cursor-pointer" onClick={handleClose}>
                X
            </p>
        </div>
    );
};

export default SuccesAlert;

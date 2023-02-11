import React from "react";
import { useNavigate } from "react-router-dom";
import agregar from "../assets/agregar.png";

interface Props {
    length: number;
    failureHandler: () => void;
    successHandler: () => void;
}

const AddCard = ({ length, failureHandler, successHandler }: Props) => {
    const addCardClasses = "m-10  bg-green-400 cursor-pointer  rounded-xl shadow flex flex-col items-center justify-center lg:h-60 lg:w-60 lg:p-5";
    const navigate = useNavigate();

    const handleOnClick = () => {
        if (length > 3) {
            failureHandler();
        } else {
            navigate("/");
        }
    };
    return (
        <div
            className="m-4 w-60 h-40 bg-green-400  cursor-pointer  rounded-xl shadow flex flex-col items-center justify-center lg:h-60 lg:w-60 lg:p-5 lg:m-10"
            onClick={() => {
                successHandler();
                handleOnClick();
            }}
        >
            <img src={agregar} alt="Agregar Pasajero" className="w-28 lg:w-32"></img>
        </div>
    );
};

export default AddCard;

import React from "react";
import { InputData } from "../types";
import avatar from "../assets/avatar.png";

interface Props {
    passenger: InputData;
    handleDelete: (index: string) => void;
}

const Card = ({ passenger, handleDelete }: Props) => {
    return (
        <div className="my-4 mx-1 w-60 h-40 lg:m-10 relative lg:h-60 lg:w-60 lg:p-5 rounded-xl shadow flex flex-col items-center justify-center bg-sky-300">
            <h1>Nombre: {passenger.name}</h1>
            <h1>Apellido: {passenger.lastname}</h1>
            <h1>Nacionalidad: {passenger.nationality}</h1>
            <h1>
                {passenger.type}: {passenger.id}
            </h1>

            <h1
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => {
                    handleDelete(passenger.id);
                }}
            >
                X
            </h1>
            <img src={avatar} className="hidden lg:w-16 lg:pt-5 lg:flex"></img>
        </div>
    );
};

export default Card;

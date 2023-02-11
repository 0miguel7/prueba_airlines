import React from "react";
import { Form, Card } from "../Components";
import { InputData } from "../types";
import costaverde from "../assets/costaverde.jpg";
import { useNavigate } from "react-router-dom";

interface Props {
    handleAdd: (newPassenger: InputData) => void;
}

const AddPassenger = ({ handleAdd }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="w-full flex h-screen ">
            <div className="w-3/5 h-screen hidden lg:flex ">
                <img src={costaverde} className="object-cover h-screen"></img>
            </div>
            <div className="w-full lg:max-h-screen xl:overflow-y-hidden py-6 lg:w-2/5">
                <div className="w-full flex flex-row-reverse px-10">
                    <div
                        className="px-3 py-2 bg-green-500 rounded-md flex justify-center font-bold text-white w-fit cursor-pointer"
                        onClick={() => {
                            navigate("/passengers");
                        }}
                    >
                        Ver Pasajeros
                    </div>
                </div>
                <Form addPassenger={handleAdd} />
            </div>
        </div>
    );
};

export default AddPassenger;

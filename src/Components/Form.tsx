import React, { useState } from "react";
import { InputData } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
    addPassenger: (newPassenger: InputData) => void;
}

const Form = ({ addPassenger }: Props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<InputData>({
        name: "",
        lastname: "",
        nationality: "",
        type: "DNI",
        id: "",
    });

    const [nameError, setnameError] = useState<boolean>();
    const [lastnameError, setlastnameError] = useState<boolean>();
    const [nationError, setnationError] = useState<boolean>();
    const [docError, setDocError] = useState<boolean>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        addPassenger(formData);
        handleClear();
        navigate("/passengers");
    };

    const validateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const namePattern = /^[A-Za-záéíóúÁÉÍÓÚ‘.ñÑ ]+$/;
        const flag = namePattern.test(event.target.value);
        flag ? setnameError(false) : setnameError(true);
    };

    const validateLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        const lastNamePattern = /^[A-Za-záéíóúÁÉÍÓÚ‘.ñÑ ]+$/;
        const flag = lastNamePattern.test(event.target.value);
        flag ? setlastnameError(false) : setlastnameError(true);
    };

    const validateNationality = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nationPattern = /^[A-Za-z]+$/;
        const flag = nationPattern.test(event.target.value);
        flag ? setnationError(false) : setnationError(true);
    };

    const validateDoc = (event: React.ChangeEvent<HTMLInputElement>) => {
        const docpattern = new RegExp(idFormat());
        const flag = docpattern.test(event.target.value);
        flag ? setDocError(false) : setDocError(true);
    };

    const handleClear = () => {
        setFormData({
            name: "",
            lastname: "",
            nationality: "",
            type: "DNI",
            id: "",
        });
    };

    const idLength = () => {
        switch (formData.type) {
            case "DNI":
                return 8;
            case "CE":
                return 9;
            case "Pasaporte":
                return 9;
        }
    };

    const idFormat = () => {
        if (formData.type === "CE") {
            return "^[0-9a-zA-Z]{9}$";
        } else {
            return "^[0-9]{8,9}$";
        }
    };

    const inputClasses = "shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:bg-slate-100";

    return (
        <div className=" py-10 px-14 lg:px-32  ">
            <h1 className="pb-3 text-xl lg:text-2xl text-blue-500 font-bold">REGISTRAR PASAJERO</h1>
            <form className="flex flex-col " onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col">
                    <label className="p-2">Nombres</label>
                    <input
                        className={
                            inputClasses + `${nameError ? " border-2 border-red-400" : `${formData.name.length > 2 ? "  bg-green-100" : ""}`} `
                        }
                        value={formData.name}
                        id="nombres"
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Nombre incorrecto")}
                        name="name"
                        type="text"
                        pattern="^[A-Za-záéíóúÁÉÍÓÚ‘.ñÑ ]+$"
                        placeholder="Nombres"
                        onChange={(e) => {
                            handleChange(e);
                            validateName(e);
                        }}
                        required
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className="p-2">Apellidos</label>
                    <input
                        className={
                            inputClasses + `${lastnameError ? " border-2 border-red-400" : `${formData.lastname.length > 2 ? "  bg-green-100" : ""}`}`
                        }
                        id="apellidos"
                        value={formData.lastname}
                        name="lastname"
                        type="text"
                        pattern="^[A-Za-záéíóúÁÉÍÓÚ‘.ñÑ ]+$"
                        placeholder="Apellidos"
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Apellido Incorrecto")}
                        required
                        onChange={(e) => {
                            handleChange(e);
                            validateLastname(e);
                        }}
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className="p-2">Nacionalidad</label>
                    <input
                        value={formData.nationality}
                        className={
                            inputClasses +
                            `${nationError ? " border-2 border-red-400" : `${formData.nationality.length > 2 ? "  bg-green-100" : ""}`}`
                        }
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Nacionalidad incorrecta")}
                        id="nationality"
                        name="nationality"
                        pattern="^[A-Za-z]+$"
                        type="text"
                        placeholder="Nacionalidad"
                        required
                        onChange={(e) => {
                            handleChange(e);
                            validateNationality(e);
                        }}
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className="p-2">Tipo de Documento</label>
                    <select
                        className="shadow  border rounded py-2 px-3 text-gray-700 focus:outline-none  bg-white "
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="DNI">DNI</option>
                        <option value="CE">CE</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="p-2">Numero de Documento</label>
                    <input
                        className={inputClasses + `${docError ? " border-2 border-red-400" : `${formData.id.length > 2 ? "  bg-green-100" : ""}`}`}
                        id="documentoid"
                        type="text"
                        value={formData.id}
                        name="id"
                        required
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Documento ingresado erroneamente")}
                        minLength={7}
                        pattern={idFormat()}
                        maxLength={idLength()}
                        placeholder="Numero de Documento"
                        onChange={(e) => {
                            handleChange(e);
                            validateDoc(e);
                        }}
                    ></input>
                </div>
                <div className="flex w-full justify-center p-5">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mt-2">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;

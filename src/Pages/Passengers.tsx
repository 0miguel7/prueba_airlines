import React from "react";
import { Card, AddCard, SuccesAlert, FailureAlert } from "../Components";
import { InputData } from "../types";
import { useState } from "react";

interface Props {
    passengers: InputData[];
    handleDelete: (index: string) => void;
    success: boolean;
    handleSuccess: () => void;
}

const Passengers = ({ passengers, handleDelete, success, handleSuccess }: Props) => {
    const h1Classes = "py-1 shadow text-xl font-bold text-center text-blue-700 bg-sky-300 lg:text-4xl lg:py-6";
    const [failure, setFailure] = useState<boolean>();

    const failureHandler = () => {
        setFailure(true);
    };

    const handleCloseFailure = () => {
        setFailure(false);
    };

    return (
        <div>
            <h1 className={h1Classes}>PASAJEROS AGREGADOS</h1>
            {success ? <SuccesAlert handleClose={handleSuccess} /> : <></>}
            {failure ? <FailureAlert handleClose={handleCloseFailure} /> : <></>}
            <div className="flex justify-center">
                <div className="flex mt-5 flex-wrap justify-center ">
                    {passengers.map((e, i) => {
                        return <Card key={i} passenger={e} handleDelete={handleDelete} />;
                    })}
                    <AddCard length={passengers.length} failureHandler={failureHandler} successHandler={handleSuccess} />
                </div>
            </div>
        </div>
    );
};

export default Passengers;

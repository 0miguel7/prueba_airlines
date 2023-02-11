import "./App.css";
import { AddPassenger, Passengers } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { InputData } from "./types";

const App = () => {
    const [passengers, setPassengers] = useState<InputData[]>([]);
    const [count, setCount] = useState<number>(0);
    const [success, setSucces] = useState<boolean>(false);

    const handleAdd = (newPassenger: InputData): boolean => {
        if (count >= 4) {
            return false;
        } else {
            setCount(count + 1);
            setPassengers([...passengers, newPassenger]);
            setSucces(true);
            return true;
        }
    };

    const handleDelete = (index: string): void => {
        const filteredPassengers = passengers.filter((e) => e.id !== index.toString());
        setPassengers(filteredPassengers);
        setCount(count - 1);
    };

    const handleSuccess = (): void => {
        setSucces(!success);
    };

    const hideSucess = (): void => {
        setSucces(false);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AddPassenger handleAdd={handleAdd} />}></Route>
                    <Route
                        path="/passengers"
                        element={<Passengers passengers={passengers} success={success} handleDelete={handleDelete} handleSuccess={hideSucess} />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

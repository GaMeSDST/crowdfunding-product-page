"use client";
import Header from "./Header.js";
import First from "./First.js";
import Second from "./Second.js";
import Third from "./Third.js";
import Modal from "./Modal.js";
import Hamburger from "./HamburgerModal.js";
import { createContext, useContext, useState } from "react";
import ValuesContext from "./Context.js";

export default function Home() {
    const [modal, setModal] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [chosenOne, setChosenOne] = useState("");
    const [contextSucks, setContextSucks] = useState(useContext(ValuesContext));
    return (
        <>
            <Header onBurger={() => setHamburger(!hamburger)} />
            {hamburger ? <Hamburger onPress={() => setHamburger(!hamburger)} /> : ""}
            <First onPress={() => setModal(!modal)} />
            <Second left={contextSucks.left} total={contextSucks.total} backed={contextSucks.backed} />
            <Third
                data={contextSucks}
                onPress={(event) => {
                    setModal(!modal);
                    setChosenOne(event.target.id);
                }}
            />
            {modal ? (
                <Modal onPress={() => setModal(!modal)} data={contextSucks} chosen={chosenOne} contextSucks={(values) => setContextSucks(values)} />
            ) : (
                ""
            )}
        </>
    );
}

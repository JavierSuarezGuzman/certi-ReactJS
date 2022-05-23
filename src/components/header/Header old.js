import React, { useEffect, useState } from 'react';
import { Switch, Link, Route, Routes } from "react-router-dom";
import AboutPage from '../About/About';

import './Header.css';

const Header = () => {

    const [language, setLanguage] = useState("en"); //HOOK custom useState!
    const [word, setWord] = useState(""); //HOOK custom useState!
    const [definitions, setDefinitions] = useState([]); //HOOK custom useState!
    const [synonyms, setSynonyms] = useState([]); //HOOK custom useState!
    const [antonyms, setAntonyms] = useState([]); //HOOK custom useState!

    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries";

    const dictionaryApi = () => {
        try {
            fetch(`${apiUrl}/${language}/${word}`)
                .then(response => response.json())
                .then(definitions => setDefinitions(definitions))
                .then(synonyms => setSynonyms(synonyms))
                .then(antonyms => setAntonyms(antonyms));

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { //HOOK useEffect!
        dictionaryApi();
    }, [language, word, definitions, synonyms, antonyms]); //DEPENDENCIAS / DEPENDENCIES / DEPENDENCY


    return (
        <div>
            <h1>Free English Dictionary</h1>
            <div className='options'>
                <div>Definitions</div>
                <div>Synonyms</div>
                <div>Antonyms</div>
                <div>About</div>
            </div>
            <input
                type="text"
                placeholder="Search word..."
            /*           onChange={(e) => {
                        setSearchWord(e.target.value);
                      }} */
            />
        </div>

    )
};

export default Header;
import React, { useEffect, useState } from 'react';



import './Header.css';

const Header = () => {


    const base_url = "https://api.dictionaryapi.dev/api/v2/entries/en";
    const [data, setData] = useState(""); //HOOK custom useState!
    const [searchWord, setSearchWord] = useState(""); //HOOK custom useState!

    const getMeaning = () => {
        try {
            fetch(`${base_url}/${searchWord}`)
                .then(response => response.json())
                .then(data => setData(data[0]));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { //HOOK useEffect!
        getMeaning();
    }, [data, searchWord]);  //DEPENDENCIAS / DEPENDENCIES / DEPENDENCY
    

    return (

        <div>
            <h1>Free English Dictionary</h1> {/* link tiene que mandar a la raíz */}
            <div className='options'>
      
                <div>About certification</div> {/* link tiene que pisar el input texto y botón paras instrucciones de la certi, si no se puede, que queden */}
            </div>
            <div className="searchBox">

                <input
                    type="text"
                    placeholder="Search word..."
                    onChange={(e) => {
                        setSearchWord(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        getMeaning();
                    }}
                >Click to search
                </button>
            </div>
            <div>
                {data && (
                    <div>

                        <h2>Word:&nbsp;
                            {data.word}{" "}
                        </h2>
                        <div>Definition:       <p>{data.meanings[0].definitions[0].definition}  </p></div><br />
                        <div>Synonym:          <p>{data.meanings[0].definitions[0].synonyms[0]} </p></div><br />
                        <div>Antonym:          <p>{data.meanings[0].definitions[0].antonyms[0]} </p></div>

                    </div>
                )}
            </div>
        </div>

    )
};

export default Header;
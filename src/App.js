import { React, useState, useEffect } from "react";

import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {


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
    <div className="App">

      <Header data={data} setData={setData} searchWord={searchWord} setSearchWord={setSearchWord} /> {/* PROPS! */}
      <div className="searchBox">

        <input
          type="text"
          placeholder="Search a word in English"
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
      <br />
      {data ? data && (
        <div>

          <h2>Word:&nbsp;
            {data.word}{" "}
          </h2>
          <div>Definition:       <p>{data.meanings[0].definitions[0].definition}  </p></div>
          <div>Synonym(s):          <p>{data.meanings[0].definitions[0].synonyms.map((s) => `${s}, `)} </p></div>
          <div>Antonym(s):          <p>{data.meanings[0].definitions[0].antonyms.map((s) => `${s}, `)} </p></div>

        </div>

      ) : "No words found yet" }

      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect, Suspense, lazy } from "react";

import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {

  //api context + hooks

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
  }, [searchWord]);  //DEPENDENCIAS / DEPENDENCIES / DEPENDENCY

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="App">

      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About certification</a>
          </li>
        </ul>
        <h1>Free English Dictionary</h1>        </div>


      <div className="searchBox">

        <input
          size="25"
          type="text"
          placeholder="Search a word in English..."
          onChange={(e) => {
            setSearchWord(e.target.value);}}
        />
{/*         <button
          onClick={(e) => {
            getMeaning();
          }}
        >Click to search
        </button> */}
      </div>
      <br />
      {data ? data && (

        <div>

          <h2>Word:&nbsp;
            {data.word}{" "}
            <button
              onClick={() => {
                playAudio();
              }}
            > 🔈 </button>
          </h2>



          <div>Definition:       <p>{data.meanings[0].definitions[0].definition}  </p></div>
          <div>Synonym(s):       <p>{data.meanings[0].definitions[0].synonyms.map((s) => `${s}, `)} </p></div>
          <div>Antonym(s):       <p>{data.meanings[0].definitions[0].antonyms.map((s) => `${s}, `)} </p></div>

        </div>

      ) : "No words found yet"}

      <Header data={data} setData={setData} searchWord={searchWord} setSearchWord={setSearchWord} /> {/* PROPS! */}
      <Footer />
    </div>
  );
}

export default App;

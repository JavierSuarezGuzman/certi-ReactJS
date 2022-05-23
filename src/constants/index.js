//      fetch(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
const base_url = "https://api.dictionaryapi.dev/api/v2/entries/";
/* const app_id = "6eb85dbb";
const app_key = "f246c7b22a85f406e0faff021c14429f"; */
const language = "en";
const word_id = "example";
//const headers = app_id + app_key;

//export const wordGet = word_id => `${ cors_anywhere }${ base_url }${ track_get }${ commontrack_id }${ api_key }`;

export const wordGet = `${ base_url }${ language }${ word_id }`;
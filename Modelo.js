const ts = "1637196537";
const apiKey = "7b5215aefe2005ecd1258ad1db3e0b6e";
const md5 = "41a6fd74573aa071f256320911efae84";

const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${md5}&limit=6`;

function getMarvel() {
  axios.get(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
    .catch((error) => console.log(error));
}

getMarvel();



function getMarvel() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data.results);
    });
}
getMarvel();


function getMarvel() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data.data;
      console.log(data);
    })
    .catch((error) => console.log(error));
}


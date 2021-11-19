const ts = "1637196537";
const apiKey = "7b5215aefe2005ecd1258ad1db3e0b6e";
const md5 = "41a6fd74573aa071f256320911efae84";

const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${md5}&limit=20`;

function getMarvel() {
  axios.get(url)
    .then((response) => {
      const data = response.data.data;      
      
      //mostrando na tela o resultado da api
     const herosName = data.results;     
     console.log(herosName);
     

     const lista = document.getElementById("fill_list");
     lista.innerHTML = '';

     herosName.forEach(herosName =>{
       const item = document.createElement('li');
       item.innerHTML = herosName.name

       lista.appendChild(item)

     })   
      
  })
    .catch((error) => console.log(error));   
}
getMarvel();






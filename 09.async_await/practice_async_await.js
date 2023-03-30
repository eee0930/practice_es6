// 9.0

const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.log(`X ${error}`));
}

const getMoviesAsync = async () => {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json");
  const json = await response.json();
  console.log(json);
};

getMoviesAsync();



// 9.1







// 9.2







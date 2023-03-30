// 9.0

// const getMoviesPromise = () => {
//   fetch("https://yts.mx/api/v2/list_movies.json")
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(json => console.log(json))
//     .catch(error => console.log(`X ${error}`));
// }

// const getMoviesAsync = async () => {
//   const response = await fetch("https://yts.mx/api/v2/list_movies.json");
//   const json = await response.json();
//   console.log(json);
// };

// getMoviesAsync();



// 9.1

// const getMoviesAsync = async () => {
//   try {
//     const response = await fetch("https://yts.mx/api/v2/list_movies.json");
//     const json = await response.json();
//     console.log(json);
//     throw Error("I'm hungry/");
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("We are done!");
//   }
// };

// getMoviesAsync();



// 9.2
const getMoviesAsync = async () => {
  try {
    const [moviesResponse, upcomingResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"), 
      fetch("https://yts.am/api/v2/list_suggestions.json?movie_id=100")
    ]);
    const [movies, upcoming] = await Promise.all([
      moviesResponse.json(),
      upcomingResponse.json()
    ]);
    console.log(movies, upcoming);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("We are done!");
  }
};

getMoviesAsync();








const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a524f9e232d8b09c0ac0db868ddbd59e&page=1";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=a524f9e232d8b09c0ac0db868ddbd59e&query="';

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=a524f9e232d8b09c0ac0db868ddbd59e";

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get Initial Movies 

 getMovies(API_URL)

async function getMovies(url){
  const res = await fetch(url)
  const data = await res.json();
  console.log(data.results)
   showMovies(data.results)

}

async function showMovies(movies){
    main.innerHTML = ""

    movies.forEach((movie)=>{
      const {title,poster_path,overview,id,vote_average}= movie
      const movieEl = document.createElement("div")
      movieEl.classList.add('movie')
      movieEl.innerHTML = `
      <img src="${IMG_PATH+poster_path}" alt="${title}" />
      <div class="movie-info">
        <h3 class="title">${title}</h3>
        <div class="rating"><span>5</span></div>
      </div>
      <div class="overview">
        <h3 class="title">Overview</h3>
        <h2 class="title"><a href="/">${title}</a></h2>
        <p>
        ${overview}
        </p>
      </div> 
      `
      main.appendChild(movieEl)
    })
}

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const searchTerm = search.value
  if(searchTerm && searchTerm!=""){
    getMovies(SEARCH_API+searchTerm)
  }else{
    alert("Enter movie")
  }
})
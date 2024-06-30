const numberOfFilms = +prompt('How much did you see films?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('One of the last film did you saw?', ''),
      b = prompt('What is your price?', ''),
      c = prompt('One of the last film did you saw?', ''),
      d = prompt('What is your price?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
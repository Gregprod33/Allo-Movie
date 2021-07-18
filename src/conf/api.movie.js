import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})


export default apiMovie;


export const apiMovieMap = (m) => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${m.release_date} | ${ m.vote_average }/10 (${m.vote_count})`,
    description: m.overview
  });


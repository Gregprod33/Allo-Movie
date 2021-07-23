import React, { Component } from 'react';
import { Formik } from 'formik';
import apiMovie, { apiMovieMap } from '../../../../conf/api.movie';

export default class SearchBar extends Component {

    submit = (values, actions) => {
        console.log(values);
        //Permet de completer l'url avec a la suite la key query et sa valeur et la key language et sa valeur
        const query = '&' + Object.keys(values).map( k => `${ k }=${ values[k]}&include_adult=true&`).join('');
        console.log(query);
        apiMovie.get('/search/movie?api_key=6636b71f59e211d9a37a9eda92d8d050' + query)
        .then( response => response.data.results)
        .then( moviesApi => {
          const movies = moviesApi.map( apiMovieMap )
          console.log(movies);
          this.props.updateMovies(movies);
          actions.setSubmitting(false);
        })
        .catch( err => console.log(err));
    }

    
        
  
    
    render() {
        return (
            <Formik 
            onSubmit={ this.submit }
            initialValues={ { query: '', language:'en-US' } }
            >
            { ({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                <form className="d-flex flex-row p-2 m-2" onSubmit={ handleSubmit }>
                    <input name="query" className="flex-fill form-control mr-2" placeholder="Search ..." onChange={ handleChange } onBlur= { handleBlur } />
                    <select className="mr-2 form-control w-25" name="language" onChange={ handleChange } onBlur= { handleBlur }>
                        <option value="en-US">Anglais</option>
                        <option value="fr-FR">Français</option>
                    </select>
                    <button className="btn btn-small btn-success" type="submit" disabled={ isSubmitting } >Submit</button>
                </form>
            )}



            </Formik>
        )
    }
}
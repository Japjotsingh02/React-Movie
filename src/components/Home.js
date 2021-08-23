import React from 'react';

// Config
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';

// Componenets
import Hero from "./Hero";
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Load from './LoadButton';

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {
        state,
        loading,
        error,
        setSearchTerm,
        searchTerm,
        setLoadingMovies
    } = useHomeFetch();

    console.log(state);

    // let array=[];

    const key=(movie) =>{
        // if(movie.id === "581644"){
            // 
        // }
        // else 
        return movie.id 
    }

    if(error) return <div>Something went wrong...</div>

    return (
        <>
            {!searchTerm && state.results[0] ? (
                <Hero
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? "Search Results" :"Popular Movies"}>
                {state.results.map((result)=>(
                    <Thumb
                    key={key(result)}
                    clickAble
                    image={
                        result.poster_path ?
                        IMAGE_BASE_URL + POSTER_SIZE + result.poster_path
                        // {`${IMAGE_BASE_URL}${POSTER_SIZE}${result.poster_path}`}
                        : NoImage
                    }
                    movieId={result.id}
                    >
                    </Thumb>
                ))}
            </Grid>
            { state.page<state.total_pages  && !loading && (
                <Load text="Load More" callback={() => setLoadingMovies(true)} />
            )}
            {loading && <Spinner/>}
        </>
    );
};

export default Home;


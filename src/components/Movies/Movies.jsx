import React from "react";
import "./Movies.css";

function Movies() {
  return (
    <>
      <Header />
      <main className='content'>
        <SearchForm />
        <FilterCheckbox />
        <Preloader />
        <MoviesCardList />
        <MoviesCard />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

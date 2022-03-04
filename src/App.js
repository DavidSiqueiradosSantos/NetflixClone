import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/Featured";
import Header from "./components/Header";
/* eslint import/no-anonymous-default-export:[2, {"allowArrowFunction": true}] */


  
export default () => {
  

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {

      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // Pegando o Featured
      let originals = list.filter(i => i.slug === 'originais');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);


    }
    loadAll();
  }, []);

    
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
      setBlackHeader(true);

      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    
    }
}, []);

  return (
    <div className="page">  
      

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração"></span> ❤️ pelo 
        
        <a href="https://github.com/DavidSiqueiradosSantos" className="rodape" className="git" > / <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0bLxuEi18jk-9fdGtQY6osFseJzpmLJvgg&usqp=CAU" alt="img" width={20}></img>  DavidSiqueiradosSantos </a><br/>
    
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>

    
      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" width={600}></img>
      </div>
      
    }
  
    </div>

  );

}

import React, {useEffect,useState} from 'react';
import'./App.css';
import tmdb from './tmdb.js';
import LinhaDeFilmes from './components/LinhaDeFilmes';
import Featmovie from './components/Featmovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featData, setFeatData] = useState();
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista TOTAL
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pegando filme destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id,'tv');
      setFeatData(chosenInfo);
      

    }
    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
  }
  }, []);

  
  return (
    <div className='page'>

      <Header black={blackHeader}/>

    {featData &&
    <Featmovie item={featData} />
  }

     <section className='lists'>
      {movieList.map((item, key) =>(
      <LinhaDeFilmes key={key} title={item.title} items={item.items}/>
      ))}
     </section>
    </div>
  );
}
import React from 'react';
import './Featmovie.css';

export default ({item}) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }


    return (
        <section className='feat' style={{
         backgroudSize: 'cover',
         backgroundPosition: 'center',
         backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
        
        <div className='feat--vertical'>
            <div className='feat--horizontal'>
                <div className= 'feat--name'>{item.original_name}</div>
                <div className='feat--info'>
                    <div className='feat--points'>{item.vote_average}pontos</div>
                    <div className= 'feat--year'>{firstDate.getFullYear()}</div>
                    <div className= 'feat--seasons'>{item.number_of_seasons}temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>

                <div className= 'feat--description'>{item.overview}</div>
        <div className='feat--buttons'>
                <a href={`/watch/${item.id}`} className='feat--watchbutton'>Assisir</a>
                <a href={`/list/add/${item.id}`} className='feat--mylistbutton'>+ Minha Lista</a>
        </div>

        <div className='feat--genres'><strong>Gêneros:</strong> {genres.join(', ')}</div>


            </div>

        </div>
        </section>
    );
}
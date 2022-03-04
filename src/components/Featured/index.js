import React from 'react';
import './FeaturedMovie.css';

/* eslint import/no-anonymous-default-export:[2, {"allowArrowFunction": true}] */



export default ({ item }) => {
    
    let fistDate = new Date(item.first_air_date);
    let genres = [];

    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }
    return (

      
        <div>
             
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                
                <div className="featured--vertical">
                    <div className="featured--horizontal">
                    <div className='n'>N</div>
                    <div className="serie">SÉRIE</div>
                        <div className="featured--name">{item.original_name}</div>
                        <div className="featured--info">
                       
                            <table>
                                <tr>
                                    <td className="featured--points">{item.vote_average} Pontos</td>
                                    <td className="featured--year">{fistDate.getFullYear()}</td>
                                    <td className="featured--season">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</td>
                                    <td className="qualidade">4K HDR</td>
                                    <td className="idioma">5.1</td>
                                </tr>
                            </table>
                            <div className="featured--description">{item.overview}</div>
                            <div className="featured--buttons">
                                <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                                <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                            </div>
                            <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
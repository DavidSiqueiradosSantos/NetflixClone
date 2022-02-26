import React from 'react';
import './FeaturedMovie.css';

/* eslint import/no-anonymous-default-export:[2, {"allowArrowFunction": true}] */

export default ({ item }) => {
    console.log(item);

    let fistDate = new Date(item.first_air_date);
    let genres =[];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
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
                        <div className="featured--name">{item.original_name}</div>
                        <div className="featured--info">
                            <div className="featured--points">{item.vote_average} Pontos</div>
                            <div className="featured--year">{fistDate.getFullYear()}</div>
                            <div className="featured--season">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                            <div className="featured--description">{item.overview}</div>
                            <div className="featured--buttons">
                                <a href={`/watch/${item.id}`}>► Assistir</a>
                                <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
                            </div>
                            <div className="featured--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
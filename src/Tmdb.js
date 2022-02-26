

const API_KEY = 'e3f8f8bee18d0654f27382f37df340a2';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- animação
- comédia
- terror
- Romance
- documentarios
*/



const basicFeatch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;

}

/* eslint import/no-anonymous-default-export:[2, {"allowObject": true}] */

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basicFeatch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFeatch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'top rated',
                title: 'Em Alta',
                items: await basicFeatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },



            {
                slug: 'action',
                title: 'Ação',
                items: await basicFeatch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)
            },

            {
                slug: 'animation',
                title: 'Animação',
                items: await basicFeatch(`/discover/movie?with_genres=16&language=pt-br&api_key=${API_KEY}`)

            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFeatch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)

            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFeatch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)

            },

            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFeatch(`/discover/movie?with_genres=18&language=pt-br&api_key=${API_KEY}`)

            },

            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFeatch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)

            },

            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFeatch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)

            },

            {
                slug: 'reality',
                title: 'Reality',
                items: await basicFeatch(`/discover/tv?with_genres=10764&language=pt-br&api_key=${API_KEY}`)

            },



        ];

    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFeatch(`/movie/${movieId}?language=pt-br&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFeatch(`/tv/${movieId}?language=pt-br&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;

            }
        }

        return info;
    }

}




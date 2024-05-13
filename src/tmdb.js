const API_KEY = '5b5d8e837063cacae5bc20dfdb3cd627';
const API_BASE = 'https://api.themoviedb.org/3';

const basitFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
    console.log(json);
}

export default {
    getHomeList: async () => {
        return [
          
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basitFetch(`/discover/tv?with_network=213language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basitFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basitFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basitFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basitFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                origin:'kr',
                title: 'Comédia',
                items: await basitFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    },
    getMovieInfo: async(movieId, type) => {
        let info = {};
        
        if(movieId) {
            switch(type) {

                case 'movie':
                    info = await basitFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basitFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                    break;

            }
            return info;
        }
    }
}

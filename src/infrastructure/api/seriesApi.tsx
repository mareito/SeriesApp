import axios from 'axios';
import {
  API_KEY,
  BASE_URL_IMAGES,
  BASE_URL_DATA,
} from '../../application/constants/enpoints';
import {IPopularResponse} from '../../application/models/responses/IPopularResponse';
import {ISerieDetailResponse} from '../../application/models/responses/ISerieDetailResponse';
import {
  ISerie,
  ISerieDetails,
} from '../../application/models/viewModels/Serie.model';

export const getUrlImageCover = async () => {
  try {
    const {data} = await axios.request({
      baseURL: BASE_URL_DATA,
      url: `popular?api_key=${API_KEY}&language=en-US&page=1`,
      method: 'GET',
    });
    return `${BASE_URL_IMAGES}${data?.results[0].backdrop_path}`;
  } catch (error) {
    console.log('error getUrlImageCover ', error);
    return '';
  }
};

export const getPopularSeries = async (page: number): Promise<ISerie[]> => {
  try {
    const {data} = await axios.request<IPopularResponse>({
      baseURL: BASE_URL_DATA,
      url: `popular?api_key=${API_KEY}&language=en-US&page=${page}`,
      method: 'GET',
    });

    return data.results.map(serie => ({
      id: serie.id,
      name: serie.name,
      overview: serie.overview,
      backdropImage: serie.backdrop_path,
      posterImage: serie.poster_path,
      score: Math.floor(serie.vote_average / 2),
    }));
  } catch (error) {
    console.log('error getPopularSeries ', error);
    return [];
  }
};

export const getRecommendations = async (page: number): Promise<ISerie[]> => {
  try {
    const {data} = await axios.request<IPopularResponse>({
      baseURL: BASE_URL_DATA,
      url: `top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
      method: 'GET',
    });

    return data.results.map(serie => ({
      id: serie.id,
      name: serie.name,
      overview: serie.overview,
      backdropImage: serie.backdrop_path,
      posterImage: serie.poster_path,
      score: Math.floor(serie.vote_average / 2),
    }));
  } catch (error) {
    console.log('error getRecommendations ', error);
    return [];
  }
};

export const getRecent = async (page: number): Promise<ISerie[]> => {
  try {
    const {data} = await axios.request<IPopularResponse>({
      baseURL: BASE_URL_DATA,
      url: `airing_today?api_key=${API_KEY}&language=en-US&page=${page}`,
      method: 'GET',
    });

    return data.results.map(serie => ({
      id: serie.id,
      name: serie.name,
      overview: serie.overview,
      backdropImage: serie.backdrop_path,
      posterImage: serie.poster_path,
      score: Math.floor(serie.vote_average / 2),
    }));
  } catch (error) {
    console.log('error getRecent ', error);
    return [];
  }
};

export const getSerieDetails = async (
  serieId: number,
): Promise<ISerieDetails | undefined> => {
  try {
    console.log({
      baseURL: BASE_URL_DATA,
      url: `${serieId}?api_key=${API_KEY}&language=en-US`,
      method: 'GET',
    });

    const {data} = await axios.request<ISerieDetailResponse>({
      baseURL: BASE_URL_DATA,
      url: `${serieId}?api_key=${API_KEY}&language=en-US`,
      method: 'GET',
    });

    return {
      id: data.id,
      name: data.name,
      overview: data.overview,
      backdropImage: data.backdrop_path,
      posterImage: data.poster_path,
      score: Math.floor(data.vote_average / 2),
      seasons: data.seasons.map(season => ({
        id: season.id,
        episodeCount: season.episode_count,
        seasonNumber: season.season_number,
      })),
    };
  } catch (error) {
    console.log('error getRecent ', error);
    return undefined;
  }
};

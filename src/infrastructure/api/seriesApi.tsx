import axios from 'axios';
import {
  API_KEY,
  BASE_URL_IMAGES,
  BASE_URL_DATA,
} from '../../application/constants/enpoints';
import {IPopularResponse} from '../../application/models/responses/IPopularResponse';
import {ISerieDetailResponse} from '../../application/models/responses/ISerieDetailResponse';
import {IDetailEpisodeResponse} from '../../application/models/responses/IEpisodeResponse';
import {
  ISerie,
  ISerieDetails,
} from '../../application/models/viewModels/Serie.model';
import {IEpisode} from '../../application/models/viewModels/Episode.model';
import {IDetalSeasonsResponse} from '../../application/models/responses/IDetailSeasonsResponse';

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
      numberOfSeasons: data.number_of_seasons,
      seasons: data.seasons.map(season => ({
        id: season.id,
        name: season.name,
        episodeCount: season.episode_count,
        seasonNumber: season.season_number,
      })),
    };
  } catch (error) {
    console.log('error getRecent ', error);
    return undefined;
  }
};

export const getEpisodeDetails = async (
  serieId: number,
  season: number,
  episode: number,
): Promise<IEpisode | undefined> => {
  try {
    const {data} = await axios.request<IDetailEpisodeResponse>({
      baseURL: BASE_URL_DATA,
      url: `${serieId}/season/${season}/episode/${episode}?api_key=${API_KEY}&language=en-US`,
      method: 'GET',
    });

    return {
      airDate: data.air_date,
      name: data.name,
      overview: data.overview,
      voteAverage: data.vote_average,
      guestStar: data.guest_stars.map(guestStar => guestStar.name).join(', '),
      stillpath: data.still_path,
      seasonNumber: data.season_number,
      episodeNumber: data.episode_number,
    };
  } catch (error) {
    console.log('error getEpisodeDetails ', error);
    return undefined;
  }
};

export const getSeasonsEpisodes = async (
  serieId: number,
  season: number,
): Promise<IEpisode[]> => {
  try {
    const {data} = await axios.request<IDetalSeasonsResponse>({
      baseURL: BASE_URL_DATA,
      url: `${serieId}/season/${season}?api_key=${API_KEY}&language=en-US`,
      method: 'GET',
    });

    return data.episodes
      .map(episode => ({
        airDate: episode.air_date,
        name: episode.name,
        overview: episode.overview,
        voteAverage: episode.vote_average,
        stillpath: episode.still_path ? episode.still_path : '',
        seasonNumber: episode.season_number,
        episodeNumber: episode.episode_number,
      }))
      .reverse();
  } catch (error) {
    console.log('error getEpisodeDetails ', error);
    return [];
  }
};

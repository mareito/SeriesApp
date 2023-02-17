export interface EpisodeRecent {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime?: string;
  season_number: number;
  show_id: number;
  still_path?: string;
  vote_average: number;
  vote_count: number;
  crew: string[];
  guest_stars: string[];
}

export interface IDetalSeasonsResponse {
  _id: string;
  air_date: string;
  episodes: EpisodeRecent[];
  name: string;
  overview: string;
  id: number;
  poster_path?: string;
  season_number: number;
}

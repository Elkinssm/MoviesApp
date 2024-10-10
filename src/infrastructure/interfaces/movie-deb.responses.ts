export interface NowPlayingResponse {
  dates: Dates;
  page: number;
  results: Result[];
  totalPages: number;
  totalResults: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: Date;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}


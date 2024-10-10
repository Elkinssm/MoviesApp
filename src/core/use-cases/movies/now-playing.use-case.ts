import {Movie} from '../../entities/movie.entity';
import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '/src/infrastructure/interfaces/movie-deb.responses';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    console.log('Starting fetch for /now_playing');

    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    console.log('Fetch successful:', nowPlaying);

    // Asumiendo que los datos están en nowPlaying.results
    return [];
  } catch (error) {
    console.error('Error fetching get /now_playing:', error);
    throw new Error('Error fetching get /now_playing');
  }
};

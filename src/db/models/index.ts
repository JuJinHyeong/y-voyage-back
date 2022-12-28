import { Sequelize } from 'sequelize';
import { initialize as songInitialize, Song } from './song';
import { Album, initialize as albumInitialize } from './album';
import { initialize as artistInitialize } from './artist';
import { initialize as lyricsInitialize, Lyrics } from './lyrics';
import { Arrange, initialize as arrangeInitialize } from './arrange';
import { Compose, initialize as composeInitialize } from './compose';
import { Genre, initialize as genreInitialize } from './genre';
import { initialize as songRelGenreInitialize, SongRelGenre } from './song_rel_genre';
import { initialize as writeLyricsInitialize, WriteLyrics } from './write_lyrics';

export const initialize = (sequelize: Sequelize) => {
  songInitialize(sequelize);
  albumInitialize(sequelize);
  artistInitialize(sequelize);
  lyricsInitialize(sequelize);
  arrangeInitialize(sequelize);
  composeInitialize(sequelize);
  genreInitialize(sequelize);
  songRelGenreInitialize(sequelize);
  writeLyricsInitialize(sequelize);

  Song.belongsTo(Album, { foreignKey: 'album_id', targetKey: 'id', as: 'album' });
  Lyrics.belongsTo(Song, { foreignKey: 'song_id', targetKey: 'id', as: 'song' });
  Arrange.belongsTo(Song, { foreignKey: 'song_id', targetKey: 'id', as: 'song' });
  Arrange.belongsTo(Song, { foreignKey: 'artist_id', targetKey: 'id', as: 'artist' });
  Compose.belongsTo(Song, { foreignKey: 'song_id', targetKey: 'id', as: 'song' });
  Compose.belongsTo(Song, { foreignKey: 'artist_id', targetKey: 'id', as: 'artist' });
  WriteLyrics.belongsTo(Song, { foreignKey: 'song_id', targetKey: 'id', as: 'song' });
  WriteLyrics.belongsTo(Song, { foreignKey: 'artist_id', targetKey: 'id', as: 'artist' });
  SongRelGenre.belongsTo(Song, { foreignKey: 'song_id', targetKey: 'id', as: 'song' });
  SongRelGenre.belongsTo(Genre, { foreignKey: 'genre_id', targetKey: 'id', as: 'genre' });
};

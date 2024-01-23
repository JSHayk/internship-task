import { Routes, Route } from 'react-router-dom';

import { SongRow } from '../SongPlayer/SongRow';
import { SongList } from '../SongPlayer/SongList';
import { MusicUploadForm } from '../UploadSong/MusicUploadForm';



import { SONG_ROW, SONG_LIST, SONG_UPLOAD } from '../../const/const';

console.log(SONG_LIST)
export function Router() {

  return (
      <Routes>
        <Route path={SONG_ROW} element={<SongRow />} />
        <Route path={SONG_LIST} element={<SongList />} />
        <Route path={SONG_UPLOAD} element={<MusicUploadForm />} />

      </Routes>
  );
}
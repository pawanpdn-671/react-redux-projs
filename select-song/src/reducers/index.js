import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '3:03' },
        { title: 'Company', duration: '3:38' },
        { title: 'Better', duration: '2:20' },
        { title: 'Levitating', duration: '3:28' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({ 
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
var playlist = {
  
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return;
}

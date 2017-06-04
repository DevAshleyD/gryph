import React, {PropTypes} from 'react';
import {some} from 'lodash';

function PlaylistSelect({
  add,
  displaySelect,
  onChange,
  playlist,
  playlistNames,
  playlists,
  remove,
  save,
  video
}) {
  return (
    <div className="form-group form-inline">
      {displaySelect ? (
        <select
          className="form-control"
          value={playlist}
          onChange={(e) => onChange(e.target.value)}
        >
          {playlistNames.map((name, index) => (
            <option value={name} key={index}>{name}</option>
          ))}
        </select>
      ) : null}
      {' '}
      {some(playlists[playlist], {url: video.url}) ?
      (<button
          className="btn btn-danger"
          onClick={() => {
            remove(playlist, video.url);
            setTimeout(() => save(), 1000);
          }}
        >
          Remove
        </button>) : (
        <button
          className="btn btn-default"
          onClick={() => {
            add(playlist, video);
            setTimeout(() => save(), 1000);
          }}
        >
            Add
        </button>)}
    </div>
  );
}

PlaylistSelect.propTypes = {
  add: PropTypes.func.isRequired,
  displaySelect: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  playlist: PropTypes.string.isRequired,
  playlists: PropTypes.object.isRequired,
  playlistNames: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired,
  videos: PropTypes.array.isRequired
};

export default PlaylistSelect;

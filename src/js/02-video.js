import Player from '@vimeo/player';
import throttle from 'lodash';

const player = new Player(document.querySelector('iframe'));

function playtimeSave () {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    })
}

player.on('timeupdate', throttle(playtimeSave, 1000));
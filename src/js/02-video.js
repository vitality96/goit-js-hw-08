import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

const onTimePlay = date => {
    localStorage.setItem("videoplayer-current-time", date.seconds);
    console.log(parseInt(localStorage.getItem("videoplayer-current-time")));
};

player.on('timeupdate', throttle(onTimePlay, 1000));


player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});



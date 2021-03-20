import React, {useState, useEffect, useRef} from 'react'
import PlayerDetails from "./PlayerDetails"
import PlayerControls from "./PlayerControls"

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if(forwards){
            props.setCurrentSongIndex(()=> {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        }else{
            props.setCurrentSongIndex(()=> {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    }
    return (
        <div className="c-player"> 
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}  autoPlay></audio>
            <h4>En cours de lecture</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />

             <p><strong>Prochain: </strong> {props.songs[props.nextSongIndex].title}<br /><br /> <small style={{textAlign: 'center'}}>Made with<span style={{color: 'red'}}> ❤</span> by <a href="" > ESTHER</a></small></p> 
        </div>
    )
}

export default Player

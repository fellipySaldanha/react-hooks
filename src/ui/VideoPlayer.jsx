import React, { useRef, useEffect, useState } from 'react';
import {TimeService} from '../data/services/TimeService';

const _selectedVideo = {
        id: 1,
        title:"City",
        duration: 20,
        url:"https://storage.coverr.co/videos/lcGm59E00q5uzDUiDP5WHgPvZQVVw02BB3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg3ODU0MDQxfQ.wA6-_2TFGtae2daJUZnurFOFmANLutaLMM26AvpqMIY",
        cover: "https://storage.coverr.co/thumbnails/coverr-cinematic-empty-street-in-argentina-1587757179229"
}

export default function VideoPlayer(){

    const video = _selectedVideo;
    const videoRef = useRef();
    const progressTimer = useRef();
    const [isPlaying, setPlay] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const videoElement = videoRef.current;        
        videoElement.addEventListener('play', play);
        videoElement.addEventListener('pause', pause);
        videoElement.addEventListener('seeked', onProgress);
        setTime(0);
        pause();

        return () => {
            videoElement.removeaddEventListener('play', play);
            videoElement.removeaddEventListener('pause', pause);
            videoElement.removeaddEventListener('seeked', onProgress);
        }
        
    }, [video]);

    useEffect(()=>{
        clearInterval(progressTimer.current);
        if (isPlaying) {
            progressTimer.current = setInterval(onProgress, 1000);
        }
    }, [isPlaying]);

    function play(){
        videoRef.current.play();
        setPlay(true);
    }

    function pause(){
        videoRef.current.pause();
        setPlay(false);
    }

    function onProgress(){
        setProgress(videoRef.current.currentTime);
    }

    function onChangeProgress(event){
        setTime(event.target.value);
    }

    function setTime(time){
        videoRef.current.currentTime = time;
        onProgress();
    }

    return(
        <div className='video-player'>
            <video src={video.url} ref={videoRef}/>

            {video.url && (
                <>
                    <div className='controls'>
                        <button onClick={isPlaying ? pause : play}> {isPlaying ? '||' : '|>'} </button>
                        <span>{TimeService.formatTime(Math.round(progress))} / {TimeService.formatTime(video.duration)}</span>
                        <input type='range' onChange={onChangeProgress} value={progress} min={0} max={video.duration} step={0.1}></input>
                    </div>
                    <h2>{video.title}</h2>
                </>
            )}

            
        </div>
    );

}
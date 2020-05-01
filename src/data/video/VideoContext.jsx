import React, {createContext} from 'react';

const _state = {
    selectedVideo : {
        id: 1,
        title:"City",
        duration: 20,
        url:"https://storage.coverr.co/videos/lcGm59E00q5uzDUiDP5WHgPvZQVVw02BB3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg3ODU0MDQxfQ.wA6-_2TFGtae2daJUZnurFOFmANLutaLMM26AvpqMIY",
        cover: "https://storage.coverr.co/thumbnails/coverr-cinematic-empty-street-in-argentina-1587757179229"
    },
    videos: [
        {
            id: 1,
            title:"City",
            duration: 20,
            url:"https://storage.coverr.co/videos/lcGm59E00q5uzDUiDP5WHgPvZQVVw02BB3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg3ODU0MDQxfQ.wA6-_2TFGtae2daJUZnurFOFmANLutaLMM26AvpqMIY",
            cover: "https://storage.coverr.co/thumbnails/coverr-cinematic-empty-street-in-argentina-1587757179229"
        },
        {
            id: 2,
            title:"City",
            duration: 20,
            url:"https://storage.coverr.co/videos/lcGm59E00q5uzDUiDP5WHgPvZQVVw02BB3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg3ODU0MDQxfQ.wA6-_2TFGtae2daJUZnurFOFmANLutaLMM26AvpqMIY",
            cover: "https://storage.coverr.co/thumbnails/coverr-cinematic-empty-street-in-argentina-1587757179229"
        },
        {
            id: 3,
            title:"City",
            duration: 20,
            url:"https://storage.coverr.co/videos/lcGm59E00q5uzDUiDP5WHgPvZQVVw02BB3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg3ODU0MDQxfQ.wA6-_2TFGtae2daJUZnurFOFmANLutaLMM26AvpqMIY",
            cover: "https://storage.coverr.co/thumbnails/coverr-cinematic-empty-street-in-argentina-1587757179229"
        }
    ]
};

export const videoStore = createContext(_state);
const {Provider} = videoStore;

export function VideoContext(props){
    return (
        <Provider value={[_state]}>
            {props.children}
        </Provider>
    )
}
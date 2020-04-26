import React, { useState } from 'react';

export default function NewVideoForm (){
    
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [url, setUrl] = useState('');
    const [cover, setCover] = useState('');
    
    function save(){
        const newVideo = {
            title,
            duration,
            url,
            cover
        };
        reset();
    }

    function reset(){
        setTitle('');
        setDuration('');
        setUrl('');
        setCover('');
    }

    return(
        <div className='form'>
            <label>Titulo:</label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
           
            <label>Titulo:</label>
            <input type='text' value={duration} onChange={(event) => setDuration(event.target.value)}/>

            <label>Titulo:</label>
            <input type='text' value={url} onChange={(event) => setUrl(event.target.value)}/>

            <label>Titulo:</label>
            <input type='text' value={cover} onChange={(event) => setCover(event.target.value)}/>

            <button onClick={save}>Salvar</button>
        </div>
    );
}
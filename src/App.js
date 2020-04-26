import React from 'react';
import './App.css';
import VideoList from './ui/VideoList';
import NewVideoForm from './ui/NewVideoForm'; 

function App() {
  return (
    <div className="App">
     <VideoList/>
    <NewVideoForm/>
    </div>
  );
}

export default App;

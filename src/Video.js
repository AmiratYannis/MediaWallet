import React from "react";
import "./Videos.css";

const Video = ({video}) =>{
    console.log(video);
    var linkChannelYoutube="https://www.youtube.com/channel/"+video.snippet.channelId;
    var linkVideo="https://www.youtube.com/watch?v="+video.id;

    return (
        <div className="card cardYoutube">
            <img className="card-img-top" src={video.snippet.thumbnails.high.url}/>
		    <div className="card-body"> <div id="titleYoutube"><h4>{video.snippet.title}</h4></div>
			<div id="channel"><a id="chaine" href={linkChannelYoutube}>{video.snippet.channelTitle}</a></div>
			<div id="descYoutube"><p><b>description vidéos: </b>{video.snippet.description}</p></div>
			<a className={"SeeVideos videos-"+video.id} href={linkVideo}>VOIR LA VIDEO</a></div> 
        </div>
    );
}

export default Video;
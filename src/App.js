import React,{useState,useEffect} from 'react';
import axios from "axios";
import Video from './Video';

import './App.css';

const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=FR&key=AIzaSyBs_luxs6WTBecj3yCXDe8ECEAiWkvBGIY";

function App() {

  const [loading, setLoading] = useState(true);
  const [popularVideos, setPopularVideos] = useState([]);
  const [searchVideosResults,setSearchVideos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

    

  useEffect(() => {
      axios.get(YOUTUBE_API_URL)
      .then((res)=>setPopularVideos(res.data.items));
  }, []);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
  }

  const search=(e)=>{

    e.preventDefault();
   
   
    
    setSearchVideos([]);
    
    axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+searchValue+"&key=AIzaSyBs_luxs6WTBecj3yCXDe8ECEAiWkvBGIY")
    .then((res)=>setSearchVideos(res.data.items))
    
  }


  return (
    <div className="mediaWallet">
      <div id="head"> 		   	  	  				  
 		   	  	  				  
        <h1 id="title" onClick={(e)=>window.location.reload()} >MEDIA WALLET</h1> 
        <div className="search"> 		   	  	  				  		   	  	  				  
          <label> Rechercher un contenu </label> 		   	  	  			
          <input  id="contenu" 
                  type="text" name="contenu" 
                  value={searchValue}
                  onChange={handleSearchInputChanges} /> 		   	  	  				  
          <button id="btnSearch" onClick={search}>Search</button> 		   	  	  				  
        </div>    	  	  				  
                                                 
      </div>

      <div id="home">
        <div id="result"> 	   	  	  				  
            <div id="youtube">
              {searchVideosResults
              .map((video,index)=>(
                <Video key={index} video={video}/>
              ))

              }
            </div> 		   	  	  				   	   	  	  				  
        </div> 	

        <div id="incontournables"> 		   	  	  				  
                          
          <h3> Videos populaires du moments </h3> 		   	  	  				  
          <div class="YouTube"> 		   	  	  				  
             {popularVideos
             .map((video,index)=>(
              <Video key={index} video={video}/>
             ))

             }                                           
          </div> 		   	  	  				  
                            
        </div> 		
      </div>
         	 
    </div>
    
    
 
  );
}

export default App;

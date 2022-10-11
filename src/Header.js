import React from "react";
import "./Header.css"

const Header =() =>{
    return (
        <div id="head"> 		   	  	  				  
 		   	  	  				  
            <h1 id="title" onclick="window.location.reload();">MEDIA WALLET</h1> 		   	  	  				  
            <div className="search"> 		   	  	  				  
            <label>Type de contenu recherché</label> 		   	  	  				  
                <select id="typeSearch"> 		   	  	  				  
                    <option>youtube</option> 		   	  	  				  		   	  	  				  
                </select> 		   	  	  				  
                <label> Rechercher un contenu </label> 		   	  	  				  
                <input id="contenu" type="text" name="contenu"/> 		   	  	  				  
                <button id="btnSearch" onclick="clickSearch()">Search</button> 		   	  	  				  
            </div> 		   	  	  				  
        </div>
    );

};

export default Header;

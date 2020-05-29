// import react 
import React from 'react';
const Mainlist = (props)=>
{

const {showAlbums,showSettings,showPlaylists,showGames}=props.state;
return(
<div className="main-screen">
    <h1 style={{fontWeight:"bold",fontSize:"1.5rem",textAlign:"center"}}>Ipod.js</h1>
<ul> 
{/* <li className={`${props.showAlbums}? "active":null`}>Albums</li> */}
<li className={`${showAlbums ? "active" : ""}`}>Albums</li>
<li className={`${showSettings ? "active" : ""}`}>Settings</li>
<li className={`${showPlaylists ? "active" : ""}`}>Playlists</li>
<li className={`${showGames ? "active" : ""}`}>Games</li>


{/* <li className={`${props.showSettings}? "active":null` }>
 Settings</li>
<li className={`${props.showPlaylists}? "active":null`}> Playlists</li>
<li className={`${props.showGames}? "active":null`}> Games</li> */}
</ul>
</div>
);
}

export default Mainlist;
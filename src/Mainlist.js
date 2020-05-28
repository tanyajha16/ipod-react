// import react 
import React from 'react';
import './Mainlist.css';
function Mainlist(props)
{
return(
<div className="main-screen">
    <h1 style={{fontWeight:"bold",fontSize:"1.5rem",textAlign:"center"}}>Ipod.js</h1>
<ul> 
<li className={`${props.showAlbums}? "active":null`}>Albums</li>
<li className={`${props.showSettings}? "active":null` }> Settings</li>
<li className={`${props.showPlaylists}? "active":null`}> Playlists</li>
<li className={`${props.showGames}? "active":null`}> Games</li>
</ul>
</div>
);
}
export default Mainlist;
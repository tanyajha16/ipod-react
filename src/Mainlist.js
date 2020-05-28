// import react 
import React from 'react';
function Mainlist(props)
{
return(
<div className="main-screen">
    <h1 style={{fontWeight:"bold",fontSize:"1.5rem",textAlign:"center"}}>Ipod.js</h1>
<ul>
   
{props.showAlbums == true ?
         <li style={styles}>Albums</li>:<li >Albums</li>
}
{props.showSettings ===true ?
  <li style={styles}>Settings</li>:<li >Settings</li>
}
{props.showPlaylists ===true ?
  <li style={styles}>Playlists</li>:<li >Playlists</li>
}
{props.showGames ===true ?
  <li style={styles}>Games</li>:<li >Games</li>
}
{/* <li> Settings</li>
<li> Playlists</li>
<li> Games</li> */}
</ul>


</div>
);
}
const styles={
    backgroundColor:"lightblue"

}
export default Mainlist;
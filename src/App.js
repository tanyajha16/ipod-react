// import react 
import React from 'react';

// using the mainlist page here
import MainList from'./Mainlist';

// importing different pages
import Albums from './Albums';
import Playlists from './Playlists';
import Games from'./Games';
import Settings from './Settings';

// using zing touch 
import ZingTouch from 'zingtouch';



class App extends React.Component {
constructor()
{
super();

// making one state as default true that is the first one
this.state=
{
     showAlbums:true,
     showSettings:false,  
     showPlaylists:false,
     showGames:false,
     showLists:true
}
}

// function for zing touch rotate function
rotatewheel=(e)=>
{
  const context=this;
var currentAngle = 0;
var target = document.getElementsByClassName('rotate-buttons');
var region = new ZingTouch.Region(e.target);
region.bind(e.target,'rotate', function(e) {
  currentAngle += e.detail.distanceFromLast;
  
  console.log("context",context);
  if(currentAngle>5 && currentAngle <=105)
  {
    context.setState({showAlbums:false,
      showSettings:true,  
      showPlaylists:false,
      showGames:false})
      console.log("context",context);
      
     
    
  }
  else if(currentAngle >105 && currentAngle<=184)
  {
    context.setState({
      showAlbums:false,
      showSettings:false,  
      showPlaylists:true,
      showGames:false,
      
    })
  }
  else if(currentAngle>184 && currentAngle<=283)
  {
    context.setState({
      showAlbums:false,
      showSettings:false,  
      showPlaylists:false,
      showGames:true,
    })
  }
  else if(currentAngle>275 && currentAngle<=360)
  {
    context.setState({
      showAlbums:true,
      showSettings:false,  
      showPlaylists:false,
      showGames:false,
      
    })
  }
  else if(currentAngle<0 && currentAngle>=-115)
  {
    context.setState({
      showAlbums:false,
      showSettings:false,  
      showPlaylists:false,
      showGames:true,
      
    })
  }
  else if(currentAngle<-116 && currentAngle>=-219)
  {
    context.setState({
      showAlbums:false,
      showSettings:false,  
      showPlaylists:true,
      showGames:false,
      
    })
  }
 else if(currentAngle<-219 && currentAngle>=-298)
  {
    context.setState({
      showAlbums:false,
      showSettings:true,  
      showPlaylists:false,
      showGames:false,
      
    })
  }
  else if(currentAngle<-298 && currentAngle>=-359)
  {
    context.setState({
      showAlbums:true,
      showSettings:false,  
      showPlaylists:false,
      showGames:false,
      
    })
  }
});

// handle click on the onclick and make the showlists true or false
}
handleOnClick = () => {
  this.setState({ showLists: false });
};
handleOffClick=() =>
{
  this.setState({ showLists: true});
};
checkActiveMenu =() =>
{
 
}

render()
{
 const {showAlbums,showSettings,showPlaylists,showGames,showLists}=this.state;
 console.log("state",this.state);
 

return (
<div className="App">
{/* div for the whole screen */}

<div className="screen">

{/* making the logic for the onclick function it will show one screen at a time */}
<div className="show-screen">
{showLists ?<MainList state={this.state}/> :( showAlbums ?<Albums /> : (showSettings ? <Settings /> : (showGames ? <Games />:<Playlists/>)))}
</div>

{/* div for the buttons section */}
<div className="rotate-buttons" onClick={this.rotatewheel}>

<div className="menu" onClick ={this.handleOffClick} >
<img src="https://toppng.com/uploads/preview/square-svg-icon-free-menu-icon-sv-11563649031azv921gf4z.png" 
style={{width:40,height:40}} 
/>
</div>

<div className="left">
<img src="https://www.svgrepo.com/show/98533/double-left-arrows-angles.svg"
style={{width:40,height:40}}
/>
</div>

<div className="right">
<img src ="https://image.flaticon.com/icons/svg/37/37593.svg"
style={{width:40,height:40}}/>
</div>

<div className="bottom">
<img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_play_arrow_48px-512.png"
style={{width:40,height:40}} />
<img src="https://simpleicon.com/wp-content/uploads/pause.svg" style={{width:40,height:40}} />
</div>
</div>

{/* handling the inner div */}
<div className="inner-div"
 onClick={this.handleOnClick}>
</div>
</div>
</div>
);
}
}

export default App;

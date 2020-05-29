// import react 
import React from 'react';
// using the mainlist page here
import MainList from'./Mainlist';
import Albums from './Albums';
// using zing touch 
import ZingTouch from 'zingtouch';
// using css for app
import './App.css';
class App extends React.Component {
constructor()
{
super();
this.state=
{
     showAlbums:true,
     showSettings:false,  
     showPlaylists:false,
     showGames:false,
     showLists:true
}
}
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
  else if(currentAngle>283 && currentAngle<=360)
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

console.log("printing e in rotatewheel",e.target);
}
render()
{
 const {showAlbums,showSettings,showPlaylists,showGames,showLists}=this.state;
 console.log("state",this.state);
 
return (
<div className="App">
{/* div for the whole screen */}
<div className="screen">
<div className="show-screen">
{`${showLists ?<MainList state={this.state}/> :<Albums />}`}

</div>
{/* div for the buttons section */}
<div className="rotate-buttons" onClick={this.rotatewheel}>
<div className="menu"  >
{/* <img src="https://toppng.com/uploads/preview/square-svg-icon-free-menu-icon-sv-11563649031azv921gf4z.png" 
style={{width:40,height:40}} 
/> */}
</div>
<div className="left">
{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIkcDdC3ylacc_W_K9aXXjJL8qnwT8sswuad0zz5xvGzfupGrU&usqp=CAU"
style={{width:40,height:40}}
/> */}
    </div>
    <div className="right">
    {/* <img src ="https://image.flaticon.com/icons/svg/54/54366.svg"
    style={{width:40,height:40}}/> */}
    </div>
    <div className="bottom">
    
</div>
</div>
<div className="inner-div"
 onClick={this.setState({
   showlists:false
 })
}
>
</div>
</div>
</div>

);
}
}

export default App;

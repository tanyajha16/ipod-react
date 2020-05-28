// import react 
import React from 'react';
// using the mainlist page here
import MainList from'./Mainlist';
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
}
}
rotatewheel=(e)=>
{
var currentAngle = 0;
var target = document.getElementsByClassName('rotate-buttons');
var region = new ZingTouch.Region(e.target);
region.bind(e.target,'rotate', function(e) {
  currentAngle += e.detail.distanceFromOrigin;
  if(currentAngle>5 && currentAngle <= 95)
  {
    this.setState={
      showAlbums:false,
      showSettings:true,  
      showPlaylists:false,
      showGames:false,
     
    }
  }
  if(currentAngle >95 && currentAngle<=184)
  {
    this.setState={
      showAlbums:false,
      showSettings:false,  
      showPlaylists:true,
      showGames:false,
      
    }
  }
  if(currentAngle>184 && currentAngle<=283)
  {
    this.setState={
      showAlbums:false,
      showSettings:false,  
      showPlaylists:false,
      showGames:true,
    }
  }
  if(currentAngle>283 && currentAngle<=360)
  {
    this.setState={
      showAlbums:true,
      showSettings:false,  
      showPlaylists:false,
      showGames:false,
      
    }
  }
  if(currentAngle<0 && currentAngle>=-115)
  {
    this.setState={
      showAlbums:false,
      showSettings:false,  
      showPlaylists:false,
      showGames:true,
      
    }
  }
  if(currentAngle<-116 && currentAngle>=-219)
  {
    this.setState={
      showAlbums:false,
      showSettings:false,  
      showPlaylists:true,
      showGames:false,
      
    }
  }
  if(currentAngle<-219 && currentAngle>=-298)
  {
    this.setState={
      showAlbums:false,
      showSettings:true,  
      showPlaylists:false,
      showGames:false,
      
    }
  }
  if(currentAngle<-298 && currentAngle>=-359)
  {
    this.setState={
      showAlbums:true,
      showSettings:false,  
      showPlaylists:false,
      showGames:false,
      
    }
  }


  
  
});
// if(currentAngle > 0 && currentAngle >15)
// {
// this.setState={index:this.index+1};
// console.log(this.state.index);
// }
// else if(currentAngle<0)
// {
// if(index===1)
// {
// this.setState={index:this.index};
// console.log(this.state.index);
// }
// else
// {
// this.setState={index:this.index-1};
// console.log(this.state.index);
// }
// }
// });
console.log("printing e in rotatewheel",e.target);
}

render()
{
return (
<div className="App">
{/* div for the whole screen */}
<div className="screen">
<div className="show-screen">
<MainList state={this.state}
/>
console.log(this.state);
</div>
{/* div for the buttons section */}
<div className="rotate-buttons" onClick={this.rotatewheel}>
<div className="menu">
<img />
</div>
<div className="left">
<img src=""/>
    </div>
    <div className="right">
    
    </div>
    <div className="bottom">
    
</div>
<div className="inner-div">
</div>
</div>
</div>
</div>
);
}
}

export default App;

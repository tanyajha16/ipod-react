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
     showMusic:true,
     showGame:false,  
      // active_menu:
}
}
rotatewheel(e)
{
// var currentAngle = 0;
// var index=1;
// var target = document.getElementsByClassName('rotate-buttons');
// console.log(e.target);   // what is this target kaha se mil raha hai ye wait calling u ok
// var region = new ZingTouch.Region(e.target);
// region.bind(e.target,'rotate', function(e) {
// currentAngle += e.detail.distanceFromLast;
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
console.log("printing e in rotatewheel",e);
}
handleclick=(e)=>
{
  this.rotatewheel(e);
  console.log("printing e in handleclick",e);
  
}
render()
{
return (
<div className="App">
{/* div for the whole screen */}
<div className="screen">
<div className="show-screen">
<MainList
// index={this.state.index} 
/>
</div>
{/* div for the buttons section */}
<div className="rotate-buttons" onClick={this.handleclick}>
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

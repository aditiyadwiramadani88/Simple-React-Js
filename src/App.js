import React  from 'react';
import './App.css';


// menggunaakan promps 
class Myblog extends React.Component{
  render(){
      const w = this.props.name
  return <h1>hello kawanku {w}</h1>
  }
}
function  Myapp(proms) {
return <p>hello promp {proms.name}</p>
}

// Mengekstraksi Komponen promps
function Avatar(promp) {
  return (
    <a href={promp.user.name}>jj</a>
  )
}

function Aptlib(promp) {
  return (
    <div>
      <Avatar  user={promp.name} />
    </div>
  )
}
//  menyusun komponen di promps
function App() {
  return( 
  <div>
<Myblog name="teman sejati" />
<Myapp name="joni" />

<Myblog name="armadan" />
<Aptlib name='aditiya' urimg='https://' />
  </div>
  )
}








export default App;

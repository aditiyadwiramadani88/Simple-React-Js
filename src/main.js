import React, { Fragment } from "react";
import  "./App.css";

// komposisi vs pewaris 


function Myjon(promp) {
    return(
    <div>
   <div className="jon">
       {promp.nama}
   </div>
   <div className="ni">
       {promp.email}

   </div>
    </div>
    )
}

function Node() {
    return(
        <button>submit</button>
    )
}
function MAn() {
    return(
      <Myjon 
       nama={
           <Node /> 
       }
       email={ 
           <Node /> 
       }
      /> 
    )
}
function ListItem({item}) {
    return(
<Fragment > 
<li>{item.name}</li>
    </Fragment >
    )
}
function Game(promp) {
    return( 
        <ul> 
            {promp.data.map(i => (
                <ListItem item={i} key={i.id}/> 
            ))}
        </ul>
    )
} 
//  remder mo promps 
function ListData({item}) {
    return(
        <>
          <li>{item.name}</li>
        </>
    )
}


//  focus event 
class Forum extends React.Component{ 
    constructor(props){ 
        super(props) 
        this.TextI = React.createRef()
    }
    componentDidMount(){ 
        this.TextI.current.focus()
    }
    render(){ 
        return ( 
            <input
                type="text" 
                ref={this.TextI}
            />
        )
    }
}


// constex
const Contex_theme = React.createContext('light')
const w = Contex_theme.displayName = "the rain"
console.log(w)

class Cmaster extends React.Component { 
render(){ 
    return ( 
        <div>

        <Contex_theme.Provider value="dark" >
            <Navbar />
        </Contex_theme.Provider>
    <Contex_theme.Consumer>
  {value => 
  value
  }
</Contex_theme.Consumer>   
            <Contex_theme.Provider></Contex_theme.Provider>
        </div>
     )
    }
}
 function Navbar() {
     return ( 
         <div> 
             <Themabutton />
         </div>
     )
}
 class Themabutton extends React.Component{ 
     static contextType = Contex_theme
     render(){ 
         return <button className={this.context}>Buttpn</button>
 }
}

             
export {Game, ListData, Forum, Cmaster, MAn}





import React  from "react";
import './main.css'

class LArgeImage extends React.Component{ 
    render(){ 
        return(
        <div className="df">
                { this.props.img ? <img src={this.props.img} className="larim" /> : <img src="img2.jpg" className="larim" /> }
              
        </div>
        )
    }
}

class ImageSer extends React.Component{ 
     constructor(prompt){
         super(prompt);
         this.state ={img: undefined}
     }
    ImageLarge = (img1) => {
        this.setState(state => ({
            img: img1
        }));
    }
    render(){
        return(
            <div>
     <LArgeImage img={this.state.img} /> 
            <div className="container1">
                {this.props.data.map(data => (
                <div className="ccv" onClick={this.ImageLarge.bind(this, data.image1)}>
                <img src={data.image1} className="image"/> 
                </div>
                ))}
               
            </div>
            <div className="container1">
                    {this.props.data.map(data => (
                        <div className="ccv">
                            <img src={data.image1} className="image" />
                        </div>
                    ))}
            </div>
            </div>
        )
    }
}

const image = [
    { image1: 'img1.jpg' },
    { image1: 'img2.jpg' },
    { image1: 'img1.jpg' },
]




function App() {
    return(
        <div  className="foto">
            <ImageSer data={image} />
        </div>
            
    )
}

export default App
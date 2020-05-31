import React,{Component} from 'react';
import Header from './header';
import axios from 'axios';
const url="http://localhost:8900/zomato";

class Zomatodetails extends Component{
    constructor(){
        super()
         this.state={
             details:''
         }
    }
    render(){
        const mydetails = this.state.details;
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                    
                        <h3>{mydetails.name}</h3>
                        <img src={mydetails.thumb} alt={mydetails.id}/>
                         <h1>{mydetails.city}</h1>
        <h2>{mydetails.locality}</h2>
        <h2>{mydetails.aggregate_rating}</h2>
        <h3>{mydetails.rating_text}</h3>
                        </div>
                    </div>

                </div>
                        
                        
                       
        
        )
    }
    componentDidMount(){
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({details:response.data})
        })
    }

}
export default Zomatodetails
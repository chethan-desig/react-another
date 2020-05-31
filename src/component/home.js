import React, {Component,Fragment} from 'react';

import Baneer from './banner';
import Zomato from './zomato';

const url="http://localhost:8900/zomato";
class Home extends Component{
    constructor(){
        super()
        this.state={
            Zomato:''

        

    }

    }
    
    render(){
        return(
            <Fragment>
                <Baneer/>
                <Zomato zomatodata={this.state.zomato}/>
            </Fragment>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({zomato:data})
        
        })
    }
}
export default Home
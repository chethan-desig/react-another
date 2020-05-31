import React from 'react';
import {Link} from 'react-router-dom';

const url="http://localhost:8900/zomato";



const Zomatolist =(props)=>{

    const renderlist =({zomatodata})=>{
        if(zomatodata){
            return zomatodata.map((item)=>{
               
                return(
                    <Link to={`/zomato/${item.id}`} >
                        
                        <div>{item.name}</div>

                        <img src={item.imageUrl} alt={item.id}/>
                        
                    </Link>
                )
            })
        }
       
    }
    
    
    return(
        <div className="artistlist">
            <h4>List of zomato</h4>

            {renderlist(props)}

        </div>
    )

    
}
export default Zomatolist
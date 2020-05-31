import React,{Fragment} from 'react';
import{BrowserRouter,Route} from 'react-router-dom';
import Home from './home';
import Zomatodetails from './zomatodetails'

const Router =() =>{
    return(
        <Fragment>
              <BrowserRouter>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/Zomato/:id" component={Zomatodetails}/>
        </BrowserRouter>
        </Fragment>
      
    )
}
export default Router;
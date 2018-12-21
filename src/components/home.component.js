import React , {Component} from 'react';
import logo from '../image/header.png' ;
import SimpleSlider from '../components/slider.js';


export default class Home extends Component {

     render(){
           return (
                <div class="container ">
                
                  <div class="row" > 

                    <div class="col-sm shadow-lg p-3 mb-7 bg-white rounded" > 
                      <img class= "img-fluid" src={logo}  alt="Header" />
                    </div>

                    <div class="col-sm shadow-lg p-3 mb-7 bg-white rounded" >
                      <SimpleSlider></SimpleSlider>
                    </div>
                     
                  </div>  
                   </div>
                
           ) 



     }





}
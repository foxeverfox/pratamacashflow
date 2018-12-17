import React , {Component} from 'react';
import logo from '../image/header.png' ;


export default class Home extends Component {

     render(){
           return (
                <div class="container ">
                
                  <div class="row" > 

                  <div class="col-sm shadow-lg p-3 mb-7 bg-white rounded" > 

                    <img class= "img-fluid" src={logo}  alt="Header" />

                  </div>
                    <div class="col-sm shadow-lg p-3 mb-7 bg-white rounded" > 
                    Cash flow management is the process of tracking how much money is coming into and going out of your business. This helps you predict how much money will be available to your business in the future. It also helps you identify how much money your business needs to cover debts, like paying staff and suppliers.
                        Cash flow is the term used to describe changes in how much money your business has from one point to another. Cash flow management is keeping track of this flow and analysing any changes to it. This helps you spot trends, prepare for the future, and tackle any problems with your cash flow.
                        It pays to practice cash flow management often to make sure your business has enough money to keep running.              
                    

                    </div>  
                   </div>
                </div>   
           ) 



     }





}
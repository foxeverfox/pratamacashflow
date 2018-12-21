import React , {Component} from 'react';



export default class CreateInvoice extends Component {

     render(){
           return (
            <div class="ibox"> 

                <div class="ibox-title">
                    <h5>New Expense Estimation </h5>
                </div>
                    
                <div class="ibox-content">
                    <div class="row">
                        <div class="col-sm-6 b-r">
                                <form role="form">
                                    <div class="form-group">
                                        <label>Date of Transaction</label> 
                                        <input type="email" placeholder="Enter email" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label> 
                                       <input type="text" placeholder="Password" class="form-control"/>
                                    </div>

                                    <div class="form-group">
                                        <label>Estimation Expense (Rp)  </label> 
                                        <input type="text" placeholder="0" class="form-control"/>
                                    </div>

                                    <a href="#" class="btn btn-primary btn-lg " tabindex="-1" role="button" aria-disabled="true">Save</a>
                                    

                                </form>




                        </div>

                      

                    </div>
                </div>
                
             </div>   );
     }
    }




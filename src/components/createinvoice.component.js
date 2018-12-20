import React , {Component} from 'react';


export default class CreateInvoice extends Component {

     render(){
           return (
            <div>
                <div> New Invoice </div>
                    <div class="container">
                        <label>Transaction Date:</label>
                        <input type="text" className="form-control" id="f_trxdate" />

                        <button>OK</button>
                    </div>              
             </div>   );
     }
    }
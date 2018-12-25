import React , {Component} from 'react';
import NumberFormat from 'react-number-format';
import firebase from './database';

export default class CreateInvoice extends Component {


    constructor(){

        super();

        this.ref =firebase.firestore().collection('invoice');
        
            this.state = {
             noinvoice:'',
             deskripsi:'',
             tglinvoice:'' ,
             estimasi:'' ,
             userinput:''
        };
    }    
    simpan = (e) => {

        e.preventDefault();
        
        const {noinvoice,deskripsi , tglinvoice ,estimasi } = this.state;

        this.ref.add({
            noinvoice,
            deskripsi,
            tglinvoice ,
            estimasi 
          }).then((docRef) => {
            this.setState({
              noinvoice: '',
              deskripsi: '',
              tglinvoice: '',
              estimasi:'' 
            });
            this.props.history.push("/invoicelist")
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

    }
    onChange = (e) => {

        const state = this.state;

        state[e.target.name] =e.target.value;
        this.setState(state);

    }

    onChange2 = (values) => {
       
        this.setState({estimasi:values.floatValue})

    }

     render(){
           return (
            <div className="ibox"> 

                <div className="ibox-title">
                    <h5>New Expense Estimation </h5>
                </div>
                    
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-sm-6 b-r">
                                <form role="form"  onSubmit = {this.simpan}>
                                    <div className="form-group">
                                        <label>Date of Transaction</label> 
                                        <input type="date" name="tglinvoice" placeholder="Tanggal Transaksi" className="form-control" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label> 
                                       <textarea type="text" name="deskripsi"   placeholder="Deskripsi" rows = '5' className="form-control" onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>No Bill of Lading </label> 
                                        <input type="text" name="noinvoice" placeholder="#bill of lading" className="form-control" onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Estimation Expense (Rp)  </label> 
                                        <NumberFormat thousandSeparator={true} prefix={'Rp. '} value={this.state.estimasi.value}  onValueChange={this.onChange2}
                                          isNumericString = {true}  name="estimasi" className ="form-control" />
                                    </div>

                                    <button type="submit" className="btn btn-success">Save</button>

                                </form>
                        </div>
                    </div>
                </div>
                
             </div>   );
     }
    }




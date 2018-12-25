import React , {Component} from 'react';
import NumberFormat from 'react-number-format';
import firebase from './database';
import {getNewID} from  '../generic.js'
import moment from 'moment'

export default class CreateFundRequest extends Component {



    constructor(){

        super();

        this.ref =firebase.firestore().collection('fundrequest');
        
            this.state = {
                norequest:'',
                tglrequest:'',
                request_note:'',
                request_inputdate:'',
                approvalrequest_inputdate:'',
                nominal:'',
                fullfill_date:'',
                fullfill_note:'',
                fullfill_inputdate:'',
                paymentconfirm_inputdate:'',
                payback_date:'',
                payback_note:'',
                payback_inputdate:'',
                status_dokumen:'' ,
                noinvoice  :'' ,
                isButtonDisabled: false            
        };
    }    
    simpan = (e) => {

        e.preventDefault();
        
        this.setState({isButtonDisabled:true});

        let  {norequest	,tglrequest	,request_note,request_inputdate,	approvalrequest_inputdate,	nominal,	
            fullfill_date	,fullfill_note	,fullfill_inputdate,	paymentconfirm_inputdate,payback_date,
             payback_note,	payback_inputdate,	status_dokumen ,noinvoice    } = this.state;
        
        
             getNewID('REQUEST' , function (newID){
                console.log("NEW ID", newID)  
                let tgl = tglrequest;
                let norequest ="RQ/"+moment(tgl).format('YYYY') +"/"+newID.toString() ;


                request_inputdate= new Date() ;
                status_dokumen = '1';
                let dbref =firebase.firestore().collection('fundrequest');
                dbref.add({norequest	,tglrequest	,request_note,request_inputdate,	approvalrequest_inputdate,	nominal,	
                   fullfill_date	,fullfill_note	,fullfill_inputdate,	paymentconfirm_inputdate,payback_date,
                    payback_note,	payback_inputdate,	status_dokumen ,noinvoice  }
                              
                   ).then((docRef) => {
                   
                 })
                 .catch((error) => {
                   console.error("Error adding document: ", error);
                 });

               });
               
               
               

            
               this.props.history.push("/fundrequestlist")

        

    }
    onChange = (e) => {

        const state = this.state;

        state[e.target.name] =e.target.value;
        this.setState(state);

    }

    onChange2 = (values) => {
       
        this.setState({nominal:values.floatValue})

    }

     render(){
           return (
            <div className="ibox"> 

                <div className="ibox-title">
                    <h5>New Fund Request </h5>
                </div>
                    
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-sm-6 b-r">
                                <form role="form"  onSubmit = {this.simpan}>

                                    <div className="form-group">
                                        <label>No Bill of Lading </label> 
                                        <input type="text" name="noinvoice" placeholder="#bill of lading" className="form-control" onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Date of Request</label> 
                                        <input type="date" name="tglrequest" placeholder="Tanggal Request" className="form-control" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label> 
                                       <textarea type="text" name="request_note"   placeholder="Deskripsi" rows = '5' className="form-control" onChange={this.onChange}/>
                                    </div>
                                   

                                    <div className="form-group">
                                        <label>Nominal Request (Rp)  </label> 
                                        <NumberFormat thousandSeparator={true} prefix={'Rp. '} value={this.state.nominal.value}  onValueChange={this.onChange2}
                                          isNumericString = {true}  name="nominal" className ="form-control" />
                                    </div>

                                    <button type="submit" disabled = {this.state.isButtonDisabled}  className="btn btn-success">Save</button>

                                </form>
                        </div>
                    </div>
                </div>
                
             </div>   );
     }
    }




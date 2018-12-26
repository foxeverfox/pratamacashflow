import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import React, {
    Component
} from 'react';
import firebase from './database';
import '../css/style.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';






function priceFormatter(x, _row) {
    if (typeof x !== 'undefined') {
        const y = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return 'Rp. ' + y
    }

}

function statusFormatter(x, _row) {

    if (_row.status_dokumen == '1') {
        let urlFollow ="/approverequest/"+_row.key
     
        return ( <Button className='btn btn-primary btn-sm' onClick={ () =>{
            this.setState({modal:! this.state.modal })
                   }}  >Approve Request</Button> )
        };
    if (_row.status_dokumen == '2') {
            return  ( <Button className='btn btn-primary btn-sm' onClick={ () =>{
                this.setState({modal2:! this.state.modal2 })
                       }}  >Pay to APL</Button> )
      }
     if (_row.status_dokumen == '3') {
        return  ( <Button className='btn btn-primary btn-sm' onClick={ () =>{
            this.setState({modal3:! this.state.modal3 })
                   }}  >Payment Confirmation</Button> )
       }

            }


            class fundRequestList extends Component {
                constructor() {
                    super();

                    this.ref = firebase.firestore().collection('fundrequest');
                    this.unsubscribe = null;

                    this.state = {
                        data: [] ,
                        modal:false ,
                        modal2:false ,
                        modal3:false ,
                        ar_requestNote:'',
                        ar_nominal:'',
                        ar_tglrequest:'',
                        ar_id:''
                    }
                
                this.toggle= this.toggle.bind(this);          
                this.toggle2= this.toggle2.bind(this);          
                this.toggle3= this.toggle3.bind(this);          
                this.statusFormatter = statusFormatter.bind(this)
                
                this.doProses = this.doProses.bind(this);
                this.doApprove=this.doApprove.bind(this) ;
                this.doPay =this.doPay.bind(this);
                this.doPayConfirm = this.doPayConfirm.bind(this);
                
                }
                
                
                onChange = (e) => {

                    const state = this.state;
            
                    state[e.target.name] =e.target.value;
                    this.setState(state);
            
                }
                

                onCollectionUpdate = (querySnapshot) => {
                    const data = [];
                    querySnapshot.forEach((doc) => {
                        const {id,
                            norequest,
                            tglrequest,
                            request_note,
                            nominal , status_dokumen ,noinvoice
                        } = doc.data();
                        data.push({
                            key: doc.id,
                            id,
                            norequest,
                            request_note,
                            tglrequest,
                            nominal , status_dokumen ,noinvoice
                        });

                    });
                    this.setState({
                        data
                    });
                }

                componentDidMount() {
                    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

                }
                toggle(){
                    /// this.setState({modal:! this.state.modal })   
                  this.setState({modal:! this.state.modal })
                 
                 }   

                toggle2(){
                    /// this.setState({modal:! this.state.modal })   
                  this.setState({modal2:! this.state.modal2 })
                 
                 }   
                toggle3(){
                    /// this.setState({modal:! this.state.modal })   
                  this.setState({modal3:! this.state.modal3 })
                 
                 }    


                doApprove(){
                    const id = this.state.ar_id

                    let retval= 100;
                    let tgl = new Date;
    
                    
                    const queryRef = firebase.firestore().collection('fundrequest').doc(id);    
    
                         queryRef.update({status_dokumen:2 ,
                                          approvalrequest_inputdate:tgl  });

                                
                          }    
                


                doPay(){

                    const id = this.state.ar_id

                    
                    let tgl = new Date;
    
                    
                    const queryRef = firebase.firestore().collection('fundrequest').doc(id);    
    
                         queryRef.update({status_dokumen:3 ,
                                        fullfill_date:this.state.fullfill_date,
                                        fullfill_inputdate:tgl,
                                        fullfill_note:this.state.fullfill_note ,
                                        fullfill_voucher:this.state.fullfill_voucher     });

                                
                          }    
                
                
                doPayConfirm(){

                    const id = this.state.ar_id

                    
                    let tgl = new Date;
    
                    
                    const queryRef = firebase.firestore().collection('fundrequest').doc(id);    
    
                         queryRef.update({status_dokumen:4 ,
                                        fullfill_confirmdate:tgl,
                                        });


                    
                }

                doProses(){
                    /// this.setState({modal:! this.state.modal })   
                  
                    const statusdokumen =this.state.ar_statusdokumen ;

                    if (statusdokumen== '1') {
                        this.doApprove()
                    } else if (statusdokumen== '2') {
                        this.doPay()
                    } else if (statusdokumen== '3') {
                        this.doPayConfirm()
                      }
                    this.setState({modal:false })
                    this.setState({modal2:false })
                    this.setState({modal3:false })

                 
                 }  
                 
                 onChange = (e) => {

                    const state = this.state;
            
                    state[e.target.name] =e.target.value;
                    this.setState(state);
            
                }  


                render() {

                    const {
                        data
                    } = this.state;

                    const rowStyle = {
                        backgroundColor: '#ffffff',
                        foreGroundCOlor: '#000000'
                    };

                    const columns = [{
                            dataField: 'norequest',
                            text: 'No Request' ,
                            sort:true

                        }, 
                        {
                            dataField: 'id',
                            text: 'ID' ,
                            hidden:true
                        },
                        {
                            dataField: 'request_note',
                            text: 'Description' ,
                            sort:true
                        }, {
                            dataField: 'tglrequest',
                            text: 'Trx Date',
                            sort:true
                        },
                        {
                            dataField: 'nominal',
                            text: 'Nominal',
                            formatter: priceFormatter,
                            align: 'right',
                            sort:true
                        },
                        {
                            dataField: 'noinvoice',
                            text: 'No B/L',
                            align: 'centre',
                            sort:true
                        },
                        {
                            dataField: 'status_dokumen',
                            text: 'Status',
                            align: 'centre',
                            formatter: this.statusFormatter  
                        }

                    ];

                    const selectRow = {
                        mode: 'radio',
                        clickToSelect: true,
                        bgColor: '#00BFFF'
                    };


                    const rowEvents = {
                        onClick: (e, row, rowIndex) => {
                            console.log(row);
                            const activeRecord = [];
                            const id = row.key ;
                            const norequest =row.norequest;
                            const tglrequest =row.tglrequest;
                            const request_note =row.request_note;
                            const nominal = row.nominal ;
                            const noinvoice = row.noinvoice ;
                            const status_dokumen=row.status_dokumen;

                            this.setState({ar_requestnote:request_note})
                            this.setState({ar_nominal:nominal})
                            this.setState({ar_tglrequest:tglrequest});
                            this.setState({ar_noinvoice:noinvoice});
                            this.setState({ar_statusdokumen:status_dokumen});
                            this.setState({ar_id:id});
                        }
                      };


                    
                    return (



                        <
                        div className = "ibox" >

                        <
                        div className = "ibox-title" >
                        <h3 > Fund Request List < /h3> <
                        /div>

                        <
                        h3 > < /h3>

                        <a href = "\fundrequestcreate"
                        className = "btn btn-primary btn-lg "
                        tabIndex = "-1"
                        role = "button" > New Fund Request < /a>
                         <Button color="danger" onClick={this.toggle}>Approve</Button>
                        

                        <div className="ibox" >

                        <
                        BootstrapTable keyField = 'norequest'
                        data = {
                            data
                        }
                        columns = {
                            columns
                        }
                        rowStyle = {
                            rowStyle
                        }
                        selectRow = {
                            selectRow
                        }
                        pagination = {
                            paginationFactory()
                        }
                        rowEvents = {rowEvents}
                        />

                        </div>

                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle} className="modal-header">
                                        <h4 className="modal-title">Approval Fund Request</h4>
                                </ModalHeader>
                                <ModalBody>

                                    <div className="ibox">
                                
                                         <div className="row">
                                    
                                            <div className="col-lg-6">
                                                 <dl className="row mb-0">
                                                    <div className="col-sm-4 text-sm-right">
                                                      <dt>Tanggal</dt> 
                                                    </div>
                                                    <div className ='col-sm-8 text-sm-left'>
                                                      {this.state.ar_tglrequest }
                                                    </div>  
                                                </dl>  

                                                <dl className="row mb-0">
                                                    <div className="col-sm-4 text-sm-right">
                                                    <dt>NO B/L</dt> 
                                                    </div>
                                                    <div className ='col-sm-8 text-sm-left'>
                                                    {this.state.ar_noinvoice }
                                                    </div>  
                                                </dl>  

                                                <dl className="row mb-0">
                                                    <div className="col-sm-4 text-sm-right">
                                                    <dt>Nominal</dt> 
                                                    </div>
                                                    <div className ='col-sm-8 text-sm-left'>
                                                    { priceFormatter(this.state.ar_nominal) }
                                                    </div>  
                                                </dl>   
                                            </div>
                                        </div>
                                    </div>

                                 </ModalBody>

                                <ModalFooter>
                                    <Button color="primary" onClick={this.doProses}>Approve</Button>{' '}
                                    <Button color="secondary" data-dismiss="modal" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            
                        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                                <ModalHeader toggle={this.toggle2} className="modal-header">
                                        <h2 className="modal-title">Proceed Payment to APL</h2>
                                </ModalHeader>
                                <ModalBody>


                                <div>PT Pratama Interdana Finance menyatakan telah mentransfer uang sebesar  </div>
                                <div className='ibox text-center' >
                                <h2> <span style={{color:'red',textAlign:'center'}}>{priceFormatter (this.state.ar_nominal )} </span> </h2>
                                </div>
                                
                                <div className='ibox text-left' >

                                  <div className='form-group row'>
                                    <label className="col-lg-4 col-form-label">Payment Date</label> 

                                    <div class="col-lg-8">
                                        <input className="form-control" name="fullfill_date" type="date"  onChange ={ this.onChange }/>
                                    </div>
                                    


                                  
                                  </div>


                                  

                                  <label>Payment Voucher</label>
                                  <input className="form-control" name="fullfill_voucher" type="text" onChange ={ this.onChange } />  

                                  <label>Payment Note</label>  
                                  <textarea class="form-control" name="fullfill_note" onChange ={ this.onChange } rows="3"></textarea>

                                </div>
                                        

                                 </ModalBody>

                                <ModalFooter>
                                    <Button color="primary" onClick={this.doProses}>Proceed</Button>{' '}
                                    <Button color="secondary" data-dismiss="modal" onClick={this.toggle2}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        
                        <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
                                <ModalHeader toggle={this.toggle3} className="modal-header">
                                        <h4 className="modal-title">Payment Receive Confirmation</h4>
                                </ModalHeader>
                                    <ModalBody>

                                        <div>PT APL  menyatakan telah menerima uang sebesar  </div>
                                        <div className='ibox text-center' >
                                        <h2> <span style={{color:'red',textAlign:'center'}}>{priceFormatter (this.state.ar_nominal )} </span> </h2>
                                        </div>

                                               

                                    </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.doProses}>Confirm</Button>{' '}
                                    <Button color="secondary" data-dismiss="modal" onClick={this.toggle3}>Cancel</Button>
                                </ModalFooter>
                            </Modal>

                        </div>
                    )
                }


            }


            export default fundRequestList
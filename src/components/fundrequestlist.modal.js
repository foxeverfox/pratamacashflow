import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from 'react';


function priceFormatter(x, _row) {
    if (typeof x !== 'undefined') {
        const y = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return 'Rp. ' + y
    }

}
var modalApproval = function () {

return (
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

           )    
}

export {modalApproval} ;
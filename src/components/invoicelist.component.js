import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import React ,{Component} from 'react';
import firebase from './database';
import '../css/style.css'
import paginationFactory from 'react-bootstrap-table2-paginator'


function priceFormatter(x,_row){

  const y= x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return 'Rp. '+ y 


}

class ListInvoice extends Component {
    constructor()
    {
        super();

        this.ref =firebase.firestore().collection('invoice');
        this.unsubscribe = null ;

        this.state = {
             data : []
        }
    }

    onCollectionUpdate = (querySnapshot) => {
      const data =[];
      querySnapshot.forEach((doc) =>{
        console.log(doc.data);
        const {noinvoice ,tglinvoice,deskripsi ,estimasi } = doc.data();
        data.push({key:doc.id,noinvoice,deskripsi ,tglinvoice ,estimasi});

      });
      this.setState({
       data
      });
    }

    componentDidMount(){
       this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

    }

    render(){

        const {data} = this.state ;
        console.log({data});
        const rowStyle = { backgroundColor: '#ffffff'  , foreGroundCOlor: '#000000'};

        const columns = [{
          dataField: 'noinvoice',
          text: 'No Bill of Lading'
        }, {
          dataField: 'deskripsi',
          text: 'Description'
        }, {
          dataField:'tglinvoice',
          text:'Trx Date'
        },
       {
        dataField:'estimasi',
        text:'Estimation Exp',
        formatter:priceFormatter ,
        align:'right'
      }
      
      ];

        const selectRow = {
          mode: 'radio',
          clickToSelect: true,
          bgColor: '#00BFFF'
          };
       

        return (



         <div className="ibox">
           

           <div className="ibox-title">
                  
                    <h3>Expense Estimation List </h3>
          </div>

          

           <a href="\create" class="btn btn-primary btn-lg " tabindex="-1" role="button" >New Estimation</a>

         <div> 
         
          <BootstrapTable keyField='noinvoice' 
            data={ data } 
            columns={ columns } 
            rowStyle = {rowStyle} 
            selectRow={selectRow} 
            pagination={ paginationFactory()   }         
            />

         </div>

            

            
            
         </div>
        )
    }


}


export default ListInvoice

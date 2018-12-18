import ReactTable from "react-table";
import React ,{Component} from 'react';
import 'react-table/react-table.css'
import firedb from './database';



class ListInvoice extends Component {
    constructor()
    {
        super();
        this.state = {
             data : []
        }
    }

    componentWillMount() {
           
       const  db  = firedb.firestore()

        const  dokref = db.collection('invoice').get()
       .then( (snapshot) => {
           snapshot.forEach ( (doc) => {
               console.log(doc.noinvoice);
           })
       })

    }
     
    render(){

        const {data} = this.state ;
        console.log({data});
        return (

         <div className="container">
           <button type="button" id='newbutton' className="btn btn-primary">New Invoice</button>

           <div> 
               
               
             </div>

            
            <div  className="ReactTable -striped -highlight"  >
                <ReactTable 
                  data = {data}
                  columns={[
                    {          
                      columns: [
                        {
                          Header: "No Invoice",
                          id:"noinvoice",
                          accessor: "noinvoice"
                        },
                        {
                          Header: "Deskripsi",
                          id: "deskripsi",
                          accessor:"deskripsi"
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />



            </div>
        
         </div>
        )
    }


}


export default ListInvoice

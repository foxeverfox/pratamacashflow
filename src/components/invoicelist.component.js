import ReactTable from "react-table";
import React ,{Component} from 'react';
import 'react-table/react-table.css'
import firebase from './database';



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
        const {noinvoice ,tglinvoice,deskripsi } = doc.data();
        data.push({key:doc.id,noinvoice,deskripsi ,tglinvoice });

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
        return (

         <div className="container">
           <button type="button" id='newbutton' className="btn btn-primary">New Invoice</button>
           <div> 
         </div>

            
            <div  className="ReactTable -striped -highlight"  >
                <ReactTable 
                  getTdProps={(state, rowInfo, column, instance) => {
                     return {
                        onClick: (e ,handleOriginal) => {
                         
                          console.log("It was in this row:", rowInfo.original.noinvoice);

                        }


                     } }



                  }
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
                        },
                        {
                          Header:"Command",
                          id:"cmd",
                          Cell: row => (
                             <div>

                            <button type="button" id='newbutton' className="btn btn-primary">Lihat</button>

                             </div>
                          )
                           

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

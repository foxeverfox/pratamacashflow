import firebase from './components/database';

var   getNewID = function(ref,callback) {
    
    let retval= 100;
    let dbref = firebase.firestore().collection('config');
    
    let queryRef = dbref.where('parameter_name', '==', ref).get()
    .then( snap =>{
        snap.forEach(doc => {
            const {parameter_name,parameter_value} = doc.data()
            retval = parameter_value ;
            const xref = firebase.firestore().collection('config').doc(doc.id);    
            let newval= retval + 1 ;      
            xref.update({parameter_value:newval});
            console.log('Snap',retval);
            callback(retval);
          });

    })
    
    

}

export {getNewID}
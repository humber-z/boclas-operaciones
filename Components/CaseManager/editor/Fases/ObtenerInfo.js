const firebase = require('firebase'); 
require('firebase/firestore');
  
class Operaciones {
	constructor() {
	
	}
    
  Prueba (text){
   console.log(text)
    
  }
  //Actualiza la base de datos txt debe recibir el objeto con todos los datos e id es el caso
  actualizaBase= async (txt,id)=>{
      console.log(txt);
      await firebase.firestore().collection('notes').doc(id).update(txt )
      .then(function(docRef) {
         console.log("Se actualizo: ", docRef);
      })
      .catch(function(error) {
         console.error("Error: ", error);
      });
  } 

 //Notificaciones name debe recibir el nombre del usuario y title el caso
  notificacion= async (name,title) => {
   console.log('do yu een come here brp?')
   await firebase.firestore()
    .collection('notificaciones')
    .add({
        text: `${name} ha actualizado el caso ${title}`,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => console.log('notificacion',doc))
  
  }
  //Aca va recibir lo de la conclusion, aun no estoy seguro de que va a recibir
  concluir= async (id) =>{
   

  }
	 


}

export default new Operaciones()
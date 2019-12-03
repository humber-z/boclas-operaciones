requiere('../firebase')
  
class Permisos {
 

   constructor() {
	//Aui hay que jalar la info de la base de datos hijo, ya sea en los atributos de los usuarios y asi lloco
  //otro clavado a la documentacion paro!!!! 
  
	} 
   
  
  autori= async (usertk)=>{
  //usertk deberia contener un token de usuario indicando que permisos se carga
  //
     
     console.log(firebase.getCurrentuser.uid())
       
     if(usertk=='admin'){

        console.log('el usario es administrativo')

     }



  } 

}

export default new Permisos()
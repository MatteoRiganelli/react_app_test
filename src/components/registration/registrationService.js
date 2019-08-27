import axios from "axios";
export default class RegistrationService{
   registration(email, password, onSuccess, onError){
      axios.post("https://reqres.in/api/register", {email:email, password:password}).then(function(result){
         console.log("Registrazione effettuata con successo, token: ",result.data);
         onSuccess(result.data);
      }, function(error){
         console.error("Errore durante la registrazione: ", error);
         onError(error.response.data);
      });
  }
}   
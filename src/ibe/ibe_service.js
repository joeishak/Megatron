
import axios from 'axios';

const prod_connection = { 'user': 'JR', 'pass': 'ft3t7pgz' };
const environment = { infosolApi: 'http://vm1.infosol.com:8551' };
  
export function cacheQuery (query, xdc, parameters) {
    let params = '';

    params = parameters.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
      }, '');

      const connection = prod_connection;

      const token = 'Basic ' + btoa(connection['user'] + ':' + connection['pass']);
      let headers = {'Authorization': token , 'Accept': '*/*'};
      
      axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' 
      + xdc + '?q=' + query + params + '&json=1', 
      {headers: headers, responseType: 'text'}).then((res) => {

        //Response from IBE
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      })   
    
    return dataResponse;

}



// Example - Simple

    // const token = 'Basic ' + btoa('JR' + ':' + 'ft3t7pgz');
    // let headers = {'Authorization': token , 'Accept': '*/*'};
    
    // axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=marketAreaList&json=1', {headers: headers, responseType: 'text'}).then((res) => {
    //   console.log(res.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
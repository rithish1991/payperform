
import axios from "axios";

import React, { useState } from "react"

function CreateAccount (){
    const [banks, setBanks] = useState([
        { name: 'Axis Bank', code: '123' },
        { name: 'Indian Bank', code: '124' },
        { name: 'ICCI Bank', code: '125' },
        { name: 'State Bank Of India', code: '126' },
    ]);
    const [name,setName] =  useState('');
    const[phone,setPhone] = useState('');
    const[code,setCode] = useState(123);
    const[bankName,setBankName] = useState('Axis Bank');
   function AddAccount(){
       //alert(name +"  " +phone + "" +code);
       const bankObj = banks.filter(e=>e.code==code);
       
      var bodyFormData = new FormData();
      bodyFormData.append('bid', code);
      bodyFormData.append('bname', bankObj[0].name);
      bodyFormData.append('phone', phone);
      bodyFormData.append('name', name);
      axios({
        method: "post",
        url: "http://localhost:2006/addBankAccount",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
         alert(response.data);
         setName('');
         setPhone('');
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });



   }
   const handleChange = (e) => {
    setCode(e.target.value)
   
  }
    return( 
    
        <div>


        <table border="1">

        <tr>
        <td>Select Bank</td>
        <td>

        <select id="banks" onChange={handleChange} value={code}   >

        {banks.map((values)=>
            <option value={values.code}  key={values}>
            {values.name}
            </option>
        )}
        </select>

        </td>
        </tr>
        
        <tr>
        <td>Name</td>
        <td><input type="text"  onChange={(e) => setName(e.target.value)} value={name}/></td>
        </tr>
       

        <tr>
        <td>Phone No</td>
        <td><input type="text"  onChange={(e) => setPhone(e.target.value)} value={phone}/></td>
        </tr>
        <tr>
        <td></td>
        <td><button onClick={()=>AddAccount()}>Add Account</button></td>
        
        </tr>

        

        </table>
          <b>Initial amount of Rupees 5000 will be Deposited</b>
        </div>
    )


                      


    
}
  
export default CreateAccount;
import axios from "axios";

import React, { useState } from "react"
function Balance (){


    const[phone,setPhone] = useState('');
    const[list,setList] =  useState([]);

    function getTransactions(){
        alert();
        var bodyFormData = new FormData();
        bodyFormData.append('phoneId', phone);
        
        axios({
          method: "post",
          url: "http://localhost:2006/getBalance",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
            //handle success
            setList(response.data);
          
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
  

    }
    return (

        <div>
        <div>


        <input type="text"  onChange={(e) => setPhone(e.target.value)} value={phone}/>
        <button onClick={()=>getTransactions()} >Fetch Balance</button>



        </div>


        <div>

        <table border="1">


            <tr>

                <td><b>Bank Name </b></td>
                <td><b>Balance </b></td>
               
            </tr>


            {list.map((values)=>
            <tr>
            <td>{values.bankName}</td>
            <td>{values.account_balance}</td>
          
            </tr>
        )}
        </table>


        </div>
        </div>


    )
}
  
export default Balance;
import axios from "axios";

import React, { useState } from "react"
function TransactionHistory (){


    const[phone,setPhone] = useState('');
    const[list,setList] =  useState([]);

    function getTransactions(){
        alert();
        var bodyFormData = new FormData();
        bodyFormData.append('phoneId', phone);
        
        axios({
          method: "post",
          url: "http://localhost:2006/getTransactions",
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
        <button onClick={()=>getTransactions()} >Search</button>



        </div>


        <div>

        <table border="1">


            <tr>

                <td><b>Transaction Id </b></td>
                <td><b>Debited Bank </b></td>
                <td><b>Amount</b></td>
            </tr>


            {list.map((values)=>
            <tr>
            <td>{values.tid}</td>
            <td>{values.debitedFrom}</td>
            <td>{values.amount}</td>
            </tr>
        )}
        </table>


        </div>
        </div>


    )
}
  
export default TransactionHistory;
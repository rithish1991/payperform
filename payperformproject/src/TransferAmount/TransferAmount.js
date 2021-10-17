import axios from "axios";
import React, { useState } from "react"
function TransferAmount (){
    const [banks, setBanks] = useState([
        { name: 'Axis Bank', code: '123' },
        { name: 'Indian Bank', code: '124' },
        { name: 'ICCI Bank', code: '125' },
        { name: 'State Bank Of India', code: '126' },
    ]);
    
    const[fromphone,setFromphone] = useState('');
    const[fromcode,setFromcode] = useState(123);

    const[tophone,setTophone] = useState('');
    const[tocode,setTocode] = useState(123);

    const[bankName,setBankName] = useState('Axis Bank');


    const [amount,setAmount] = useState(0);
   function TransferAccounts(){
       //alert(name +"  " +phone + "" +code);
      
    if(fromphone==tophone && fromcode==tocode)
    {

      alert("Cannot send it from same account");
    }
    else{

      var bodyFormData = new FormData();
      bodyFormData.append('fromBid', fromcode);
      bodyFormData.append('fromphone',fromphone );
      bodyFormData.append('toBid', tocode);
      bodyFormData.append('toPhone', tophone);
      bodyFormData.append('amount', amount);
      axios({
        method: "post",
        url: "http://localhost:2006/transferAccounts",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
         alert(response.data);
         
        })
        .catch(function (response) {
          //handle error
          alert("Please Enter Proper amount");
        });
    }


   }
   const handleFromChange = (e) => {
    setFromcode(e.target.value)
   
  }

  const handleToChange = (e) => {
    setTocode(e.target.value)
   
  }
    return( 
    
        <div>


        <table border="1">

        <tr>
        <td>Source Phone No</td>
        <td><input type="text"  onChange={(e) => setFromphone(e.target.value)} value={fromphone}/></td>
        </tr>


        <tr>
        <td>Source Bank</td>
        <td>

        <select id="banks" onChange={handleFromChange} value={fromcode}   >

        {banks.map((values)=>
            <option value={values.code}  key={values}>
            {values.name}
            </option>
        )}
        </select>

        </td>
        </tr>
        
        <tr>
        <td>Destination Phone No</td>
        <td><input type="text"  onChange={(e) => setTophone(e.target.value)} value={tophone}/></td>
        </tr>


        <tr>
        <td>To Bank</td>
        <td>

        <select id="banks" onChange={handleToChange} value={tocode}   >

        {banks.map((values)=>
            <option value={values.code}  key={values}>
            {values.name}
            </option>
        )}
        </select>

        </td>



            

        </tr>



        <tr>
        <td>Amount in Rupees</td>
        <td>

       <input type="text" onChange={(e) => setAmount(e.target.value)}  value={amount}/>

        </td>



            

        </tr>
       

        
        <tr>
        <td></td>
        <td><button onClick={()=>TransferAccounts()}>Transfer Amount</button></td>
        
        </tr>

        

        </table>
          
        </div>
    )
}
  
export default TransferAmount;
import { useState } from "react";
function Cont(){
  const[s,setS]=useState({
    EmailAddress:"",
    Phone:"",
    Subject:"",
    Message:""
   })
   const handlesubmit=(e)=>{
e.preventDefault();
  fetch(`http://localhost:5550/cont`,
     {
     method:"POST",
  headers: {
    "Content-Type":"application/json"
     },
     body:JSON.stringify(s),
     })
   }
    return(
        <>
         <div style={{textAlign:"center"}}>
        <h1 style={{color:"navy",display:"inline-block",marginTop:"auto"}}>VJ CHIT FUND</h1>
        <h5 className='contact'>
        <p>☎️ +91 8122331408</p>
        <p>☎️ +91 7708585093 </p></h5>
        </div>
        <nav style={{backgroundColor:"black",color:"white",height:"35px",textAlign:"center",marginBottom:"10px"}}><h1>TERM CHIT DETAILS - 10 MONTHS</h1></nav>
          <form style={{textAlign:"center",marginTop:"30px"}}  onSubmit ={handlesubmit}>
            <h3 style={{color:"navy"}}>Contact Us</h3>
            <label style={{marginRight:"250px",color:"navy"}}>EmailAddress:</label>
            <br></br>
            <input type='text' style={{width:"350px",height:"30px",borderRadius:"3px",borderColor:"black" }} onChange={(e)=>setS({...s,EmailAddress:e.target.value})}></input>
            <br></br>
            <label  style={{marginRight:"280px",color:"navy"}}>PhoneNo:</label>
            <br></br>
            <input type='number' style={{width:"350px",height:"30px",borderColor:"black",borderRadius:"3px" }}  onChange={(e)=>setS({...s,Phone:e.target.value})}></input>
            <br></br>
            <label  style={{marginRight:"300px",color:"navy"}} >Subject:</label>
            <br></br>
            <input type='text' style={{width:"350px",height:"30px" ,borderColor:"black",borderRadius:"3px"}} onChange={(e)=>setS({...s,Subject:e.target.value})}></input>
            <br></br>
            <label  style={{marginRight:"290px",color:"navy"}} >Message:</label>
            <br></br>
            <textarea type='text' style={{width:"350px",height:"50px",borderColor:"black",borderRadius:"3px",borderWidth:"2px"}} onChange={(e)=>setS({...s,Message:e.target.value})}></textarea>
            <br></br>
            <button type="submit" style={{width:"360px",height:"35px",marginTop:"15px",borderRadius:"3px"}}>SEND</button>
          </form>
        </>
    )
}
export default Cont;
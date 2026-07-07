import './Fund.css';
import { Link } from "react-router-dom";
function Fund(){
    return(
    <> <div style={{textAlign:"center"}}>
        <h1 style={{color:"navy",display:"inline-block",marginTop:"auto"}}>VJ CHIT FUND</h1>
        <h5 className='contact'>
        <p>☎️ +91 8122331408</p>
        <p>☎️ +91 7708585093 </p>
        <Link to="/cont">Contact Us</Link></h5> 
        </div>
        <nav style={{backgroundColor:"black",color:"white",height:"35px",textAlign:"center",marginBottom:"10px"}}><h1>TERM CHIT DETAILS - 10 MONTHS</h1></nav>
        <div style={{textAlign:"center"}}>
        <table style={{display:"inline-block",borderRight:"3px dotted navy"}} className='table'>
            <tr>
            <h3 style={{paddingLeft:"70px"}}>CHIT VALUE</h3>
            <h2 style={{color:"navy",paddingLeft:"70px"}}>50,000</h2>
            <button  style={{borderRadius:"20px",height:"40px",width:"80px",marginRight:"5px",cursor:"pointer"}}>Daily Rs.250</button>
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"5px"}}>Weekly Rs.1250</button>
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"5px"}}>Monthly Rs.5000</button>
                    <tr  style={{color:"navy"}}>
                    <td><h4>Inst No.</h4></td>
                    <td style={{paddingLeft:"50px"}}><h4>Prize Amount</h4></td>
                    </tr>
                <tr>  
                <td>1</td>
                <td style={{paddingLeft:"50px"}}>-</td>
                </tr>
                <tr>
                <td>2</td>
                <td style={{paddingLeft:"50px"}}>41,250</td>
                </tr>
                <tr>
                <td>3</td>
                <td style={{paddingLeft:"50px"}}>41,500</td>
                </tr>
                <tr>
                <td>4</td>
                <td style={{paddingLeft:"50px"}}>41,750</td>
                </tr>
                <tr>
                <td>5</td>
                <td style={{paddingLeft:"50px"}}>42,000</td>
                </tr>
                <tr>
                <td>6</td>
                <td style={{paddingLeft:"50px"}}>43,000</td>
                </tr>
                <tr>
                <td>7</td>
                <td style={{paddingLeft:"50px"}}>44,000</td>
                </tr>
                <tr>
                <td>8</td>
                <td style={{paddingLeft:"50px"}}>47,000</td>
                </tr>
                <tr>
                <td>9</td>
                <td style={{paddingLeft:"50px"}}>50,500</td>
                </tr>
                <tr>
                <td>10</td>
                <td style={{paddingLeft:"50px"}}>54,000</td>
                </tr>
                </tr>
                </table>
            <table style={{display:"inline-block",borderRight:"3px dotted navy"}}  className='table'>
            <tr>
            <h3 style={{paddingLeft:"70px"}}>CHIT VALUE</h3> 
            <h2 style={{color:"navy",paddingLeft:"70px"}}>1,00,000</h2>
            {/* <div className="button"> */}
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"10px"}}>Daily Rs.500</button>
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"10px"}}>Weekly Rs.2500</button>
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"10px"}}>Monthly Rs.10000</button>
            {/* </div> */}
            <tr  style={{color:"navy"}}>
                <td><h4>Inst No.</h4></td>
                <td style={{paddingLeft:"50px"}}><h4>Prize Amount</h4></td>
            </tr> 
                <tr>
                <td>1</td>
                <td style={{paddingLeft:"50px"}}>-</td>
                </tr>
                <tr>
                <td>2</td>
                <td style={{paddingLeft:"50px"}}>82,500</td>
                </tr>
                <tr>
                <td>3</td>
                <td style={{paddingLeft:"50px"}}>83,000</td>
                </tr>
                <tr>
                <td>4</td>
                <td style={{paddingLeft:"50px"}}>83,500</td>
                </tr>
                <tr>
                <td>5</td>
                <td style={{paddingLeft:"50px"}}>84,000</td>
                </tr>
                <tr>
                <td>6</td>
                <td style={{paddingLeft:"50px"}}>86,000</td>
                </tr>
                <tr>
                <td>7</td>
                <td style={{paddingLeft:"50px"}}>88,000</td>
                </tr>
                <tr>
                <td>8</td>
                <td style={{paddingLeft:"50px"}}>94,000</td>
                </tr>
                <tr>
                <td>9</td>
                <td style={{paddingLeft:"50px"}}>1,01,000</td>
                </tr>
                <tr>
                <td>10</td>
                <td style={{paddingLeft:"50px"}}>1,08,000</td>
                </tr>   
                </tr>
                </table>
            <table style={{display:"inline-block"}}  className='table'>  
            <tr>   
            <h3 style={{paddingLeft:"70px"}}>CHIT VALUE</h3>
            <h2 style={{color:"navy",paddingLeft:"70px"}}>2,00,000</h2>
            {/* <div className="button"> */}
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"10px"}}>Daily Rs.1000</button>
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"10px"}}>Weekly Rs.5000</button>
            <button  style={{cursor:"pointer",borderRadius:"20px",height:"40px",width:"80px",marginRight:"10px"}}>Monthly Rs.20000</button>
                {/* </div> */}
                <tr  style={{color:"navy"}}>
                    <td><h4>Inst No.</h4></td>
                    <td style={{paddingLeft:"50px"}}><h4>Prize Amount</h4></td>
                </tr>
                <tr>
                <td>1</td>
                <td style={{paddingLeft:"50px"}}>-</td>
                </tr>
                <tr><td>2</td>
                <td style={{paddingLeft:"50px"}}>1,65,000</td>
                </tr>
                <tr><td>3</td>
                <td style={{paddingLeft:"50px"}}>1,66,000</td>
                </tr>
                <tr><td>4</td>
                <td style={{paddingLeft:"50px"}}>1,67,000</td>
                </tr>
                <tr><td>5</td>
                <td style={{paddingLeft:"50px"}}>1,68,000</td>
                </tr>
                <tr><td>6</td>
                <td style={{paddingLeft:"50px"}}>1,72,000</td>
                </tr>
                <tr><td>7</td>
                <td style={{paddingLeft:"50px"}}>1,76,000</td>
                </tr>
                <tr><td>8</td>
                <td style={{paddingLeft:"50px"}}>1,88,000</td>
                </tr>
                <tr><td>9</td>
                <td style={{paddingLeft:"50px"}}>2,02,000</td>
                </tr>
                <tr><td>10</td>
                <td style={{paddingLeft:"50px"}}>2,16,000</td>
                </tr>
                </tr>      
        </table>
        </div>
        <p style={{textAlign:"center",color:"navy",fontSize:"larger",fontFamily:"cursive",marginBottom:"15px"}}>"We're  back  with  the  best  Fixed  Chit  Scheme!  Start  your  investment  and  savings  in  this  financial  year  with  great  returns."</p>
        </>
    )
}
export default Fund;
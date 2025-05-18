import { Col, Button } from 'react-bootstrap'
import { BiSolidRightArrow } from "react-icons/bi";
const BOXofReusable = ({money,mnytext,ptext,htext,iconp,iconpra,iconp2,iconpra2,lstbtn}) => {
  return (
    <>
    <Col lg={{span:4}}>
          <div className="MainLongbx">
            <div className="MLBp">
              <h3>{money}</h3>
              <a href="#">{mnytext}</a>
            </div>
            <div className="LPMLB">
              <h3>{htext}</h3>
              <p>{ptext}</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICON">
              {iconp2}
              <p>{iconpra2}</p>
            </div>
            <div className="PARAICON">
              {iconp2}
              <p>{iconpra2}</p>
            </div>
            <div className="subBtn">
               {lstbtn}
            </div>

          </div>
          </Col>
          <Col lg={{span:4}}>
          <div className="MainLongbxb">
            <div className="MLBpp">
              <h3>$399</h3>
              <a href="#">Multi Design</a>
            </div>
            <div className="LPMLBb">
              <h3>Website Page </h3>
              <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
            </div>
            <div className="PARAICONn">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICONn">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICONn">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICONn">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICONn">
                {iconp}
                <p>{iconpra}</p>
            </div>
            
             <div className="subBtnm">
               <Button className='sbBTNn' >Get started</Button>
            </div>
            

          </div>
          </Col>
              <Col lg={{span:4}}>
          <div className="MainLongbxo">
            <div className="MLBp">
              <h3>$499 +</h3>
              <a href="#">Complex Project</a>
            </div>
            <div className="LPMLB">
              <h3>{htext}</h3>
              <p>{ptext}</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>{iconpra}</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>Optimize hashtags</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>Unlimited users</p>
            </div>
            <div className="PARAICON">
                {iconp}
                <p>Assist and Help</p>
            </div>
             
            <div className="subBtnm">
               {lstbtn}
            </div>

          </div>
          </Col>
    
    </>
  )
}

export default BOXofReusable
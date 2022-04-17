import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import "./navbar.css"

import { useState,useEffect, useContext } from "react";
import { AuthContext } from "../Context/context";

const Div = styled.nav`
position:fixed;
display: flex;
padding:5px 10px;
width: 100%;
height:80px;
top: 0;
margin-left: 5%;
right: 0;
align-items: center;
background-color:#FFFFFF;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 80px 60px rgba(0, 0, 0, 0.10)
`

export const Navbar = () => {
  const [lgShow, setLgShow] = useState(false);
  const [bag, setbag] = useState([]);
  const [cartLength, setCartLength] = useState([]);
  const [total, setTotal] = useState(0);
  const { isTog, handleToggleAuth } = useContext(AuthContext);

  useEffect(() => {
    showBag();
  }, [isTog])
  
  


  const showBag = async () => {
    let res = await fetch("https://go-comet-backend.herokuapp.com/cart");
    let data = await res.json();
    setbag(data.cart);
    
    console.log(data.cart.length);
    setCartLength(data.cart.length);
  
     var sum = 0;
    for (var i = 0; i < data.cart.length; i++){
      sum += +data.cart[i].price;
    }
    console.log(sum);
    setTotal(sum)
 
  }

    const handleDeleteCart = async (_id) => {
          setbag(bag.filter(bag => bag._id !== _id));
            await fetch(`https://go-comet-backend.herokuapp.com/cart/${_id}`,{
            method: 'DELETE',
            headers: {
            "Content-Type": "application/json"
              }
            })
            .then((e) => {
              console.log(e);
              handleToggleAuth();
          
            })
  };
  
  return (
    <>
    <Div>
        <Link to="/"><img style={{width: '100%', height: '50px',marginLeft:"2%"}} src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900" alt=""/></Link>
        <Link style={{marginLeft:"2%",fontWeight:"bold",fontSize:"17px",textDecoration:"none",color: '#282C3F'}} to="/">Home</Link>
        <Link style={{ marginLeft:"2%",fontWeight: "bold", fontSize: "17px", textDecoration: "none",color: '#282C3F' }} to="/Products">Products</Link>
        <Link style={{marginLeft:"2%", fontWeight: "bold", fontSize: "17px", textDecoration: "none",color: '#282C3F'}} to="/Women">Women</Link>
        <Link style={{marginLeft:"2%", fontWeight: "bold", fontSize: "17px", textDecoration: "none",color: '#282C3F' }} to="/Kids">Kids</Link>
          <Link style={{marginLeft:"2%",fontWeight:"bold",fontSize:"17px",textDecoration:"none",color: '#282C3F'}} to="/Products">Home & Living</Link>
        <p style={{ marginLeft: "40%" }}><img style={{ marginLeft: "15%" }} src="https://img.icons8.com/material-outlined/24/000000/gender-neutral-user.png" alt="" /><br></br><span>Login</span></p>
       <Link style={{marginLeft:"2%",fontSize:"17px",textDecoration:"none",color: '#282C3F'}} to="/wishlist"> <p style={{ marginLeft: "2%" }}><img style={{ marginLeft: "25%" }} src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" alt="" /><br></br><span>Wishlist</span></p></Link>
        <p onClick={() => setLgShow(true)} className="bagButn" ><img style={{ marginLeft: "3%" }} src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png" alt="" /><br></br><span>Bag <span className="countBag" disabled={ cartLength===0}>{cartLength}</span></span></p>
      </Div>
          <Modal
        size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {cartLength} Items in the cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            bag.map((el) => (
              <div className="modal-div" >
                <div>
                  <img className="modalImg" src={el.images} alt="" />
                </div>
                <div style={{marginLeft:"2%"}}>
                  <div style={{display:"flex",justifyContent:"space-between"}}>  <p className="cartBrand">{el.brand}</p><img  onClick={() =>handleDeleteCart(el._id)}  src="https://img.icons8.com/ios-glyphs/50/ff3f6c/filled-trash.png" alt=""/></div>
                  <p className="cartCategory">{el.category}</p>
                    <div style={{ display: 'flex'}}><p style={{ fontSize: "17px", fontWeight: "700" }}>{"Rs. " + el.price}</p><p style={{ marginLeft: "2%", textDecoration: "line-through", fontSize: "16px" }}>{"Rs." + el.off_price}</p><p style={{ marginLeft: "4%", fontSize: "15px", color: "#FF905A" }}>({el.discount} %OFF)</p></div>
                    <img className="giftImg" src="https://user-images.githubusercontent.com/87421852/163676456-a0a4bc23-cd5b-4b7f-b15a-647824a73a0e.png" alt="" />
                </div>
            
              </div>
            ))
          }
          <hr />
          <div style={{ display: 'flex', justifyContent:'space-between' }}><p className="amountTotal">Total Amount : ₹ {total} </p> <button className="placeBtn">PLACE ORDER</button></div>
        </Modal.Body>
      </Modal>
    </>
  );
}
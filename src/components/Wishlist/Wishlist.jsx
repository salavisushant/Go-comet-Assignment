import { useState, useEffect } from 'react';
import "./wishlist.css"

export const Wishlist = () => {
    const [wishData, setWishData] = useState([]);
    const [length,setLength] = useState([]);


    useEffect(() => {
        showWishData()
    },[])


    const showWishData = async () => {
        var res = await fetch('http://localhost:4000/wishlist');
        let data = await res.json();
        setWishData(data.wishlist)
        setLength(data.wishlist.length)
        console.log(data);
    }

    const handleDelete = async (_id) => {
          setWishData(wishData.filter(wishData => wishData._id !== _id));
            await fetch(`http://localhost:4000/wishlist/${_id}`,{
            method: 'DELETE',
            headers: {
            "Content-Type": "application/json"
        },
      
    });
  };
 

    return (
        <>
            <p className="myWishlen">My Wishlist <span style={{fontWeight:"200",color:"#282C3F"}}>{ length} items</span></p>
        <div className="wishDiv">
            {
                wishData.map((e) => (
                    <div style={{border: "1px solid #E0DFDC"}}>
                        <div className="img-wraps">
                            <span onClick={() =>handleDelete(e._id)}  className="closes" title="Delete">×</span>
                            <img className="img-responsive" src={e.images} alt="" />
                            <br/>
                        </div>
                        <p className="wishCat">{e.category}</p>
                           <div style={{ display: 'flex',marginLeft: "10%"}}><p style={{ fontSize: "17px", fontWeight: "700" }}>{"Rs. " + e.price}</p><p style={{ marginLeft: "2%", textDecoration: "line-through", fontSize: "16px" }}>{"Rs." + e.off_price}</p><p style={{ marginLeft: "4%", fontSize: "15px", color: "#FF905A" }}>({e.discount} %OFF)</p></div>
                    </div>
                ))
            }
            </div>
            </>
    )
}
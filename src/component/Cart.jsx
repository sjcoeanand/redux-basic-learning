import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";
import {Button, Card} from "react-bootstrap";
function Cart(){
  let products = useSelector(state => state.cart)
  let dispatch = useDispatch();
  let removeProduct =(id)=>{
    dispatch(remove(id));
  }


  let cards = products.map((p) => (
    <div key={p.id} className="col-md-3 mb-2">
        <Card className="h-100">
            <div className="text-center">
                <Card.Img src={p.image} style={{width : "50px", height:"50px"}} />    
            </div>
            <Card.Body>
                <Card.Title>{p.title?.length > 20 ? p.title?.slice(0,20) + '...' : p.title}</Card.Title>
                <Card.Text>INR : {p.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="danger" className="text-center" onClick={()=>{removeProduct(p.id)}}>Remove</Button>
            </Card.Footer>
        </Card>
    </div>
))

return(
    cards && cards?.length > 0 ? 
        (<div>
            <h1 className="text-center">Cart Details</h1>
            <div className="row">{cards}</div>
        </div>) : 
        (<h1 className="text-center">No Products </h1>)
);

}

export default Cart;
import { useEffect , useState} from "react"
import {Button, Card} from "react-bootstrap";
import { useDispatch } from "react-redux";
import {add} from "../store/CartSlice"
let Product =()=>{
    let dispatch = useDispatch();
    let [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=> res.json())
        .then(res=> setProducts(res))
    }, []);

    let addToCart = (prod) => {
        dispatch(add(prod))
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
                    <Button variant="primary" onClick={()=>{addToCart(p)}}>Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

   
    return(
        <>
            <h1 className="text-center">Product Dashboard</h1>
            <div className="row">{cards}</div>
        </>
    );
}

export default Product
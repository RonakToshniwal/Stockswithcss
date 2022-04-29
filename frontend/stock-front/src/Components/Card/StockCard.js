import { Card } from 'react-bootstrap';
const StockCard = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' , borderRadius: '15px', borderColor: 'Purple', padding: '5px' ,margin: '10px' , backgroundColor: 'Grey', color : 'white' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.symbol}</Card.Subtitle>
                    <Card.Text> HIGH :{props.high}</Card.Text>
                    <Card.Text> LOW: {props.low}</Card.Text>
                    <Card.Text> PRICE :{props.price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
 
export default StockCard;
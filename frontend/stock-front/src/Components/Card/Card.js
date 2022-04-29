import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CustomCard = (props) => {
    return (
        <>
            <Card style={{width: '18rem', margin : '5px' , borderColor: '#8142ed' ,boxShadow: '5px 10px #535fa6', borderRadius: '6px' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.body}
            </Card.Text>
            <Link to={props.route}><Button>{props.action}</Button></Link> 
            </Card.Body>
            </Card>        
        </>
    );
}
 
export default CustomCard;
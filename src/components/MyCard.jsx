import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import MyCardDetails from "./MyCardDetails";
import StarRating from "./StarRating";
import { FaStar, FaHeart } from "react-icons/fa";
import useUserSession from "./userSession"; 

const MyCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const { store, actions } = useContext(Context);
    const [user, setUser] = useUserSession("user");
    const logged_user = JSON.parse(user);
    console.log(user.id);

    let modalDetails;
    if (modalShow) {
        modalDetails = (
            <MyCardDetails
                title={props.title}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        );
    } else {
        modalDetails = null;
    }

    const handleFavorites = (event) => {
        event.preventDefault();
        actions.addUserFavorites(logged_user.id, props.movie_id, props.year, props.poster, props.title);
    };

    return (
        <Card
            style={{
                minWidth: "18rem",
                maxWidth: "18rem",
                marginBottom: "10px",
                marginTop: "10px",
            }}
        >
            <Card.Img
                variant="top"
                src={props.poster}
                onClick={() => setModalShow(true)}
                style={{
                    cursor: "pointer",
                }}
            />
            <Card.Body
                onClick={() => setModalShow(true)}
                style={{ cursor: "pointer" }}
            >
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>
                    {props.year}<br></br>
                { <FaStar
                        className="star"
                        color="#ffc107"
                        size={20}
                    /> }
                    {props.rate_avg !== undefined ? props.rate_avg : '-'}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
               <StarRating user_id={1} movie_id={props.movie_id}/>
                <FaHeart
                data-toggle="tooltip" 
                data-placement="top"
                title="Añadir a Favoritos"
                onClick={(event) => handleFavorites(event)}>  
                </FaHeart>
            </Card.Footer>
            {modalDetails}
        </Card>
    );
};

export default MyCard;


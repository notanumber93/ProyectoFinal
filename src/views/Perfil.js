import { useContext } from "react";
import Navbarhome from "../components/Navbarhome";
import MyCardeck, { MyCardDeck } from "../components/MyCardDeck";
import UserProfile from "../components/UserProfile";
import { Context } from "../store/appContext";
import { Container, Tab, Tabs } from "react-bootstrap";

export const Perfil = () => {
    const { store, actions } = useContext(Context);
    return (
        <Container>
            <Navbarhome />
            <Tabs defaultActiveKey="profile">
                <Tab eventKey="profile" title="Datos usuario">
                    <UserProfile
                        firstName={store.logged_user.firstName}
                        lastName={store.logged_user.lastName}
                        email={store.logged_user.email}
                        userName={store.logged_user.userName}
                        bio={store.logged_user.bio}
                    />
                </Tab>
                <Tab eventKey="favoritos" title="Favoritos">
                    <MyCardDeck />
                </Tab>
            </Tabs>
        </Container>
    );
};
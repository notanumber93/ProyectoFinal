import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import useUserSession from "./userSession";
import { Button } from "react-bootstrap";

function Navbarhome(props) {
    const { store, actions } = useContext(Context);
    const [search, setSearch] = useState("");
    const [user, setUser] = useUserSession("user");
    const logged_user = JSON.parse(user);
    const history = useHistory();
    let logout;
    let login;
    let perfil;
    let inicio;
    let searchBox;

    const handleLogout = async () => {
        await setUser(null);
        history.push("/");
    };

    if (logged_user != null && JSON.stringify(logged_user) !== "{}") {
        console.log(logged_user);
        inicio = (
            <Link className="nav-link" to="/home">
                Inicio
            </Link>
        );
        perfil = (
            <Link className="nav-link" to="/Perfil">
                Perfil
            </Link>
        );
        searchBox = (
            <form
                className="form-inline my-2 my-lg-0"
                onSubmit={() => history.push("/search/" + search)}
            >
                <input
                    className="form-control mr-sm-2"
                    defaultValue={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Buscar
                </button>
            </form>
        );
        logout = (
            <Button
                className="my-2 mx-2"
                type="submit"
                onClick={() => handleLogout()}
            >
                Logout
            </Button>
        );
        login = null;
    } else {
        login = (
            <Link className="nav-link" to="/signup">
                Login
            </Link>
        );
        inicio = null;
        perfil = null;
        logout = null;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"></Link>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-gear"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                    />
                    <path
                        fillRule="evenodd"
                        d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                    />
                </svg>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">{inicio}</li>
                    <li className="nav-item">{login}</li>
                    <li className="nav-item">{perfil}</li>
                </ul>
                {searchBox}
                {logout}
            </div>
        </nav>
    );
}

export default Navbarhome;

import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Inicio</span>
				</Link>
				<div className="ml-auto flex">
					{
						store.user && <Link to="/profile" className="mx-1">
							{store.user.full_name}
						</Link>
					}
					{!store.token && <Link to="/login">
						<button className="btn btn-success mx-1">
							Login
						</button>
					</Link>}
					{store.token && <button className="btn btn-danger mx-1" onClick={() => actions.logout()}>
						Logout
					</button>}
				</div>
			</div>
		</nav>
	);
};
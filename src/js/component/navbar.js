import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {
		store, actions
	} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu">
						{store.favorites.map((item, index) => {
							return (
								<li key={index}>
									<span>
										{
											item + " "
										}
										<button class="dropdown-item" type="button" onClick={() => actions.removeFavorite(index)}>
											🗑️
										</button>
									</span>

								</li>
							)

						})}


					</ul>
				</div>
			</div>
		</nav>
	);
};

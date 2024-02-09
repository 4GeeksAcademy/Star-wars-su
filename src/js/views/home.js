import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/card.jsx"

export const Home = () => {
	const {store}=useContext(Context)
	return (
		<>
		<body>
			<div class="container">
				<h2 class="row ">charecters</h2>
				<div class="row">
					{store.people.map((person,index) =>
					<Card key={index} person={person}
					 index={index}
					 type="person"/>)}
				</div>
			</div>
		</body>
		</>
	)
	
};

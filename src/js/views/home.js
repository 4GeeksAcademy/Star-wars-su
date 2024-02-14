import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/card.jsx"

export const Home = () => {
	const {store}=useContext(Context)
	return (
		<div> 
		<body>
			<div class="container">
				<h2 class="row ">Charecters</h2>
				<div class="row">
					{store.person.map((person,index) =>
					<Card key={index} person={person}
					 index={index}
					 type="person"/>)}
				</div>
				<h2 class="row ">Planet</h2>
				<div class="row">
					{store.planet.map((planet,index) =>
					<Card key={index} planet={planet}
					 index={index}
					 type="planet"/>)}
				</div>
				<h2 class="row ">Vehicle</h2>
				<div class="row">
					{store.vehicle.map((vehicle,index) =>
					<Card key={index} vehicle={vehicle}
					 index={index}
					 type="vehicle"/>)}
				</div>
				<h2 class="row ">Starship</h2>
				<div class="row">
					{store.starship.map((starship,index) =>
					<Card key={index} starship={starship}
					 index={index}
					 type="starship"/>)}
				</div>
			</div>
		</body>
		</div>
	)
	
};

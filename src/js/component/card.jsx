import React, {useContext} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
 
const Card =(props)=>{
    const {store,actions}=useContext(Context)
    let field 
    props.type ==="person"?(
        field = <div class="card" style="width: 18rem;">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`}
        onError={(e)=>{
            e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'
        }}
        class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.person.name}</h5>
          <p class="card-text">eye color: {props.person.eye_color}</p>
          <p class="card-text">gender: {props.person.gender}</p>
          <p class="card-text">skin color: {props.person.skin_color}</p>
        </div>
        <div class="card-buttons"> 
        <Link to={'profile/person/'+ props.index} class="btn btn-secondary">🥷</Link>
        <button class="btn btn-secondary" onClick={()=>actions.selectFavorite(props.person.name)}>&#10084;</button>
        </div>
      </div>
    ):null
 props.type ==="vehicle"?(
        field = <div class="card" style="width: 18rem;">
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.index + 1}.jpg`}
        onError={(e)=>{
            e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'
        }}
        class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.vehicle.name}</h5>
          <p class="card-text">eye color: {props.vehicle.model}</p>
          <p class="card-text">gender: {props.vehicle.manufacturer}</p>
          <p class="card-text">skin color: {props.vehicle.cargo_capacity}</p>
        </div>
        <div class="card-buttons"> 
        <Link to={'profile/vehicle/'+ props.index} class="btn btn-secondary">🥷</Link>
        <button class="btn btn-secondary" onClick={()=>actions.selectFavorite(props.vehicle.name)}>&#10084;</button>
        </div>
      </div>
    ):null
    props.type ==="planet"?(
      field = <div class="card" style="width: 18rem;">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${props.index + 1}.jpg`}
      onError={(e)=>{
          e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'
      }}
      class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.planet.name}</h5>
        <p class="card-text">eye color: {props.planet.rotation_period}</p>
        <p class="card-text">gender: {props.planet.climate}</p>
        <p class="card-text">skin color: {props.planet.orbital_period}</p>
      </div>
      <div class="card-buttons"> 
      <Link to={'profile/planet/'+ props.index} class="btn btn-secondary">🥷</Link>
      <button class="btn btn-secondary" onClick={()=>actions.selectFavorite(props.planet.name)}>&#10084;</button>
      </div>
    </div>
  ):null
  props.type ==="starship"?(
    field = <div class="card" style="width: 18rem;">
    <img src={`https://starwars-visualguide.com/assets/img/starships/${props.index + 1}.jpg`}
    onError={(e)=>{
        e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }}
    class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{props.starship.name}</h5>
      <p class="card-text">eye color: {props.starship.manufacturer}</p>
      <p class="card-text">gender: {props.starship.passengers}</p>
      <p class="card-text">skin color: {props.starship.orbital_period}</p>
    </div>
    <div class="card-buttons"> 
    <Link to={'profile/starships/'+ props.index} class="btn btn-secondary">🥷</Link>
    <button class="btn btn-secondary" onClick={()=>actions.selectFavorite(props.starship.name)}>&#10084;</button>
    </div>
  </div>
):null

return (
    <>
    {field}
    </>
)

}
export default Card
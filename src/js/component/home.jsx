import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [ SelectedColor , SetSelectedColor ] = useState ("");


	return (
		<div className="Semaforo">
		  	<div 
          		onClick = {() => SetSelectedColor ("Rojo")}
          		className = {"Color Rojo" + (SelectedColor === "Rojo" ? " Sombra" : " ")}>
		  	</div>
			<div 
          		onClick = {() => SetSelectedColor ("Amarillo")}
          		className = {"Color Amarillo" + (SelectedColor === "Amarillo" ? " Sombra" : " ")}>
		  	</div>
			<div 
          		onClick = {() => SetSelectedColor ("Verde")}
          		className = {"Color Verde" + (SelectedColor === "Verde" ? " Sombra" : " ")}>
		  	</div>
				
		</div>
	);
};

export default Home;

import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Modal from "react-modal";

import "./styles.css";

//Componente que exibe um overlay ao finalizar as questões, segue padrão semelhante ao OverlayFinish
export default function OverlayLose() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="overlay">

		<Modal className="errorModal" isOpen={isOpen} overlayClassName="errorOverlay" closeTimeoutMS={500}>
		<div className="textModalError">Infelizmente você errou.</div>
		<Link to="/"><button className="buttomModalError">Clique aqui para recomeçar</button></Link>
		</Modal>

		</div>
		);
}
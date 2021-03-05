import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./styles.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function OverlayLose() {
	const [isOpen, setIsOpen] = useState(true);


	return (
		<div className="overlay">

		<Modal 
		isOpen={isOpen}
		className="errorModal"
		overlayClassName="errorOverlay"
		closeTimeoutMS={500}
		>
		<div className="textModalError">Infelizmente você errou.</div>
		<Link to="/"><button className="buttomModalError">Clique aqui para recomeçar</button></Link>
		</Modal>
		</div>
		);

}
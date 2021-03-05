import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./styles.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function OverlayFinish() {
	const [isOpen, setIsOpen] = useState(true);



	return (
		<div className="overlay">

		<Modal 
		className="victoryModal"
		isOpen={isOpen}
		overlayClassName="victoryOverlay"
		closeTimeoutMS={500}
		>
		<div className="textModalVictory">Parabéns! Você acertou todas as questões.</div>
		<Link to="/"><button className="buttomModalVictory">Clique aqui para recomeçar</button></Link>
		</Modal>
		</div>
		);



}
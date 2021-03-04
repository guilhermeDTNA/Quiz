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
		contentLabel="My dialog"
		className="mymodal"
		overlayClassName="myoverlay"
		closeTimeoutMS={500}
		>
		<div className="textModal">Parabéns! Você acertou todas as questões.</div>
		<Link to="/"><button className="buttomModal">Clique aqui para recomeçar</button></Link>
		</Modal>
		</div>
		);



}
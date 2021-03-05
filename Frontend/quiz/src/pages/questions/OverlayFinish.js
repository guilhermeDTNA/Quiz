import React, { useState } from "react";
import {Link} from 'react-router-dom';

//Usa o React Modal, uma biblioteca do ReactJS
import Modal from "react-modal";

import "./styles.css";

//Componente que exibe um overlay ao finalizar as questões
export default function OverlayFinish() {
	//Usa o UseState para manipular o estado
	const [isOpen, setIsOpen] = useState(true);

	//Cria um novo modal setando visibilidade e tempo para fechá-lo, lina para a raíz da aplicação
	return (
		<div className="overlay">

		<Modal className="victoryModal" isOpen={isOpen} overlayClassName="victoryOverlay" closeTimeoutMS={500}>
		<div className="textModalVictory">Parabéns! Você acertou todas as questões.</div>
		<Link to="/"><button className="buttomModalVictory">Clique aqui para recomeçar</button></Link>
		</Modal>

		</div>
		);
}
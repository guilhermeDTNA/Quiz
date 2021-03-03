import React from 'react';

import './index.css';
import mistake_img from './mistake-img.jpg';

export default function Mistake(){
	return(

		<>
		<div className="title-mistake">

		<p>Ops... page not found!</p>

		</div>

		<div className="image-mistake">
		<img src={mistake_img} />
		</div>

		</>

		);
	}
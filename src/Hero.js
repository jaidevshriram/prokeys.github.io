import React from 'react';
import mockup from './img/mockup.png';

export default class Hero extends React.Component {
	render() {
		return (
			<div className="container-fluid h-md-95 bg-navy">                                                                                                                                                                                 95 bg-navy">
				<div className="row h-100">
					<div className="col-12 col-md-6 align-self-center">
						<div className="my-auto h-100 text-center text-white px-5">
							<h1 className="heading-font display-3" >the best tool for typists</h1>
							<p className="lead">ProKeys is a text expander that helps you focus on your content, not on the actual content.</p>
						</div>
					</div>
					<div className="col-12 col-md-6 align-self-center">
						<div className="mx-auto">
							<img src={mockup} className="img-fluid w-75"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
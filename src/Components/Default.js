import React from 'react';

import {useLocation} from 'react-router-dom'; 

function Default(props) {

	const location = useLocation()
	const {pathname} = location
	

	return(
		<div>
			<div>
				<h1>404</h1>
				<h1>error</h1>
				<h2>Page Not Found</h2>
				<h3>The Requested URL:<span> {pathname}</span> Was Not Found</h3>

			</div>
		</div>

	)
}

export default Default;
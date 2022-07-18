import React , {useState, useEffect, useRef} from 'react';



function UseCheckBox () {

	const [checked,setChecked] = useState(false);

	const handleClickCheckBox = () => { 
    
    setChecked(!checked); 
    
  }; 

  return [checked,handleClickCheckBox];

}

export default UseCheckBox;




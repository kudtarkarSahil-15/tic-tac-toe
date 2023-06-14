import React from 'react'

import {FaRegCircle, FaTimes} from 'react-icons/fa'

const Icons = ({iconName}) => {

    if(iconName === 'cross') {
        return <FaTimes className='icon'/>
    }
    else if(iconName === 'zero') {
        return <FaRegCircle className='icon'/>
    }
    else {
    }
    
}

export default Icons;
import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user} = useContext(UserContext);

  if(!user) return ( <div>Please Login</div> )

    return(
        <div>
            Hello {user[0]};
        </div>
    )
}

export default Profile
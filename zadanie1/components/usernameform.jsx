import {useState } from "react"

export default function usernameform(){
    Const [username, setUsername] = userState("")

    function updateUsername(){


    }
    return(
        <div>
            <input type="text" 
            placeholder="Username" 
            onChange = {updateUsername} 
            value={username} />
        </div>
    )
}
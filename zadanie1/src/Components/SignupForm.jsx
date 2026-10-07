import {useState } from "react"


export default function SignupForm(){
    const [firstName, setFirstName] = useState("")    
    const [lastName, setLastName ]= useState("")

    function changeFirstName(event){
        setFirstName(event.target.value)

    }
    function changeLastName(event){
        setLastName(event.target.value)

    }
    return(
        <div>
            <h1>
                Formularz rejestracyjny
            </h1>

            <input type="text"
            value = {firstName}
            onChange={changeFirstName}
            placeholder="First name
            " ></input>

<input type="text"
            value = {lastName}
            onChange={changeLastName}
            placeholder="Last name
            " ></input>

        </div>
    )

}
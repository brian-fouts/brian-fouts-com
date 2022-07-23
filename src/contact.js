import React, { useState } from 'react';

function SubmitButton(props) {
    return (
        <input 
            type="submit" value="Submit" 
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 border border-blue-700 rounded " + (!props.enabled ? "disabled cursor-not-allowed":"")}
         />
    )
}

function ContactForm(props) {
    const [body, setBody] = useState("");
    const [visibility, setVisibility] = useState("visible");
    const [submitEnabled, setSubmitEnabled] = useState(true);

    let submitForm = (event) => {
        event.preventDefault();
        if(!submitEnabled) {
            return
        }
        if(body) {
            setSubmitEnabled(false)
            fetch("https://contact.brian-fouts.com",{
                method: 'POST',
                body: JSON.stringify({"body":body}),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Access-Control-Allow-Headers" : "Content-Type",
                  "Access-Control-Allow-Origin": "https://www.brian-fouts.com",
                  "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                }
            }).then(() => {
                setBody("")
                setVisibility("invisible")
                props.setStatusMessage("Your message has been sent")
            },
            err => {
                setSubmitEnabled(true)
                props.setStatusMessage("There was an error with your request. Please try again later")
            })
        } else {
            props.setStatusMessage("You must provide a message")
        }
    }
    return (
        <div className={visibility}>
            <form onSubmit={submitForm}>
                <div>
                    <textarea
                        name="contact-info" cols="75" rows="10"
                        onChange={e => setBody(e.target.value)}
                        value={body}
                        >
                    </textarea>
                </div>
                <div>
                    <SubmitButton enabled={submitEnabled} />
                </div>
            </form>
        </div>
    )
}

function StatusBox(props) {
    return (
        <div>
            {props.text}
        </div>
    )
}


export default function Contact() {
    const [statusMessage, setStatusMessage] = useState("");
    return (
        <div>
            <div>Please enter your mesage below</div>
            <StatusBox text={statusMessage}/>
            <ContactForm setStatusMessage={setStatusMessage}/>
        </div>
    )
}

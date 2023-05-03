import React, { useState } from 'react';

import Article from "@/components/Article/Article";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleSection from "@/components/Article/ArticleSection";


function SubmitButton(props: any) {
    return (
        <input 
            type="submit" value="Submit" 
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 border border-blue-700 rounded " + (!props.enabled ? "disabled cursor-not-allowed":"")}
         />
    )
}

function StatusBox(props: any) {
    return (
        <div>
            {props.text}
        </div>
    )
}

function ContactForm(props: any) {
    const [body, setBody] = useState("");
    const [visibility, setVisibility] = useState("visible");
    const [submitEnabled, setSubmitEnabled] = useState(true);

    let submitForm = (event: any) => {
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
                    className="text-black"
                        name="contact-info" cols={75} rows={10}
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


const ContactPage = () => {
    const [statusMessage, setStatusMessage] = useState("");
    return (
        <Article title="Contact">
            <ArticleBody>
                <ArticleSection>
                    <div>Please enter your mesage below</div>
                    <StatusBox text={statusMessage}/>
                    <ContactForm setStatusMessage={setStatusMessage}/>
                </ArticleSection>
            </ArticleBody>
        </Article>
    )
}

export default ContactPage;
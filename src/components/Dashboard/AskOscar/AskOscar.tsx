import { Avatar, Input } from "@fluentui/react-components"
import "./AskOscar.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Warning12Regular } from "@fluentui/react-icons";
import config from "../../../config";
import { Person } from "@microsoft/mgt-react";

interface MessageProps {
    message: string;
    from: "user" | "oscar";
}

const Message = (props: MessageProps) => {
    return (
        <div className={`message ${props.from}`}>
            {props.from === "oscar" && <Avatar
                name="Oscar"
                image={{
                    src: window.location.origin + "/OscarAvatar.png",
                }}
            />}
            <div className="messagecontent">
                <p>{props.message}</p>
            </div>
            {props.from === "user" && <Person
            avatarSize="large"
                personQuery="me"
            />}
        </div>
    )
}

export const AskOscar = () => {
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const [error,setError] = useState<boolean>(false);

    useEffect(() => {
        var messageBody = document.querySelector('.messages');
        if (messageBody) {
            messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
        }
    }, [messages])

    const sendMessage = async () => {
        const message = newMessage;
        setMessages([...messages, { message: message, from: "user" }]);
        const _messages = [...messages, { message: message, from: 'user' }];
        setNewMessage("");
        setError(false);
        setTimeout(async (_messages) => {
            try {
                const { data } = await axios.post(config.predictionUrl!, { question: newMessage}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Ocp-Apim-Subscription-Key': config.languageKey
                    }
                })
                setMessages([..._messages, { message: data.answers[0].answer, from: "oscar" }]);
            }
            catch (err) {
                setError(true);
                console.error(err);
            }
        }, 2000, _messages)
    }

    return (
        <div className="askoscar">
            <div className="chatbox">
                {error &&
                        <div className="error"><Warning12Regular color="white"/> Oscar must be sleeping, try again later.<div className="underlay"></div></div>
                }
                <div className="messages">
                    {messages.map((message, index) => <Message key={index} message={message.message} from={message.from} />)}
                </div>
                <div className="inputbox">
                    <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyUp={(e) => { if (e.key === "Enter") sendMessage() }} placeholder="Ask Oscar a question" />
                </div>
            </div>
        </div>
    )
}
import {ChatEngine} from "react-chat-engine";

import ChatFeed from './components/Chatfeed'
export default function App() {
    return (
        <ChatEngine
            height={"60vh"}
            projectID={"966c75d7-d861-496c-a63f-f2a0bf1643e3"}
            userName={"nplodthong"}
            userSecret={"123456"}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}


export default function OtherMessage({lastMessage, message}) {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (<div>
        OtherMessage
    </div>)
}
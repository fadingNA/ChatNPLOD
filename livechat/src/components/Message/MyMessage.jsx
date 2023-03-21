export default function MyMessage({message}) {
    if (message?.attachments.length > 0) {
        return (<img
            src={message.attachments[0].file}
            alt={"message-attachement"}
            className={"message-image"}
            style={{float: 'right'}}
        />)
    }
    return (<div className={"message"} style={{
        float: 'right',
        marginRight: '19px',
        color: 'white',
        backgroundColor: '#fff'
    }}>
        {message.text}
    </div>)
}
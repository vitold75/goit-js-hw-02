function formatMessage(message, maxLength) {
    const messageLength = message.length;
    if (messageLength <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength)+"...";
    }
}
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


function checkForSpam(message) {
    return message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
}
// console.log(checkForSpam("[SPAM] How to earn fast money?"));
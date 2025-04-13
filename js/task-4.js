function getShippingCost(country) {
    let price;
    switch (country) {
        case "Australia":
            price = 170;
            break;
        case "Chile":
            price = 250;
            break;
        case "China":
            price = 100;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
    return `Shipping to ${country} will cost ${price} credits`;
}
// console.log(getShippingCost("Jamaica"));
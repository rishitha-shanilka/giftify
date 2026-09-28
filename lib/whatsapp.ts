export const WHATSAPP_NUMBER = "94785590689"; // replace with the real business number

export function buildOrderMessage(details: {
    productName: string;
    quantity: number;
    price: number;
    message?: string;
}) {
    const lines = [
        "Hello Giftify! 🎁",
        "",
        "I would like to order:",
        "",
        `Product: ${details.productName}`,
        `Quantity: ${details.quantity}`,
    ];
    if (details.message) lines.push(`Personal Message: ${details.message}`);
    lines.push(`Price: Rs. ${(details.price * details.quantity).toLocaleString("en-LK")}`);
    lines.push("", "Thank you!");
    return lines.join("\n");
}

export function buildWhatsAppLink(message: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
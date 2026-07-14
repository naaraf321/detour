export const WHATSAPP_NUMBER = "35699715462";

export const WHATSAPP_MESSAGE = `Hello Detour,
I'd like to discuss my project and receive a quote.`;

export const whatsappUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
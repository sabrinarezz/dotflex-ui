// services/whatsapp.ts

export interface WhatsAppPayload {
  phone: string; // Example: 917289885168
  name?: string;
  email?: string;
  project?: string;
  message?: string;
  customMessage?: string;
}

/**
 * Opens WhatsApp with prefilled message
 * Works in browser only
 */
export const sendWhatsAppMessage = ({
  phone,
  name = "",
  email = "",
  project = "",
  message = "",
  customMessage,
}: WhatsAppPayload): void => {
  if (typeof window === "undefined") return;

  const text =
    customMessage ||
    `🚀 New Mission Request from Dotflex.UI

👤 Name: ${name}
📧 Email: ${email}
💡 Project: ${project}

📝 Vision:
${message}`;

  const cleanPhone = phone.replace(/\D/g, "");
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Builds WhatsApp URL only (if needed)
 */
export const getWhatsAppUrl = ({
  phone,
  customMessage = "",
}: {
  phone: string;
  customMessage: string;
}): string => {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customMessage)}`;
};
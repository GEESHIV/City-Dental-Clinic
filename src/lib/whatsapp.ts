import { CLINIC } from '@/data/clinic';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const GREETING_WHATSAPP_URL = buildWhatsAppUrl(CLINIC.whatsappGreeting);

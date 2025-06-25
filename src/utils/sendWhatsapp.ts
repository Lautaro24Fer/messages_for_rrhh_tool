
export function openWhatsappMessage(phone: string, message: string) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}
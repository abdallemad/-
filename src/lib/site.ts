export const site = {
  name: "فبريكا",
  tagline: "مغسلة سجاد وبطاطين",
  // International format without "+". Replace with the laundry's real number.
  whatsappNumber: "20XXXXXXXXXX",
  phoneNumber: "+20XXXXXXXXXX",
  phoneDisplay: "01X XXXX XXXX",
  address: "دكرنس — الدقهلية",
};

export const bookingMessage = "السلام عليكم، عايزة أحجز استلام سجاد / بطاطين.";

export function whatsappLink(message: string = bookingMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const phoneLink = `tel:${site.phoneNumber}`;

export const site = {
  name: "فبريكا",
  tagline: "مغسلة سجاد وبطاطين",
  /** رقم الواتساب بصيغة دولية بدون + */
  whatsappNumber: "201508050152",
  /** رقم الاتصال بصيغة دولية */
  phoneNumber: "+201508050152",
  /** الرقم بالصيغة المحلية للعرض */
  phoneDisplay: "01508050152",
  address: "دكرنس — الدقهلية",
  /** صفحة الفيسبوك */
  facebook: "https://www.facebook.com/profile.php?id=61595476221967",
};

export const bookingMessage = "السلام عليكم، عايزة أحجز استلام سجاد / بطاطين.";

export function whatsappLink(message: string = bookingMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const phoneLink = `tel:${site.phoneNumber}`;

export const CONFIG = {
  locale: "vi",
  brand: "GEIN MAP FOR SUCCESS",
  domain: "map-for-my-life.com",
  fanpages: [
    "GEIN Family - Thấu Hiểu & Thành Công",
    "GEIN Family - Porozumění & Úspěch"
  ],
  email: "Dangha1988bg@gmail.com",
  phones: ["+420 792 399 688", "+420 728 200 898"],
  address: "Budějovická 148, Velešín 382 32",
  imageKitBase: "https://ik.imagekit.io/noc",
  whatsappMessage: "Tôi muốn được tư vấn về GEIN MAP FOR SUCCESS",
  pageSize: 24
};

export const TEXT = {
  nav: {
    intro: "Giới thiệu",
    catalog: "Danh mục MAP",
    preview: "Đọc thử",
    contact: "Liên hệ",
    cta: "Liên hệ tư vấn"
  },
  hero: {
    headline: "Bạn có thật sự hiểu chính mình, hiểu con, hiểu gia đình mình?",
    subheadline: "GEIN MAP giúp nhìn sâu vào bản thân, gia đình, hôn nhân và hành trình chữa lành.",
    primary: "Xem danh mục MAP",
    secondary: "Nhắn WhatsApp/Zalo"
  },
  footerNote: "GEIN MAP FOR SUCCESS không thay bạn sống cuộc đời của mình. Nhưng có thể giúp bạn nhìn thấy con đường rõ hơn để bước đi."
};

export function getWhatsappUrl(message = CONFIG.whatsappMessage, phone = CONFIG.phones[0]) {
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  return `https://wa.me/${cleanPhone.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function getMapImageUrl(folder, mapNumber, options = {}) {
  const transforms = [];
  if (options.width) transforms.push(`w-${options.width}`);
  if (options.quality) transforms.push(`q-${options.quality}`);
  const tr = transforms.length ? `/tr:${transforms.join(",")}` : "";
  return `${CONFIG.imageKitBase}${tr}/${folder}/${mapNumber}.jpeg`;
}

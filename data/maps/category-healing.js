const categoryCopy = {
  "grow-together": ["đồng hành", "trưởng thành", "an toàn"],
  "peaceful-home": ["mái nhà", "bình yên", "gia đình"],
  "healing-family": ["chữa lành", "gia đình", "kết nối"],
  "sustainable-marriage": ["hôn nhân", "bền vững", "đối thoại"],
  "couple-reconnect": ["vợ chồng", "phục hồi", "tin cậy"],
  "self-love": ["yêu mình", "tự trọng", "chữa lành"],
  "childhood-healing": ["tuổi thơ", "chữa lành", "an toàn"],
  "generational-healing": ["truyền đời", "mô thức", "chuyển hóa"],
  "inner-child": ["đứa trẻ bên trong", "nhu cầu", "ôm ấp"],
  "family-origin": ["gia đình gốc", "niềm tin", "cội rễ"],
  "mother-child": ["mẹ con", "kết nối", "thấu hiểu"],
  "father-child": ["bố con", "an toàn", "tự tin"],
  "marriage-emotion": ["cảm xúc", "hôn nhân", "chữa lành"]
};

export function makeMaps(categoryId, count = 60) {
  const tags = categoryCopy[categoryId] ?? ["MAP", "thấu hiểu", "chuyển hóa"];
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    return {
      id: `${categoryId}-${number}`,
      categoryId,
      number,
      title: `MAP ${tags[0]} số ${number}`,
      subtitle: "Nội dung đọc thử đang được chuẩn bị, bạn có thể liên hệ để nhận bản đầy đủ.",
      hasPreview: false,
      previewModule: `category-${categoryId}-map-${number}`,
      tags
    };
  });
}

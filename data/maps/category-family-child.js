const featured = [
  {
    number: 51,
    title: "Vì sao con lì",
    subtitle: "Hiểu cơ chế cảm xúc phía sau hành vi lì của con",
    hasPreview: true,
    tags: ["gia đình", "nuôi dạy con", "cảm xúc", "thấu hiểu"]
  },
  {
    number: 12,
    title: "Khi con không chịu nghe lời",
    subtitle: "Nhìn lại nhu cầu được tôn trọng phía sau sự phản kháng",
    hasPreview: false,
    tags: ["kỷ luật", "an toàn", "lắng nghe"]
  },
  {
    number: 88,
    title: "Cha mẹ nóng giận, con thu mình",
    subtitle: "Chuyển hóa vòng lặp phản ứng trong gia đình",
    hasPreview: false,
    tags: ["cha mẹ", "nóng giận", "kết nối"]
  }
];

export const maps = Array.from({ length: 330 }, (_, index) => {
  const number = index + 1;
  const custom = featured.find((item) => item.number === number);
  const base = custom ?? {
    number,
    title: `MAP gia đình số ${number}`,
    subtitle: "Gợi mở một lát cắt để cha mẹ hiểu con và hiểu chính mình sâu hơn.",
    hasPreview: false,
    tags: ["gia đình", "đồng hành", "thấu hiểu"]
  };

  return {
    id: `family-child-${number}`,
    categoryId: "family-child",
    previewModule: `category-family-child-map-${number}`,
    ...base
  };
});

export const maps = Array.from({ length: 500 }, (_, index) => {
  const number = index + 1;
  return {
    id: `human-decode-${number}`,
    categoryId: "human-decode",
    number,
    title: `MAP giải mã con người số ${number}`,
    subtitle: "Một chỉ dẫn để nhận diện cơ chế vận hành, tiềm năng và bài học phát triển.",
    hasPreview: false,
    previewModule: `category-human-decode-map-${number}`,
    tags: ["giải mã", "tiềm năng", "bài học"]
  };
});

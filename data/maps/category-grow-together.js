import { makeMaps } from "./category-healing.js";

const previewOverrides = {
  1: {
    title: "GIA ĐÌNH NÀY ĐANG THẬT SỰ MANG NĂNG LƯỢNG NHƯ THẾ NÀO?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  2: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN CẢM THẤY AN TOÀN HOẶC ÁP LỰC TRONG GIA ĐÌNH",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  3: {
    title: "KIỂU CẢM XÚC ĐANG VẬN HÀNH MẠNH NHẤT TRONG MÁI NHÀ NÀY",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  4: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN KHÓ THẬT SỰ MỞ LÒNG VỚI NHAU",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  5: {
    title: "VÌ SAO GIA ĐÌNH NÀY DỄ XUẤT HIỆN KHOẢNG CÁCH CẢM XÚC?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  6: {
    title: "ĐIỀU KHIẾN MỌI NGƯỜI SỐNG BẰNG TRÁCH NHIỆM HƠN KẾT NỐI",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  7: {
    title: "ĐIỀU CÁC THÀNH VIÊN LUÔN MUỐN ĐƯỢC HIỂU NHƯNG KHÔNG NÓI RA",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  8: {
    title: "KIỂU YÊU THƯƠNG MÀ GIA ĐÌNH NÀY ĐANG THỂ HIỆN",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  9: {
    title: "ĐIỀU KHIẾN GIA ĐÌNH NÀY CÓ TIỀM NĂNG CHỮA LÀNH MẠNH",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  10: {
    title: "ĐIỀU GIA ĐÌNH NÀY ĐANG THIẾU NHẤT VỀ MẶT CẢM XÚC",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  11: {
    title: "KHI NÀO CÁC THÀNH VIÊN THẬT SỰ CẢM THẤY ĐƯỢC KẾT NỐI?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  12: {
    title: "ĐIỀU KHIẾN MỘT NGƯỜI CẢM THẤY MÌNH KHÔNG ĐƯỢC THẤU HIỂU TRONG GIA ĐÌNH",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  13: {
    title: "KIỂU ÁP LỰC ĐANG ÂM THẦM TỒN TẠI TRONG MÁI NHÀ NÀY",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  14: {
    title: "ĐIỀU MỌI NGƯỜI ĐANG CỐ CHE GIẤU KHỎI NHAU",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  15: {
    title: "ĐIỀU GIA ĐÌNH NÀY ĐANG THẬT SỰ CẦN ĐỂ CHỮA LÀNH",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  16: {
    title: "KHI TỔN THƯƠNG MỖI NGƯỜI THƯỜNG PHẢN ỨNG NHƯ THẾ NÀO?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  17: {
    title: "ĐIỀU KHIẾN HAI NGƯỜI DỄ VA CHẠM CẢM XÚC NHẤT",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  18: {
    title: "VÌ SAO MỘT NGƯỜI LUÔN CẦN CẢM XÚC CÒN NGƯỜI KIA THIÊN VỀ LÝ TRÍ HOẶC TRÁCH NHIỆM?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  19: {
    title: "ĐIỀU KHIẾN CẢ HAI KHÓ NÓI CHUYỆN THẬT LÒNG VỚI NHAU",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  20: {
    title: "VÌ SAO CÀNG ĐỒNG HÀNH LÂU CÀNG DỄ TỔN THƯƠNG NHAU?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  21: {
    title: "ĐIỀU KHIẾN CẢ HAI DỄ PHÒNG THỦ KHI GIAO TIẾP",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  22: {
    title: "KIỂU NHU CẦU YÊU THƯƠNG ĐANG KHÁC NHAU GIỮA HAI NGƯỜI",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  23: {
    title: "ĐIỀU KHIẾN MỘT NGƯỜI LUÔN CẢM THẤY THIẾU AN TOÀN TRONG MỐI QUAN HỆ",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  24: {
    title: "VÌ SAO CẢ HAI DỄ CẢM THẤY KHÔNG ĐƯỢC GHI NHẬN?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  25: {
    title: "ĐIỀU KHIẾN CẢ HAI LUÔN LẶP LẠI CÙNG MỘT KIỂU XUNG ĐỘT",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  26: {
    title: "KHI ÁP LỰC MỖI NGƯỜI TRỞ THÀNH PHIÊN BẢN NÀO?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  27: {
    title: "ĐIỀU GIA ĐÌNH GỐC ĐANG ẢNH HƯỞNG LÊN KHẢ NĂNG ĐỒNG HÀNH HIỆN TẠI",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  28: {
    title: "KIỂU TỔN THƯƠNG TUỔI THƠ ĐANG VA CHẠM TRONG MỐI QUAN HỆ NÀY",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  29: {
    title: "VÌ SAO CẢ HAI YÊU NHAU NHƯNG VẪN DỄ LÀM ĐAU NHAU?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  30: {
    title: "ĐIỀU CẢ HAI CẦN TRƯỞNG THÀNH ĐỂ KHÔNG ĐÁNH MẤT NHAU",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  31: {
    title: "MỐI QUAN HỆ NÀY ĐANG GIÚP MỘT TRONG HAI TRƯỞNG THÀNH ĐIỀU GÌ?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  32: {
    title: "ĐIỀU KHIẾN CẢ HAI DẦN THAY ĐỔI KHI Ở CẠNH NHAU",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  33: {
    title: "VÌ SAO CẢ HAI NGÀY CÀNG HIỂU BẢN THÂN RÕ HƠN QUA MỐI QUAN HỆ NÀY?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  34: {
    title: "ĐIỀU KHIẾN MỘT NGƯỜI LUÔN CẢM THẤY MÌNH PHẢI CỐ NHIỀU HƠN",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  35: {
    title: "ĐIỀU KHIẾN CẢ HAI KHÓ CẢM THẤY HẠNH PHÚC THẬT SỰ",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  36: {
    title: "VÌ SAO CẢ HAI DỄ CẠN NĂNG LƯỢNG CẢM XÚC KHI THIẾU KẾT NỐI?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  37: {
    title: "ĐIỀU MỐI QUAN HỆ NÀY SẼ ẢNH HƯỞNG LÊN CON CÁI VÀ GIA ĐÌNH TƯƠNG LAI RA SAO?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  38: {
    title: "KIỂU TRƯỜNG NĂNG LƯỢNG MÀ CẶP ĐÔI NÀY ĐANG TẠO RA",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  39: {
    title: "ĐIỀU KHIẾN CẢ HAI KHÓ GIỮ BÌNH YÊN KHI CUỘC SỐNG ÁP LỰC",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  40: {
    title: "VÌ SAO CẢ HAI BẮT ĐẦU MẤT KẾT NỐI KHI THIẾU TRƯỞNG THÀNH CẢM XÚC?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  41: {
    title: "ĐIỀU KHIẾN CẢ HAI DẦN KHÔNG CÒN MUỐN MỞ LÒNG NỮA",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  42: {
    title: "ĐIỀU MỐI QUAN HỆ NÀY ĐANG CỐ DẠY CẢ HAI TRƯỞNG THÀNH",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  43: {
    title: "ĐIỀU KHIẾN CẢ HAI VẪN CHƯA THỂ BUÔNG BỎ NHAU",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  44: {
    title: "ĐIỀU CẢ HAI ĐANG VÔ THỨC TỰ LÀM ĐAU CHÍNH MÌNH TRONG MỐI QUAN HỆ",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  45: {
    title: "ĐIỀU CẢ HAI THẬT SỰ CẦN HIỂU ĐỂ TIẾP TỤC ĐI CÙNG NHAU LÂU DÀI",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  46: {
    title: "ĐIỀU MỐI QUAN HỆ NÀY CẦN XÂY DỰNG MẠNH NHẤT LÚC NÀY",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  47: {
    title: "ĐIỀU CẢ HAI CẦN HỌC ĐỂ YÊU VÀ ĐỒNG HÀNH TRƯỞNG THÀNH HƠN",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  48: {
    title: "ĐIỀU CẢ HAI CẦN BUÔNG BỎ ĐỂ ĐI CÙNG NHAU NHẸ NHÀNG HƠN",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  49: {
    title: "ĐIỀU CẢ HAI CẦN NGỪNG LÀM ĐỂ KHÔNG TIẾP TỤC TỔN THƯƠNG NHAU",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  50: {
    title: "ĐIỀU CẢ HAI CẦN THA THỨ ĐỂ TRƯỞNG THÀNH CÙNG NHAU HƠN",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  51: {
    title: "ĐIỀU GIÚP CẢ HAI XÂY LẠI CẢM GIÁC AN TOÀN TRONG MỐI QUAN HỆ",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  52: {
    title: "KHI NÀO HÀNH TRÌNH TRƯỜNG THÀNH THẬT SỰ BẮT ĐẦU?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  53: {
    title: "ĐIỀU GIÚP CẢ HAI KHÔNG CÒN SỐNG TRONG PHÒNG THỈ CẢM XÚC",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  54: {
    title: "ĐIỀU GÌ GIÚP HAI NGƯỜI KẾT NỐI LẠI THẬT SỰ TỪ BÊN TRONG",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  55: {
    title: "ĐIỀU GIÚP CẢ HAI HỌC CÁCH LẮNG NGHE VÀ THẤU HIỂU NHAU HƠN",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  56: {
    title: "ĐIỀU GIÚP CẢ HAI XÂY DỰNG MỘT GIA ĐÌNH TRƯỞNG THÀNH VÀ CHỮA LÀNH",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  57: {
    title: "ĐIỀU GIÚP CẢ HAI THOÁT KHỎI MÔ THỨC TÌNH YÊU TỔN THƯƠNG CŨ",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  58: {
    title: "PHIÊN BẢN MỐI QUAN HỆ BÌNH YÊN VÀ TRƯỞNG THÀNH NHẤT CỦA HAI NGƯỜI SẼ NHƯ THẾ NÀO?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  59: {
    title: "HÀNH TRÌNH TRƯỞNG THÀNH THẬT SỰ MÀ MỐI QUAN HỆ NÀY ĐANG TẠO RA LÀ GÌ?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  },
  60: {
    title: "PHIÊN BẢN CẶP ĐÔI TRƯỞNG THÀNH, SÂU SẮC VÀ ĐỒNG HÀNH BỀN VỮNG NHẤT CỦA HAI NGƯỜI SẼ TRỞ THÀNH AI?",
    subtitle: "Đọc thử MAP đồng hành, trưởng thành cùng nhau.",
    tags: ["đồng hành", "trưởng thành", "mối quan hệ", "thấu hiểu"]
  }
};

export const maps = makeMaps("grow-together").map((map) => {
  const preview = previewOverrides[map.number];
  if (!preview) return map;

  return {
    ...map,
    title: preview.title,
    subtitle: preview.subtitle,
    hasPreview: true,
    previewModule: `category-grow-together-map-${map.number}`,
    tags: preview.tags
  };
});

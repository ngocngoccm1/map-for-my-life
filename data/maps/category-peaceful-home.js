import { makeMaps } from "./category-healing.js";

const previewOverrides = {
  1: {
    title: "GIA ĐÌNH NÀY ĐANG THẬT SỰ MANG NĂNG LƯỢNG NHƯ THẾ NÀO?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  2: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN CẢM THẤY AN TOÀN HOẶC ÁP LỰC TRONG GIA ĐÌNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  3: {
    title: "KIỂU CẢM XÚC ĐANG VẬN HÀNH MẠNH NHẤT TRONG MÁI NHÀ NÀY",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  4: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN KHÓ THẬT SỰ MỞ LÒNG VỚI NHAU",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  5: {
    title: "VÌ SAO GIA ĐÌNH NÀY DỄ XUẤT HIỆN KHOẢNG CÁCH CẢM XÚC?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  6: {
    title: "ĐIỀU KHIẾN MỌI NGƯỜI SỐNG BẰNG TRÁCH NHIỆM HƠN KẾT NỐI",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  7: {
    title: "ĐIỀU CÁC THÀNH VIÊN LUÔN MUỐN ĐƯỢC HIỂU NHƯNG KHÔNG NÓI RA",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  8: {
    title: "KIỂU YÊU THƯƠNG MÀ GIA ĐÌNH NÀY ĐANG THỂ HIỆN",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  9: {
    title: "ĐIỀU KHIẾN GIA ĐÌNH NÀY CÓ TIỀM NĂNG CHỮA LÀNH MẠNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  10: {
    title: "ĐIỀU GIA ĐÌNH NÀY ĐANG THIẾU NHẤT VỀ MẶT CẢM XÚC",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  11: {
    title: "KHI NÀO CÁC THÀNH VIÊN THẬT SỰ CẢM THẤY ĐƯỢC KẾT NỐI?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  12: {
    title: "ĐIỀU KHIẾN MỘT NGƯỜI CẢM THẤY MÌNH KHÔNG ĐƯỢC THẤU HIỂU TRONG GIA ĐÌNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  13: {
    title: "KIỂU ÁP LỰC ĐANG ÂM THẦM TỒN TẠI TRONG MÁI NHÀ NÀY",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  14: {
    title: "ĐIỀU MỌI NGƯỜI ĐANG CỐ CHE GIẤU KHỎI NHAU",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  15: {
    title: "ĐIỀU GIA ĐÌNH NÀY ĐANG THẬT SỰ CẦN ĐỂ CHỮA LÀNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  16: {
    title: "KHI TỔN THƯƠNG MỖI THÀNH VIÊN THƯỜNG PHẢN ỨNG NHƯ THẾ NÀO?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  17: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN DỄ VA CHẠM CẢM XÚC NHẤT",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  18: {
    title: "VÌ SAO MỖI NGƯỜI CÓ NHU CẦU YÊU THƯƠNG KHÁC NHAU?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  19: {
    title: "ĐIỀU KHIẾN GIA ĐÌNH NÀY KHÓ NÓI CHUYỆN THẬT LÒNG VỚI NHAU",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  20: {
    title: "VÌ SAO CÀNG GIẢI THÍCH CÀNG DỄ TỔN THƯƠNG?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  21: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN DỄ PHÒNG THỦ CẢM XÚC",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  22: {
    title: "KIỂU NHU CẦU CẢM XÚC ĐANG KHÁC NHAU TRONG GIA ĐÌNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  23: {
    title: "ĐIỀU KHIẾN MỘT THÀNH VIÊN LUÔN CẢM THẤY THIẾU AN TOÀN TRONG MÁI NHÀ NÀY",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  24: {
    title: "VÌ SAO CÁC THÀNH VIÊN DỄ CẢM THẤY KHÔNG ĐƯỢC GHI NHẬN?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  25: {
    title: "ĐIỀU KHIẾN GIA ĐÌNH NÀY LUÔN LẶP LẠI CÙNG MỘT KIỂU XUNG ĐỘT",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  26: {
    title: "KHI ÁP LỰC MỖI NGƯỜI TRỞ THÀNH PHIÊN BẢN NÀO?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  27: {
    title: "ĐIỀU GIA ĐÌNH GỐC CỦA CHA MẸ ĐANG ẢNH HƯỞNG LÊN CON CÁI HIỆN TẠI",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  28: {
    title: "KIỂU TỔN THƯƠNG TUỔI THƠ ĐANG ĐƯỢC LẶP LẠI TRONG GIA ĐÌNH NÀY",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  29: {
    title: "VÌ SAO MỌI NGƯỜI YÊU NHAU NHƯNG VẪN DỄ LÀM ĐAU NHAU?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  30: {
    title: "ĐIỀU GIA ĐÌNH NÀY ĐANG VÔ THỨC TRUYỀN TIẾP CHO THẾ HỆ SAU",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  31: {
    title: "GIA ĐÌNH NÀY ĐANG LÀM MỘT THÀNH VIÊN KIỆT SỨC ĐIỀU GÌ?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  32: {
    title: "ĐIỀU KHIẾN MỘT NGƯỜI DẦN ĐÁNH MẤT CHÍNH MÌNH TRONG GIA ĐÌNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  33: {
    title: "VÌ SAO MỌI NGƯỜI NGÀY CÀNG SỐNG BẰNG VAI TRÒ HƠN CẢM XÚC?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  34: {
    title: "ĐIỀU KHIẾN MỘT NGƯỜI LUÔN CẢM THẤY MÌNH PHẢI CỐ NHIỀU HƠN",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  35: {
    title: "ĐIỀU KHIẾN GIA ĐÌNH NÀY KHÓ CẢM THẤY HẠNH PHÚC THẬT SỰ",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  36: {
    title: "VÌ SAO CÁC THÀNH VIÊN DỄ CẠN NĂNG LƯỢNG CẢM XÚC?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  37: {
    title: "ĐIỀU CON CÁI ĐANG ÂM THẦM HẤP THỤ TỪ MÁI NHÀ NÀY",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  38: {
    title: "KIỂU TRƯỜNG NĂNG LƯỢNG MÀ GIA ĐÌNH NÀY ĐANG TẠO RA",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  39: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN KHÓ TÌM LẠI CẢM GIÁC BÌNH YÊN KHI Ở CẠNH NHAU",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  40: {
    title: "VÌ SAO MỌI NGƯỜI BẮT ĐẦU MẤT NIỀM TIN VÀO KẾT NỐI GIA ĐÌNH?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  41: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN DẦN KHÔNG CÒN MUỐN MỞ LÒNG NỮA",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  42: {
    title: "ĐIỀU GIA ĐÌNH NÀY ĐANG CỐ DẠY MỌI NGƯỜI TRƯỞNG THÀNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  43: {
    title: "ĐIỀU KHIẾN CÁC THÀNH VIÊN VẪN CHƯA THỂ THẬT SỰ CHỮA LÀNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  44: {
    title: "ĐIỀU MỌI NGƯỜI ĐANG VÔ THỨC TỰ LÀM ĐAU CHÍNH MÌNH VÀ NHAU",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  45: {
    title: "ĐIỀU GIA ĐÌNH NÀY THẬT SỰ CẦN HIỂU ĐỂ THAY ĐỔI",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  46: {
    title: "ĐIỀU GIA ĐÌNH NÀY CẦN CHỮA LÀNH NHẤT LÚC NÀY",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  47: {
    title: "ĐIỀU CÁC THÀNH VIÊN CẦN HỌC ĐỂ YÊU THƯƠNG NHAU TRƯỞNG THÀNH HƠN",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  48: {
    title: "ĐIỀU CẢ GIA ĐÌNH CẦN BUÔNG BỎ ĐỂ NHẸ LÒNG HƠN",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  49: {
    title: "ĐIỀU GIA ĐÌNH NÀY CẦN NGỪNG LÀM ĐỂ KHÔNG TIẾP TỤC TẠO TỔN THƯƠNG",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  50: {
    title: "ĐIỀU CÁC THÀNH VIÊN CẦN THA THỨ CHO NHAU VÀ CHO CHÍNH MÌNH",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  51: {
    title: "ĐIỀU GIÚP MÁI NHÀ NÀY XÂY LẠI CẢM GIÁC AN TOÀN CẢM XÚC",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  52: {
    title: "KHI NÀO HÀNH TRÌNH XÂY DỰNG MÁI NHÀ BÌNH YÊN THẬT SỰ BẮT ĐẦU?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  53: {
    title: "ĐIỀU GIÚP CÁC THÀNH VIÊN KHÔNG CÒN SỐNG TRONG PHÒNG THỦ CẢM XÚC",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  54: {
    title: "ĐIỀU GIÚP MỌI NGƯỜI KẾT NỐI LẠI THẬT SỰ TỪ BÊN TRONG",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  55: {
    title: "ĐIỀU GIÚP GIA ĐÌNH HỌC CÁCH LẮNG NGHE VÀ THẤU HIỂU NHAU HƠN",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  56: {
    title: "ĐIỀU GIÚP MÁI NHÀ NÀY TRỞ THÀNH NƠI MỌI NGƯỜI MUỐN QUAY VỀ",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  57: {
    title: "ĐIỀU GIÚP GIA ĐÌNH THOÁT KHỎI MÔ THỨC TỔN THƯƠNG TRUYỀN ĐỜI",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  58: {
    title: "PHIÊN BẢN MÁI NHÀ BÌNH YÊN VÀ TRƯỞNG THÀNH NHẤT SẼ NHƯ THẾ NÀO?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  59: {
    title: "HÀNH TRÌNH TRƯỞNG THÀNH THẬT SỰ MÀ GIA ĐÌNH NÀY ĐANG CÙNG NHAU ĐI QUA LÀ GÌ?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  },
  60: {
    title: "PHIÊN BẢN GIA ĐÌNH YÊU THƯƠNG, BÌNH AN VÀ KẾT NỐI SÂU SẮC NHẤT SẼ TRỞ THÀNH AI?",
    subtitle: "Đọc thử MAP xây dựng mái nhà bình yên và trưởng thành.",
    tags: ["gia đình", "mái nhà bình yên", "trưởng thành", "thấu hiểu", "kết nối"]
  }
};

export const maps = makeMaps("peaceful-home").map((map) => {
  const preview = previewOverrides[map.number];
  if (!preview) return map;

  return {
    ...map,
    title: preview.title,
    subtitle: preview.subtitle,
    hasPreview: true,
    previewModule: `category-peaceful-home-map-${map.number}`,
    tags: preview.tags
  };
});

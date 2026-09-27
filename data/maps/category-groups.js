// Group names and MAP ranges transcribed from the category overview posters.
const MAP_GROUPS = {
  "family-child": [
    ["Bản chất cốt lõi của con", 15],
    ["Nội tâm, cảm xúc và nhu cầu sâu", 15],
    ["Tư duy, học tập và khả năng tập trung", 20],
    ["Hành vi và phản ứng của con", 20],
    ["Bản sắc, lòng tự trọng và giá trị bản thân", 10],
    ["Tài năng, năng khiếu và định hướng phát triển", 10],
    ["Môi trường phát triển phù hợp với con", 15],
    ["Thói quen, kỷ luật cá nhân và nếp sống", 10],
    ["Điện thoại, mạng xã hội và giải trí nhanh", 10],
    ["Tuổi dậy thì và tuổi teen", 10],
    ["Bạn bè, xã hội và hòa nhập", 10],
    ["Nhà trường, giáo viên và áp lực học đường", 10],
    ["Nguy cơ phát triển lệch của con", 15],
    ["Chữa lành và phục hồi nội tâm cho con", 10],
    ["Hành trình phát triển dài hạn của con", 15],
    ["Phản chiếu giữa bố mẹ và con", 10],
    ["Gắn kết cảm xúc bố mẹ – con", 10],
    ["Xung đột và va chạm tính cách", 10],
    ["Giao tiếp cảm xúc trong gia đình", 10],
    ["Vai trò của cha và mẹ trong nội tâm con", 15],
    ["Phong cách làm cha mẹ", 10],
    ["Mâu thuẫn vợ chồng và ảnh hưởng lên con", 10],
    ["Anh chị em và vị trí của con trong gia đình", 10],
    ["Gia đình và mô thức truyền đời", 10],
    ["MAP đôi theo từng giai đoạn tuổi", 10],
    ["Hệ thống tự động nhận diện cho 1 MAP của con", 12],
    ["Hệ thống tự động nhận diện cho MAP đôi bố mẹ – con", 10],
    ["Kế hoạch đồng hành sau phân tích", 8]
  ],
  "grow-together": [
    "Nền tảng đồng hành giữa hai người",
    "Khác biệt và thử thách khi đồng hành dài hạn",
    "Cùng trưởng thành qua mối quan hệ",
    "Xây dựng mối quan hệ trưởng thành, bền vững"
  ],
  "peaceful-home": [
    "Mái nhà này đang mang năng lượng gì?",
    "Những mô thức & tổn thương đang ảnh hưởng mái nhà",
    "Mái nhà này đang ảnh hưởng các thành viên ra sao?",
    "Xây dựng một mái nhà bình yên & trưởng thành thật sự"
  ],
  "healing-family": [
    "Gia đình này đang mang năng lượng gì?",
    "Những mô thức & tổn thương đang ảnh hưởng gia đình",
    "Năng lượng gia đình ảnh hưởng các thành viên ra sao?",
    "Xây dựng một gia đình chữa lành thật sự"
  ],
  "strong-marriage": [
    "Nền tảng hôn nhân này đang được xây trên điều gì?",
    "Những khác biệt & thử thách trong hôn nhân",
    "Cuộc hôn nhân này đang ảnh hưởng cuộc sống ra sao?",
    "Xây dựng một cuộc hôn nhân trưởng thành & bền vững thật sự"
  ],
  "reconnect-couple": [
    "Cuộc hôn nhân này đang mất kết nối ở đâu?",
    "Nguồn gốc khiến hai người dần xa nhau",
    "Mất kết nối đang ảnh hưởng cuộc hôn nhân ra sao?",
    "Phục hồi kết nối & xây lại một cuộc hôn nhân mới"
  ],
  "love-myself": [
    "Bạn đã đánh mất giá trị bản thân như thế nào?",
    "Những mô thức đang khiến bạn xa chính mình",
    "Việc không yêu chính mình đang ảnh hưởng cuộc sống ra sao?",
    "Hành trình yêu lại & quay về với chính mình"
  ],
  "childhood-healing": [
    "Đứa trẻ bên trong đã trải qua điều gì?",
    "Cơ chế tự vệ hình thành từ tuổi thơ",
    "Tuổi thơ đang ảnh hưởng cuộc sống hiện tại ra sao?",
    "Chữa lành đứa trẻ bên trong"
  ],
  "generational-healing": [
    "Tổn thương nào đang được truyền qua các thế hệ?",
    "Những mô thức đang vô thức lặp lại",
    "Tổn thương truyền đời đang ảnh hưởng hiện tại ra sao?",
    "Chữa lành & cắt đứt vòng lặp tổn thương"
  ],
  "inner-child": [
    "Đứa trẻ bên trong bạn đã trải qua điều gì?",
    "Cơ chế sinh tồn & tự vệ của đứa trẻ bên trong",
    "Đứa trẻ bên trong đang ảnh hưởng cuộc sống hiện tại ra sao?",
    "Chữa lành & quay lại với đứa trẻ thật bên trong"
  ],
  "root-family": [
    "Gia đình gốc đã tạo ra con người hiện tại như thế nào?",
    "Mô thức truyền đời & những vết thương lặp lại",
    "Gia đình gốc đang ảnh hưởng hiện tại ra sao?",
    "Chữa lành & cắt đứt mô thức tổn thương"
  ],
  "mother-child": [
    "Con đang cảm nhận mẹ như thế nào?",
    "Mẹ đang yêu con theo cách nào?",
    "Khoảng cách & xung đột mẹ – con",
    "Chữa lành & kết nối lại mẹ – con"
  ],
  "father-child": [
    "Con đang cảm nhận bố như thế nào?",
    "Bố đang đồng hành với con theo cách nào?",
    "Khoảng cách & xung đột bố – con",
    "Chữa lành & kết nối lại bố – con"
  ],
  "marriage-emotion-healing": [
    "Hôn nhân này đang thật sự vận hành bằng điều gì?",
    "Tổn thương & cơ chế phản ứng trong hôn nhân",
    "Những vết thương cũ đang ảnh hưởng hôn nhân ra sao?",
    "Chữa lành & tái tạo một cuộc hôn nhân mới"
  ]
};

const MAP_ANALYSIS_MODE = {
  "human-decoding": "1 MAP",
  "grow-together": "2 MAP",
  "peaceful-home": "2 MAP hoặc nhiều MAP",
  "healing-family": "2 MAP hoặc nhiều MAP",
  "strong-marriage": "2 MAP",
  "reconnect-couple": "2 MAP",
  "love-myself": "1 MAP",
  "childhood-healing": "1 MAP",
  "generational-healing": "2 MAP hoặc nhiều MAP",
  "inner-child": "1 MAP",
  "root-family": "2 MAP hoặc nhiều MAP",
  "mother-child": "2 MAP",
  "father-child": "2 MAP",
  "marriage-emotion-healing": "2 MAP"
};

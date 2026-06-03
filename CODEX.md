# GEIN MAP FOR SUCCESS - Coding Context

## Mục tiêu

Xây dựng website catalog/thư viện MAP cao cấp, mềm mại, hiện đại và chữa lành cho GEIN MAP FOR SUCCESS. Giai đoạn 1 chỉ dùng tiếng Việt, nhưng text chính phải gom vào config/data để dễ thêm tiếng Séc về sau.

## Kiến trúc

Project là static site chạy tốt trên GitHub Pages:

- `index.html` là shell duy nhất.
- `js/router.js` xử lý hash route `#/`, `#/category/:categoryId`, `#/map/:categoryId/:mapNumber`.
- `js/data-loader.js` là nơi duy nhất import lazy data.
- `js/ui.js` render giao diện và gắn event.
- `data/categories.js` chỉ chứa metadata category.
- `data/maps/*.js` chứa danh sách MAP từng category.
- `data/previews/*.js` chứa nội dung đọc thử từng MAP.

Không chuyển sang React/Next/Vue nếu chưa có yêu cầu rõ ràng.

## Quy tắc code

- Dùng ES modules, function nhỏ, tên biến rõ nghĩa.
- Không nhồi data vào `index.html`.
- Không hard-code text thương hiệu rải rác; ưu tiên `js/config.js` hoặc data modules.
- Không thêm dependency nặng nếu HTML/CSS/JS thuần giải quyết được.
- Luôn có loading, empty, error hoặc fallback state cho dữ liệu thiếu.

## Quy tắc data MAP

Category cần có `id`, `name`, `count`, `imageFolder`, `description`, `group`, `accent`, `mapModule`.

MAP cần có `id`, `categoryId`, `number`, `title`, `subtitle`, `hasPreview`, `previewModule`, `tags`.

Preview cần export `preview` với `id`, `title`, `coreGoal`, `blocks`. Mỗi block có `title` và `chapters`.

Khi thêm data mới, chỉ sửa `data/categories.js`, thêm file trong `data/maps/` và nếu có đọc thử thì thêm file trong `data/previews/`. Không sửa logic chính nếu chỉ thêm nội dung.

## Quy tắc UI

Phong cách: premium, healing, warm, elegant, editorial. Ưu tiên mobile mượt, text dễ đọc tiếng Việt, không lạm dụng emoji.

Trang chi tiết MAP là layout dạng trang sách:

- Desktop 3 cột: ảnh bìa, nội dung, CTA sticky.
- Tablet 2 cột khi đủ rộng.
- Mobile 1 cột, ảnh trước, nội dung sau, CTA cuối trang.

Đọc thử phải nằm trực tiếp trong trang chi tiết, không dùng modal. Modal chỉ dùng để xem ảnh lớn.

## Quy tắc lazy loading

- Load trang chủ và categories trước.
- Chỉ import `data/maps/<module>.js` khi vào category.
- Chỉ import `data/previews/<module>.js` khi vào detail MAP có `hasPreview`.
- Cache module đã load bằng Map trong `js/data-loader.js`.
- Không render toàn bộ 330/500 item cùng lúc; dùng `CONFIG.pageSize` và nút load thêm.
- Search phải debounce.
- Ảnh luôn dùng `loading="lazy"` và có fallback khi lỗi.

## ImageKit

Dùng helper `getMapImageUrl(folder, mapNumber, options)` trong `js/config.js`. Không nhập tay từng URL ảnh nếu có thể suy ra từ folder và số MAP.

## GitHub Pages và iframe

Giữ mọi path tương đối bằng `./` hoặc `../` để chạy ổn trong subpath GitHub Pages. Không dùng route thật phía server; chỉ dùng hash router để mở trực tiếp link vẫn hoạt động.

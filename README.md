# GEIN MAP FOR SUCCESS

Website catalog/thư viện MAP tĩnh cho dự án GEIN MAP FOR SUCCESS. App dùng HTML, Tailwind CDN và JavaScript thuần để dễ deploy bằng GitHub Pages và dễ nhúng iframe vào Webcake.

## Chạy local

Mở bằng VS Code Live Server tại file `index.html`, hoặc chạy:

```bash
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Cấu trúc

- `index.html`: shell chính của app.
- `css/app.css`: design tokens, animation, fallback ảnh.
- `js/config.js`: thông tin thương hiệu, contact, helper ImageKit.
- `js/data-loader.js`: lazy load category, MAP list và preview.
- `js/router.js`: hash router.
- `js/ui.js`: render UI, search, pagination, modal ảnh, accordion.
- `data/categories.js`: danh mục chính.
- `data/maps/*.js`: danh sách MAP theo danh mục.
- `data/previews/*.js`: nội dung đọc thử từng MAP.

## Thêm data mới

Thêm category mới trong `data/categories.js`, đặt `id`, `order`, `count`, `imageFolder`, `coverImage` và `mapModule`.

Category có thể khai báo thêm `imagePattern` và `supportsMultipleImages`. Nếu bỏ trống, app dùng default `imagePattern: "number"` và `supportsMultipleImages: false`.

`coverImage` có thể để chuỗi rỗng. Khi rỗng, giao diện bìa sách sẽ tự dùng ảnh MAP số 1 theo `imageFolder`; nếu ảnh lỗi thì hiện placeholder gradient.

Tạo file danh sách MAP tương ứng trong `data/maps/`, ví dụ `category-new.js`, export:

```js
export const maps = [
  {
    id: "new-1",
    categoryId: "new",
    number: 1,
    title: "Tên MAP",
    subtitle: "Mô tả ngắn",
    hasPreview: true,
    previewModule: "category-new-map-1",
    tags: ["tag"]
  }
];
```

Tạo đọc thử trong `data/previews/category-new-map-1.js` và export `preview`. Nếu chưa có đọc thử, đặt `hasPreview: false`; giao diện sẽ hiển thị trạng thái đang cập nhật.

## ImageKit

Ảnh được tạo bằng helper:

```js
getMapImageUrl("chap1", 57, { width: 400, quality: 80 });
```

Kết quả mặc định dùng quy tắc `https://ik.imagekit.io/noc/<folder>/<number>.jpeg` và hỗ trợ transform resize/quality của ImageKit.

Với category dùng ảnh theo số MAP, khai báo:

```js
{
  imageFolder: "chap3",
  imagePattern: "number",
  supportsMultipleImages: false
}
```

Helper sẽ sinh ảnh dạng `https://ik.imagekit.io/noc/chap3/23.jpeg`.

Với category một ảnh theo số MAP, khai báo:

```js
{
  imageFolder: "chap4",
  imagePattern: "number",
  supportsMultipleImages: false
}
```

Helper sẽ sinh `https://ik.imagekit.io/noc/chap4/41.jpeg`.

## Theme sáng/tối

Header có nút chuyển `Light` / `Dark`. Theme được lưu trong `localStorage` bằng key `gein-map-theme`, nên reload trang vẫn giữ lựa chọn cũ. Nếu người dùng chưa chọn, app đọc system preference và fallback về light mode.

Màu theme nằm trong CSS variables ở `css/app.css`; khi chỉnh màu, ưu tiên sửa biến trong `:root` và `:root[data-theme="dark"]`.

## Deploy GitHub Pages

```bash
git add .
git commit -m "Build GEIN MAP catalog"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Trong GitHub: Settings > Pages > Build and deployment > Deploy from a branch > chọn `main` và `/root`.

## Nhúng Webcake

```html
<iframe src="GITHUB_PAGES_URL" style="width:100%;height:100vh;border:0;" loading="lazy"></iframe>
```

Nếu Webcake tạo scroll hai lớp, đặt chiều cao iframe theo chiều cao section thực tế hoặc dùng một section Webcake full viewport rồi để iframe `height:100vh`. Khi cần nội dung tự giãn theo chiều cao động, có thể thêm script postMessage sau này để app gửi chiều cao thật về trang nhúng.

Bạn đang làm tiếp trên project GEIN MAP FOR SUCCESS hiện tại.

Nhiệm vụ lần này: chỉ thêm data nội dung đọc thử MAP mới. Không sửa UI, không sửa layout, không sửa router, không sửa logic nếu không bắt buộc.

Trước khi làm:

* Dùng codeGraph để đọc cấu trúc project hiện tại.
* Xác định đúng nơi đang lưu data MAP, data preview, category, route.
* Làm theo đúng format data hiện có.
* Không tạo format mới nếu project đã có format chuẩn.
* Không đổi tên field cũ.
* Không phá lazy loading preview hiện tại.

Yêu cầu:

1. Tôi sẽ cung cấp nội dung MAP dạng text.
2. Hãy chuyển nội dung đó thành data JS/JSON đúng format project đang dùng.
3. Nếu là nội dung đọc thử, hãy đặt vào đúng thư mục preview hiện có.
4. Nếu MAP chưa có trong danh sách maps của category, hãy thêm item MAP vào đúng file category.
5. Nếu MAP đã có rồi, chỉ cập nhật hasPreview/previewModule nếu cần.
6. Không nhồi preview vào index.html.
7. Không sửa app.js nếu chỉ thêm data.
8. Không sửa CSS.
9. Không đổi giao diện.
10. Không xóa data cũ.

Quy tắc đặt tên:

* categoryId lấy theo category hiện có.
* mapNumber lấy theo số MAP trong nội dung.
* previewModule đặt theo quy tắc hiện có trong project.
* Nếu project chưa có quy tắc rõ, dùng dạng:
  category-family-child-map-51
* File preview tương ứng:
  data/previews/category-family-child-map-51.js

Format preview mong muốn, nhưng phải ưu tiên format thực tế đang có trong project:

export const preview = {
id: "family-child-51",
title: "MAP 51 — Vì sao con lì",
coreGoal: [
"..."
],
blocks: [
{
title: "Khối 1 — ...",
chapters: [
{
number: 1,
title: "...",
mainIndex: "...",
subIndexes: ["...", "..."]
}
]
}
]
};

Khi chuyển text sang data:

* Giữ đúng tiêu đề MAP.
* Giữ đúng số MAP.
* Giữ đúng tên khối.
* Giữ đúng số chương.
* Giữ đúng tiêu đề chương.
* Tách “Chỉ số chính” thành mainIndex.
* Tách “Chỉ số phụ” thành subIndexes array.
* Bỏ các ký tự trang trí không cần thiết như đường kẻ dài nếu làm bẩn data.
* Không tự viết thêm nội dung mới.
* Không tự rút gọn nội dung.
* Không tự dịch.
* Không đổi ý nghĩa.

Sau khi thêm data:

* Kiểm tra import/export không lỗi.
* Kiểm tra route detail MAP mở được.
* Kiểm tra nút đọc thử hoạt động.
* Kiểm tra nếu ảnh MAP lấy theo số MAP vẫn đúng.
* Chạy test thủ công hoặc local nếu project có hướng dẫn.
* Commit Git với message:
  add preview data for MAP <số MAP>

Đây là nội dung MAP cần thêm:

[DÁN NỘI DUNG MAP Ở ĐÂY]

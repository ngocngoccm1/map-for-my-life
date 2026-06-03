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
getMapImageUrl("Images_Clone_CATEGOGY1", 57, { width: 400, quality: 80 });
```

Kết quả dùng quy tắc `https://ik.imagekit.io/noc/<folder>/<number>.jpeg` và hỗ trợ transform resize/quality của ImageKit.

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

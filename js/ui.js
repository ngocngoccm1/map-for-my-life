import { CONFIG, TEXT, HOME_CONTENT, INTRO_IMAGE_URL, getMapImageUrl, getWhatsappUrl } from "./config.js";

const app = () => document.querySelector("#app");
const modalRoot = () => document.querySelector("#modal-root");
const THEME_KEY = "gein-map-theme";

let activeCategoryFilter = "Tất cả";
let categoryState = { query: "", previewOnly: false, visible: CONFIG.pageSize };
let pendingSection = "";

export function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  setTheme(stored || (systemDark ? "dark" : "light"));
}

export function renderHeader() {
  document.querySelector("#site-header").innerHTML = `
    <nav class="container flex min-h-20 items-center justify-between gap-4">
      <a href="#/" class="text-lg font-black tracking-tight text-pine sm:text-2xl">${CONFIG.brand}</a>
      <div class="hidden items-center gap-7 text-sm font-bold text-pine lg:flex">
        <a href="#/" data-scroll-section="intro">Giới thiệu</a>
        <a href="#/" data-scroll-section="deep-groups">Nhóm chuyên sâu</a>
        <a href="#/" data-scroll-section="catalog">${TEXT.nav.catalog}</a>
        <a href="#/map/family-child/51">${TEXT.nav.preview}</a>
        <a href="#/" data-scroll-section="contact">${TEXT.nav.contact}</a>
      </div>
      <div class="hidden items-center gap-2 lg:flex">
        <button class="btn btn-secondary w-auto" data-theme-toggle type="button" aria-label="Chuyển sáng tối">Sáng/tối</button>
        <a class="btn btn-primary" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">${TEXT.nav.cta}</a>
      </div>
      <div class="flex items-center gap-2 lg:hidden">
        <button class="btn btn-secondary w-auto" data-theme-toggle type="button" aria-label="Chuyển sáng tối">Theme</button>
        <button class="btn btn-secondary w-auto" data-mobile-menu aria-expanded="false">Menu</button>
      </div>
    </nav>
    <div class="container hidden pb-4 lg:hidden" data-mobile-panel>
      <div class="card grid gap-2 p-3 text-sm font-bold text-pine">
        <a class="rounded-2xl px-4 py-3" href="#/" data-scroll-section="intro">Giới thiệu</a>
        <a class="rounded-2xl px-4 py-3" href="#/" data-scroll-section="deep-groups">Nhóm chuyên sâu</a>
        <a class="rounded-2xl px-4 py-3" href="#/" data-scroll-section="catalog">Danh mục MAP</a>
        <a class="rounded-2xl px-4 py-3" href="#/map/family-child/51">Đọc thử</a>
        <a class="rounded-2xl px-4 py-3" href="#/" data-scroll-section="contact">Liên hệ</a>
      </div>
    </div>`;
  syncThemeButtons();
}

export function renderHome(categories) {
  const orderedCategories = [...categories].sort((a, b) => (a.order || 999) - (b.order || 999));
  const groups = ["Tất cả", "Gia đình", "Hôn nhân", "Chữa lành", "Giải mã con người"];
  const filtered = activeCategoryFilter === "Tất cả"
    ? orderedCategories
    : orderedCategories.filter((item) => item.group === activeCategoryFilter);

  app().innerHTML = `
    <section class="container grid min-h-[calc(100dvh-80px)] items-center gap-10 py-10 lg:grid-cols-[1fr_.86fr]">
      <div class="fade-in">
        <p class="text-sm font-bold uppercase tracking-[.18em] text-clay">Thư viện MAP chữa lành</p>
        <h1 class="mt-5 max-w-5xl text-5xl font-black leading-[1.04] text-pine md:text-7xl">${TEXT.hero.headline}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">${TEXT.hero.subheadline}</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a class="btn btn-primary" href="#/" data-scroll-section="catalog">${TEXT.hero.primary}</a>
          <a class="btn btn-secondary" target="_blank" rel="noreferrer" href="${getWhatsappUrl()}">${TEXT.hero.secondary}</a>
        </div>
      </div>
      <div class="fade-in">
        <img class="intro-image" src="${INTRO_IMAGE_URL}" alt="Giới thiệu GEIN MAP FOR SUCCESS" loading="eager" decoding="async" />
      </div>
    </section>

    <section class="container py-10">
      <div class="card overflow-hidden p-4 md:p-6">
        <img class="intro-image max-h-[720px]" src="${INTRO_IMAGE_URL}" alt="Ảnh giới thiệu website GEIN MAP FOR SUCCESS" loading="lazy" decoding="async" />
      </div>
    </section>

    <section id="intro" class="container py-16">
      <div class="grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <p class="text-sm font-bold uppercase tracking-[.18em] text-clay">GEIN MAP FOR SUCCESS</p>
          <h2 class="mt-4 text-4xl font-black leading-tight text-pine md:text-6xl">Nhìn thấy hệ điều hành bên trong một con người.</h2>
        </div>
        <div class="grid gap-4">
          ${HOME_CONTENT.introParagraphs.map((text) => `<p class="card fade-in p-6 text-lg leading-8 text-[var(--muted)]">${escapeHtml(text)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="container py-16">
      <div class="grid gap-4 sm:grid-cols-2">
        ${HOME_CONTENT.questions.map((question, index) => `
          <article class="card fade-in p-6">
            <span class="chip">Câu hỏi ${index + 1}</span>
            <h3 class="mt-5 text-xl font-black leading-8 text-pine">${escapeHtml(question)}</h3>
          </article>`).join("")}
      </div>
    </section>

    <section class="container py-16">
      <div class="max-w-3xl">
        <p class="text-sm font-bold uppercase tracking-[.18em] text-clay">19 chỉ số cốt lõi</p>
        <h2 class="mt-4 text-4xl font-black leading-tight text-pine md:text-6xl">Hệ thống phân tích giúp giải mã con người toàn diện.</h2>
      </div>
      <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        ${HOME_CONTENT.coreIndexes.map((item) => `
          <div class="card fade-in p-5">
            <span class="chip">GEIN MAP</span>
            <h3 class="mt-5 text-lg font-black leading-7 text-pine">${escapeHtml(item)}</h3>
          </div>`).join("")}
      </div>
      <div class="card mt-8 p-7">
        <div class="grid gap-4 md:grid-cols-3">
          ${HOME_CONTENT.bridgeLines.map((line) => `<p class="text-xl font-black leading-8 text-pine">${escapeHtml(line)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section id="deep-groups" class="container py-16">
      <div class="max-w-3xl">
        <p class="text-sm font-bold uppercase tracking-[.18em] text-clay">Bản đồ chuyên sâu</p>
        <h2 class="mt-4 text-4xl font-black leading-tight text-pine md:text-6xl">Mỗi mục tiêu phát triển cần một bản đồ đủ sâu.</h2>
      </div>
      <div class="mt-8 grid gap-5 lg:grid-cols-2">
        ${HOME_CONTENT.deepGroups.map((group) => `
          <article class="card fade-in p-7">
            <h3 class="text-2xl font-black text-pine">${escapeHtml(group.title)}</h3>
            ${group.lead ? `<p class="mt-4 font-bold leading-7 text-clay">${escapeHtml(group.lead)}</p>` : ""}
            <p class="mt-4 leading-7 text-[var(--muted)]">${escapeHtml(group.description)}</p>
            ${group.items.length ? `<ul class="mt-5 grid gap-2">${group.items.map((item) => `<li class="rounded-2xl border border-pine/10 bg-white/55 px-4 py-3 font-bold text-pine">${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
            ${group.note ? `<p class="mt-5 leading-7 text-[var(--muted)]">${escapeHtml(group.note)}</p>` : ""}
          </article>`).join("")}
      </div>
      <div class="card mt-8 p-8">
        ${HOME_CONTENT.closingLines.map((line) => `<p class="text-xl font-black leading-9 text-pine">${escapeHtml(line)}</p>`).join("")}
      </div>
    </section>

    <section id="catalog" class="container py-16">
      <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-sm font-bold uppercase tracking-[.18em] text-clay">Kệ sách MAP</p>
          <h2 class="mt-4 text-4xl font-black text-pine md:text-6xl">Danh mục MAP dạng bìa sách</h2>
          <p class="mt-3 max-w-2xl text-[var(--muted)]">Chọn một bìa để mở danh sách MAP. Dữ liệu vẫn được lazy load theo danh mục.</p>
        </div>
        <div class="flex flex-wrap gap-2">${groups.map((group) => `<button class="chip ${group === activeCategoryFilter ? "bg-pine text-white" : ""}" data-category-filter="${group}">${group}</button>`).join("")}</div>
      </div>
      ${renderCategoryShelf(filtered)}
    </section>
    ${contactSection()}
    ${footer()}`;
  afterRender();
}

export function renderCategory(category, maps) {
  if (!category) throw new Error("Không tìm thấy danh mục MAP.");
  categoryState = { query: "", previewOnly: false, visible: CONFIG.pageSize };
  drawCategory(category, maps);
}

function drawCategory(category, maps) {
  const query = categoryState.query.trim().toLowerCase();
  const filtered = maps.filter((map) => {
    const matchQuery = !query || map.title.toLowerCase().includes(query) || String(map.number).includes(query);
    const matchPreview = !categoryState.previewOnly || map.hasPreview;
    return matchQuery && matchPreview;
  });
  const visible = filtered.slice(0, categoryState.visible);

  app().innerHTML = `
    <section class="container py-10">
      <a class="btn btn-secondary w-auto" href="#/">Quay lại trang chủ</a>
      <div class="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
        <aside class="lg:sticky lg:top-28 lg:self-start">
          <div class="card p-5">
            ${renderBookCoverItem({
              href: `#/category/${category.id}`,
              image: getCoverImage(category),
              title: category.name,
              subtitle: category.description,
              rank: category.order || 1,
              badge: `${category.count} MAP`,
              className: "max-w-[260px] mx-auto"
            })}
            <div class="mt-6 flex flex-wrap gap-2"><span class="chip">${category.group}</span><span class="chip">${category.count} MAP</span></div>
          </div>
        </aside>
        <div>
          <div class="card p-4">
            <div class="grid gap-3 md:grid-cols-[1fr_auto]">
              <input class="rounded-full border border-pine/15 bg-white px-5 py-3 outline-none focus:border-pine" data-map-search placeholder="Tìm theo tên hoặc số MAP" value="${escapeHtml(categoryState.query)}" />
              <label class="flex items-center gap-3 rounded-full border border-pine/15 bg-white px-5 py-3 font-bold text-pine">
                <input type="checkbox" data-preview-filter ${categoryState.previewOnly ? "checked" : ""} />
                Có đọc thử
              </label>
            </div>
          </div>
          ${visible.length ? renderMapShelf(category, visible) : emptyState("Không tìm thấy MAP phù hợp.")}
          ${filtered.length > visible.length ? `<div class="mt-8 text-center"><button class="btn btn-primary w-auto" data-load-more>Load thêm MAP</button></div>` : ""}
        </div>
      </div>
    </section>`;
  bindCategoryEvents(category, maps);
  afterRender();
}

export function renderMapDetail(category, map, preview) {
  if (!category || !map) throw new Error("Không tìm thấy MAP.");
  app().innerHTML = `
    <section class="container py-8">
      <div class="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-pine/70">
        <a href="#/">Trang chủ</a><span>/</span><a href="#/category/${category.id}">Danh mục</a><span>/</span><span>${escapeHtml(map.title)}</span>
      </div>
      <div class="grid gap-7 lg:grid-cols-[300px_1fr_300px]">
        <aside class="lg:sticky lg:top-28 lg:self-start">
          <div class="card p-4">${imageFrame(category.imageFolder, map.number, map.title, 900, "h-[460px]")}</div>
        </aside>
        <article class="min-w-0">
          <div class="card p-6 md:p-8">
            <div class="flex flex-wrap gap-2"><span class="chip">Đọc thử</span><span class="chip">${category.group}</span><span class="chip">${map.hasPreview ? "Có đọc thử" : "Đang cập nhật"}</span></div>
            <h1 class="mt-5 text-4xl font-black leading-tight text-pine md:text-5xl">MAP ${map.number} - ${escapeHtml(map.title)}</h1>
            <p class="mt-4 text-lg leading-8 text-[var(--muted)]">${escapeHtml(map.subtitle || "")}</p>
            <div class="mt-5 flex flex-wrap gap-2">${map.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}</div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <button class="btn btn-primary" data-scroll-to="preview-content" type="button">Đọc thử</button>
              <a class="btn btn-secondary" href="${getWhatsappUrl(`Tôi muốn được tư vấn bản đầy đủ của MAP ${map.number} - ${map.title}`)}" target="_blank" rel="noreferrer">Liên hệ tư vấn</a>
              <button class="btn btn-secondary" data-open-image="${category.imageFolder}|${map.number}|${escapeHtml(map.title)}">Xem ảnh MAP</button>
              <button class="btn btn-secondary" data-share>Chia sẻ</button>
            </div>
          </div>
          <div id="preview-content" class="mt-6">
            ${preview ? previewContent(preview) : updateState()}
          </div>
        </article>
        <aside class="lg:sticky lg:top-28 lg:self-start">${ctaBox(map)}</aside>
      </div>
    </section>
    ${contactSection()}
    ${footer()}`;
  bindDetailEvents();
  afterRender();
}

function renderCategoryShelf(categories) {
  return `<div class="book-shelf mt-8">${categories.map((category, index) => renderBookCoverItem({
    href: `#/category/${category.id}`,
    image: getCoverImage(category),
    title: category.name,
    subtitle: `${category.group} • ${category.count} MAP`,
    rank: category.order || index + 1,
    badge: category.count ? `${category.count} MAP` : "MAP"
  })).join("")}</div>`;
}

function renderMapShelf(category, maps) {
  return `<div class="book-shelf mt-6">${maps.map((map) => renderBookCoverItem({
    href: `#/map/${category.id}/${map.number}`,
    image: getMapImageUrl(category.imageFolder, map.number, { width: 500, quality: 82 }),
    title: `MAP ${map.number} - ${map.title}`,
    subtitle: map.subtitle || "Nội dung đang được cập nhật",
    rank: map.number,
    badge: map.hasPreview ? "Đọc thử" : "MAP",
    imageAction: `${category.imageFolder}|${map.number}|${escapeHtml(map.title)}`
  })).join("")}</div>`;
}

function renderBookCoverItem({ href, image, title, subtitle, rank, badge, imageAction = "", className = "" }) {
  return `
    <article class="book-cover fade-in ${className}">
      <a href="${href}" aria-label="${escapeHtml(title)}">
        <div class="book-cover__image">
          <img src="${image}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" />
          <div class="book-fallback hidden"><strong>GEIN MAP</strong></div>
          <span class="book-badge">${escapeHtml(badge)}</span>
          <span class="book-rank">${rank}</span>
        </div>
      </a>
      <a class="book-title block" href="${href}">${escapeHtml(title)}</a>
      <p class="book-meta">${escapeHtml(subtitle || "")}</p>
      ${imageAction ? `<button class="btn btn-secondary mt-3 min-h-10 w-full py-2 text-sm" data-open-image="${imageAction}">Xem ảnh</button>` : ""}
    </article>`;
}

function getCoverImage(category) {
  return category.coverImage || getMapImageUrl(category.imageFolder, 1, { width: 500, quality: 82 });
}

function previewContent(preview) {
  return `
    <section class="card p-6 md:p-8">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 class="text-3xl font-black text-pine md:text-4xl">Nội dung đọc thử</h2>
        <div class="flex gap-2"><button class="btn btn-secondary w-auto" data-accordion-all="open">Mở tất cả</button><button class="btn btn-secondary w-auto" data-accordion-all="close">Thu gọn tất cả</button></div>
      </div>
      <div class="mt-6 rounded-[var(--radius)] bg-white/60 p-5">
        <h3 class="text-xl font-black text-pine">Mục tiêu cốt lõi của MAP</h3>
        <div class="mt-4 grid gap-3">${preview.coreGoal.map((item) => `<p class="leading-7 text-[var(--muted)]">${escapeHtml(item)}</p>`).join("")}</div>
      </div>
      <div class="mt-5 grid gap-4">
        ${preview.blocks.map((block, index) => `
          <details class="card bg-white/55 p-5" ${index === 0 ? "open" : ""}>
            <summary class="cursor-pointer text-lg font-black text-pine">${escapeHtml(block.title)}</summary>
            <div class="mt-4 grid gap-3">
              ${block.chapters.map((chapter) => `
                <div class="rounded-[18px] border border-pine/10 bg-white p-4">
                  <p class="text-sm font-bold text-clay">Chương ${chapter.number}</p>
                  <h4 class="mt-1 font-black text-pine">${escapeHtml(chapter.title)}</h4>
                  <p class="mt-2 text-sm text-[var(--muted)]">Chỉ số chính: ${escapeHtml(chapter.mainIndex)}</p>
                  <div class="mt-3 flex flex-wrap gap-2">${chapter.subIndexes.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}</div>
                </div>`).join("")}
            </div>
          </details>`).join("")}
      </div>
      <a class="btn btn-clay mt-7" href="${getWhatsappUrl("Tôi muốn nhận bản MAP đầy đủ")}" target="_blank" rel="noreferrer">Liên hệ để nhận bản MAP đầy đủ</a>
    </section>`;
}

function updateState() {
  return `
    <section class="card p-8">
      <h2 class="text-3xl font-black text-pine md:text-4xl">Nội dung đọc thử</h2>
      <p class="mt-4 text-lg text-[var(--muted)]">Nội dung đọc thử đang được cập nhật.</p>
      <a class="btn btn-primary mt-6 w-auto" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">Liên hệ nhận bản đầy đủ</a>
    </section>`;
}

function ctaBox(map) {
  return `
    <div class="card overflow-hidden">
      <div class="bg-gradient-to-br from-pine via-moss to-clay p-6 text-white">
        <p class="text-sm font-bold uppercase tracking-[.16em] text-white/72">Tư vấn GEIN</p>
        <h2 class="mt-4 text-3xl font-black">Nhận bản MAP đầy đủ</h2>
        <p class="mt-4 leading-7 text-white/82">Tư vấn qua Zalo, Viber hoặc WhatsApp để được hướng dẫn phù hợp.</p>
      </div>
      <div class="grid gap-3 p-6">
        ${CONFIG.phones.map((phone) => `<a class="btn btn-secondary" href="${getWhatsappUrl(`Tôi muốn nhận bản đầy đủ của MAP ${map.number}`, phone)}" target="_blank" rel="noreferrer">${phone}</a>`).join("")}
        <a class="btn btn-primary" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">Liên hệ ngay</a>
      </div>
    </div>`;
}

function contactSection() {
  return `
    <section id="contact" class="container py-16">
      <div class="card grid gap-8 p-7 md:grid-cols-[1fr_1fr] md:p-10">
        <div>
          <h2 class="text-4xl font-black text-pine md:text-6xl">Liên hệ GEIN MAP</h2>
          <p class="mt-4 text-[var(--muted)]">Khi bạn muốn hiểu sâu hơn một MAP hoặc cần tư vấn hành trình phù hợp, hãy nhắn cho GEIN.</p>
        </div>
        <div class="grid gap-3 text-pine">
          <p><strong>Email:</strong> <a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
          <p><strong>Fanpage:</strong> ${CONFIG.fanpages.join(", ")}</p>
          <p><strong>Zalo / Viber / WhatsApp:</strong> ${CONFIG.phones.join(", ")}</p>
          <p><strong>Địa chỉ:</strong> ${CONFIG.address}</p>
          <div class="mt-3 flex flex-col gap-3 sm:flex-row"><a class="btn btn-primary" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">Mở WhatsApp</a><a class="btn btn-secondary" href="mailto:${CONFIG.email}">Gửi email</a></div>
        </div>
      </div>
    </section>`;
}

function footer() {
  return `
    <footer class="container pb-10">
      <div class="border-t border-pine/10 pt-8 text-sm leading-7 text-[var(--muted)]">
        <strong class="text-pine">${CONFIG.brand}</strong>
        <p class="mt-2">${TEXT.footerNote}</p>
      </div>
    </footer>`;
}

function imageFrame(folder, number, alt, width, extraClass = "") {
  return `
    <div class="image-frame is-loading ${extraClass}">
      <img src="${getMapImageUrl(folder, number, { width, quality: 80 })}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />
      <div class="fallback-art hidden"><div><strong>GEIN MAP</strong><br/>Ảnh đang được cập nhật</div></div>
    </div>`;
}

function emptyState(message) {
  return `<div class="card col-span-full mt-6 p-8 text-center text-[var(--muted)]">${message}</div>`;
}

function bindCategoryEvents(category, maps) {
  const search = document.querySelector("[data-map-search]");
  let timer;
  search?.addEventListener("input", (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      categoryState.query = event.target.value;
      categoryState.visible = CONFIG.pageSize;
      drawCategory(category, maps);
    }, 180);
  });
  document.querySelector("[data-preview-filter]")?.addEventListener("change", (event) => {
    categoryState.previewOnly = event.target.checked;
    categoryState.visible = CONFIG.pageSize;
    drawCategory(category, maps);
  });
  document.querySelector("[data-load-more]")?.addEventListener("click", () => {
    categoryState.visible += CONFIG.pageSize;
    drawCategory(category, maps);
  });
}

function bindDetailEvents() {
  document.querySelector("[data-share]")?.addEventListener("click", async () => {
    if (navigator.share) await navigator.share({ title: document.title, url: location.href });
    else await navigator.clipboard?.writeText(location.href);
  });
  document.querySelectorAll("[data-accordion-all]").forEach((button) => {
    button.addEventListener("click", () => {
      const open = button.dataset.accordionAll === "open";
      document.querySelectorAll("#preview-content details").forEach((detail) => { detail.open = open; });
    });
  });
}

export function setupGlobalEvents() {
  document.addEventListener("click", (event) => {
    const themeToggle = event.target.closest("[data-theme-toggle]");
    if (themeToggle) {
      setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
    }

    const sectionLink = event.target.closest("[data-scroll-section]");
    if (sectionLink) {
      event.preventDefault();
      pendingSection = sectionLink.dataset.scrollSection;
      if ((window.location.hash.slice(1) || "/") !== "/") {
        window.location.hash = "/";
      } else {
        scrollToPendingSection();
      }
      document.querySelector("[data-mobile-panel]")?.classList.add("hidden");
    }

    const localScroll = event.target.closest("[data-scroll-to]");
    if (localScroll) {
      document.getElementById(localScroll.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const menu = event.target.closest("[data-mobile-menu]");
    if (menu) {
      const panel = document.querySelector("[data-mobile-panel]");
      panel.classList.toggle("hidden");
      menu.setAttribute("aria-expanded", String(!panel.classList.contains("hidden")));
    }

    const filter = event.target.closest("[data-category-filter]");
    if (filter) {
      activeCategoryFilter = filter.dataset.categoryFilter;
      import("./data-loader.js").then(({ loadCategories }) => loadCategories().then(renderHome));
    }

    const imageButton = event.target.closest("[data-open-image]");
    if (imageButton) {
      const [folder, number, title] = imageButton.dataset.openImage.split("|");
      openImageModal(folder, number, title);
    }

    if (event.target.closest("[data-close-modal]")) modalRoot().innerHTML = "";
  });
}

function openImageModal(folder, number, title) {
  modalRoot().innerHTML = `
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <div class="modal-panel">
        <div class="mb-3 flex items-center justify-between gap-3">
          <h2 class="text-xl font-black text-pine">${escapeHtml(title)}</h2>
          <button class="btn btn-secondary w-auto" data-close-modal>Đóng</button>
        </div>
        ${imageFrame(folder, number, title, 1100, "min-h-[70dvh]")}
        <a class="btn btn-primary mt-4" href="${getWhatsappUrl(`Tôi muốn nhận bản đầy đủ của ${title}`)}" target="_blank" rel="noreferrer">Liên hệ nhận bản đầy đủ</a>
      </div>
    </div>`;
  prepareImages();
}

function afterRender() {
  prepareImages();
  revealOnScroll();
  syncThemeButtons();
  if (!scrollToPendingSection()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function scrollToPendingSection() {
  if (!pendingSection) return false;
  requestAnimationFrame(() => {
    document.getElementById(pendingSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
    pendingSection = "";
  });
  return true;
}

function prepareImages() {
  document.querySelectorAll(".image-frame img, .book-cover__image img").forEach((img) => {
    const frame = img.closest(".image-frame, .book-cover__image");
    const fallback = frame.querySelector(".fallback-art, .book-fallback");
    if (img.complete && img.naturalWidth) frame.classList.remove("is-loading");
    img.addEventListener("load", () => frame.classList.remove("is-loading"), { once: true });
    img.addEventListener("error", () => {
      frame.classList.remove("is-loading");
      img.classList.add("hidden");
      fallback?.classList.remove("hidden");
    }, { once: true });
  });
}

function revealOnScroll() {
  const items = document.querySelectorAll(".fade-in");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  items.forEach((item) => observer.observe(item));
}

function setTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(THEME_KEY, nextTheme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextTheme === "dark" ? "#08110f" : "#f7f3ea");
  syncThemeButtons();
}

function getCurrentTheme() {
  return document.documentElement.dataset.theme || "light";
}

function syncThemeButtons() {
  const label = getCurrentTheme() === "dark" ? "Dark" : "Light";
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.textContent = label;
    button.setAttribute("aria-label", `Theme hiện tại: ${label}`);
  });
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const routes = [];

export function addRoute(pattern, handler) {
  const keys = [];
  const regex = new RegExp(`^${pattern.replace(/:[^/]+/g, (match) => {
    keys.push(match.slice(1));
    return "([^/]+)";
  })}$`);
  routes.push({ regex, keys, handler });
}

export function navigate(path) {
  window.location.hash = path;
}

export function startRouter() {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}

async function renderRoute() {
  const hash = window.location.hash.slice(1) || "/";
  const route = routes.find((candidate) => candidate.regex.test(hash));
  const app = document.querySelector("#app");

  if (!route) {
    navigate("/");
    return;
  }

  const match = hash.match(route.regex);
  const params = Object.fromEntries(route.keys.map((key, index) => [key, decodeURIComponent(match[index + 1])]));
  app.innerHTML = loadingView();

  try {
    await route.handler(params);
    app.focus({ preventScroll: true });
  } catch (error) {
    app.innerHTML = `
      <section class="container py-20">
        <div class="card p-8">
          <p class="text-sm font-bold text-clay">Có lỗi xảy ra</p>
          <h1 class="mt-3 font-display text-4xl">Trang chưa thể hiển thị.</h1>
          <p class="mt-4 max-w-2xl text-[var(--muted)]">${error.message || "Vui lòng thử lại sau."}</p>
          <a class="btn btn-primary mt-6" href="#/">Về trang chủ</a>
        </div>
      </section>`;
  }
}

function loadingView() {
  return `
    <section class="container py-16">
      <div class="grid gap-5 md:grid-cols-3">
        <div class="card h-64 animate-pulse"></div>
        <div class="card h-64 animate-pulse md:col-span-2"></div>
      </div>
    </section>`;
}

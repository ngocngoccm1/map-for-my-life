import { addRoute, startRouter } from "./router.js";
import { loadCategories, loadCategoryMaps, findCategory, findMap, loadPreview } from "./data-loader.js";
import { initTheme, renderHeader, renderHome, renderCategory, renderMapDetail, setupGlobalEvents } from "./ui.js";

initTheme();
renderHeader();
setupGlobalEvents();

addRoute("/", async () => {
  const categories = await loadCategories();
  renderHome(categories);
});

addRoute("/category/:categoryId", async ({ categoryId }) => {
  const category = findCategory(categoryId);
  const maps = await loadCategoryMaps(categoryId);
  renderCategory(category, maps);
});

addRoute("/map/:categoryId/:mapNumber", async ({ categoryId, mapNumber }) => {
  const category = findCategory(categoryId);
  const map = await findMap(categoryId, mapNumber);
  const preview = await loadPreview(map);
  renderMapDetail(category, map, preview);
});

startRouter();

import { categories } from "../data/categories.js";

const mapCache = new Map();
const previewCache = new Map();

export async function loadCategories() {
  return categories;
}

export function findCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

export async function loadCategoryMaps(categoryId) {
  if (mapCache.has(categoryId)) return mapCache.get(categoryId);

  const category = findCategory(categoryId);
  if (!category) throw new Error("Không tìm thấy danh mục MAP.");

  const module = await import(`../data/maps/${category.mapModule}.js`);
  mapCache.set(categoryId, module.maps);
  return module.maps;
}

export async function findMap(categoryId, mapNumber) {
  const maps = await loadCategoryMaps(categoryId);
  return maps.find((map) => String(map.number) === String(mapNumber));
}

export async function loadPreview(map) {
  if (!map?.hasPreview || !map.previewModule) return null;
  if (previewCache.has(map.id)) return previewCache.get(map.id);

  try {
    const module = await import(`../data/previews/${map.previewModule}.js`);
    previewCache.set(map.id, module.preview);
    return module.preview;
  } catch (error) {
    console.warn("Preview missing", error);
    previewCache.set(map.id, null);
    return null;
  }
}

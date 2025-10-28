// src/Entities/Product.js
export const Product = {
  name: "Product",
  type: "object",
  properties: {
    title: { type: "string", description: "Product title" },
    image_url: { type: "string", description: "Product image URL" },
    price: { type: "string", description: "Product price" },
    link: { type: "string", description: "External auction link" },
    ai_description: { type: "string", description: "AI-generated emotional description" },
    source: { type: "string", default: "manual", description: "How this product was added" }
  },
  required: ["title", "image_url", "price", "link"]
};

export function validateProduct(obj) {
  const required = Product.required;
  const missing = required.filter(key => !obj[key]);
  if (missing.length > 0) {
    throw new Error(`Invalid Product — missing fields: ${missing.join(", ")}`);
  }
  return true;
}

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();

function slugifyFilename(basename) {
  const ext = path.extname(basename);
  const name = basename.slice(0, -ext.length);
  const slug = name
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return { slug, ext };
}

async function convertDir(relDir, { quality = 82 } = {}) {
  const dir = path.join(ROOT, relDir);
  const files = fs.readdirSync(dir);
  const mapping = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    const { slug } = slugifyFilename(file);
    const oldRel = `${relDir}/${file}`;
    let newBasename = `${slug}.webp`;
    let newRel = `${relDir}/${newBasename}`;

    // Avoid collisions after slugifying
    let counter = 2;
    while (
      fs.existsSync(path.join(ROOT, newRel)) &&
      path.join(ROOT, newRel) !== path.join(ROOT, oldRel)
    ) {
      newBasename = `${slug}-${counter++}.webp`;
      newRel = `${relDir}/${newBasename}`;
    }

    const inputPath = path.join(ROOT, oldRel);
    const outputPath = path.join(ROOT, newRel);

    await sharp(inputPath).webp({ quality }).toFile(outputPath);
    fs.unlinkSync(inputPath);

    mapping.push({ oldRel: `/${oldRel}`, newRel: `/${newRel}` });
    console.log(`${oldRel} -> ${newRel}`);
  }

  return mapping;
}

const productsMapping = await convertDir("public/products-images");
const staticMapping = await convertDir("public/static", { quality: 78 });

fs.writeFileSync(
  path.join(ROOT, "scripts/image-mapping.json"),
  JSON.stringify([...productsMapping, ...staticMapping], null, 2)
);

console.log(`\nConverted ${productsMapping.length + staticMapping.length} images.`);

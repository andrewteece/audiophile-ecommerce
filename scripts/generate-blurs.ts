import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = path.resolve('./public/assets');
const OUTPUT_BASE = path.resolve('./public/assets/blur');
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

function walk(dir: string, filelist: string[] = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filelist);
    } else if (
      SUPPORTED_EXTENSIONS.includes(path.extname(filepath).toLowerCase())
    ) {
      filelist.push(filepath);
    }
  });
  return filelist;
}

function ensureDirectoryExistence(filePath: string) {
  const dirName = path.dirname(filePath);
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
}

async function generateBlur(srcPath: string) {
  const relativePath = path.relative(SOURCE_DIR, srcPath);
  const outputPath = path
    .join(OUTPUT_BASE, relativePath)
    .replace(/\.(jpg|jpeg|png)$/i, '.webp');

  ensureDirectoryExistence(outputPath);

  await sharp(srcPath)
    .resize({ width: 20 })
    .webp({ quality: 30 })
    .toFile(outputPath);

  console.log(`✅ Generated: ${relativePath} → blur/${relativePath}`);
}

async function run() {
  const images = walk(SOURCE_DIR);

  if (images.length === 0) {
    console.log('⚠️  No images found to process.');
    return;
  }

  console.log(
    `🔍 Found ${images.length} images. Generating blur previews...\n`
  );

  for (const image of images) {
    await generateBlur(image);
  }

  console.log('\n🎉 Blur generation complete.');
}

run().catch((err) => {
  console.error('❌ Error during blur generation:', err);
});

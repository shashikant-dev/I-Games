import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public/uploads/blog');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export function validateImage(file) {
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSize = 2 * 1024 * 1024; // 2MB

  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid file type. Only JPEG, PNG, and JPG formats are allowed.');
  }

  if (file.size > maxSize) {
    throw new Error('File size too large. Maximum size allowed is 2MB.');
  }

  return true;
}

export async function saveImage(file) {
  try {
    validateImage(file);

    // Generate unique filename
    const timestamp = Date.now();
    const extension = file.name.split('.').pop();
    const filename = `${timestamp}.${extension}`;
    const relativePath = `/uploads/blog/${filename}`;
    const fullPath = path.join(UPLOAD_DIR, filename);

    // Convert file buffer to Buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await fs.promises.writeFile(fullPath, buffer);

    return relativePath;
  } catch (error) {
    console.error('Error saving image:', error);
    throw error;
  }
}
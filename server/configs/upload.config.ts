'use server';

import multer from 'multer';
import path from 'path';

// Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve('public/uploads'));
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}.${file.originalname.split('.').pop()}`);
  },
});

const upload = multer({ storage });

export default upload;

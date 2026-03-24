  import { v2 as cloudinary } from 'cloudinary';
  import { CloudinaryStorage } from 'multer-storage-cloudinary';
  import multer from 'multer';

  // Configure Cloudinary using Environment Variables
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Setup Multer Storage for Cloudinary
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'phlox_products',
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    } as any,
  });

  export const upload = multer({ storage });
  export { cloudinary };

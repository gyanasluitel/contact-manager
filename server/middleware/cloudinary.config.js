const multer = require('multer');

const cloudinary = require('cloudinary').v2;

const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const { CLOUDINARY_HOST, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
//   process.env;

cloudinary.config({
  cloud_name: 'dahsgpb8k',
  api_key: '394922641477819',
  api_secret: '0HIZu81G8dNooUia4FIqbCszsfQ',
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images uploads',
    format: async () => 'png',
    public_id: (req, file) => file.filename,
  },
});

// const parser = multer({ storage: storage }, (req, res, next) {
//   if
// });

module.exports = parser;

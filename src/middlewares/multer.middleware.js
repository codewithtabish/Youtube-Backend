import multer from 'multer';

// Set up Multer storage using disk storage
const storage = multer.diskStorage({
  destination: '../../public/temp', // Set your desired upload directory
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename for the uploaded file
  },
});

export const upload = multer({ storage: storage });
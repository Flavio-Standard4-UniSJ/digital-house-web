const multer = require('multer');
const { path, resolve, extname } = require('path');

const storage = multer.diskStorage({
    destination: resolve(__dirname, '..', 'public', 'uploads'),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});

module.exports = storage;
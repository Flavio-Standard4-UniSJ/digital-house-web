
//https://github.com/expressjs/multer
const multer = require('multer')
const { resolve, extname } = require('path');
const { path } = require('../app');

const storage = multer.diskStorage({
    destination: resolve(__dirname, '..', 'public', 'uploads'),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
module.exports = storage;
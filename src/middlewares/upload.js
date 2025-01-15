const path = require('path')
const multer = require('multer')
const os = require('os')  // Add this import

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, os.tmpdir())  // Use system temp directory instead of local path
    },
    filename: (req, file, cb) => {
        const {id} = req.user
        const fullFileName = `${id}_${Date.now()}_${Math.round(Math.random()*1000)}${path.extname(file.originalname)}`
        cb(null, fullFileName)
    }
})

module.exports = multer({storage: storage})
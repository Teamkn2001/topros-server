require('dotenv').config()

try {
    const app = require('./app')
    const PORT = process.env.PORT || 7200

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
} catch (error) {
    console.log(`failed to start server: ${error.message}`)
}
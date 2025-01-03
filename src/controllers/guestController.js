
const guestController = {}

guestController.getRandomItems = (req, res, next) => {
    try {
        res.json({ message: "get random items success" })
    } catch (error) {
        next(error)
    }
}

module.exports = guestController
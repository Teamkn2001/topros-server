const notFoundHandler = (req, res) => {
    res.status(404).json({ msg : "Path not found !!"})
}

module.exports = notFoundHandler
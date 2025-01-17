const guestModels = require("../models/guestModels")
const createError = require("../utils/create-error")

const guestController = {}

guestController.getRandomItems = async (req, res, next) => {
    try {
        const randomItem = await guestModels.getRandomItems()
        res.json({randomItem})
    } catch (error) {
        next(error)
    }
}

guestController.getItemById = async (req, res, next) => {
    try {
        const itemId = req.params.itemId
        if (!itemId) {
            return createError(404, "ItemId is required !!")
        }

        const item = await guestModels.getItemById(+itemId)
        if (!item) {
            return createError(404, "Item not found !!")
        }
        res.json({item})
    } catch (error) {
        next(error)
    }
}

guestController.getPopularItems = async (req, res, next) => {
    try {
        const popularItems = await guestModels.getPopularItems()
        if (!popularItems) {
            return createError(500, "Internal Server Error")
        }

        res.json({message: "fetch success",popularItems})
    } catch (error) {
        next(error)
    }
}

guestController.getPopularUsers = async (req, res, next) => {
    try {
        const popularUsers = await guestModels.getPopularUsers()
        if (!popularUsers) {
            return createError(500, "Internal Server Error")
        }
        res.json({popularUsers})
    } catch (error) {
        next(error)
    }
}
guestController.getUserById = async (req, res, next) => {
    try {
  
        const userId = req.params.userId 
        if (!userId) {
            return createError(404, "User Id is required !!")
        }

        const user = await guestModels.getUserById(+userId)
        if (!user) {
            return createError(404, "User not found !!")
        }

        const { password, googleId, ...userData} = user

        res.json({userData})
    } catch (error) {
        
    }
}

guestController.searchItemsByName = async (req, res, next) => {
    try {
        const { itemName } = req.query

        if (!itemName) {
            return createError(404, "Item name is required !!")
        }

        const items = await guestModels.getItemByName(itemName)
        if (!items) {
            return res.status(404).json({
                message: "No items found matching your search"
            })
        }
        res.json({items})
    } catch (error) {
        next(error)
    }
}

guestController.searchUsersByName = async (req, res, next) => {
    try {
        const { userName } = req.query

        if (!userName) {
            return createError(404, "User name is required !!")
        }

        const users = await guestModels.getUserByName(userName)
        if (!users) {
            return res.status(404).json({
                message: "No user found matching your search"
            })
        }
        res.json({users})
    } catch (error) {
        next(error)
    }
}
module.exports = guestController
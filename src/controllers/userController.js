const userModels = require("../models/userModels");
const hashService = require("../services/hashService");
const createError = require("../utils/create-error");

const userController = {};

userController.editProfile = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const userId = user.id;
    const data = req.body;
    if (!data) {
      return createError(400, "Data not found !!");
    }

    const updatedUser = await userModels.editProfile(+userId, data);
    if (!updatedUser) {
      return createError(400, "Failed to update profile");
    }

    res.json({ message: "edit profile success", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

userController.verifyOldPassword = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }
    const userId = user.id;

    const userPassword = await userModels.findUserPasswordById(+userId);
    if (!userPassword) {
      return createError(400, "Password not found !!");
    }

    const data = req.body;
    if (!data) {
      return createError(400, "Data not found !!");
    }

    console.log("password input ===", data.oldPassword);
    console.log("password database ===", userPassword.password);

    const isPasswordMatch = await hashService.comparePassword(
      data.oldPassword,
      userPassword.password
    );
    if (!isPasswordMatch) {
      return createError(400, "Password not match !!");
    }

    res.json({ message: "Password verified successfully", canReset: true });
  } catch (error) {
    next(error);
  }
};

userController.resetPassword = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const userId = user.id;
    const data = req.body;

    if (!data.oldPassword || !data.newPassword) {
      return createError(400, "Data not found or complete!!");
    }

    const findUserPassword = await userModels.findUserPasswordById(+userId);
    if (!findUserPassword) {
      return createError(400, "Password not found !!");
    }

    const isPasswordMatch = await hashService.comparePassword(
      data.oldPassword,
      findUserPassword.password
    );
    if (!isPasswordMatch) {
      return createError(400, "Password not match !!");
    }

    const isSamePassword = await hashService.comparePassword(
      data.newPassword,
      findUserPassword.password
    );

    const hashedPassword = await hashService.hashPassword(data.newPassword);
    if (isSamePassword) {
      return createError(
        400,
        "New password cannot be the same as the old password"
      );
    }

    console.log("hash new pass ===", hashedPassword);

    const updatePassword = await userModels.resetPassword(
      +userId,
      hashedPassword
    );

    res.json({message: "Password updated successfully"});
  } catch (error) {
    next(error);
  }
};

userController.getItem = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const items = await userModels.getItems(+user.id);
    console.log("🚀", items);

    res.json({ message: "fetch items success", data: items });
  } catch (error) {
    next(error);
  }
};

userController.createItem = async (req, res, next) => {
  try {
    const user = req.user;
    const data = req.body;

    console.log(data);
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    if(!data.ownerId || !data.artName || !data.artImg || !data.artDescription ){
        return createError(400, "Data not found or complete!!");
    }

    const item = await userModels.createItem(data);
    if (!item) {
      return createError(400, "Failed to create item");
    }

    res.json({ message: "create item success", data: item });
  } catch (error) {
    next(error);
  }
};

userController.editItem = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }
    const itemId = req.params.itemId;

    if (!itemId) {
      return createError(400, "Item not found !!");
    }

    const data = req.body;
    if (!data) {
      return createError(400, "Data not found !!");
    }

    const item = await userModels.editItem(+itemId, data);
    if (!item) {
      return createError(400, "Failed to edit item");
    }

    res.json({ message: "edit item success", data: item });
  } catch (error) {
    next(error);
  }
};

userController.deleteItem = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const itemId = req.params.itemId;
    if (!itemId) {
      return createError(400, "Item not found !!");
    }

    const item = await userModels.deleteItem(+itemId);
    if (!item) {
      return createError(400, "Failed to delete item");
    }

    res.json({ message: "delete item success", data: item });
  } catch (error) {
    next(error);
  }
};

module.exports = userController;

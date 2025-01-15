const userModels = require("../models/userModels");
const hashService = require("../services/hashService");
const createError = require("../utils/create-error");
const cloudinary = require("../configs/cloudinary");
const fs = require("fs/promises");
const path = require("path");

const userController = {};

userController.editProfile = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const userId = user.id;
    const { username, bio } = req.body;
    const file = req.file;
 
    let uploadResult = {};
    if (file) {
      uploadResult = await cloudinary.uploader.upload(file.path, {  // Use file.path directly
        overwrite: true,
        public_id: path.parse(file.filename).name,  // Use file.filename instead of file.path
      });
      await fs.unlink(file.path);  // Use synchronous version to ensure cleanup
    }

    const data = {
      ...(username && { username }),
      ...(bio && { bio }),
      ...(uploadResult.secure_url && { profileImage: uploadResult.secure_url }),
    }

    if (Object.keys(data).length === 0) {
      return createError(400, "No data provided for update");
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

    const updatePassword = await userModels.resetPassword(
      +userId,
      hashedPassword
    );

    res.json({ message: "Password updated successfully" });
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

    res.json({ message: "fetch items success", data: items });
  } catch (error) {
    next(error);
  }
};

userController.createItem = async (req, res, next) => {
  try {
    const user = req.user;
    const { artName, artDescription, category } = req.body;

    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const file = req.file;
    if (!file) {
      return createError(400, "No image file provided");
    }

    let uploadResult;
    try {
      uploadResult = await cloudinary.uploader.upload(file.path, {
        overwrite: true,
        public_id: path.parse(file.filename).name,
      });
    } finally {
      // Always clean up the temp file
      if (file.path) {
     await  fs.unlink(file.path);
      }
    }

    const data = {
      ownerId: user.id,
      artName,
      artDescription,
      artImg: uploadResult.secure_url,
      category,
    };

    const requiredFields = ["ownerId", "artName", "artImg", "category"];
    const missingFields = requiredFields.find((field) => !data[field]);
    if (missingFields) {
      return createError(400, `${missingFields} is missing !!`);
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

    const itemFound = await userModels.findItemById(+itemId);
    if (!itemFound) {
      return createError(404, "Item not found !!");
    }

    if (itemFound.ownerId !== user.id) {
      return createError(403, "Forbidden: You are not the owner of this item");
    }

    const { artName, artDescription, category } = req.body;
    const file = req.file;

    let uploadResult = {};
    if (file) {
      try {
        uploadResult = await cloudinary.uploader.upload(file.path, {  // Use file.path directly
          overwrite: true,
          public_id: path.parse(file.filename).name,  // Use file.filename instead
        });
      } finally {
        // Always clean up the temp file
        if (file.path) {
         await fs.unlink(file.path);  
        }
      }
    }

    const data = {
      ...(artName && { artName }),
      ...(artDescription && { artDescription }),
      ...(category && { category }),
      ...(uploadResult.secure_url && { artImg: uploadResult.secure_url }),
    };

    if (Object.keys(data).length === 0) {
      return createError(400, "No data provided for update");
    }

    const item = await userModels.editItem(+itemId, data);
    if (!item) {
      return createError(400, "Failed to edit item");
    }

    const verifiedItem = await userModels.findItemById(+itemId)

    res.json({ 
      message: "edit item success", 
      data: verifiedItem, 
      imageUpdated: !!file 
    });
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

userController.createComment = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const itemId = req.params.itemId;
    if (!itemId) {
      return createError(400, "required itemId !!");
    }

    const item = await userModels.findItemById(+itemId);
    if (!item) {
      return createError(400, "Item not found !!");
    }

    const data = req.body;
    if (!data) {
      return createError(400, "Data not found !!");
    }

    const comment = await userModels.createComment(
      +user.id,
      +itemId,
      data.text
    );
    if (!comment) {
      return createError(400, "Failed to create comment");
    }

    res.json({ message: "create comment success", data: comment });
  } catch (error) {
    next(error);
  }
};

userController.editComment = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const commentId = req.params.commentId;
    if (!commentId) {
      return createError(404, "Comment not found !!");
    }

    const isCommentExist = await userModels.findCommentById(+commentId);
    if (!isCommentExist) {
      return createError(404, "Comment not found !!");
    }

    if (isCommentExist.authorId !== user.id) {
      return createError(
        403,
        "Forbidden: You are not the author of this comment"
      );
    }

    const data = req.body;
    if (!data.text) {
      return createError(404, "Data not found !!");
    }

    const comment = await userModels.editComment(+commentId, data.text);
    if (!comment) {
      return createError(500, "Failed to edit comment");
    }

    res.json({ message: "edit comment success", data: comment });
  } catch (error) {
    next(error);
  }
};

userController.deleteComment = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const commentId = req.params.commentId;
    if (!commentId) {
      return createError(404, "Comment not found !!");
    }

    const isCommentExist = await userModels.findCommentById(+commentId);
    if (!isCommentExist) {
      return createError(404, "Comment not found !!");
    }

    if (isCommentExist.authorId !== user.id) {
      return createError(
        403,
        "Forbidden: You are not the author of this comment"
      );
    }

    const deletedComment = await userModels.deleteComment(+commentId);
    if (!deletedComment) {
      return createError(500, "Failed to delete comment");
    }

    res.json({ message: "delete comment success", data: deletedComment });
  } catch (error) {
    next(error);
  }
};

userController.toggleLike = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return createError(401, "Unauthorized: User not found !!");
    }

    const itemId = req.params.itemId;
    if (!itemId) {
      return createError(404, "ItemId is required !!");
    }

    const item = await userModels.findItemById(+itemId);
    if (!item) {
      return createError(404, "Item not found !!");
    }

    const like = await userModels.findLike(+user.id, +itemId);

    if (!like) {
      const newLike = await userModels.createLike(+user.id, +itemId);
      if (!newLike) {
        return createError(500, "Failed to create like");
      }
    } else {
      const likeId = like.id;
      const deletedLike = await userModels.deleteLike(+likeId);

      if (!deletedLike) {
        return createError(500, "Failed to delete like");
      }
    }

    res.json({ message: "toggle like success" });
  } catch (error) {
    next(error);
  }
};

module.exports = userController;

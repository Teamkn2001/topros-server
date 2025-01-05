const prisma = require("../configs/prisma");

const userModels = {};

userModels.editProfile = async (userId, data) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: data,
  });
};

userModels.getItems = async (userId) => {
  return await prisma.item.findMany({
    where: {
      ownerId: userId,
    },
  });
};

userModels.findUserById = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

userModels.findUserPasswordById = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      password: true,
    },
  });
};

userModels.resetPassword = async (userId, newPassword) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: newPassword,
    },
  });
};

userModels.createItem = async (data) => {
  return await prisma.item.create({
    data: data,
  });
};

userModels.editItem = async (itemId, data) => {
  return await prisma.item.update({
    where: {
      id: itemId,
    },
    data: data,
  });
};

userModels.deleteItem = async (itemId) => {
  return await prisma.item.delete({
    where: {
      id: itemId,
    },
  });
};

userModels.createComment = async (userId, itemId, data) => {
  return await prisma.comment.create({
    data: {
      authorId: userId,
      itemId: itemId,
      text: data,
    },
  });
};

userModels.findItemById = async (itemId) => {
  return await prisma.item.findUnique({
    where: {
      id: itemId,
    },
  });
};

userModels.findCommentById = async (commentId) => {
  return await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
  });
};

userModels.editComment = async (commentId, data) => {
  return await prisma.comment.update({
    where: {
      id: commentId,
    },
    data: {
      text: data,
    },
  });
};
userModels.deleteComment = async (commentId) => {
  return await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });
};

userModels.createLike = async (userId, itemId) => {
  return await prisma.like.create({
    data: {
      userId: userId,
      itemId: itemId,
    },
  });
};

userModels.findLike = async (userId, itemId) => {
  return await prisma.like.findFirst({
    where: {
      userId: userId,
      itemId: itemId,
    },
  });
};

userModels.deleteLike = async (likeId) => {
  return await prisma.like.delete({
    where: {
      id : likeId
    },
  });
};

module.exports = userModels;

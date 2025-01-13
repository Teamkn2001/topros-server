const { Prisma } = require("@prisma/client");
const prisma = require("../configs/prisma");

const guestModels = {};

guestModels.getRandomItems = async () => {
  return await prisma.$queryRaw`
    SELECT * FROM Item 
    ORDER BY RAND() 
    LIMIT 9
`;
};

// random with sequelize e.g. id : 51 52 53 54 55 56 57 58 59
// guestModels.getRandomItems = async () => {
//   // Get total count first
//   const count = await prisma.item.count();
//   console.log(count)
//   // Get random skip value
//   const skip = Math.floor(Math.random() * (count - 9));
//   console.log(skip)

//   return await prisma.item.findMany({
//       take: 9,
//       skip: skip
//   });
// };

guestModels.getRandomItemsWithCategory = async (category) => {
  return await prisma.item.findMany({
    where: {
      category: category,
    },
    take: 12,
    orderBy: {
      _rand: true,
    },
  });
};

guestModels.getItemById = async (itemId) => {
  return await prisma.item.findUnique({
    where: {
      id: itemId,
    },
    include: {
      owner: {
        select: {
          id: true,
          username: true,
          profileImage: true,
        },
      },
      Like: true,
      Comment: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          author: {
            select: {
              id: true,
              username: true,
              profileImage: true,
            },
          },
        },
      },
    },
  });
};

guestModels.getPopularItems = async () => {
  return await prisma.item.findMany({
    take: 9,
    include: {
      _count: {
        select: {
          Like: true,
          // Comment: true // able to count comment too
        },
      },
    },
    orderBy: {
      Like: {
        _count: "desc",
      },
    },
  });
};

guestModels.getPopularUsers = async () => {
  const users = await prisma.$queryRaw`
        SELECT 
            u.id,
            u.username,
            u.profileImage,
            u.email,
            u.bio,
            CAST(COUNT(l.id) AS SIGNED) as totalLikes
        FROM User u
        LEFT JOIN Item i ON u.id = i.ownerId
        LEFT JOIN \`Like\` l ON i.id = l.itemId
        GROUP BY u.id, u.username, u.profileImage, u.bio
        ORDER BY totalLikes DESC
        LIMIT 8
    `;

  // Get items for these users
  const userIds = users.map((user) => user.id);
  // get data like this [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ...]
  const items = await prisma.item.findMany({
    where: {
      ownerId: {
        in: userIds,
      },
    },
    select: {
      id: true,
      ownerId: true,
      artName: true,
      artImg: true,
      _count: {
        select: {
          Like: true,
        },
      },
    },
  });
  console.log(items);

  // Combine the data
  return users.map((user) => ({
    ...user,
    totalLikes: Number(user.totalLikes),
    // map and convert BigInt to Number for each item
    ownedItems: items.filter((item) => item.ownerId === user.id),
    // insert the items queried above to the user object which match the ownerId
  }));
};

guestModels.getItemByName = async (itemName) => {
  try {
    const items = await prisma.item.findMany({
      where: {
        artName: {
          contains: itemName,
        },
      },
    });

    const isBlank = items.length === 0;
    console.log(isBlank);

    if (isBlank) {
      return null;
    } else {
      return items;
    }
  } catch (error) {
    console.log(error);
  }
};

guestModels.getUserByName = async (userName) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        username: {
          contains: userName,
        },
      },
      select: {
        id: true,
        username: true,
        profileImage: true,
        bio: true,
        email: true,
        ownedItems: {
          select: {
            id: true,
            artName: true,
            artImg: true,
            artDescription: true,
            category: true,
            createdAt: true,
            _count: {
              select: {
                Like: true
              }
            }
          }
        }
      },
    });

    const modifiedUsers = users.map((user) => ({
      ...user,
      totalLikes: user.ownedItems.reduce((acc, item) => acc + item._count.Like, 0)
    }))

    return users.length === 0 ? null : modifiedUsers;
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

guestModels.getUserById = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

module.exports = guestModels;

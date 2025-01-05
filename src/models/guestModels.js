const prisma = require("../configs/prisma");

const guestModels = {};

guestModels.getRandomItems = async () => {
  return await prisma.item.findMany({
    take: 9,
    orderBy: {
      id: "desc",
    },
  });
};

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
      Like: true,
      Comment: {
        orderBy: {
          createdAt: "desc",
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
                username: userName
            }
        })

        const isBlank = users.length === 0

        if (isBlank) {
            return null
        } else {
            return users
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = guestModels;

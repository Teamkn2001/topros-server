export const createUser = await prisma.user.createMany({
    data: [
        { email: 'vangoh@gmail.com', username: 'Vincent van Gogh', password: hashedPassword },
        { email: 'AnniRoenkae@gmail.com', username: 'Anni Roenkae', password: hashedPassword },
        { email: 'LandivaWeber@gmail.com', username: 'Landiva Weber', password: hashedPassword },
        { email: 'MarekPavlík@gmail.com', username: 'Marek Pavlík', password: hashedPassword },
        { email: 'MichaelHamments@gmail.com', username: 'Michael Hamments', password: hashedPassword },
        { email: 'Rostislav@gmail.com', username: 'Rostislav', password: hashedPassword },
        { email: 'steve.johnson@gmail.com', username: 'steve johnson', password: hashedPassword },
        { email: 'tongo@gmail.com', username: 'Tongo', password: hashedPassword },
        { email: 'yuri.b@gmail.com', username: 'YuriB', password: hashedPassword },
        { email: 'Zaksheuskaya@gmail.com', username: 'Zaksheuskaya', password: hashedPassword },
        { email: 'william.clark@gmail.com', username: 'will_clark', password: hashedPassword },
        { email: 'sophia.lee@gmail.com', username: 'sophia_l', password: hashedPassword },
        { email: 'alexander.white@gmail.com', username: 'alex_w', password: hashedPassword },
        { email: 'isabella.martin@gmail.com', username: 'bella_m', password: hashedPassword },
        { email: 'daniel.thompson@gmail.com', username: 'dan_t', password: hashedPassword },
        { email: 'ava.garcia@gmail.com', username: 'ava_g', password: hashedPassword },
        { email: 'joseph.martinez@gmail.com', username: 'joe_m', password: hashedPassword },
        { email: 'mia.robinson@gmail.com', username: 'mia_r', password: hashedPassword },
        { email: 'benjamin.king@gmail.com', username: 'ben_king', password: hashedPassword },
        { email: 'charlotte.wright@gmail.com', username: 'char_w', password: hashedPassword },
        { email: 'ethan.rodriguez@gmail.com', username: 'ethan_r', password: hashedPassword },
        { email: 'amelia.lewis@gmail.com', username: 'amelia_l', password: hashedPassword },
        { email: 'henry.walker@gmail.com', username: 'henry_w', password: hashedPassword },
        { email: 'victoria.hall@gmail.com', username: 'vic_hall', password: hashedPassword },
        { email: 'sebastian.allen@gmail.com', username: 'seb_a', password: hashedPassword },
        { email: 'scarlett.young@gmail.com', username: 'scarlett_y', password: hashedPassword },
        { email: 'jack.hernandez@gmail.com', username: 'jack_h', password: hashedPassword },
        { email: 'chloe.king@gmail.com', username: 'chloe_k', password: hashedPassword },
        { email: 'owen.wright@gmail.com', username: 'owen_w', password: hashedPassword },
        { email: 'zoey.lopez@gmail.com', username: 'zoey_l', password: hashedPassword },
        { email: 'lucas.hill@gmail.com', username: 'lucas_h', password: hashedPassword },
        { email: 'lily.scott@gmail.com', username: 'lily_s', password: hashedPassword },
        { email: 'mason.green@gmail.com', username: 'mason_g', password: hashedPassword },
        { email: 'hannah.adams@gmail.com', username: 'hannah_a', password: hashedPassword },
        { email: 'christopher.baker@gmail.com', username: 'chris_b', password: hashedPassword },
        { email: 'aria.nelson@gmail.com', username: 'aria_n', password: hashedPassword },
        { email: 'andrew.carter@gmail.com', username: 'andy_c', password: hashedPassword },
        { email: 'zoe.mitchell@gmail.com', username: 'zoe_m', password: hashedPassword },
        { email: 'gabriel.perez@gmail.com', username: 'gabe_p', password: hashedPassword },
        { email: 'aurora.roberts@gmail.com', username: 'aurora_r', password: hashedPassword }
    ]
})
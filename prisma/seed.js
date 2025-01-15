const prisma = require("../src/configs/prisma");
const hashService = require("../src/services/hashService");

async function run() {
  try {
    const password = process.env.USER_PASSWORD

    const hashedPassword = await hashService.hashPassword(password);

    const createUser = await prisma.user.createMany({
      data: [
        {
          email: "vangoh@gmail.com",
          username: "Vincent van Gogh",
          profileImage:
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
          password: hashedPassword,
        },
        {
          email: "AnniRoenkae@gmail.com",
          username: "Anni Roenkae",
          profileImage: "https://robohash.org/anni",
          password: hashedPassword,
        },
        {
          email: "LandivaWeber@gmail.com",
          username: "Landiva Weber",
          profileImage: "https://robohash.org/Landiva",
          password: hashedPassword,
        },
        {
          email: "MarekPavlík@gmail.com",
          username: "Marek Pavlík",
          profileImage: "https://robohash.org/Marek",
          password: hashedPassword,
        },
        {
          email: "MichaelHamments@gmail.com",
          username: "Michael Hamments",
          profileImage: "https://robohash.org/Michael",
          password: hashedPassword,
        },
        {
          email: "Rostislav@gmail.com",
          username: "Rostislav",
          profileImage: "https://robohash.org/Rostislav",
          password: hashedPassword,
        },
        {
          email: "steve.johnson@gmail.com",
          username: "steve johnson",
          profileImage: "https://robohash.org/steve",
          password: hashedPassword,
        },
        {
          email: "tongo@gmail.com",
          username: "Tongo",
          profileImage: "https://robohash.org/tongo",
          password: hashedPassword,
        },
        {
          email: "yuri.b@gmail.com",
          username: "YuriB",
          password: hashedPassword,
        },
        {
          email: "Zaksheuskaya@gmail.com",
          username: "Zaksheuskaya",
          password: hashedPassword,
        },
        {
          email: "william.clark@gmail.com",
          username: "will_clark",
          profileImage: "https://robohash.org/will",
          password: hashedPassword,
        },
        {
          email: "sophia.lee@gmail.com",
          username: "sophia_l",
          password: hashedPassword,
        },
        {
          email: "alexander.white@gmail.com",
          username: "alex_w",
          profileImage: "https://robohash.org/Alex",
          password: hashedPassword,
        },
        {
          email: "isabella.martin@gmail.com",
          username: "bella_m",
          profileImage: "https://robohash.org/bella",
          password: hashedPassword,
        },
        {
          email: "daniel.thompson@gmail.com",
          username: "dan_t",
          password: hashedPassword,
        },
        {
          email: "ava.garcia@gmail.com",
          username: "ava_g",
          profileImage: "https://robohash.org/ava",
          password: hashedPassword,
        },
        {
          email: "joseph.martinez@gmail.com",
          username: "joe_m",
          password: hashedPassword,
        },
        {
          email: "mia.robinson@gmail.com",
          username: "mia_r",
          password: hashedPassword,
        },
        {
          email: "benjamin.king@gmail.com",
          username: "ben_king",
          profileImage: "https://robohash.org/ben",
          password: hashedPassword,
        },
        {
          email: "charlotte.wright@gmail.com",
          username: "char_w",
          password: hashedPassword,
        },
        {
          email: "ethan.rodriguez@gmail.com",
          username: "ethan_r",
          password: hashedPassword,
        },
        {
          email: "amelia.lewis@gmail.com",
          username: "amelia_l",
          password: hashedPassword,
        },
        {
          email: "henry.walker@gmail.com",
          username: "henry_w",
          password: hashedPassword,
        },
        {
          email: "victoria.hall@gmail.com",
          username: "vic_hall",
          password: hashedPassword,
        },
        {
          email: "sebastian.allen@gmail.com",
          username: "seb_a",
          profileImage: "https://robohash.org/scarlet",
          password: hashedPassword,
        },
        {
          email: "scarlett.young@gmail.com",
          username: "scarlett_y",
          password: hashedPassword,
        },
        {
          email: "jack.hernandez@gmail.com",
          username: "jack_h",
          password: hashedPassword,
        },
        {
          email: "chloe.king@gmail.com",
          username: "chloe_k",
          password: hashedPassword,
        },
        {
          email: "owen.wright@gmail.com",
          username: "owen_w",
          password: hashedPassword,
        },
        {
          email: "zoey.lopez@gmail.com",
          username: "zoey_l",
          password: hashedPassword,
        },
        {
          email: "lucas.hill@gmail.com",
          username: "lucas_h",
          profileImage: "https://robohash.org/lucas",
          password: hashedPassword,
        },
        {
          email: "lily.scott@gmail.com",
          username: "lily_s",
          password: hashedPassword,
        },
        {
          email: "mason.green@gmail.com",
          username: "mason_g",
          password: hashedPassword,
        },
        {
          email: "hannah.adams@gmail.com",
          username: "hannah_a",
          password: hashedPassword,
        },
        {
          email: "christopher.baker@gmail.com",
          username: "chris_b",
          password: hashedPassword,
        },
        {
          email: "aria.nelson@gmail.com",
          username: "aria_n",
          password: hashedPassword,
        },
        {
          email: "andrew.carter@gmail.com",
          username: "andy_c",
          profileImage: "https://robohash.org/andy",
          password: hashedPassword,
        },
        {
          email: "zoe.mitchell@gmail.com",
          username: "zoe_m",
          password: hashedPassword,
        },
        {
          email: "gabriel.perez@gmail.com",
          username: "gabe_p",
          password: hashedPassword,
        },
        {
          email: "aurora.roberts@gmail.com",
          username: "aurora_r",
          password: hashedPassword,
        },
      ],
    });

    const createItem = await prisma.item.createMany({
      data: [
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858572/vangoghmuseum-s0022V1962-800_g4q0cr.jpg",
          artName: "Self-Portrait",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858575/vangoghmuseum-s0032V1962-800_slhrvi.jpg",
          artName: "The Yellow House",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858580/vangoghmuseum-s0037V1962-800_uvk3sx.jpg",
          artName: "Field with Irises near Arles",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858581/vangoghmuseum-s0049V1962-800_eqhvry.jpg",
          artName: "Wheatfield with a Reaper",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858582/vangoghmuseum-s0031V1962-800_vdleaf.jpg",
          artName: "Sunflowers",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858582/vangoghmuseum-s0047V1962-800_vi3p64.jpg",
          artName: "The Bedroom",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858583/vangoghmuseum-s0117V1962-800_qen89i.jpg",
          artName: "Seascape",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858583/vangoghmuseum-s0034V1962-800_bboiet.jpg",
          artName: "Farmhouse in a Wheatfield",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858586/vangoghmuseum-s0176V1962-800_codcvn.jpg",
          artName: "Almond Blossom",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858587/vangoghmuseum-s0282V1962-800_scrmzb.jpg",
          artName: "Tulip Field",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858586/vangoghmuseum-s0212V1962-800_hajut6.jpg",
          artName: "Honfleur Harbour",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858591/vangoghmuseum-s0050V1962-800_zuvfsw.jpg",
          artName: "Irises",
          category: "Oil_Painting",
        },
        {
          ownerId: 1,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736858592/vangoghmuseum-s0197V1962-800_tw9ctq.jpg",
          artName: "Wheatfield with Partridge",
          category: "Oil_Painting",
        },

        {
          ownerId: 2,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736859688/pexels-anniroenkae-18232454_fqsjxs.jpg",
          artName: "Acrylic No.1",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 2,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736859707/pexels-anniroenkae-18246901_dkzeda.jpg",
          artName: "Acrylic No.2",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 2,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736859746/pexels-anniroenkae-18246907_djpigp.jpg",
          artName: "Acrylic No.3",
          category: "Acrylic_Painting",
        },

        {
          ownerId: 3,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860041/pexels-diva-30141820_d8xjbx.jpg",
          artName: "The Sea",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 3,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860003/pexels-diva-30125330_ferqh0.jpg",
          artName: "Volcano1",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 3,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860085/pexels-diva-30141817_gyjqyl.jpg",
          artName: "Butterfly",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 3,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860085/pexels-diva-30092922_c0znlq.jpg",
          artName: "Mountain",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 3,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860094/pexels-diva-30141813_mzyiqi.jpg",
          artName: "The Sea2",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 3,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860103/pexels-diva-30048831_rk0qr6.jpg",
          artName: "Pinky",
          category: "Acrylic_Painting",
        },
        {
          ownerId: 3,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860112/pexels-diva-30141819_ohi4ip.jpg",
          artName: "The Sea3",
          category: "Acrylic_Painting",
        },

        {
          ownerId: 4,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860626/marek-pavlik-oA5elX5-syA-unsplash_j65cra.jpg",
          artName: "The Head1",
          category: "Indie_Art",
        },
        {
          ownerId: 4,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860682/marek-pavlik-2TWz-FvCQZA-unsplash_hz1n0u.jpg",
          artName: "The Head2",
          category: "Indie_Art",
        },
        {
          ownerId: 4,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860690/marek-pavlik-UbqC-sWVKmU-unsplash_bt67um.jpg",
          artName: "The Head3",
          category: "Indie_Art",
        },

        {
          ownerId: 5,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860822/pexels-michael-hamments-736237287-30191700_nggobx.jpg",
          artName: "Sand",
          category: "Encaustic_Painting",
        },
        {
          ownerId: 5,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860834/pexels-michael-hamments-736237287-30148768_iksdfx.jpg",
          artName: "Infinity Circle",
          category: "Encaustic_Painting",
        },
        {
          ownerId: 5,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860859/pexels-michael-hamments-736237287-27870167_kokyba.jpg",
          artName: "Mountain on Winter",
          category: "Encaustic_Painting",
        },
        {
          ownerId: 5,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860868/pexels-michael-hamments-736237287-30175969_afcywd.jpg",
          artName: "Squirrel Tail",
          category: "Encaustic_Painting",
        },
        {
          ownerId: 5,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736860883/pexels-michael-hamments-736237287-30206897_f2qlwz.jpg",
          artName: "Leaked",
          category: "Encaustic_Painting",
        },

        {
          ownerId: 6,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861338/pexels-rostislav-5011647_aoybq0.jpg",
          artName: "Cubic",
          category: "Indie_Art",
        },
        {
          ownerId: 6,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861358/pexels-rostislav-8252605_qjtfcf.jpg",
          artName: "The Blaze",
          category: "Indie_Art",
        },

        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861520/pexels-steve-1045299_snhrot.jpg",
          artName: "Fire",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861548/pexels-steve-1050822_nylljt.jpg",
          artName: "Something",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861581/pexels-steve-1150626_qxetta.jpg",
          artName: "The Rainbow 1",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861625/pexels-steve-1704120_rrnszn.jpg",
          artName: "The Rainbow 2",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861633/pexels-steve-1266808_fkun89.jpg",
          artName: "The Riot",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861731/pexels-steve-1451567_o2cvc2.jpg",
          artName: "Peaceful Strange",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861791/pexels-steve-2130475_prdgty.jpg",
          artName: "Winter",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861808/pexels-steve-1269968_eyi7ug.jpg",
          artName: "Old Summer",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861827/pexels-steve-1661412_pn2tk8.jpg",
          artName: "Something2",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861848/pexels-steve-1456310_qy4bzz.jpg",
          artName: "Summer",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861927/pexels-steve-1738434_pbhb3u.jpg",
          artName: "New Summer",
          category: "Oil_Painting",
        },
        {
          ownerId: 7,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736861930/pexels-steve-2144341_wu7u4n.jpg",
          artName: "The Deep",
          category: "Oil_Painting",
        },

        {
          ownerId: 8,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862522/mountain-7638443_1280_pr3x3u.jpg",
          artName: "Mountain",
          category: "Indie_Art",
        },
        {
          ownerId: 8,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862521/forest-7383165_1280_opfzf7.jpg",
          artName: "Forest",
          category: "Indie_Art",
        },
        {
          ownerId: 8,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862521/mountain-7621205_1280_dzgrbd.jpg",
          artName: "Mountain on Winter",
          category: "Indie_Art",
        },
        {
          ownerId: 8,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862522/cat-7635987_1280_cdq4df.jpg",
          artName: "Water Cat",
          category: "Indie_Art",
        },
        {
          ownerId: 8,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862523/sea-7633722_1280_ktjoya.jpg",
          artName: "The Eve Sea",
          category: "Watercolor_Painting",
        },
        {
          ownerId: 8,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862525/seawater-7630159_1280_lxwiu1.jpg",
          artName: "The Day Sea",
          category: "Watercolor_Painting",
        },

        {
          ownerId: 9,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862945/abstract-4431626_1280_upp0tw.jpg",
          artName: "Features",
          category: "Encaustic_Painting",
        },
        {
          ownerId: 9,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862953/knight-4499360_1280_aovqlr.jpg",
          artName: "The Knight",
          category: "Oil_Painting",
        },
        {
          ownerId: 9,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862952/landscape-1758167_1280_zb319h.jpg",
          artName: "Magic",
          category: "Indie_Art",
        },
        {
          ownerId: 9,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736862952/winter-2968505_1280_cuzcho.jpg",
          artName: "Snow Village",
          category: "Indie_Art",
        },

        {
          ownerId: 10,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863430/pexels-zaksheuskaya-709412-1616403_idihsc.jpg",
          artName: "Toxic2",
          category: "Oil_Painting",
        },
        {
          ownerId: 10,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863467/pexels-zaksheuskaya-709412-1546249_izdhm5.jpg",
          artName: "Sea Fresh",
          category: "Oil_Painting",
        },
        {
          ownerId: 10,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863392/pexels-zaksheuskaya-709412-1579243_h2sdpm.jpg",
          artName: "Toxin",
          category: "Watercolor_Painting",
        },
        {
          ownerId: 10,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863424/pexels-zaksheuskaya-709412-4391607_uzakm7.jpg",
          artName: "Cute Cells",
          category: "Watercolor_Painting",
        },
        {
          ownerId: 10,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863444/pexels-zaksheuskaya-709412-1579245_lk61e9.jpg",
          artName: "Seem Toxic",
          category: "Watercolor_Painting",
        },
        {
          ownerId: 10,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863469/pexels-zaksheuskaya-709412-4391611_qqfprc.jpg",
          artName: "Seem Love",
          category: "Watercolor_Painting",
        },

        {
          ownerId: 10,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863469/pexels-zaksheuskaya-709412-4391611_qqfprc.jpg",
          artName: "Seem Love",
          category: "Watercolor_Painting",
        },

        {
          ownerId: 12,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863884/openart-image_6dvT8R3T_1736851820810_raw_dyj9v6.jpg",
          artName: "The Night",
          category: "Oil_Painting",
        },
        {
          ownerId: 12,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863914/openart-image_55b9TLBP_1736852217029_raw_um8mf8.jpg",
          artName: "Old Time London",
          category: "Oil_Painting",
        },
        {
          ownerId: 12,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863936/openart-image_gkTTh8qY_1736851930189_raw_zcs60i.jpg",
          artName: "Old Time London 2",
          category: "Oil_Painting",
        },
        {
          ownerId: 12,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864025/openart-image_UGM-1ooz_1736852206326_raw_gguhu7.jpg",
          artName: "Old Time London 3",
          category: "Oil_Painting",
        },
        {
          ownerId: 12,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864110/openart-image_YVh4APQb_1736851919491_raw_tzmqye.jpg",
          artName: "The London",
          category: "Oil_Painting",
        },

        {
          ownerId: 13,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863924/openart-image_7IMD4uW5_1736851659643_raw_lnhnp6.jpg",
          artName: "Wheat field",
          category: "Oil_Painting",
        },
        {
          ownerId: 13,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863945/openart-image_JNHBTNWh_1736851810010_raw_ge37re.jpg",
          artName: "Wheat field 2",
          category: "Oil_Painting",
        },
        {
          ownerId: 13,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864040/openart-image_NXYGs4dU_1736851505178_raw_bdykrc.jpg",
          artName: "Wheat field 3",
          category: "Oil_Painting",
        },

        {
          ownerId: 15,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863958/openart-image_beIBBdVK_1736858287366_raw_tntqoe.jpg",
          artName: "The Night Day",
          category: "Oil_Painting",
        },
        {
          ownerId: 15,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863960/openart-image_kVurAi6T_1736856309800_raw_lnkgcq.jpg",
          artName: "House",
          category: "Oil_Painting",
        },
        {
          ownerId: 15,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863976/openart-image_OFIq2Jfi_1736851648836_raw_uuuikw.jpg",
          artName: "Wheat field n Moon",
          category: "Oil_Painting",
        },
        {
          ownerId: 15,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736863976/openart-image_lEX-qQwe_1736851198185_raw_adkrbj.jpg",
          artName: "Vineyard",
          category: "Oil_Painting",
        },
        {
          ownerId: 15,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864117/openart-image_X750EM2t_1736851187223_raw_h6oslt.jpg",
          artName: "Vineyard 2",
          category: "Oil_Painting",
        },

        {
          ownerId: 18,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864003/openart-image_QCbYPE4T_1736856320457_raw_jygt3y.jpg",
          artName: "The Garden",
          category: "Oil_Painting",
        },
        {
          ownerId: 18,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864056/openart-image_UnJKQ7A4_1736858276222_raw_qy71pe.jpg",
          artName: "Night Road",
          category: "Oil_Painting",
        },
        {
          ownerId: 18,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864083/openart-image_DgHLVZ5S_1736850967469_raw_tah6sq.jpg",
          artName: "Mountain And Field",
          category: "Oil_Painting",
        },
        {
          ownerId: 18,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864090/openart-image_XTm4lXYk_1736858298175_raw_vdwbgp.jpg",
          artName: "Night Road 2",
          category: "Oil_Painting",
        },
        {
          ownerId: 18,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864106/openart-image_oqvpbN1__1736855993197_raw_u25zn2.jpg",
          artName: "Sea Lover",
          category: "Oil_Painting",
        },

        {
          ownerId: 18,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864117/openart-image_uAElrbkG_1736851411655_raw_ghls9q.jpg",
          artName: "The Flowers",
          category: "Oil_Painting",
        },
        {
          ownerId: 18,
          artImg:
            "https://res.cloudinary.com/djudr1vzc/image/upload/v1736864113/openart-image_sF3mtQM0_1736851422528_raw_fvihj2.jpg",
          artName: "The Flowers 2",
          category: "Oil_Painting",
        },
      ],
    });

    const createComments = await prisma.comment.createMany({
      data: [
        // Extensive comments on Van Gogh's Self-Portrait (itemId: 1)
        {
          text: "The intensity of the brushstrokes in this self-portrait is captivating!",
          authorId: 2,
          itemId: 1,
        },
        {
          text: "The color palette perfectly captures the emotional depth.",
          authorId: 3,
          itemId: 1,
        },
        {
          text: "This work shows such vulnerability and strength simultaneously.",
          authorId: 4,
          itemId: 1,
        },
        {
          text: "The way you've captured light in your eyes is remarkable.",
          authorId: 5,
          itemId: 1,
        },
        {
          text: "Every time I look at this, I discover new details.",
          authorId: 6,
          itemId: 1,
        },
        {
          text: "The technical mastery in this self-portrait is extraordinary.",
          authorId: 7,
          itemId: 1,
        },

        // The Yellow House comments (itemId: 2)
        {
          text: "The perspective of The Yellow House is so unique!",
          authorId: 8,
          itemId: 2,
        },
        {
          text: "Love how you captured the Mediterranean light.",
          authorId: 9,
          itemId: 2,
        },
        {
          text: "The architectural details are so precise yet expressively rendered.",
          authorId: 10,
          itemId: 2,
        },
        {
          text: "This piece really captures the essence of Arles.",
          authorId: 11,
          itemId: 2,
        },
        {
          text: "The composition draws you right into the scene.",
          authorId: 12,
          itemId: 2,
        },

        // Field with Irises comments (itemId: 3)
        {
          text: "The irises seem to dance in the field!",
          authorId: 13,
          itemId: 3,
        },
        {
          text: "Your interpretation of nature is always so dynamic.",
          authorId: 14,
          itemId: 3,
        },
        {
          text: "The purple against the green field is stunning.",
          authorId: 15,
          itemId: 3,
        },
        {
          text: "Such a masterful display of perspective and depth.",
          authorId: 16,
          itemId: 3,
        },
        {
          text: "The way you captured the movement of the flowers is incredible.",
          authorId: 17,
          itemId: 3,
        },

        // Wheatfield with a Reaper comments (itemId: 4)
        {
          text: "The golden colors are absolutely mesmerizing.",
          authorId: 18,
          itemId: 4,
        },
        {
          text: "There's such a strong sense of movement in this piece.",
          authorId: 19,
          itemId: 4,
        },
        {
          text: "The composition really draws you into the scene.",
          authorId: 20,
          itemId: 4,
        },
        {
          text: "The contrast between the wheat and sky is perfect.",
          authorId: 21,
          itemId: 4,
        },

        // Sunflowers extensive comments (itemId: 5)
        {
          text: "These sunflowers seem to radiate light!",
          authorId: 22,
          itemId: 5,
        },
        {
          text: "The textures in this piece are incredible.",
          authorId: 23,
          itemId: 5,
        },
        {
          text: "Such a masterful use of yellows and browns.",
          authorId: 24,
          itemId: 5,
        },
        {
          text: "Each flower has its own personality.",
          authorId: 25,
          itemId: 5,
        },
        {
          text: "The composition is perfectly balanced.",
          authorId: 26,
          itemId: 5,
        },
        {
          text: "This piece always brings warmth to my heart.",
          authorId: 27,
          itemId: 5,
        },
        {
          text: "The way you captured light and shadow is remarkable.",
          authorId: 28,
          itemId: 5,
        },

        // The Bedroom comments (itemId: 6)
        {
          text: "The perspective creates such an intimate feeling.",
          authorId: 29,
          itemId: 6,
        },
        {
          text: "Love the bold colors used in this interior scene.",
          authorId: 30,
          itemId: 6,
        },
        {
          text: "Every object seems to tell its own story.",
          authorId: 31,
          itemId: 6,
        },
        {
          text: "The distorted perspective adds so much character.",
          authorId: 32,
          itemId: 6,
        },
        {
          text: "Such a personal glimpse into your world.",
          authorId: 33,
          itemId: 6,
        },

        // Seascape comments (itemId: 7)
        {
          text: "The movement of the water is so dynamic!",
          authorId: 34,
          itemId: 7,
        },
        {
          text: "The sky and sea seem to merge beautifully.",
          authorId: 35,
          itemId: 7,
        },
        {
          text: "Your brushwork really captures the ocean's energy.",
          authorId: 36,
          itemId: 7,
        },
        {
          text: "The colors are so evocative of the sea.",
          authorId: 37,
          itemId: 7,
        },

        // Farmhouse comments (itemId: 8)
        {
          text: "The rustic charm is perfectly captured.",
          authorId: 38,
          itemId: 8,
        },
        {
          text: "Love how the wheat field frames the farmhouse.",
          authorId: 39,
          itemId: 8,
        },
        {
          text: "The perspective draws you right in.",
          authorId: 40,
          itemId: 8,
        },
        {
          text: "Such wonderful attention to architectural detail.",
          authorId: 2,
          itemId: 8,
        },

        // Almond Blossom comments (itemId: 9)
        {
          text: "The delicacy of the blossoms is breathtaking!",
          authorId: 3,
          itemId: 9,
        },
        {
          text: "Such a beautiful celebration of spring.",
          authorId: 4,
          itemId: 9,
        },
        {
          text: "The blue background makes the blossoms pop.",
          authorId: 5,
          itemId: 9,
        },
        { text: "This piece always brings me joy.", authorId: 6, itemId: 9 },
        {
          text: "The composition is perfectly balanced.",
          authorId: 7,
          itemId: 9,
        },

        // Modern Artists' Comments
        // Anni's Acrylics (itemId: 14-16)
        {
          text: "The color composition is mesmerizing!",
          authorId: 8,
          itemId: 14,
        },
        {
          text: "Such bold and contemporary choices.",
          authorId: 9,
          itemId: 15,
        },
        {
          text: "The abstract elements really speak to me.",
          authorId: 10,
          itemId: 16,
        },

        // Landiva's Works (itemId: 17-23)
        {
          text: "The movement in this piece is incredible.",
          authorId: 11,
          itemId: 17,
        },
        {
          text: "Your use of color is revolutionary.",
          authorId: 12,
          itemId: 18,
        },
        {
          text: "This piece really pushes boundaries.",
          authorId: 13,
          itemId: 19,
        },

        // Steve's Collection (itemId: 32-43)
        {
          text: "The energy in this piece is palpable!",
          authorId: 14,
          itemId: 32,
        },
        { text: "Such a unique interpretation.", authorId: 15, itemId: 33 },
        {
          text: "The composition is masterfully done.",
          authorId: 16,
          itemId: 34,
        },

        // Comments from art critics (using specific authorIds)
        {
          text: "A masterful example of post-impressionist technique.",
          authorId: 20,
          itemId: 1,
        },
        {
          text: "The emotional depth conveyed through color is remarkable.",
          authorId: 21,
          itemId: 5,
        },
        {
          text: "An innovative approach to perspective and space.",
          authorId: 22,
          itemId: 6,
        },
        {
          text: "The brushwork shows incredible confidence and skill.",
          authorId: 23,
          itemId: 9,
        },

        // Recent engagement comments
        {
          text: "This piece continues to inspire new generations.",
          authorId: 24,
          itemId: 1,
        },
        {
          text: "The technical innovation here was ahead of its time.",
          authorId: 25,
          itemId: 5,
        },
        {
          text: "A timeless masterpiece that speaks to every era.",
          authorId: 26,
          itemId: 9,
        },
      ],
    });

    const createLikes = await prisma.like.createMany({
        data: [
            // Sunflowers (itemId: 5) - Most liked
            { userId: 2, itemId: 5 },
            { userId: 3, itemId: 5 },
            { userId: 4, itemId: 5 },
            { userId: 5, itemId: 5 },
            { userId: 6, itemId: 5 },
            { userId: 7, itemId: 5 },
            { userId: 8, itemId: 5 },
            { userId: 9, itemId: 5 },
            { userId: 10, itemId: 5 },
            { userId: 11, itemId: 5 },
            { userId: 12, itemId: 5 },
            { userId: 13, itemId: 5 },
            { userId: 14, itemId: 5 },
            { userId: 15, itemId: 5 },
            { userId: 16, itemId: 5 },
            { userId: 17, itemId: 5 },
            { userId: 18, itemId: 5 },
            { userId: 19, itemId: 5 },
            { userId: 20, itemId: 5 },
            { userId: 21, itemId: 5 },
            { userId: 22, itemId: 5 },
            { userId: 23, itemId: 5 },
            { userId: 24, itemId: 5 },
            { userId: 25, itemId: 5 },
            { userId: 26, itemId: 5 },
    
            // The Bedroom (itemId: 6) - Second most liked
            { userId: 2, itemId: 6 },
            { userId: 3, itemId: 6 },
            { userId: 4, itemId: 6 },
            { userId: 5, itemId: 6 },
            { userId: 6, itemId: 6 },
            { userId: 7, itemId: 6 },
            { userId: 8, itemId: 6 },
            { userId: 9, itemId: 6 },
            { userId: 10, itemId: 6 },
            { userId: 11, itemId: 6 },
            { userId: 12, itemId: 6 },
            { userId: 13, itemId: 6 },
            { userId: 14, itemId: 6 },
            { userId: 15, itemId: 6 },
            { userId: 16, itemId: 6 },
            { userId: 17, itemId: 6 },
            { userId: 18, itemId: 6 },
            { userId: 19, itemId: 6 },
            { userId: 20, itemId: 6 },
            { userId: 21, itemId: 6 },
    
            // Almond Blossom (itemId: 9) - Third most liked
            { userId: 2, itemId: 9 },
            { userId: 3, itemId: 9 },
            { userId: 4, itemId: 9 },
            { userId: 5, itemId: 9 },
            { userId: 6, itemId: 9 },
            { userId: 7, itemId: 9 },
            { userId: 8, itemId: 9 },
            { userId: 9, itemId: 9 },
            { userId: 10, itemId: 9 },
            { userId: 11, itemId: 9 },
            { userId: 12, itemId: 9 },
            { userId: 13, itemId: 9 },
            { userId: 14, itemId: 9 },
            { userId: 15, itemId: 9 },
            { userId: 16, itemId: 9 },
            { userId: 17, itemId: 9 },
            { userId: 18, itemId: 9 },
    
            // Self-Portrait (itemId: 1) - Fourth most liked
            { userId: 2, itemId: 1 },
            { userId: 3, itemId: 1 },
            { userId: 4, itemId: 1 },
            { userId: 5, itemId: 1 },
            { userId: 6, itemId: 1 },
            { userId: 7, itemId: 1 },
            { userId: 8, itemId: 1 },
            { userId: 9, itemId: 1 },
            { userId: 10, itemId: 1 },
            { userId: 11, itemId: 1 },
            { userId: 12, itemId: 1 },
            { userId: 13, itemId: 1 },
            { userId: 14, itemId: 1 },
            { userId: 15, itemId: 1 },
    
            // Anni's works
            { userId: 1, itemId: 14 },
            { userId: 3, itemId: 14 },
            { userId: 5, itemId: 14 },
            { userId: 7, itemId: 14 },
            { userId: 9, itemId: 14 },
            { userId: 11, itemId: 14 },
            { userId: 13, itemId: 14 },
            { userId: 15, itemId: 14 },
            { userId: 17, itemId: 14 },
            { userId: 19, itemId: 14 },
    
            { userId: 2, itemId: 15 },
            { userId: 4, itemId: 15 },
            { userId: 6, itemId: 15 },
            { userId: 8, itemId: 15 },
            { userId: 10, itemId: 15 },
            { userId: 12, itemId: 15 },
            { userId: 14, itemId: 15 },
            { userId: 16, itemId: 15 },
    
            { userId: 1, itemId: 16 },
            { userId: 3, itemId: 16 },
            { userId: 5, itemId: 16 },
            { userId: 7, itemId: 16 },
            { userId: 9, itemId: 16 },
            { userId: 11, itemId: 16 },
    
            // Landiva's works
            { userId: 1, itemId: 17 },
            { userId: 2, itemId: 17 },
            { userId: 4, itemId: 17 },
            { userId: 6, itemId: 17 },
            { userId: 8, itemId: 17 },
            { userId: 10, itemId: 17 },
            { userId: 12, itemId: 17 },
            { userId: 14, itemId: 17 },
            { userId: 16, itemId: 17 },
            { userId: 18, itemId: 17 },
    
            { userId: 1, itemId: 18 },
            { userId: 3, itemId: 18 },
            { userId: 5, itemId: 18 },
            { userId: 7, itemId: 18 },
            { userId: 9, itemId: 18 },
            { userId: 11, itemId: 18 },
            { userId: 13, itemId: 18 },
            { userId: 15, itemId: 18 },
    
            // Steve's works
            { userId: 1, itemId: 32 },
            { userId: 2, itemId: 32 },
            { userId: 3, itemId: 32 },
            { userId: 4, itemId: 32 },
            { userId: 5, itemId: 32 },
            { userId: 6, itemId: 32 },
            { userId: 7, itemId: 32 },
            { userId: 8, itemId: 32 },
            { userId: 9, itemId: 32 },
            { userId: 10, itemId: 32 },
            { userId: 11, itemId: 32 },
            { userId: 12, itemId: 32 },
    
            { userId: 1, itemId: 33 },
            { userId: 3, itemId: 33 },
            { userId: 5, itemId: 33 },
            { userId: 7, itemId: 33 },
            { userId: 9, itemId: 33 },
            { userId: 11, itemId: 33 },
            { userId: 13, itemId: 33 },
            { userId: 15, itemId: 33 },
    
            { userId: 2, itemId: 34 },
            { userId: 4, itemId: 34 },
            { userId: 6, itemId: 34 },
            { userId: 8, itemId: 34 },
            { userId: 10, itemId: 34 },
            { userId: 12, itemId: 34 },
            { userId: 14, itemId: 34 },
            { userId: 16, itemId: 34 },
            { userId: 18, itemId: 34 },
            { userId: 20, itemId: 34 }
        ]
    });
  } catch (error) {
    console.log(error);
  }
}

run();

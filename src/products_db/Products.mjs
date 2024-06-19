const size = ["LARGE", "SMALL"];
const prize = [15, 11];

const Products = [
  {
    id: 1,
    name: "Nakahara Chuuya Demon AU Pin",
    fandom: "Bungo Stray Dogs",
    category: "pins",
    price: 8,
    description: [
      "Metal pin with glossy surface",
      "Brooch pin on the back ",
      "One size only: 4,5cm",
    ],
    image_src: "https://aasha-server.onrender.com/images/Pins/pin_1.jpg",
    // small_image_src:
    //   "https://aasha-server.onrender.com/images/Pins/pin_1_small.jpg",
  },
  {
    id: 2,
    name: "Osamu Dazai Pin",
    fandom: "Bungo Stray Dogs",
    category: "pins",
    price: 8,
    description: [
      "Metal pin with glossy surface",
      "Brooch pin on the back ",
      "One size only: 4,5cm",
    ],
    image_src: "https://aasha-server.onrender.com/images/Pins/pin_2.jpg",
    // small_image_src:
    //   "https://aasha-server.onrender.com/images/Pins/pin_2_small.jpg",
  },
  {
    id: 3,
    name: "Yazawa Nico Pin",
    fandom: "Love Live! School Idol Project",
    category: "pins",
    price: 8,
    description: [
      "Metal pin with glossy surface",
      "Brooch pin on the back ",
      "One size only: 4,5cm",
    ],
    image_src: "https://aasha-server.onrender.com/images/Pins/pin_3.jpg",
    // small_image_src:
    //   "https://aasha-server.onrender.com/images/Pins/pin_3_small.jpg",
  },
  {
    id: 4,
    name: "Osamu Dazai Mermaid AU Pin",
    fandom: "Bungo Stray Dogs",
    category: "pins",
    price: 8,
    description: [
      "Metal pin with glossy surface",
      "Brooch pin on the back ",
      "One size only: 4,5cm",
    ],
    image_src: "https://aasha-server.onrender.com/images/Pins/pin_4.jpg",
    // small_image_src:
    //   "https://aasha-server.onrender.com/images/Pins/pin_4_small.jpg",
  },
  {
    id: 5,
    name: "Misha Sticker",
    fandom: "Honkai: Star Rail",
    category: "stickers",
    price: 4,
    description: [
      "Vinyl sticker, kiss cut is optional",
      "Waterproof ",
      "One size only: 7x5cm",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Stickers/purleye_girl.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/purleye_girl_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Stickers/pinkeye_girl_2_small.jpg",
    ],
  },
  {
    id: 6,
    name: "Sou Hiyori Sticker",
    fandom: "Your Turn To Die",
    category: "stickers",
    price: 4,
    description: [
      "Vinyl sticker, kiss cut is optional",
      "Waterproof ",
      "One size only: 7x5cm",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Stickers/greenhead_boy_sticker.jpg",

    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/greenhead_boy_sticker_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Stickers/greenhead_boy_sitcker_2_small.jpg",
    ],
  },
  {
    id: 7,
    name: "Bennett Sticker",
    fandom: "Genshin Impact",
    category: "stickers",
    price: 4,
    description: [
      "Vinyl sticker, kiss cut is optional",
      "Waterproof ",
      "One size only: 7x5cm",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Stickers/whitehead_girl_sticker.jpg",

    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/whitehead_girl_sticker_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Stickers/whitehead_girl_sticker2_small.jpg",
    ],
  },
  {
    id: 8,
    name: "Sigma Sticker",
    fandom: "Bungo Stray Dogs",
    category: "stickers",
    price: 4,
    description: [
      "Vinyl sticker, kiss cut is optional",
      "Waterproof ",
      "One size only: 7x5cm",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Stickers/pinkhead_girl_sitcker.jpg",

    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/pinkhead_girl_sitcker_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Stickers/pinkhead_girl_2_small.jpg",
    ],
  },
  {
    id: 9,
    name: "Aventurine Sticker",
    fandom: "Honkai: Star Rail",
    category: "stickers",
    price: 4,
    description: [
      "Vinyl sticker, kiss cut is optional",
      "Waterproof ",
      "One size only: 7x5cm",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Stickers/fingerboy_sticker.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/fingerboy_sticker_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Stickers/fingerboy_sticker_2_small.jpg",
    ],
  },
  {
    id: 14,
    name: "Dazai&Chuuya Book",
    fandom: "Bungo Stray Dogs",
    category: "books",
    price: 45,
    description: [
      "Notebook with hardcover for pencils, liners and markers",
      "32 sheets, 150 g/cm²",
      "One size only: 13x21 cm",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Books/anime_book_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/anime_book_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Books/black_book_small.jpg",
      "https://aasha-server.onrender.com/images/Books/black_book_3_small.jpg",
    ],
  },
  {
    id: 15,
    name: "Fyodor&Dazai Book",
    fandom: "Bungo Stray Dogs",
    category: "books",
    price: 45,
    description: [
      "Notebook with hardcover for pencils, liners and markers",
      "32 sheets, 150 g/cm²",
      "One size only: 13x21 cm",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Books/anime_book_2.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/anime_book_2_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Books/brown_book_small.jpg",
      "https://aasha-server.onrender.com/images/Books/brown_book_2_small.jpg",
    ],
  },
  {
    id: 16,
    name: "Black Swan&Acheron Book",
    fandom: "Honkai: Star Rail",
    category: "books",
    price: 45,
    description: [
      "Notebook with hardcover for pencils, liners and markers",
      "32 sheets, 150 g/cm²",
      "One size only: 13x21 cm",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Books/anime_book_2.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/anime_book_2_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Books/purple_book_2_small.jpg",
      "https://aasha-server.onrender.com/images/Books/purple_book_1_small.jpg",
    ],
  },
  {
    id: 17,
    name: "Stelle Book",
    fandom: "Honkai: Star Rail",
    category: "books",
    price: 45,
    description: [
      "Notebook with hardcover for pencils, liners and markers",
      "32 sheets, 150 g/cm²",
      "One size only: 13x21 cm",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Books/anime_book_4.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/anime_book_4_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Books/white_book_1_small.jpg",
      "https://aasha-server.onrender.com/images/Books/black_book_2_small.jpg",
    ],
  },
  {
    id: 19,
    name: "Lyney Print",
    fandom: "Genshin Impact",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/cardgirl_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/cardgirl_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/cardgirl_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/cardgirl_print_3_small.jpg",
    ],
  },

  {
    id: 20,
    name: "Fluttershy Human AU Print",
    fandom: "My Little Pony",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/pinkheadgirl_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/pinkheadgirl_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/pinkheadgirl_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/pinkheadgirl_print_3_small.jpg",
    ],
  },

  {
    id: 21,
    name: "Blade Print",
    fandom: "Honkai: Star Rail",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/demonboy_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/demonboy_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/demonboy_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/demonboy_print_3_small.jpg",
    ],
  },
  {
    id: 22,
    name: "Shining Glitter Cookie Print",
    fandom: "Cookie Run: Kingdom",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/singirl_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/singirl_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/singirl_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/singirl_print_3_small.jpg",
    ],
  },
  {
    id: 23,
    name: "Klee Print",
    fandom: "Genshin Impact",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/littlewitch_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/littlewitch_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/littlewitch_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/littlewitch_print_3_small.jpg",
    ],
  },
  {
    id: 24,
    name: "Albedo&Klee Print",
    fandom: "Genshin Impact",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/couple_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/couple_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/couple_print_2_small.jpg",
    ],
  },
  {
    id: 25,
    name: "Arlecchino&Clervie Print",
    fandom: "Genshin Impact",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/coupleingarden_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/coupleingarden_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/coupleingarden_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/coupleingarden_print_3_small.jpg",
    ],
  },
  {
    id: 27,
    name: "Balloon Party Print",
    fandom: "Reverse: 1999",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/whitegothgirl_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/whitegothgirl_print_1_small.jpg",
  },
  {
    id: 28,
    name: "Yakumo Print",
    fandom: "NU: Carnival",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/evilboy_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/evilboy_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/evilboy_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/evilboy_print_3_small.jpg",
    ],
  },
  {
    id: 29,
    name: "Nakahara Chuuya Fem AU Print",
    fandom: "Bungo Stray Dogs",
    category: "prints",
    size: size,
    price: prize,
    description: [
      "Printed on satin-textured light card stock",
      "Shipped using triangular mailing tubes",
      "Orders with both large prints and books will be shipped in separate parcels due to different sizes",
    ],
    image_src:
      "https://aasha-server.onrender.com/images/Prints/redheadgirl_print_1.jpg",
    small_image_src:
      "https://aasha-server.onrender.com/images/Pins/redheadgirl_print_1_small.jpg",
    more_images: [
      "https://aasha-server.onrender.com/images/Prints/redheadgirl_print_2_small.jpg",
      "https://aasha-server.onrender.com/images/Prints/redheadgirl_print_3_small.jpg",
    ],
  },
];

export default Products;

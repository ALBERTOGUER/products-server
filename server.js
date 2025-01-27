const express = require("express");
var cors = require('cors')
const app = express();
const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

app.use(cors())


app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/products", (req, res) => {
  res.json({
    succes: true,
    data: [
      {
        "id": 1,
        "title": "Apple iPhone 13",
        "description": "Smartphone with a 6.1-inch Super Retina XDR display and A15 Bionic chip.",
        "price": 799.00,
        "currency": "USD",
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
        "rating": 4.8
      },
      {
        "id": 2,
        "title": "Samsung Galaxy S21",
        "description": "Smartphone with a 6.2-inch Dynamic AMOLED 2X display and 64MP camera.",
        "price": 699.99,
        "currency": "USD",
        "image": "https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-s21/gallery/levant-galaxy-s21-5g-g991-sm-g991bzvdmid-368472358?$720_576_PNG$",
        "rating": 4.7
      },
      {
        "id": 3,
        "title": "Sony WH-1000XM4",
        "description": "Wireless headphones with industry-leading noise cancelation.",
        "price": 349.99,
        "currency": "USD",
        "image": "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
        "rating": 4.6
      },
      {
        "id": 4,
        "title": "Dell XPS 13",
        "description": "Ultra-thin 13.4-inch laptop with an InfinityEdge display and Intel Core i7 processor.",
        "price": 999.99,
        "currency": "USD",
        "image": "https://i.dell.com/sites/csimages/Video_Imagery/all/xps-13-9300-laptop.jpg",
        "rating": 4.5
      },
      {
        "id": 5,
        "title": "Apple Watch Series 7",
        "description": "Smartwatch with an always-on Retina display and advanced health monitoring.",
        "price": 399.00,
        "currency": "USD",
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93_VW_34FR+watch-44-alum-silver-cell-7s_VW_34FR_WF_CO_GEO_US?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1632171069000",
        "rating": 4.9
      },
      {
        "id": 6,
        "title": "Nintendo Switch",
        "description": "Hybrid gaming console that works as a home console and a handheld device.",
        "price": 299.99,
        "currency": "USD",
        "image": "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_fill,w_400/ncom/en_US/switch/system/three-modes-in-one",
        "rating": 4.8
      },
      {
        "id": 7,
        "title": "Kindle Paperwhite",
        "description": "E-reader with a 6.8-inch display, warm light, and water resistance.",
        "price": 139.99,
        "currency": "USD",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61f8A5mT2cL._AC_SL1000_.jpg",
        "rating": 4.7
      },
      {
        "id": 8,
        "title": "GoPro HERO10 Black",
        "description": "Action camera with 5.3K60 video, 23MP photos, and HyperSmooth 4.0 stabilization.",
        "price": 499.99,
        "currency": "USD",
        "image": "https://gopro.com/content/dam/gopro/en/en/pdp/hero10-black/packaging/hero10-black-package-1.jpg",
        "rating": 4.6
      },
      {
        "id": 9,
        "title": "Bose SoundLink Revolve+ II",
        "description": "Portable Bluetooth speaker with 360-degree sound and long battery life.",
        "price": 329.00,
        "currency": "USD",
        "image": "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_plus_ii/product_silo_images/SoundLink-RevolvePlus-II_LUX_SILVER_EC_hero.psd/jcr:content/renditions/cq5dam.web.320.320.png",
        "rating": 4.7
      },
      {
        "id": 10,
        "title": "Fitbit Charge 5",
        "description": "Advanced fitness tracker with built-in GPS, health monitoring, and stress management.",
        "price": 179.95,
        "currency": "USD",
        "image": "https://static1.fitbit.com/static/fitbit-home-page/en/galleries/en-us/products/hero_image_no_static.gif",
        "rating": 4.6
      }
    ]

  }
  )
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });

});


app.listen(process.env.PORT || 3000, () =>
  console.log(`Node server listening at http://localhost:5252`)
);

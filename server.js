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
        "title": "BlendMaster Elite Fusionator",
        "description": "Because ordinary blenders are for the common folk. With the BlendMaster, you can effortlessly mix your pretentious smoothies and soups while feeling like a culinary genius. It's not just a blender; it's a status symbol in the world of haute cuisine.",
        "price": 199.00,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&w=828&q=50",
        "rating": 4.8
      },
      {
        "id": 2,
        "title": "Corporate Commando Throne",
        "description": "Introducing the Corporate Commando Throne office chair. Experience the ultimate in ergonomic comfort and stylish design. Enhance productivity while commanding authority. Get the Corporate Commando Throne today!",
        "price": 550.99,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&w=828&q=50",
        "rating": 4.7
      },
      {
        "id": 3,
        "title": "Decibel Dominator Deluxe",
        "description": "Introducing the mighty Decibel Dominator Deluxe clock radio alarm! Experience its seamless Bluetooth connectivity and crystal-clear DAB+ radio. Rise and shine in style!",
        "price": 199.99,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&w=828&q=50",
        "rating": 4.6
      },
      {
        "id": 4,
        "title": "Nebula Noir Hoodie",
        "description": "Immerse yourself in cosmic fashion. Unveil the enigmatic allure of the Nebula Noir Hoodie. Embrace its cozy and durable charm. Elevate your style to celestial heights. Get yours today!",
        "price": 199.99,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&w=828&q=50",
        "rating": 4.5
      },
      {
        "id": 5,
        "title": "Exorbita Elegance Elite",
        "description": "Introducing the Exorbita Elegance Elite watch, now available with the option of kinetic movement technology. Immerse yourself in timeless elegance and never worry about battery changes again. Discover the perfect blend of style and innovation.",
        "price": 1199.00,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&w=828&q=50",
        "rating": 4.9
      },
      {
        "id": 6,
        "title": "Metallic Majesty Illuminator",
        "description": "Exquisite steel design lamp. Sleek construction exudes elegance and modernity. Illuminate with style and sophistication. Elevate your decor effortlessly. Perfect for warm and inviting ambiance. Unleash your creativity. Experience steel in a new light.",
        "price": 399.99,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&w=828&q=50",
        "rating": 4.8
      },
      {
        "id": 7,
        "title": "Audio Arrogance AuralElite",
        "description": "Immerse in audio with the Audio Arrogance AuralElite Bluetooth headphones. Enjoy Active Noise Cancellation (ANC) for immersive experience. Indulge in flawless sound.",
        "price": 249.99,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&w=828&q=50",
        "rating": 4.7
      },
      {
        "id": 8,
        "title": "Pinnacle Posh Pack",
        "description": "Elevate your travel experience with the luxurious Pinnacle Posh Pack. Crafted from genuine leather, this stylish backpack is tailor-made for modern adventurers. It's handmade, durable, and exudes a touch of sophistication. Upgrade your travel game today!",
        "price": 499.99,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&w=828&q=50",
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
        "title": "Vinyl Virtuoso Opulenza",
        "description": "Immerse in authentic sound and timeless charm with the Vinyl Virtuoso Opulenza. Elevate your listening experience with this vintage-inspired Analog Turntable. Rediscover music's essence now.",
        "price": 699.95,
        "currency": "USD",
        "image": "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&w=828&q=50",
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

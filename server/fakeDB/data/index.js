
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const image1Id = mongoose.Types.ObjectId();
const image2Id = mongoose.Types.ObjectId();
const image3Id = mongoose.Types.ObjectId();

exports.images = [
  {
    _id: image1Id,
    cloudinaryId: 'image1_k7kb7l',
    url: 'https://res.cloudinary.com/dsfxqmfcm/image/upload/v1604892131/football_mwijqx.jpg'
  },
  {
    _id: image2Id,
    cloudinaryId: 'image2_dlqi4o',
    url: 'https://res.cloudinary.com/dsfxqmfcm/image/upload/v1604892131/football_mwijqx.jpg'
  },
  {
    _id: image3Id,
    cloudinaryId: 'image3_agfjva',
    url: 'https://res.cloudinary.com/dsfxqmfcm/image/upload/v1604892131/football_mwijqx.jpg'
  }
]

exports.users = [{
  _id: user1Id,
  username: "Test User",
  email: "test@gmail.com",
  password: "testtest"
}, {
  _id: user2Id,
  username: "Test User2",
  email: "test2@gmail.com",
  password: "testtest2"
}]

exports.rentals = [{
  title: "Game Place",
  city: "Nur-Sultan",
  street: "Сығанақ,24",
  category: "basketball",
  image: image1Id,
  numOfRooms: 4,
  shared: true,
  description: "Place for play basketball.",
  dailyPrice: 43,
  owner: user1Id
},
{
  title: "Game Place",
  city: "Nur-Sultan",
  street: "Сығанақ,24",
  category: "Football",
  image: image2Id,
  numOfRooms: 1,
  shared: false,
  description: "Place for play football.",
  dailyPrice: 11,
  owner: user1Id
},
{
  title: "Test Game",
  city: "Nur-Sultan",
  street: "Сығанақ,24",
  category: "Another game",
  image: image3Id,
  numOfRooms: 5,
  shared: true,
  description: "Place for play.",
  dailyPrice: 23,
  owner: user2Id
}]
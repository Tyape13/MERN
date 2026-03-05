const sampleListings = [
  {
    uid: "1a", // even though i had new variables here my SCHEMA didn't have anything called uid. HMM that makes alot more sense so i might be adding uid to my schema.
    //only fields defined in my schema gets validated/stored properly. i get it Now.
    
    title: "Cozy Studio Apartment",
    description: "A small but comfortable studio perfect for students or solo travelers.",
    image: "https://images.pexels.com/photos/12258110/pexels-photo-12258110.jpeg",
    price: 35345345,
    location: "Kathmandu",
    country: "Nepal",
  },
  {
    uid: "2a",
    title: "Luxury Villa with Mountain View",
    description: "Spacious villa with a breathtaking view of the Himalayas.",
    image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 2203455,
    location: "Pokhara",
    country: "Nepal",
  },
  {
    uid: "3a",
    title: "Budget Friendly Room",
    description: "Affordable room with basic facilities in a prime location.",
    image: "https://images.unsplash.com/photo-1525789351284-e1e7de240152?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BsYXNofGVufDB8fDB8fHww",
    price: 1523454,
    location: "Lalitpur",
    country: "Nepal",
  },
  {
    uid: "4a",
    title: "Modern City Apartment",
    description: "Fully furnished apartment in the heart of the city.",
    image: "https://peterorsel.com/wp-content/uploads/2023/01/unsplash-image-sNHtz720O-s-1536x764.jpg",
    price: 8035623,
    location: "Bhaktapur",
    country: "Nepal",
  },
  {
    uid: "5a",
    title: "Traditional Nepali Homestay",
    description: "Experience authentic Nepali culture and homemade food.",
    image: "https://peterorsel.com/wp-content/uploads/2023/01/samuel-ferrara-1527pjeb6jg-unsplash-1536x1024.jpg",
    price: 259000,
    location: "Bandipur",
    country: "Nepal",
  },
  {
    uid: "6a",
    title: "Beachside Bungalow",
    description: "Relaxing bungalow just steps away from the beach.",
    image: "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    price: 150000,
    location: "Goa",
    country: "India",
  },
  {
    uid: "7a",
    title: "Buddha Nara Hotel",
    description: "Relaxing hotel just steps away from the beach.",
    image: "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    price: 100500,
    location: "HOTEL",
    country: "Pindia",
  }
];

module.exports = {data: sampleListings};

//import craftsImage from "@/assets/craft-categories.jpg";
import jewelryImage from "@/assets/jewelry-products.jpg";
import workshopImage from "@/assets/workshop-stories.jpg";
import weavingImage from "@/assets/dreamcathcer.jpeg"
import jewelleryImage from "@/assets/jwellry.jpeg"
import potteryImage from "@/assets/pottery.jpeg"
import crochetImage from "@/assets/crocet.jpeg"
import event1 from "@/assets/eventpottery.jpeg"
import event2 from "@/assets/outside-seating.jpeg"
import event3 from "@/assets/marketablee.jpeg"

export type Crop =
  | "jewel-0"
  | "jewel-1"
  | "jewel-2"
  | "jewel-3"
  | "work-0"
  | "work-1"
  | "work-2";

export const imageSources = {  jewel: jewelryImage, work: workshopImage };

export const crafts = [
  {
    name: "Weaving",
    note: "Tradition woven into something new.",
    image: weavingImage,
  },
  {
    name: "Jewellery",
    note: "Handcrafted pieces made to be worn.",
    image: jewelleryImage,
  },
  {
    name: "Pottery",
    note: "Earth, shaped and fired into form.",
    image: potteryImage,
  },
  {
    name: "Crochet",
    note: "Thread transformed into texture and form.",
    image: crochetImage,
  },
];

export const products = [
  { id: "earth-sky", name: "Earth & Sky", type: "Bead Dangles", price: 330, rating: 4.5, reviews: 43, crop: "jewel-0" as Crop },
  { id: "alpine-sky", name: "Alpine Sky Chandelier", type: "Turquoise Dangles", price: 390, rating: 5, reviews: 28, crop: "jewel-1" as Crop },
  { id: "sunset-coral", name: "Sunset Coral", type: "Heritage Chandelier", price: 460, rating: 4.5, reviews: 17, crop: "jewel-2" as Crop },
  { id: "indigo-snow", name: "Indigo Snow", type: "Lapis & Pearl", price: 420, rating: 4.5, reviews: 35, crop: "jewel-3" as Crop },
];

export const events = [
  {
    id: "earth-hands",
    title: "The Earth in Our Hands",
    description:
      "Discover the beauty of natural materials through slow, hands-on making with local artisans.",
    image: event1,
    price: 1200,
  },
  {
    id: "mountain-stories",
    title: "Stories from the Mountains",
    description:
      "Meet local makers and discover the stories, traditions, and creativity woven into mountain life.",
    image: event2,
    price: 900,
  },
  {
    id: "makers-table",
    title: "The Maker’s Table",
    description:
      "Spend a day making, learning, and creating alongside artisans in an intimate mountain setting.",
    image: event3,
    price: 1500,
  },
];

export type Product = (typeof products)[number];

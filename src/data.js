const P = import.meta.env.BASE_URL + "Pictures/";

const grape = P + "grape (1).jpg";
const kebbeh = P + "kebbeh.jpg";
const roll = P + "roll.jpg";
const tabole = P + "tabole.jpg";
const battata = P + "battata (1).jpg";
const ganou = P + "ganou.jpg";
const hummus = P + "hummus.jpg";
const mashewe = P + "mashewe.jpg";
const shawrmaBeef = P + "shawrma beaf.jpg";
const shawrma = P + "shawrma.jpg";
const chicken = P + "chicken.jpg";
const meat = P + "steak1.jpg";
const falefel = P + "falefel.jpg";
const burger = P + "burger.jpg";
const fish = P + "fish.jpg";
const ice = P + "ice.jpg";
const knefeh = P + "knefeh.jpg";
const baklava = P + "baklava.jpg";
const tea = P + "tea.jpg";
const coffee = P + "coffee.jpg";
const pepsi = P + "pepsi.jpg";
const miranda = P + "mirinda.jpg";
const sevenup = P + "7 up (1).jpg";
const naye = P + "nay (1).jpg";
const atayef = P + "atayef (1).jpg";
const wings = P + "wings.jpg";
const crispy = P + "crispy.jpg";
const shrimps = P + "shrimps.jpg";
const ayran = P + "Ayran.jpg";
export const MENU_DATA = [
  { id: 1, category: "Starters", name: "Warak Enab", price: 7,
    desc: "The dish typically consists of tender grape leaves wrapped around a filling of rice & herbs.",
    img: grape,
    tags: ["Best Seller","popular"] },
  { id: 2, category: "Starters", name: "Kibbeh", price: 8,
    desc:"Kibbeh is traditional Middle Eastern dish shaped into football-like balls and often stuffed with a seasoned meat filling.",
    img: kebbeh,
    tags: ["popular"] },
  { id: 3, category: "Starters", name: "Spring Rolls", price: 7,
    desc:"Popular appetizer made by wrapping a wheat-based dough around a filling of vegetables.Often enjoyed with dipping sauces.",
    img: roll,
    tags: ["New"] },
  { id: 4, category: "Starters", name: "Tabbouleh", price: 5,
    desc: "Salad made with finely chopped parsley, mint, tomatoes, and onions, mixed with soaked bulgur, and dressed with olive oil, lemon juice, and a touch of salt.",
    img: tabole,
    tags: ["Best Seller","popular"] },
  { id: 5, category: "Starters", name: "Batata Harra", price: 5,
    desc: "It typically consists of fried potatoes seasoned with chili, garlic, and coriander.",
    img: battata,
    tags: ["spicy"] },
  { id: 6, category: "Starters", name: "Baba Ganoush", price: 6,
    desc: "Eggplant dip made from roasted eggplant, tahini, garlic, lemon juice, and various seasonings, known for its smoky flavor and creamy texture.",
    img: ganou,
    tags: ["popular"] },
  { id: 7, category: "Starters", name: "Hummus", price: 5,
    desc: "Creamy Middle Eastern dip made from blended chickpeas, tahini , lemon juice, garlic, and olive oil.",
    img: hummus,
    tags: ["popular"] },



  { id: 8, category: "Mains", name: "Mashewe", price: 20 ,
    desc: "Lebanese cuisine, typically enjoyed on weekends and family gatherings, often featuring grilled chicken and meat.",
    img: mashewe,
    tags: ["popular"] },
    { id: 9, category: "Mains", name: "Frakeh", price: 15 ,
    desc: "Traditional Lebanese dish made from raw meat shaped by hand. ",
    img: naye,
    tags: ["popular"] },
    { id: 10, category: "Mains", name: "Chicken Shawrma", price: 10,
    desc: "The chicken is often stacked on a vertical rotisserie, where thin slices are shaved off as it cooks, creating a flavorful and tender dish.",
    img: shawrma,
    tags: ["popular"] },
  { id: 11, category: "Mains", name: "Beaf Shawrma", price: 15,
    desc: "Made from thinly sliced marinated beef that is often cooked on a vertical rotisserie.",
    img: shawrmaBeef,
    tags: ["popular"] },
     { id: 17, category: "Mains", name: "Shrimps", price: 15,
    desc: "A fiery and flavorful seafood delight, this dish features tender, flaky fish infused with bold spices and aromatic herbs. Each bite delivers a perfect balance of heat, and freshness.",
    img: shrimps,
    tags: ["New" ,"spicy"] },
  { id: 18, category: "Mains", name: "Spicy Fish", price: 15,
    desc: "A fiery and flavorful seafood delight, this dish features tender, flaky fish infused with bold spices and aromatic herbs. Each bite delivers a perfect balance of heat, and freshness.",
    img: fish,
    tags: ["spicy"] },
    { id: 13, category: "Mains", name: "Steak", price: 15,
    desc: "Cut of meat typically sliced across muscle fibers, often grilled or fried.",
    img: meat,
    tags: ["New"] },
        { id: 14, category: "Mains", name: "Wings", price: 12,
    desc: "Fried chicken wings typically coated in a pepper hot sauce mixed with melted butter. Served withand a dip of ranch dressing. ",
    img: wings,
    tags: ["spicy"] },
    { id: 12, category: "Mains", name: "Falefel", price: 10,
    desc: "Made from ground chickpeas blended with fresh herbs and spices, then shaped and deep-fried until crispy.Paired with tahini sauce and fresh vegetables.",
    img: falefel,
    tags: ["popular"] },

 
{ id: 15, category: "Mains", name: "Crispy", price: 15,
    desc: "Fryed chicken, involves marinating the chicken in seasoned buttermilk, coating it with a flour-cornstarch mixture, and deep-frying it to achieve the desired crispiness. Served with cheder cheese.",
    img: crispy,
    tags: ["popular"] },

  { id: 19, category: "Mains", name: "Rice & Chicken", price: 12,
    desc: "The dish is typically made by cooking rice in chicken broth and pairing it with slices of tender chicken meat.",
    img: chicken,
    tags: ["popular"] },
  
   
     
     { id: 16, category: "Mains", name: "Burger", price:9,
    desc: "Consists of a beef patty, placed inside a soft bun. The patty can be seasoned with cheese, lettuce, tomato, and pickles, and is often topped with ketchup and mayonnaise.",
    img: burger,
    tags: ["popular"] },

    
    
  { id: 20, category: "Desserts", name: "Ice Cream", price: 5,
    desc: "Frozen dessert made from cream, sugar, and flavorings.",
    img: ice,
    tags: ["Sweet"] },
  { id: 21, category: "Desserts", name: "Knefeh", price: 7,
    desc: "Traditional Middle Eastern dessert made with spun pastry dough layered with cheese and soaked in a sweet syrup.",
    img: knefeh,
    tags: ["Sweet"] },
    { id: 22, category: "Desserts", name: "Qatayef", price: 5,
    desc: "Type of sweet dumpling filled with cream and nuts.",
    img: atayef,
    tags: ["Sweet"] },
  { id: 23, category: "Desserts", name: "Baklava", price: 8,
    desc: "Rich, sweet pastry made of thin layers of filo dough, filled with finely chopped nuts, and sweetened with syrup.",
    img: baklava,
    tags: ["Sweet"] },



{ id: 24, category: "Drinks", name: "Pepsi", price: 1.5,
    desc: "Soft Drink",
    img: pepsi,
    tags: ["Cold"] },
    { id: 25, category: "Drinks", name: "Miranda", price: 1.5,
    desc: "Soft Drink",
    img: miranda,
    tags: ["Cold"] },
    { id: 26, category: "Drinks", name: "7 up", price: 1.5,
    desc: "Soft Drink",
    img: sevenup,
    tags: ["Cold"] },
    { id: 27, category: "Drinks", name: "Laban", price: 2,
    desc: "Fresh Drink",
    img: ayran,
    tags: ["Cold"] },
  { id: 28, category: "Drinks", name: "Tea", price: 2,
    desc: "Hot Beverage ",
    img: tea,
    tags: ["Hot"] },
  { id: 29, category: "Drinks", name: "Coffee", price: 2.5,
    desc: " Hot Beverage ",
    img: coffee,
    tags: ["Hot"] },
   
  
];

export function fetchMenu() {
  // Simulated async fetch — swap this for a real API call, e.g.:
  // return fetch('/api/menu').then(r => r.json());
  return new Promise((resolve) => setTimeout(() => resolve(MENU_DATA), 500));
}

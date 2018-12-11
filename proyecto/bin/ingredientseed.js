require("dotenv").config();

const mongoose = require("mongoose");
const Ingredients = require("../models/Ingredients");

mongoose
  .connect(
    process.env.DB_URL,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
const ingredients = [
  {
    idIngredient: "4",
    strIngredient: "Allspice",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "5",
    strIngredient: "Almond Extract",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "6",
    strIngredient: "Almond Milk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "7",
    strIngredient: "Ancho Chillies",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "8",
    strIngredient: "Anchovy Fillet",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "9",
    strIngredient: "Apple Cider Vinegar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "10",
    strIngredient: "Asparagus",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "11",
    strIngredient: "Aubergine",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "12",
    strIngredient: "Avocado",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "13",
    strIngredient: "Baby Plum Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "14",
    strIngredient: "Bacon",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "15",
    strIngredient: "Baking Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "16",
    strIngredient: "Balsamic Vinegar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "17",
    strIngredient: "Basil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "18",
    strIngredient: "Basil Leaves",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "19",
    strIngredient: "Basmati Rice",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "20",
    strIngredient: "Bay Leaf",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "21",
    strIngredient: "Bay Leaves",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "22",
    strIngredient: "Beef",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "23",
    strIngredient: "Beef Brisket",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "24",
    strIngredient: "Beef Fillet",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "25",
    strIngredient: "Beef Gravy",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "26",
    strIngredient: "Beef Stock",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "27",
    strIngredient: "Bicarbonate Of Soda",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "28",
    strIngredient: "Biryani Masala",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "29",
    strIngredient: "Black Pepper",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "30",
    strIngredient: "Black Treacle",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "31",
    strIngredient: "Borlotti Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "32",
    strIngredient: "Bowtie Pasta",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "33",
    strIngredient: "Bramley Apples",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "34",
    strIngredient: "Brandy",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "35",
    strIngredient: "Bread",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "36",
    strIngredient: "Breadcrumbs",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "37",
    strIngredient: "Broccoli",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "38",
    strIngredient: "Brown Lentils",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "39",
    strIngredient: "Brown Rice",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "40",
    strIngredient: "Brown Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "41",
    strIngredient: "Butter",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "43",
    strIngredient: "Cacao",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "44",
    strIngredient: "Cajun",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "45",
    strIngredient: "Canned Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "46",
    strIngredient: "Cannellini Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "47",
    strIngredient: "Cardamom",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "49",
    strIngredient: "Carrots",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "50",
    strIngredient: "Cashew Nuts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "51",
    strIngredient: "Cashews",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "52",
    strIngredient: "Caster Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "53",
    strIngredient: "Cayenne Pepper",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "54",
    strIngredient: "Celeriac",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "55",
    strIngredient: "Celery",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "56",
    strIngredient: "Celery Salt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "57",
    strIngredient: "Challots",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "58",
    strIngredient: "Charlotte Potatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "59",
    strIngredient: "Cheddar Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "60",
    strIngredient: "Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "61",
    strIngredient: "Cheese Curds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "62",
    strIngredient: "Cherry Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "63",
    strIngredient: "Chestnut Mushroom",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "64",
    strIngredient: "Chicken",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "65",
    strIngredient: "Chicken Breast",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "66",
    strIngredient: "Chicken Breasts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "67",
    strIngredient: "Chicken Legs",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "68",
    strIngredient: "Chicken Stock",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "70",
    strIngredient: "Chicken Thighs",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "71",
    strIngredient: "Chickpeas",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "72",
    strIngredient: "Chili Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "73",
    strIngredient: "Chilled Butter",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "74",
    strIngredient: "Chilli",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "75",
    strIngredient: "Chilli Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "76",
    strIngredient: "Chinese Broccoli",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "77",
    strIngredient: "Chocolate Chips",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "78",
    strIngredient: "Chopped Onion",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "79",
    strIngredient: "Chopped Parsley",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "80",
    strIngredient: "Chopped Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "81",
    strIngredient: "Chorizo",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "82",
    strIngredient: "Christmas Pudding",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "83",
    strIngredient: "Cilantro",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "84",
    strIngredient: "Cinnamon",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "85",
    strIngredient: "Cinnamon Stick",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "87",
    strIngredient: "Cloves",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "88",
    strIngredient: "Coco Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "89",
    strIngredient: "Cocoa",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "90",
    strIngredient: "Coconut Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "91",
    strIngredient: "Coconut Milk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "92",
    strIngredient: "Colby Jack Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "93",
    strIngredient: "Cold Water",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "94",
    strIngredient: "Condensed Milk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "95",
    strIngredient: "Coriander",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "96",
    strIngredient: "Coriander Leaves",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "97",
    strIngredient: "Coriander Seeds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "98",
    strIngredient: "Corn Tortillas",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "99",
    strIngredient: "Cornstarch",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "100",
    strIngredient: "Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "101",
    strIngredient: "Creme Fraiche",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "102",
    strIngredient: "Cubed Feta Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "103",
    strIngredient: "Cucumber",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "104",
    strIngredient: "Cumin",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "105",
    strIngredient: "Cumin Seeds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "106",
    strIngredient: "Curry Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "107",
    strIngredient: "Dark Brown Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "108",
    strIngredient: "Dark Soft Brown Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "109",
    strIngredient: "Dark Soy Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "110",
    strIngredient: "Demerara Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "111",
    strIngredient: "Diced Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "112",
    strIngredient: "Digestive Biscuits",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "113",
    strIngredient: "Dill",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "114",
    strIngredient: "Doner Meat",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "115",
    strIngredient: "Double Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "116",
    strIngredient: "Dried Oregano",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "117",
    strIngredient: "Dry White Wine",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "119",
    strIngredient: "Egg Plants",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "120",
    strIngredient: "Egg Rolls",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "121",
    strIngredient: "Egg White",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "122",
    strIngredient: "Egg Yolks",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "123",
    strIngredient: "Eggs",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "124",
    strIngredient: "Enchilada Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "125",
    strIngredient: "English Mustard",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "126",
    strIngredient: "Extra Virgin Olive Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "127",
    strIngredient: "Fajita Seasoning",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "128",
    strIngredient: "Farfalle",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "129",
    strIngredient: "Fennel",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "130",
    strIngredient: "Fennel Bulb",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "131",
    strIngredient: "Fennel Seeds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "132",
    strIngredient: "Fenugreek",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "133",
    strIngredient: "Feta",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "134",
    strIngredient: "Fish Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "135",
    strIngredient: "Flaked Almonds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "136",
    strIngredient: "Flax Eggs",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "137",
    strIngredient: "Flour",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "138",
    strIngredient: "Flour Tortilla",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "139",
    strIngredient: "Floury Potatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "140",
    strIngredient: "Free-range Egg, Beaten",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "141",
    strIngredient: "Free-range Eggs, Beaten",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "142",
    strIngredient: "French Lentils",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "143",
    strIngredient: "Fresh Basil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "144",
    strIngredient: "Fresh Thyme",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "145",
    strIngredient: "Freshly Chopped Parsley",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "146",
    strIngredient: "Fries",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "147",
    strIngredient: "Full Fat Yogurt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "148",
    strIngredient: "Garam Masala",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "149",
    strIngredient: "Garlic",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "150",
    strIngredient: "Garlic Clove",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "151",
    strIngredient: "Garlic Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "152",
    strIngredient: "Garlic Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "153",
    strIngredient: "Ghee",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "154",
    strIngredient: "Ginger",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "155",
    strIngredient: "Ginger Cordial",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "156",
    strIngredient: "Ginger Garlic Paste",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "157",
    strIngredient: "Ginger Paste",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "158",
    strIngredient: "Golden Syrup",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "159",
    strIngredient: "Gouda Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "160",
    strIngredient: "Granulated Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "161",
    strIngredient: "Grape Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "162",
    strIngredient: "Greek Yogurt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "163",
    strIngredient: "Green Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "165",
    strIngredient: "Green Chilli",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "166",
    strIngredient: "Green Olives",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "167",
    strIngredient: "Green Red Lentils",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "168",
    strIngredient: "Green Salsa",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "169",
    strIngredient: "Ground Almonds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "170",
    strIngredient: "Ground Cumin",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "171",
    strIngredient: "Ground Ginger",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "172",
    strIngredient: "Gruyère",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "173",
    strIngredient: "Hard Taco Shells",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "175",
    strIngredient: "Harissa Spice",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "176",
    strIngredient: "Heavy Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "177",
    strIngredient: "Honey",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "178",
    strIngredient: "Horseradish",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "179",
    strIngredient: "Hot Beef Stock",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "180",
    strIngredient: "Hotsauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "181",
    strIngredient: "Ice Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "182",
    strIngredient: "Italian Fennel Sausages",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "183",
    strIngredient: "Italian Seasoning",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "184",
    strIngredient: "Jalapeno",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "185",
    strIngredient: "Jasmine Rice",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "186",
    strIngredient: "Jerusalem Artichokes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "187",
    strIngredient: "Kale",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "188",
    strIngredient: "Khus Khus",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "189",
    strIngredient: "King Prawns",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "190",
    strIngredient: "Kosher Salt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "191",
    strIngredient: "Lamb",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "192",
    strIngredient: "Lamb Loin Chops",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "193",
    strIngredient: "Lamb Mince",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "194",
    strIngredient: "Lasagne Sheets",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "195",
    strIngredient: "Lean Minced Beef",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "196",
    strIngredient: "Leek",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "197",
    strIngredient: "Lemon",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "198",
    strIngredient: "Lemon Juice",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "199",
    strIngredient: "Lemon Zest",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "200",
    strIngredient: "Lemons",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "201",
    strIngredient: "Lettuce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "202",
    strIngredient: "Lime",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "203",
    strIngredient: "Little Gem Lettuce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "204",
    strIngredient: "Macaroni",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "205",
    strIngredient: "Mackerel",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "206",
    strIngredient: "Madras Paste",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "207",
    strIngredient: "Marjoram",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "208",
    strIngredient: "Massaman Curry Paste",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "209",
    strIngredient: "Medjool Dates",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "210",
    strIngredient: "Meringue Nests",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "211",
    strIngredient: "Milk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "212",
    strIngredient: "Minced Garlic",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "213",
    strIngredient: "Miniature Marshmallows",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "214",
    strIngredient: "Mint",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "215",
    strIngredient: "Monterey Jack Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "216",
    strIngredient: "Mozzarella Balls",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "217",
    strIngredient: "Muscovado Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "218",
    strIngredient: "Mushrooms",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "219",
    strIngredient: "Mustard",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "220",
    strIngredient: "Mustard Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "221",
    strIngredient: "Mustard Seeds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "222",
    strIngredient: "Nutmeg",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "223",
    strIngredient: "Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "224",
    strIngredient: "Olive Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "226",
    strIngredient: "Onion Salt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "227",
    strIngredient: "Onions",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "228",
    strIngredient: "Orange",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "229",
    strIngredient: "Orange Zest",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "230",
    strIngredient: "Oregano",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "231",
    strIngredient: "Oyster Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "232",
    strIngredient: "Paprika",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "233",
    strIngredient: "Parma Ham",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "234",
    strIngredient: "Parmesan",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "235",
    strIngredient: "Parmesan Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "236",
    strIngredient: "Parmigiano-reggiano",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "237",
    strIngredient: "Parsley",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "238",
    strIngredient: "Peanut Butter",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "239",
    strIngredient: "Peanut Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "240",
    strIngredient: "Peanuts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "241",
    strIngredient: "Peas",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "242",
    strIngredient: "Pecorino",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "243",
    strIngredient: "Penne Rigate",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "244",
    strIngredient: "Pepper",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "245",
    strIngredient: "Pine Nuts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "246",
    strIngredient: "Pitted Black Olives",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "247",
    strIngredient: "Plain Chocolate",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "248",
    strIngredient: "Plain Flour",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "249",
    strIngredient: "Plum Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "250",
    strIngredient: "Pork",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "252",
    strIngredient: "Potato Starch",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "253",
    strIngredient: "Potatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "254",
    strIngredient: "Prawns",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "255",
    strIngredient: "Puff Pastry",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "256",
    strIngredient: "Raspberry Jam",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "257",
    strIngredient: "Raw King Prawns",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "258",
    strIngredient: "Red Chile Flakes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "259",
    strIngredient: "Red Chilli",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "261",
    strIngredient: "Red Chilli Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "263",
    strIngredient: "Red Onions",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "264",
    strIngredient: "Red Pepper",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "265",
    strIngredient: "Red Pepper Flakes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "266",
    strIngredient: "Red Wine",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "267",
    strIngredient: "Refried Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "268",
    strIngredient: "Rice",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "269",
    strIngredient: "Rice Noodles",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "270",
    strIngredient: "Rice Stick Noodles",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "271",
    strIngredient: "Rice Vermicelli",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "272",
    strIngredient: "Rigatoni",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "273",
    strIngredient: "Rocket",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "274",
    strIngredient: "Rolled Oats",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "275",
    strIngredient: "Rosemary",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "276",
    strIngredient: "Saffron",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "277",
    strIngredient: "Sage",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "278",
    strIngredient: "Sake",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "279",
    strIngredient: "Salmon",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "280",
    strIngredient: "Salsa",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "281",
    strIngredient: "Salt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "282",
    strIngredient: "Salted Butter",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "283",
    strIngredient: "Sausages",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "284",
    strIngredient: "Sea Salt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "286",
    strIngredient: "Self-raising Flour",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "287",
    strIngredient: "Semi-skimmed Milk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "288",
    strIngredient: "Sesame Seed",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "289",
    strIngredient: "Shallots",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "290",
    strIngredient: "Shredded Mexican Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "291",
    strIngredient: "Shredded Monterey Jack Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "292",
    strIngredient: "Small Potatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "293",
    strIngredient: "Smoked Paprika",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "294",
    strIngredient: "Smoky Paprika",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "295",
    strIngredient: "Sour Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "296",
    strIngredient: "Soy Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "297",
    strIngredient: "Soya Milk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "298",
    strIngredient: "Spaghetti",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "299",
    strIngredient: "Spinach",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "301",
    strIngredient: "Spring Onions",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "302",
    strIngredient: "Squash",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "303",
    strIngredient: "Stir-fry Vegetables",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "304",
    strIngredient: "Strawberries",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "305",
    strIngredient: "Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "306",
    strIngredient: "Sultanas",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "307",
    strIngredient: "Sunflower Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "308",
    strIngredient: "Tamarind Ball",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "309",
    strIngredient: "Tamarind Paste",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "310",
    strIngredient: "Thai Fish Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "311",
    strIngredient: "Thai Green Curry Paste",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "312",
    strIngredient: "Thai Red Curry Paste",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "313",
    strIngredient: "Thyme",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "315",
    strIngredient: "Tomato Ketchup",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "316",
    strIngredient: "Tomato Puree",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "317",
    strIngredient: "Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "318",
    strIngredient: "Toor Dal",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "319",
    strIngredient: "Tuna",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "320",
    strIngredient: "Turmeric",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "321",
    strIngredient: "Turmeric Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "322",
    strIngredient: "Turnips",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "323",
    strIngredient: "Vanilla",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "324",
    strIngredient: "Vanilla Extract",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "325",
    strIngredient: "Veal",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "326",
    strIngredient: "Vegan Butter",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "327",
    strIngredient: "Vegetable Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "328",
    strIngredient: "Vegetable Stock",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "329",
    strIngredient: "Vegetable Stock Cube",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "330",
    strIngredient: "Vinaigrette Dressing",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "331",
    strIngredient: "Vine Leaves",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "332",
    strIngredient: "Vinegar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "333",
    strIngredient: "Water",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "334",
    strIngredient: "White Chocolate Chips",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "335",
    strIngredient: "White Fish",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "336",
    strIngredient: "White Fish Fillets",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "337",
    strIngredient: "White Vinegar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "338",
    strIngredient: "White Wine",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "339",
    strIngredient: "Whole Milk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "340",
    strIngredient: "Whole Wheat",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "341",
    strIngredient: "Wholegrain Bread",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "342",
    strIngredient: "Worcestershire Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "343",
    strIngredient: "Yogurt",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "344",
    strIngredient: "Zucchini",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "345",
    strIngredient: "Pretzels",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "346",
    strIngredient: "Cream Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "347",
    strIngredient: "Icing Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "348",
    strIngredient: "Toffee Popcorn",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "349",
    strIngredient: "Caramel",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "350",
    strIngredient: "Caramel Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "351",
    strIngredient: "Tagliatelle",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "352",
    strIngredient: "Fettuccine",
    strDescription: "",
    strType: null
  },
  {
    idIngredient: "353",
    strIngredient: "Clotted Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "354",
    strIngredient: "Corn Flour",
    strDescription: "",
    strType: null
  },
  {
    idIngredient: "355",
    strIngredient: "Mussels",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "356",
    strIngredient: "Fideo",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "357",
    strIngredient: "Monkfish",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "358",
    strIngredient: "Vermicelli Pasta",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "359",
    strIngredient: "Baby Squid",
    strDescription: "",
    strType: null
  },
  {
    idIngredient: "360",
    strIngredient: "Squid",
    strDescription: "",
    strType: null
  },
  {
    idIngredient: "361",
    strIngredient: "Fish Stock",
    strDescription: "",
    strType: null
  },
  {
    idIngredient: "362",
    strIngredient: "Pilchards",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "363",
    strIngredient: "Black Olives",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "364",
    strIngredient: "Onion",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "365",
    strIngredient: "Tomato",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "366",
    strIngredient: "Duck",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "367",
    strIngredient: "Duck Legs",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "368",
    strIngredient: "Chicken Stock Cube",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "369",
    strIngredient: "Pappardelle Pasta",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "370",
    strIngredient: "Paccheri Pasta",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "371",
    strIngredient: "Linguine Pasta",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "373",
    strIngredient: "Sugar Snap Peas",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "374",
    strIngredient: "Crusty Bread",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "375",
    strIngredient: "Fromage Frais",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "376",
    strIngredient: "Clams",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "377",
    strIngredient: "Passata",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "378",
    strIngredient: "Rapeseed Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "379",
    strIngredient: "Stilton Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "380",
    strIngredient: "Lamb Leg",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "381",
    strIngredient: "Lamb Shoulder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "382",
    strIngredient: "Apricot",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "383",
    strIngredient: "Butternut Squash",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "384",
    strIngredient: "Couscous",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "387",
    strIngredient: "Minced Beef",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "388",
    strIngredient: "Turkey Mince",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "389",
    strIngredient: "Barbeque Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "390",
    strIngredient: "Sweetcorn",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "391",
    strIngredient: "Goose Fat",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "392",
    strIngredient: "Duck Fat",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "393",
    strIngredient: "Fennel",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "394",
    strIngredient: "Red Wine Vinegar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "395",
    strIngredient: "Haricot Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "396",
    strIngredient: "Rosemary",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "397",
    strIngredient: "Butter Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "398",
    strIngredient: "Pinto Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "399",
    strIngredient: "Tomato Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "400",
    strIngredient: "Tomato Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "401",
    strIngredient: "Mascarpone",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "402",
    strIngredient: "Mozzarella",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "403",
    strIngredient: "Ricotta",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "405",
    strIngredient: "Dried Apricots",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "406",
    strIngredient: "Capers",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "407",
    strIngredient: "Banana",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "408",
    strIngredient: "Raspberries",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "409",
    strIngredient: "Blueberries",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "410",
    strIngredient: "Walnuts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "411",
    strIngredient: "Pecan Nuts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "412",
    strIngredient: "Maple Syrup",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "413",
    strIngredient: "Light Brown Soft Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "414",
    strIngredient: "Dark Brown Soft Sugar",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "415",
    strIngredient: "Dark Chocolate Chips",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "416",
    strIngredient: "Milk Chocolate",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "417",
    strIngredient: "Dark Chocolate",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "418",
    strIngredient: "Pumpkin",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "419",
    strIngredient: "Shortcrust Pastry",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "420",
    strIngredient: "Peanut Cookies",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "421",
    strIngredient: "Gelatine Leafs",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "422",
    strIngredient: "Peanut Brittle",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "423",
    strIngredient: "Peaches",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "424",
    strIngredient: "Yellow Pepper",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "425",
    strIngredient: "Green Pepper",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "426",
    strIngredient: "Courgettes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "427",
    strIngredient: "Tinned Tomatos",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "428",
    strIngredient: "Chestnuts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "429",
    strIngredient: "Wild Mushrooms",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "430",
    strIngredient: "Truffle Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "431",
    strIngredient: "Paneer",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "432",
    strIngredient: "Naan Bread",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "433",
    strIngredient: "Lentils",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "434",
    strIngredient: "Roasted Vegetables",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "435",
    strIngredient: "Kidney Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "436",
    strIngredient: "Mixed Grain",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "437",
    strIngredient: "Tahini",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "438",
    strIngredient: "Tortillas",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "439",
    strIngredient: "Udon Noodles",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "440",
    strIngredient: "Cabbage",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "441",
    strIngredient: "Shiitake Mushrooms",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "442",
    strIngredient: "Mirin",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "443",
    strIngredient: "Sesame Seed Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "444",
    strIngredient: "Baguette",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "445",
    strIngredient: "Vine Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "446",
    strIngredient: "Suet",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "447",
    strIngredient: "Swede",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "448",
    strIngredient: "Ham",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "449",
    strIngredient: "Oysters",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "450",
    strIngredient: "Stout",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "451",
    strIngredient: "Lard",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "452",
    strIngredient: "Lamb Kidney",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "453",
    strIngredient: "Beef Kidney",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "454",
    strIngredient: "Haddock",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "455",
    strIngredient: "Smoked Haddock",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "456",
    strIngredient: "Brussels Sprouts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "457",
    strIngredient: "Raisins",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "458",
    strIngredient: "Currants",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "459",
    strIngredient: "Custard",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "460",
    strIngredient: "Mixed Peel",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "461",
    strIngredient: "Redcurrants",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "462",
    strIngredient: "Blackberries",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "463",
    strIngredient: "Hazlenuts",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "464",
    strIngredient: "Braeburn Apples",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "465",
    strIngredient: "Red Food Colouring",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "466",
    strIngredient: "Pink Food Colouring",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "467",
    strIngredient: "Blue Food Colouring",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "468",
    strIngredient: "Yellow Food Colouring",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "469",
    strIngredient: "Apricot Jam",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "470",
    strIngredient: "Marzipan",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "471",
    strIngredient: "Almonds",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "472",
    strIngredient: "Black Pudding",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "473",
    strIngredient: "Baked Beans",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "474",
    strIngredient: "White Flour",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "475",
    strIngredient: "Yeast",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "476",
    strIngredient: "Fruit Mix",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "477",
    strIngredient: "Dried Fruit",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "478",
    strIngredient: "Cherry",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "479",
    strIngredient: "Glace Cherry",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "480",
    strIngredient: "Treacle",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "481",
    strIngredient: "Oatmeal",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "482",
    strIngredient: "Oats",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "483",
    strIngredient: "Egg",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "484",
    strIngredient: "Beef Shin",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "485",
    strIngredient: "Bouquet Garni",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "486",
    strIngredient: "Single Cream",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "487",
    strIngredient: "Red Wine Jelly",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "488",
    strIngredient: "Apples",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "489",
    strIngredient: "Goats Cheese",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "490",
    strIngredient: "Prosciutto",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "491",
    strIngredient: "Unsalted Butter",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "492",
    strIngredient: "Brie",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "493",
    strIngredient: "Tarragon Leaves",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "494",
    strIngredient: "Chives",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "495",
    strIngredient: "Pears",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "496",
    strIngredient: "White Chocolate",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "497",
    strIngredient: "Star Anise",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "498",
    strIngredient: "Tiger Prawns",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "499",
    strIngredient: "Custard Powder",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "500",
    strIngredient: "Desiccated Coconut",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "501",
    strIngredient: "Frozen Peas",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "502",
    strIngredient: "Minced Pork",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "503",
    strIngredient: "Creamed Corn",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "504",
    strIngredient: "Sun-Dried Tomatoes",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "505",
    strIngredient: "Dijon Mustard",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "506",
    strIngredient: "Tabasco Sauce",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "507",
    strIngredient: "Canola Oil",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "508",
    strIngredient: "Cod",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "509",
    strIngredient: "Salt Cod",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "510",
    strIngredient: "Ackee",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "511",
    strIngredient: "Jerk",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "512",
    strIngredient: "Ground Beef",
    strDescription: null,
    strType: null
  },
  {
    idIngredient: "513",
    strIngredient: "Baby Aubergine",
    strDescription:
      "Eggplant (Solanum melongena) or aubergine is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America, Australia and New Zealand; in British English, it is aubergine, and in South Asia and South Africa, brinjal. The fruit is widely used in cooking. As a member of the genus Solanum, it is related to the tomato and the potato. It was originally domesticated from the wild nightshade species, the thorn or bitter apple, S. incanum, probably with two independent domestications, one in South Asia and one in East Asia.",
    strType: "Vegetable"
  },
  {
    idIngredient: "514",
    strIngredient: "Paella Rice",
    strDescription:
      "Paella[a] is a Valencian rice dish that has ancient roots but its modern form originated in the mid-19th century in the area around Albufera lagoon on the east coast of Spain, adjacent to the city of Valencia. Many non-Spaniards view paella as Spain's national dish, but most Spaniards consider it to be a regional Valencian dish. Valencians, in turn, regard paella as one of their identifying symbols. Types of paella include Valencian paella, vegetable paella (Spanish: paella de verduras), seafood paella (Spanish: paella de mariscos), and mixed paella (Spanish: paella mixta), among many others. Valencian paella is believed to be the original recipe and consists of white rice, green beans (bajoqueta and tavella), meat (chicken, duck and rabbit), white beans (garrofón), snails, and seasoning such as saffron and rosemary. Another very common but seasonal ingredient is artichokes. Seafood paella replaces meat with seafood and omits beans and green vegetables. Mixed paella is a free-style combination of meat from land animals, seafood, vegetables, and sometimes beans. Most paella chefs use bomba rice due to it being less likely to overcook, but Valencians tend to use a slightly stickier (and thus more susceptible to overcooking) variety known as Senia. All types of paellas use olive oil.",
    strType: null
  },
  {
    idIngredient: "515",
    strIngredient: "Scotch Bonnet",
    strDescription:
      "Scotch bonnet, also known as bonney peppers, or Caribbean red peppers, is a variety of chili pepper named for its resemblance to a tam o' shanter hat. Also called ata rodo by Yoruba speakers of Nigeria, it is found mainly in the Caribbean islands; it is also found in Guyana (where it is called the ball-of-fire pepper), the Maldives Islands (where it is called githeyo mirus), Panama (where it is called aji chombo) and West Africa. Most Scotch bonnets have a heat rating of 100,000–350,000 Scoville units. For comparison, most jalapeño peppers have a heat rating of 2,500 to 8,000 on the Scoville scale. However, completely sweet varieties of Scotch bonnet are grown on some of the Caribbean islands, called cachucha peppers. These peppers are used to flavour many different dishes and cuisines worldwide and are often used in hot sauces and condiments. The Scotch bonnet has a sweeter flavour and stouter shape, distinct from its habanero relative with which it is often confused, and gives jerk dishes (pork/chicken) and other Caribbean dishes their unique flavour. Scotch bonnets are mostly used in West African, Antiguan, Kittitian/Nevisian, Anguilan, Dominican, St. Lucian, St Vincentian, Grenadian, Trinidadian, Jamaican, Barbadian, Guyanese, Surinamese, Haitian and Cayman cuisines and pepper sauces, though they often show up in other Caribbean recipes. It is also used in Costa Rica and Panama for Caribbean-styled recipes such as rice and beans, Rondón, saus, beef patties, and Ceviche. Fresh, ripe Scotch bonnets can change from green to yellow to scarlet red, however many other breeds of this pepper can ripen to orange, yellow, peach, or even a chocolate brown.",
    strType: "Vegetable"
  },
  {
    idIngredient: "516",
    strIngredient: "Oxtail",
    strDescription:
      "Oxtail (occasionally spelled ox tail or ox-tail) is the culinary name for the tail of cattle. Formerly, it referred only to the tail of an ox or steer, a bullock (a castrated male).[citation needed] An oxtail typically weighs 2 to 4 lbs. (1–1.8 kg) and is skinned and cut into short lengths for sale. Oxtail is a bony, gelatin-rich meat, which is usually slow-cooked as a stew[1] or braised. It is a traditional stock base for a soup. Traditional preparations involve slow cooking, so some modern recipes take a shortcut using a pressure cooker. Oxtail is the main ingredient of the Italian dish coda alla vaccinara (a classic of Roman cuisine). It is a popular flavour for powder, instant and premade canned soups in the United Kingdom and Ireland. Oxtails are also one of the popular bases for Russian aspic appetizer dishes (холодец or студень), along with pig trotters or ears or cow , but are the preferred ingredients among Russian Jews because they can be Kosher. Versions of oxtail soup are popular traditional dishes in South America, West Africa, China, Spain [2] and Indonesia. In Chinese cuisine, it's usually made into a soup called 牛尾汤 (niúwěi tāng, ). In Korean cuisine, a soup made with oxtail is called kkori gomtang (see gomguk). It is a thick soup seasoned with salt and eaten with a bowl of rice. It can be used as a stock for making tteokguk (rice cake soup). Stewed oxtail with butter bean or as main dish (with rice) is popular in Jamaica, Trinidad, and other West Indian cultures. Oxtail is also very popular in South Africa where it is often cooked in a traditional skillet called a potjie, which is a three-legged cast iron pot placed over an open fire. Oxtail is also eaten in other southern parts of Africa like Zimbabwe and served with sadza and greens. In the United States, oxtail is a mainstay in African American and West Indian households. In Cuban cuisine, a stew can be made from oxtail called rabo encendido. In the Philippines, it is prepared in a peanut based stew called Kare-kare. In Iran, Oxtail is slow-cooked and served as a substitute for shank in a main dish called Baghla-Poli-Mahicheh which is prepared with rice, shank (or oxtail) and a mixture of herbs including dill, coriander, parsley and garlic. In the United States, oxtail has the meat-cutting classification NAMP 1791.",
    strType: "Meat"
  },
  {
    idIngredient: "517",
    strIngredient: "Broad Beans",
    strDescription:
      "Vicia faba, also known as the broad bean, fava bean, faba bean, field bean, bell bean, or tic bean, is a species of flowering plant in the pea and bean family Fabaceae. It is native to North Africa[dubious – discuss] southwest and south Asia, and extensively cultivated elsewhere.[citation needed] A variety Vicia faba var. equina Pers. – horse bean has been previously recognized.",
    strType: "Vegetable"
  },
  {
    idIngredient: "518",
    strIngredient: "Red Snapper",
    strDescription:
      "The northern red snapper (Lutjanus campechanus) is a species of snapper native to the western Atlantic Ocean including the Gulf of Mexico, where it inhabits environments associated with reefs. This species is commercially important and is also sought-after as a game fish. The northern red snapper's body is very similar in shape to other snappers, such as the mangrove snapper, mutton snapper, lane snapper, and dog snapper. All feature a sloped profile, medium-to-large scales, a spiny dorsal fin, and a laterally compressed body. Northern red snapper have short, sharp, needle-like teeth, but they lack the prominent upper canine teeth found on the mutton, dog, and mangrove snappers. This snapper reaches maturity at a length of about 39 cm (15 in). The common adult length is 60 cm (24 in), but may reach 100 cm (39 in). The maximum published weight is 38 kg (84 lb), and the oldest reported age is 100+ years. Coloration of the northern red snapper is light red, with more intense pigment on the back. It has 10 dorsal spines, 14 soft dorsal rays, three anal spines and eight to 9 anal soft rays. Juvenile fish (shorter than 30–35 cm) can also have a dark spot on their sides, below the anterior soft dorsal rays, which fades with age.",
    strType: "Fish"
  },
  {
    idIngredient: "519",
    strIngredient: "Malt Vinegar",
    strDescription:
      "Vinegar is a liquid consisting of about 5–20% acetic acid (CH3COOH), water, and other trace chemicals, which may include flavorings. The acetic acid is produced by the fermentation of ethanol by acetic acid bacteria. Vinegar is now mainly used as a cooking ingredient, or in pickling. As the most easily manufactured mild acid, it has historically had a great variety of industrial, medical, and domestic uses, some of which (such as its use as a general household cleaner) are still commonly practiced today. Commercial vinegar is produced either by a fast or a slow fermentation process. In general, slow methods are used in traditional vinegars where fermentation proceeds slowly over the course of a few months or up to a year. The longer fermentation period allows for the accumulation of a non-toxic slime composed of acetic acid bacteria. Fast methods add mother of vinegar (bacterial culture) to the source liquid before adding air to oxygenate and promote the fastest fermentation. In fast production processes, vinegar may be produced between 20 hours to three days.",
    strType: "Seasoning"
  },
  {
    idIngredient: "520",
    strIngredient: "Rice Vinegar",
    strDescription:
      "Rice vinegar is a vinegar made from fermented rice in China, Japan, Korea, and Vietnam. Chinese rice vinegars are stronger than Japanese ones, and range in colour from clear to various shades of red, brown and black and are therefore known as rice wine vinegar. Chinese and especially Japanese vinegars are less acidic than the distilled Western vinegars which, for that reason, are not appropriate substitutes for rice vinegars. The majority of the Asian rice vinegar types are also more mild and sweet than vinegars typically used in the Western world, with black vinegars as a notable exception. Chinese rice vinegars are made from huangjiu, a type of rice wine.",
    strType: "Vinegar"
  },
  {
    idIngredient: "521",
    strIngredient: "Water Chestnut",
    strDescription:
      "Eleocharis dulcis, the Chinese water chestnut or water chestnut, is a grass-like sedge native to Asia (China, Japan, India, Philippines, etc.), Australia, tropical Africa, and various islands of the Pacific and Indian Oceans. It is grown in many countries for its edible corms. The water chestnut is not a nut at all, but an aquatic vegetable that grows in marshes, under water, in the mud. It has stem-like, tubular green leaves that grow to about 1.5 m. The water caltrop, which also is referred to by the same name, is unrelated and often confused with the water chestnut. The small, rounded corms have a crisp, white flesh and may be eaten raw, slightly boiled, or grilled, and often are pickled or tinned. They are a popular ingredient in Chinese dishes. In China, they are most often eaten raw, sometimes sweetened. They also may be ground into a flour form used for making water chestnut cake, which is common as part of dim sum cuisine. They are unusual among vegetables for remaining crisp even after being cooked or canned, because their cell walls are cross-linked and strengthened by certain phenolic compounds, such as oligomers of ferulic acid. This property is shared by other vegetables that remain crisp in this manner, including the tiger nut and lotus root. The corms contain the antibiotic agent puchiin, which is stable to high temperature. Apart from the edible corms, the leaves can be used for cattlefeed, mulch or compost. The corms are rich in carbohydrates (about 90% by dry weight), especially starch (about 60% by dry weight), and are also a good source of dietary fiber, riboflavin, vitamin B6, potassium, copper, and manganese. If eaten uncooked, the surface of the plants may transmit fasciolopsiasis.",
    strType: "Sedge"
  },
  {
    idIngredient: "522",
    strIngredient: "Tofu",
    strDescription:
      "Tofu, also known as bean curd, is a food cultivated by coagulating soy milk and then pressing the resulting curds into soft white blocks. It is a component in East Asian and Southeast Asian cuisines. Tofu can be soft, firm, or extra firm. Tofu has a subtle flavor and can be used in savory and sweet dishes. It is often seasoned or marinated to suit the dish. Tofu has a low calorie count and relatively large amounts of protein. It is high in iron, and it can have a high calcium or magnesium content, depending on the coagulants used in manufacturing (e.g. calcium chloride, calcium sulfate, magnesium sulfate).",
    strType: "Curd"
  },
  {
    idIngredient: "523",
    strIngredient: "Doubanjiang",
    strDescription:
      "Doubanjiang (IPA: [tôupântɕjâŋ]), or simply Douban, or Toban-djan, Chili bean sauce,n. It is used particularly in Sichuan cuisine, and in fact, the people of the province commonly refer to it as  A particularly well-known variety is called Pixian Douban (simplified Chinese: 郫县豆瓣; traditional Chinese: 郫縣豆瓣; pinyin: Píxiàn dòubàn), named after the district of Pixian, Sichuan.[1] This sauce is sometimes stir-fried with oil and eaten with rice or noodles as a quick meal, and is also commonly used as a primary flavoring for fried tofu dishes and cold tofu salads. It is also frequently mixed with instant noodles. In many Chinese communities and food factories, doubanjiang is produced with only soybeans and salt, and does not contain the broad beans or chili peppers typical of Sichuan-style doubanjiang. In Korean cuisine, a similar form of bean paste is called doenjang.",
    strType: "Sauce"
  },
  {
    idIngredient: "524",
    strIngredient: "Fermented Black Beans",
    strDescription:
      "Douchi (Chinese: 豆豉; pinyin: dòuchǐ), or tochi is a type ohould not be confused with the black turtle bean, a variety of common bean that is commonly used in the cuisines of Central America, South America, and the Caribbean.",
    strType: "Bean"
  },
  {
    idIngredient: "525",
    strIngredient: "Scallions",
    strDescription:
      "Scallions (green onion, spring onion and salad onion) are vegetables of various Allium onion species. Scallions have a milder taste than most onions. Their close relatives include the garlic, shallot, leek, chive, and Chinese onion. Although the bulbs of many Allium species are used as food, the defining characteristic of scallion species is that they lack a fully developed bulb. In common with all Allium species, scallions have hollow, tubular green leaves, growing directly from the bulb. These leaves are used as a vegetable; they are eaten either raw or cooked. The leaves are often chopped into other dishes, in the manner of onions or garlic. Also known as scallions or green onions, spring onions are in fact very young onions, harvested before the bulb has had a chance to swell.",
    strType: "Vegetable"
  },
  {
    idIngredient: "526",
    strIngredient: "Sichuan Pepper",
    strDescription:
      "Sichuan pepper, Sichuan peppercorn, or Szecis d sanshō may refer specifically to Z. simulans and Z. piperitum, respectively, the two are commonly used interchangeably. Related species are used in the cuisines of Tibet, Bhutan, Nepal, Thailand, and India (the Konkani and Uttarakhandi people) and Toba Batak peoples. In Bhutan, this pepper is known as thingye and is used liberally in preparation of soups, gruels, and phaag sha paa (pork slices).[citation needed] In Nepal, timur is used in the popular foods momo, thukpa, chow mein, chicken chilli, and other meat dishes. It is also widely used in homemade pickles. People take timur as a medicine for stomach or digestion problems, in a preparation with cloves of garlic and mountain salt with warm water.",
    strType: "Spice"
  },
  {
    idIngredient: "527",
    strIngredient: "Wonton Skin",
    strDescription:
      "Won ton skin. Paper-thin squares of dough made from flour, water, eggs and salt used to make won tons, egg rolls and gyoza.",
    strType: "Pastry"
  },
  {
    idIngredient: "528",
    strIngredient: "Starch",
    strDescription:
      "Starch or amylum is a polymeric carbohydrate consisting of a large number of glucose units joined by glycosidic bonds. This polysaccharide is produced by most green plants as energy storage. It is the most common carbohydrate in human diets and is contained in large amounts in staple foods like potatoes, wheat, maize (corn), rice, and cassava. Pure starch is a white, tasteless and odorless powder that is insoluble in cold water or alcohol. It consists of two types of molecules: the linear and helical amylose and the branched amylopectin. Depending on the plant, starch generally contains 20 to 25% amylose and 75 to 80% amylopectin by weight.[4] Glycogen, the glucose store of animals, is a more highly branched version of amylopectin. In industry, starch is converted into sugars, for example by malting, and fermented to produce ethanol in the manufacture of beer, whisky and biofuel. It is processed to produce many of the sugars used in processed foods. Mixing most starches in warm water produces a paste, such as wheatpaste, which can be used as a thickening, stiffening or gluing agent. The biggest industrial non-food use of starch is as an adhesive in the papermaking process. Starch can be applied to parts of some garments before ironing, to stiffen them.",
    strType: "side"
  },
  {
    idIngredient: "529",
    strIngredient: "Rice wine",
    strDescription:
      "Rice wine is an alcoholic beverage fermented and distilled from rice, traditionally consumed in East Asia, Southeast Asia and South Asia. Rice wine is made from the fermentation of rice starch that has been converted to sugars. Microbes are the source of the enzymes that convert the starches to sugar.[1] Rice wine typically has an alcohol content of 18–25% ABV. Rice wines are used in Asian gastronomy at formal dinners and banquets and in cooking. They are also used in a religious and ceremonial context.",
    strType: "Wine"
  },
  {
    idIngredient: "530",
    strIngredient: "Cooking wine",
    strDescription:
      "Splash into casseroles, sauces and marinades for a rounded vibrant flavour.",
    strType: "Wine"
  },
  {
    idIngredient: "531",
    strIngredient: "Duck Sauce",
    strDescription:
      "Duck sauce (or orange sauce) is a condiment with a sweet and sour flavor and a translucent orange appearance similar to a thin jelly. Offered at Chinese-American restaurants, it is used as a dip for deep-fried dishes such as wonton strips, spring rolls, egg rolls, duck, chicken, fish, or with rice or noodles. It is often provided in single-serving packets along with soy sauce, mustard, hot sauce or red chili powder. It may be used as a glaze on foods, such as poultry. Despite its name the sauce is not prepared using duck meat.",
    strType: "Sauce"
  },
  {
    idIngredient: "532",
    strIngredient: "Gochujang",
    strDescription:
      "Gochujang or red chili paste is a savory, sweet, and spicy fermented condiment made from chili powder, glutinous rice, meju powder, yeotgireum, and salt.",
    strType: "Sauce"
  },
  {
    idIngredient: "533",
    strIngredient: "Bean Sprouts",
    strDescription:
      "Bean sprouts are a common ingredient across the world. They are particularly common in Eastern Asian cuisine. There are two types of common bean sprouts: Mung bean sprout is made from the greenish-capped mung beans Soybean sprout is made from yellow, larger-grained soybean It typically takes one week for them to become fully grown. The sprouted beans are more nutritious than the original beans and they require much less cooking time.",
    strType: "Vegetable"
  },
  {
    idIngredient: "534",
    strIngredient: "Noodles",
    strDescription:
      "Noodles are a staple food in many cultures. They are made from unleavened dough which is stretched, extruded, or rolled flat and cut into one of a variety of shapes. While long, thin strips may be the most common, many varieties of noodles are cut into waves, helices, tubes, strings, or shells, or folded over, or cut into other shapes. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are often pan-fried or deep-fried. Noodles are often served with an accompanying sauce or in a soup. Noodles can be refrigerated for short-term storage or dried and stored for future use. The material composition or geocultural origin must be specified when discussing noodles. The word derives from the German word Nudel.[1]",
    strType: "Side"
  },
  {
    idIngredient: "535",
    strIngredient: "Wood Ear Mushrooms",
    strDescription:
      "Auricularia auricula-judae, known as the Jew's ear, wood enames are sometimes used. The fungus can be found throughout the year in temperate regions worldwide, where it grows upon both dead and living wood. In the West, A. auricula-judae was used in folk medicine as recently as the 19th century for complaints including sore throats, sore eyes and jaundice, and as an astringent. Although it is not widely consumed in the West, it has long been popular in China, to the extent that Australia exported large volumes to China in the early twentieth century. Today, the fungus is a popular ingredient in many Chinese dishes, such as hot and sour soup, and also used in Chinese medicine. It is also used in Ghana, as a blood tonic. Modern research into possible medical applications has variously concluded that A. auricula-judae has antitumour, hypoglycemic, anticoagulant and cholesterol-lowering properties.",
    strType: "Vegetable"
  }
];
let ingredientok = [];
ingredients.forEach(e => {
  const recipe = {
    name: e.strIngredient,
    imgPath: `https://www.themealdb.com/images/ingredients/${
      e.strIngredient
    }-Small.png`
  };
  ingredientok.push(recipe);
});

Ingredients.collection.drop();
Ingredients.create(ingredientok).then(() =>{
  console.log("Ingredients database OK"),
  mongoose.disconnect()
}
);
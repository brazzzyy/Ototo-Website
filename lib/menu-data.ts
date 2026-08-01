export type MenuTag = "GF" | "Vegan" | "Spicy";

export type MenuItem = {
    name: string;
    price: string;
    description?: string;
    note?: string;
    tags?: MenuTag[];
};

export type MenuSection = {
    id: string;
    label: string;
    kanji: string;
    items: MenuItem[];
};

export const foodSections: MenuSection[] = [
    {
        id: "appetizers",
        label: "Appetizers",
        kanji: "前菜",
        items: [
            {
                name: "Corn Ribs",
                price: "9",
                description: "Deep fried corn, togarashi, and yuzu kosho ranch.",
            },
            {
                name: "Pork Buns (1pc/2pc)",
                price: "6 / 11",
                description: "Pork belly, tangy hoisin, and pickles.",
                note: "Tofu available",
                tags: ["Vegan"],
            },
            {
                name: "Tebasaki Wings",
                price: "12",
                description: "Sweet soy glazed wings served with a homemade yuzu kosho ranch.",
            },
            {
                name: "Karaage",
                price: "9",
                description: "Double fried marinated chicken bites served with Japanese mayo.",
            },
            {
                name: "Maguro",
                price: "19",
                description: "\u201CHand roll\u201D tobiko rice, spicy tuna, salmon roe, and nori sheets.",
                note: "Weekends only · Limited quantities",
            },
            {
                name: "Crab Rangoons (3pc/6pc)",
                price: "4 / 7.50",
                description: "Wonton wrappers filled with imitation crab, cream cheese, and green onions.",
            },
            {
                name: "Egg Rolls (2pc)",
                price: "4",
                description: "Wonton wrappers filled with cabbage, carrots, onions, and oyster sauce. Chicken, pork, or veggie.",
                note: "1pc 2 · 2pc 4 · 6pc 12 · 12pc 24",
            },
            {
                name: "Shrimp Tempura (3pc/6pc)",
                price: "6 / 11",
                description: "Lightly battered shrimp, fried to a golden crisp, served with a tangy dipping sauce.",
            },
        ],
    },
    {
        id: "ramen",
        label: "Ramen",
        kanji: "ラーメン",
        items: [
            {
                name: "Tokyo Shoyu",
                price: "16",
                description: "Clear chicken broth and fish dashi. Topped with pork chashu, ajitama, menma, pickled ginger, fish cake, fried garlic, green onions, and nori.",
            },
            {
                name: "Classic Tonkotsu",
                price: "16",
                description: "Rich pork paitan broth. Topped with pork chashu, ajitama, menma, pickled ginger, fried garlic, green onions, and nori.",
                tags: ["Vegan"],
            },
            {
                name: "Sunset Tonkotsu",
                price: "16",
                description: "Classic tonkotsu topped with black garlic oil, chili oil, chili paste, pork chashu, ajitama, menma, pickled ginger, fish cake, green onions, and nori.",
                tags: ["Vegan", "Spicy"],
            },
            {
                name: "Spicy Miso",
                price: "16.50",
                description: "Chili, spices, black garlic oil, and miso infused with rich pork paitan broth. Topped with shredded chilli, pork chashu, ajitama, menma, green onions, and nori.",
                tags: ["Vegan", "Spicy"],
            },
            {
                name: "Tantanmen",
                price: "16.50",
                description: "Spicy and nutty. Rich pork paitan broth, blended with spices, chili oil, and sesame paste. Topped with pork chashu, ajitama, menma, shredded chilli, pickled mustard greens, green onions, and nori.",
                tags: ["Vegan", "Spicy"],
            },
            {
                name: "Khao Soi",
                price: "16",
                description: "A blend of coconut curry, rich pork paitan broth. Topped with karaage (tofu available), pickled mustard greens, shallots, green onions, crispy egg noodles, cilantro, and lime.",
                tags: ["Spicy"],
            },
            {
                name: "Creamy Tom Yum",
                price: "16.50",
                description: "Creamy hot and sour soup. Topped with shrimp, fish balls, ajitama, green onions, cilantro, crispy shallots, and lime.",
            },
        ],
    },
    {
        id: "rice-bowls",
        label: "Rice Bowls",
        kanji: "丼",
        items: [
            {
                name: "OTOTO Don",
                price: "16",
                description: "Chopped chashu, chicken karaage, shrimp tempura, ajitama, pickled ginger, green onions, and kewpie mayo.",
            },
            {
                name: "Chashu Don",
                price: "8",
                description: "Chopped chashu on top of a side of rice, green onions, and pickled ginger.",
            },
            {
                name: "Yakitori Don",
                price: "8",
                description: "Chopped chicken on top of a side of rice, green onions, and pickled ginger.",
            },
        ],
    },
    {
        id: "specials",
        label: "Ototo Specials",
        kanji: "特選",
        items: [
            {
                name: "Regular Pho",
                price: "14",
                description: "Beef broth, rice noodles, beef meatballs, beef flank, onion, cilantro, green onions. Thai basil, bean sprouts, and jalape\u00F1os on the side.",
                note: "Pho Combo with shrimp · 15.50",
                tags: ["GF"],
            },
            {
                name: "Noodle Papaya Salad",
                price: "14",
                description: "Pork meatballs, cabbage, water spinach, peanuts, smashed garlic, tomatoes, lime, and papaya sauce.",
                note: "No spice · Mild · Spicy",
                tags: ["Spicy"],
            },
            {
                name: "Papaya Salad",
                price: "12",
                description: "Raw shredded papaya, papaya sauce (fish sauce, crab meat, crab paste), tomatoes, long beans, Thai eggplant, mango, and lime.",
                note: "No spice · Mild · Spicy",
                tags: ["Spicy"],
            },
            {
                name: "Chicken Cashew",
                price: "16.50",
                description: "Tender chicken stir fried with cashews, bell peppers, pineapple, and onions in our signature sauce, served with steamed rice.",
                tags: ["GF"],
            },
            {
                name: "Pad Thai",
                price: "14",
                description: "Chicken or tofu. Rice noodles, bean sprouts, egg, green onions, and Pad Thai sauce. Peanuts and chili powder on the side.",
                note: "Beef +1.95 · Shrimp +3.95",
                tags: ["GF"],
            },
            {
                name: "Pad See Ew",
                price: "14",
                description: "Chicken, rice noodles, Pad See Ew sauce, egg, and Chinese broccoli.",
                note: "Beef +1.95",
            },
            {
                name: "Beef Laab Salad",
                price: "15",
                description: "Ground beef, tripe, green onions, cilantro, shallots, fish sauce, and roasted rice powder.",
                note: "Normal or sticky rice +4",
            },
            {
                name: "Sticky/Regular Rice with Sausage",
                price: "12",
                description: "Sticky or regular rice, Hmong sausage, and spicy sauce.",
            },
        ],
    },
    {
        id: "desserts",
        label: "Desserts",
        kanji: "甘味",
        items: [
            {
                name: "Matcha Mille Crepe Cake",
                price: "12.50",
                description: "Delicate layers of cr\u00EApes made from flour, eggs, and milk, stacked with smooth matcha whipped cream in between.",
                note: "Weekends only · Limited quantities",
            },
            {
                name: "Mango Sticky Rice",
                price: "10",
                description: "Sweet sticky rice, mango, and coconut syrup.",
                note: "Seasonal · Available during summer",
            },
            {
                name: "Melona Ice Cream Bar",
                price: "2.50",
                description: "Mango or melon.",
            },
        ],
    },
    {
        id: "kids",
        label: "Kids Menu",
        kanji: "お子様",
        items: [
            {
                name: "Chashu Plate",
                price: "12",
                description: "Pork chashu served with white rice. Includes side of fries or mandarin orange slices.",
            },
            {
                name: "Karaage Plate",
                price: "12",
                description: "Chicken karaage served with white rice. Includes side of fries or mandarin orange slices.",
            },
            {
                name: "Sticky/Regular Rice with Sausage Plate",
                price: "12",
                description: "Hmong sausage served with sticky or regular rice. Includes side of fries or mandarin orange slices.",
            },
            {
                name: "Noodles & Broth",
                price: "10",
                description: "Choice of noodles served with Classic Tonkotsu or Tokyo Shoyu broth.",
            },
            {
                name: "Side of Rice",
                price: "4",
                description: "Regular (GF*) or sticky rice.",
            },
        ],
    },
];

export const drinks: MenuItem[] = [
    { name: "Coke, Diet Coke, Sprite", price: "2" },
    { name: "Thai Iced Tea", price: "8" },
    { name: "Hot Tea", price: "7", description: "Green tea / roasted rice tea" },
    { name: "Regular Lemonade", price: "6.50" },
    {
        name: "Flavored Lemonade",
        price: "7",
        description: "Raspberry / strawberry / pineapple / pomegranate / green apple / kumquat / red guava / grapefruit / lychee / passion fruit / mango / blueberry / peach",
    },
    { name: "Kimino Sparkling Juice", price: "5.50", description: "Yuzu / ume / ringo / mikan" },
];

export const beer: MenuItem[] = [
    { name: "Sapporo", price: "6", description: "Lager · Japan · 4.9%" },
    { name: "Kirin Ichiban", price: "6", description: "Lager · Japan · 4.9%" },
    { name: "Asahi", price: "7", description: "Lager · Japan · 5%" },
    { name: "Singha", price: "7", description: "Lager · Thailand · 5%" },
];

export const sake: MenuItem[] = [
    { name: "Ikezo Jelly Shot Peach", price: "8", description: "180ml · Japan · 5.5%" },
    { name: "Ikezo Jelly Shot Yuzu", price: "8", description: "180ml · Japan · 5.5%" },
    { name: "Yomi — The Afterlife", price: "10", description: "250ml · Japan · 13%" },
    { name: "Kibo", price: "10", description: "180ml · Japan · 15.5%" },
    { name: "Bushido", price: "12", description: "180ml · Japan · 18%" },
];

export const ramenExtras: MenuItem[] = [
    { name: "Chashu (Pork Belly) · 1pc", price: "5" },
    { name: "Ajitama (Egg)", price: "1.50" },
    { name: "Kaedama (Extra Noodles)", price: "3.50" },
    { name: "Regular Shrimp · 3pc", price: "4" },
    { name: "Chili Paste", price: "Free" },
    { name: "Broth", price: "5" },
    { name: "Karaage (Chicken)", price: "3" },
    { name: "Tofu · 1pc", price: "1" },
    { name: "Shrimp Tempura · 1pc", price: "1.50" },
    { name: "Chili Crisp", price: "Free" },
];

/** Home hero ticker — real menu picks (English + short Japanese label) */
export const marqueeMenuItems: readonly { en: string; jp: string }[] = [
    { en: "Classic Tonkotsu", jp: "豚骨ラーメン" },
    { en: "Spicy Miso", jp: "辛味噌" },
    { en: "Tokyo Shoyu", jp: "醤油ラーメン" },
    { en: "OTOTO Don", jp: "オトト丼" },
    { en: "Khao Soi", jp: "カオソイ" },
    { en: "Tantanmen", jp: "担担麺" },
    { en: "Pork Buns", jp: "肉まん" },
    { en: "Karaage", jp: "唐揚げ" },
    { en: "Shrimp Tempura", jp: "海老天" },
    { en: "Creamy Tom Yum", jp: "トムヤム" },
    { en: "Sunset Tonkotsu", jp: "黒マー油" },
    { en: "Tebasaki Wings", jp: "手羽先" },
];

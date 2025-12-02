import { db } from "./index";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config({ path: ".env" }); // Ensure env is loaded if running directly

async function main() {
    const items = [
        {
            name: "Nike Air Max 90",
            description: "Heritage style with modern comfort.",
            price: 13000, // $130.00
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx9xm98so5/air-max-90-mens-shoes-6n3vKB.png",
            category: "Shoes",
        },
        {
            name: "Nike Dunk Low Retro",
            description: "Created for the hardwood but taken to the streets.",
            price: 11500,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-mens-shoes-dS9USL.png",
            category: "Shoes",
        },
        {
            name: "Nike Sportswear Club Fleece",
            description: "Soft comfort. Street style.",
            price: 6000,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6bd68b6c-5243-423a-a313-155022952669/sportswear-club-fleece-mens-pullover-hoodie-gw4M6Z.png",
            category: "Clothing",
        },
        {
            name: "Nike Air Force 1 '07",
            description: "The radiance lives on in the Nike Air Force 1 '07.",
            price: 11000,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhBr.png",
            category: "Shoes",
        }
    ];

    console.log("Seeding...");
    try {
        await db.insert(products).values(items);
        console.log("Seeding complete.");
    } catch (error) {
        console.error("Error seeding:", error);
    }
    process.exit(0);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

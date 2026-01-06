const products = [
    {
        id: 1,
        name: "Green Spangle Budgerigar",
        price: "Rs. 1,500",
        age: "4 Months",
        color: "Green/Yellow",
        image: "https://image.pollinations.ai/prompt/realistic%20photo%20of%20a%20green%20spangle%20Budgerigar%20parrot%20on%20branch?width=600&height=400&nologo=true",
        description: "Healthy and active green spangle male. Very playful."
    },
    {
        id: 2,
        name: "Sky Blue Classic Pair",
        price: "Rs. 2,800",
        age: "6 Months",
        color: "Blue/White",
        image: "assets/images/photo-1594911588637-c9e891bd7858.jfif",
        description: "Breeder pair, bonded and ready for a new home."
    },
    {
        id: 3,
        name: "Lutino (Yellow) Queen",
        price: "Rs. 2,000",
        age: "3 Months",
        color: "Yellow",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20bright%20yellow%20Lutino%20Australian%20Budgerigar?width=600&height=400&nologo=true",
        description: "Beautiful red-eyed Lutino. Hand tamed potential."
    },
    {
        id: 4,
        name: "Rainbow Mutation",
        price: "Rs. 3,500",
        age: "5 Months",
        color: "Multi",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20colorful%20Rainbow%20Mutation%20Australian%20Budgerigar?width=600&height=400&nologo=true",
        description: "Rare rainbow mutation with vibrant colors."
    },
    {
        id: 5,
        name: "Albino (White) Beauty",
        price: "Rs. 2,200",
        age: "4 Months",
        color: "Pure White",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20pure%20white%20Albino%20Australian%20Budgerigar?width=600&height=400&nologo=true",
        description: "Stunning pure white albino with red eyes."
    },
    {
        id: 6,
        name: "Violet Opaline",
        price: "Rs. 3,000",
        age: "5 Months",
        color: "Violet",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20violet%20Australian%20Budgerigar%20parrot?width=600&height=400&nologo=true",
        description: "Deep violet color, very attractive and healthy."
    },
    {
        id: 7,
        name: "Pied Green Talking",
        price: "Rs. 5,000",
        age: "8 Months",
        color: "Green",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20green%20pied%20Australian%20Budgerigar%20Bajree?width=600&height=400&nologo=true",
        description: "Already mimicing sounds. Great companion."
    },
    {
        id: 8,
        name: "Clearwing Exotic Pair",
        price: "Rs. 6,000",
        age: "1 Year",
        color: "Mixed",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20pair%20of%20clearwing%20exotic%20Australian%20Budgerigar%20parrots?width=600&height=400&nologo=true",
        description: "Top quality breeder pair from imported bloodline."
    },
    {
        id: 9,
        name: "Grey Wing Budgerigar",
        price: "Rs. 1,800",
        age: "5 Months",
        color: "Grey/White",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20grey%20wing%20Australian%20Budgerigar?width=600&height=400&nologo=true",
        description: "Elegant grey wing mutation, peaceful nature."
    },
    {
        id: 10,
        name: "Harlequin Pair",
        price: "Rs. 4,500",
        age: "7 Months",
        color: "Yellow/Blue",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20two%20Harlequin%20Australian%20Budgerigar%20parrots?width=600&height=400&nologo=true",
        description: "Unique patterns, very healthy and breed-ready."
    },
    {
        id: 11,
        name: "Baby Budgerigar",
        price: "Rs. 2,500",
        age: "2 Months",
        color: "Light Blue",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20baby%20Australian%20Budgerigar%20on%20hand?width=600&height=400&nologo=true",
        description: "Completely hand tamed, doesnt bite. Best for kids."
    },
    {
        id: 12,
        name: "Jumbo Size Show Bird",
        price: "Rs. 7,000",
        age: "1 Year",
        color: "Grey",
        image: "https://image.pollinations.ai/prompt/high%20quality%20photo%20of%20a%20jumbo%20Australian%20Budgerigar%20show%20bird?width=600&height=400&nologo=true",
        description: "Massive size, competition quality feathers."
    }
];

// Configuration
const CONTACT_PHONE = "+923001234567"; // REPLACE WITH YOUR NUMBER
const SHOP_CONTAINER = document.getElementById('product-grid');

// Function to render products
function renderProducts() {
    if (!SHOP_CONTAINER) return;

    SHOP_CONTAINER.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="card-image-container">
                <span class="badge">Available</span>
                <img src="${product.image}" alt="${product.name}" class="card-image">
            </div>
            <div class="card-content">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-price">${product.price}</span>
                
                <div class="product-details">
                    <span>Age: ${product.age}</span>
                    <span>Color: ${product.color}</span>
                </div>
                
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
                    ${product.description}
                </p>
                
                <button onclick="buyProduct('${product.name}', '${product.price}')" class="btn" style="width: 100%">
                    Buy Now
                </button>
            </div>
        </div>
    `).join('');
}

// Function to handle purchase (Redirect to WhatsApp)
function buyProduct(name, price) {
    const text = `Hi! I am interested in buying the *${name}* for *${price}*. Is it available?`;
    const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    console.log("Beautiful Birds Loaded Successfully!");
});

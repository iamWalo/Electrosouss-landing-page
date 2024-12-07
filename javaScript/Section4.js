// مصفوفة بيانات المنتجات
const products = [
    {
        img: "images/Section4-img-1.png",
        title: "MACHINE A LAVER SAMSUNG 9KG ECO BUBBLE INOX",
        price: "5.499,00 DH",
        oldPrice: "8.799,00 DH",
        rating: 4.5,
        reviews: 56
    },
    {
        img: "images/Section4-img-2.png",
        title: "REFRIGERATEUR LG SMART INVERTER 300L",
        price: "6.999,00 DH",
        oldPrice: "9.999,00 DH",
        rating: 5,
        reviews: 120
    },
    {
        img: "images/Section4-img-3.png",
        title: "TV SAMSUNG 4K UHD 55 INCHES",
        price: "7.999,00 DH",
        oldPrice: "12.499,00 DH",
        rating: 4,
        reviews: 80
    },
    {
        img: "images/Section4-img-4.png",
        title: "MACHINE A LAVER SAMSUNG 9KG ECO BUBBLE INOX",
        price: "5.499,00 DH",
        oldPrice: "8.799,00 DH",
        rating: 4.5,
        reviews: 56
    },
    {
        img: "images/Section4-img-5.png",
        title: "REFRIGERATEUR LG SMART INVERTER 300L",
        price: "6.999,00 DH",
        oldPrice: "9.999,00 DH",
        rating: 5,
        reviews: 120
    },
    {
        img: "images/Section4-img-6.png",
        title: "TV SAMSUNG 4K UHD 55 INCHES",
        price: "7.999,00 DH",
        oldPrice: "12.499,00 DH",
        rating: 4,
        reviews: 80
    },
    {
        img: "images/Section4-img-7.png",
        title: "MACHINE A LAVER SAMSUNG 9KG ECO BUBBLE INOX",
        price: "5.499,00 DH",
        oldPrice: "8.799,00 DH",
        rating: 4.5,
        reviews: 56
    },
    {
        img: "images/Section4-img-8.png",
        title: "REFRIGERATEUR LG SMART INVERTER 300L",
        price: "6.999,00 DH",
        oldPrice: "9.999,00 DH",
        rating: 5,
        reviews: 120
    },
    {
        img: "images/Section4-img-9.png",
        title: "TV SAMSUNG 4K UHD 55 INCHES",
        price: "7.999,00 DH",
        oldPrice: "12.499,00 DH",
        rating: 4,
        reviews: 80
    },
    {
        img: "images/Section4-img-10.png",
        title: "MACHINE A LAVER SAMSUNG 9KG ECO BUBBLE INOX",
        price: "5.499,00 DH",
        oldPrice: "8.799,00 DH",
        rating: 4.5,
        reviews: 56
    },
    {
        img: "images/Section4-img-11.png",
        title: "REFRIGERATEUR LG SMART INVERTER 300L",
        price: "6.999,00 DH",
        oldPrice: "9.999,00 DH",
        rating: 5,
        reviews: 120
    },
    {
        img: "images/Section4-img-12.png",
        title: "TV SAMSUNG 4K UHD 55 INCHES",
        price: "7.999,00 DH",
        oldPrice: "12.499,00 DH",
        rating: 4,
        reviews: 80
    },
    {
        img: "images/Section4-img-13.png",
        title: "MACHINE A LAVER SAMSUNG 9KG ECO BUBBLE INOX",
        price: "5.499,00 DH",
        oldPrice: "8.799,00 DH",
        rating: 4.5,
        reviews: 56
    },
    {
        img: "images/Section4-img-14.png",
        title: "REFRIGERATEUR LG SMART INVERTER 300L",
        price: "6.999,00 DH",
        oldPrice: "9.999,00 DH",
        rating: 5,
        reviews: 120
    },
    {
        img: "images/Section4-img-15.png",
        title: "TV SAMSUNG 4K UHD 55 INCHES",
        price: "7.999,00 DH",
        oldPrice: "12.499,00 DH",
        rating: 4,
        reviews: 80
    },
    {
        img: "images/Section4-img-16.png",
        title: "TV SAMSUNG 4K UHD 55 INCHES",
        price: "7.999,00 DH",
        oldPrice: "12.499,00 DH",
        rating: 4,
        reviews: 80
    },
];

// الحصول على عنصر الحاوية
const container = document.getElementById("products-container");


// إنشاء المنتجات وإضافتها إلى DOM
if (window.innerWidth <= 520) {
    products.length = 6;
}
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
        <img src="${product.img}" alt="Product Image">
        <div class="product-details">
            <div class="product-title">${product.title}</div>
            <div class="product-price">
                <div>
                    ${product.price} <span class="old-price">${product.oldPrice}</span>
                </div>
                <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                <span class="reviews">(${product.reviews})</span>
            </div>
            <button class="add-to-cart">Add To Card</button>
        </div>
    `;

    container.appendChild(productCard);
});

const likeButtons = document.querySelectorAll('.heart')

likeButtons.forEach((likeButton) => {
    const heartIcon = likeButton.querySelector('i')
    heartIcon.addEventListener('click', (e) => {

        heartIcon.classList.toggle('fa-solid');
        heartIcon.classList.toggle('fa-rergular');
    })
})
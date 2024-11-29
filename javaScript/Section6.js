
// مصفوفة بيانات المنتجات
const services = [
    {
        img: "images/Section6-img-1.png",
        text: "free shipping from 1000 dh"
    },
    {
        img: "images/Section6-img-2.png",
        text: "Garantie"
    },
    {
        img: "images/Section6-img-3.png",
        text: "Customer service 24h / 7J"
    },
    {
        img: "images/Section6-img-4.png",
        text: "money back guarantee"
    },
    {
        img: "images/Section6-img-5.png",
        text: "100% secure payment"
    },
]

// الحصول على عنصر الحاوية
const Section6Categorys = document.getElementById("section-6-categorys");

// إنشاء المنتجات وإضافتها إلى DOM
services.forEach(service => {
    const category = document.createElement("div");
    category.className = "category";

    category.innerHTML = `
                <img src=${service.img} alt="">
                <p>${service.text}</p>
    `;

    Section6Categorys.appendChild(category);
});

// مصفوفة بيانات المنتجات
const imgs = [
    {
        img: "images/Section5-img-1.png",
    },
    {
        img: "images/Section5-img-2.png",
    },
    {
        img: "images/Section5-img-3.png",
    },
    {
        img: "images/Section5-img-4.png",
    },
    {
        img: "images/Section5-img-5.png",
    },
    {
        img: "images/Section5-img-6.png",
    },
]

// الحصول على عنصر الحاوية
const Section5Categorys = document.getElementById("section-5-categorys");

// إنشاء المنتجات وإضافتها إلى DOM
imgs.forEach(img => {
    const category = document.createElement("div");
    category.className = "category";

    category.innerHTML = `
                <img src=${img.img} alt="">
    `;

    Section5Categorys.appendChild(category);
});

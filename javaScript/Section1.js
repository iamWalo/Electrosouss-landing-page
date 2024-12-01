const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider() {
    // تغيير خاصية transform لتحريك الصور
    slider.style.transform = `translateX(-${currentIndex * 100} %)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// إضافة حدث النقر للنقاط
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index, 10);
        updateSlider();
    });
});

// تمرير الصور تلقائيًا (اختياري)
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlider();
}, 2000);

// تشغيل التمرير الأولي
updateSlider();
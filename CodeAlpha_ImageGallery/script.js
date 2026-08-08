// Get elements
const filterButtons = document.querySelectorAll('.filter-buttons button');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imageCounter = document.querySelector('.image-counter');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

let currentImageIndex = 0;
let filteredImages = [];
let currentFilter = 'all';

// Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (currentFilter === 'all' || itemCategory === currentFilter) {
                item.classList.remove('hidden');
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                }, 10);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Lightbox functionality
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        filteredImages = Array.from(galleryItems).filter(img => !img.classList.contains('hidden'));
        currentImageIndex = filteredImages.indexOf(item);

        const img = item.querySelector('img');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateImageCounter();
    });
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex--;
    if (currentImageIndex < 0) currentImageIndex = filteredImages.length - 1;
    updateLightboxImage();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex++;
    if (currentImageIndex >= filteredImages.length) currentImageIndex = 0;
    updateLightboxImage();
});

function updateLightboxImage() {
    const currentItem = filteredImages[currentImageIndex];
    const img = currentItem.querySelector('img');
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    updateImageCounter();
}

function updateImageCounter() {
    imageCounter.textContent = `${currentImageIndex + 1} / ${filteredImages.length}`;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') prevBtn.click();
    else if (e.key === 'ArrowRight') nextBtn.click();
    else if (e.key === 'Escape') closeLightbox();
});

// Smooth scroll animation for nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

<template>
  <section id="gallery" class="gallery section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header" data-aos="fade-up">
        <span class="section-label">Visual Tour</span>
        <h2>Explore Our<br><span class="text-gradient">Gallery</span></h2>
        <p>Take a visual journey through our beautiful guest house and see what awaits you.</p>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in galleryImages" 
          :key="image.id"
          class="gallery-item"
          :class="image.size"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
          @click="openLightbox(index)"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <div class="gallery-overlay">
            <div class="overlay-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
              <span>{{ image.caption }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div 
        class="lightbox" 
        v-if="lightboxOpen" 
        @click.self="closeLightbox"
        @keydown.esc="closeLightbox"
        @keydown.left="prevImage"
        @keydown.right="nextImage"
      >
        <button class="lightbox-close" @click="closeLightbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <button class="lightbox-nav prev" @click="prevImage">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>

        <div class="lightbox-content" data-aos="zoom-in">
          <img :src="galleryImages[currentIndex].src" :alt="galleryImages[currentIndex].alt" />
          <p class="lightbox-caption">{{ galleryImages[currentIndex].caption }}</p>
        </div>

        <button class="lightbox-nav next" @click="nextImage">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>

        <div class="lightbox-counter">
          {{ currentIndex + 1 }} / {{ galleryImages.length }}
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
    alt: 'Guest house exterior',
    caption: 'Welcome to Humble Grace',
    size: 'large'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxurious bedroom',
    caption: 'Elegant Room Interiors',
    size: 'medium'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern bathroom',
    caption: 'Modern Bathroom',
    size: 'small'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    alt: 'Outdoor area',
    caption: 'Relaxing Outdoor Spaces',
    size: 'small'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    alt: 'Dining area',
    caption: 'Fine Dining Experience',
    size: 'medium'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    alt: 'Lounge area',
    caption: 'Cozy Lounge',
    size: 'large'
  }
]

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % galleryImages.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + galleryImages.length) % galleryImages.length
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.gallery {
  background: var(--bg-secondary);
}

.section-label {
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--space-4);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: var(--space-4);
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item.medium {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 26, 46, 0.9) 0%, transparent 50%);
  opacity: 0;
  transition: opacity var(--transition-base);
  display: flex;
  align-items: flex-end;
  padding: var(--space-6);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-white);
}

.overlay-content svg {
  width: 24px;
  height: 24px;
}

.overlay-content span {
  font-weight: 500;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: all var(--transition-fast);
  z-index: 10;
}

.lightbox-close:hover {
  background: var(--color-primary);
}

.lightbox-close svg {
  width: 24px;
  height: 24px;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: all var(--transition-fast);
  z-index: 10;
}

.lightbox-nav:hover {
  background: var(--color-primary);
}

.lightbox-nav.prev {
  left: var(--space-6);
}

.lightbox-nav.next {
  right: var(--space-6);
}

.lightbox-nav svg {
  width: 28px;
  height: 28px;
}

.lightbox-content {
  max-width: 80%;
  max-height: 80%;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}

.lightbox-caption {
  margin-top: var(--space-4);
  color: var(--color-white);
  font-size: var(--text-lg);
}

.lightbox-counter {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-white);
  font-size: var(--text-sm);
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
  
  .gallery-item.large {
    grid-column: span 2;
    grid-row: span 1;
  }
  
  .gallery-item.medium {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
  
  .gallery-item.large,
  .gallery-item.medium {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .lightbox-nav {
    width: 45px;
    height: 45px;
  }
  
  .lightbox-nav.prev {
    left: var(--space-2);
  }
  
  .lightbox-nav.next {
    right: var(--space-2);
  }
}
</style>

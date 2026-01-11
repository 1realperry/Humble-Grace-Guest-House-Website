<template>
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header" data-aos="fade-up">
        <span class="section-label">Guest Reviews</span>
        <h2>What Our Guests<br><span class="text-gradient">Say About Us</span></h2>
        <p>Real experiences from travelers who have enjoyed their stay at Humble Grace Guest House.</p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="testimonials-wrapper" data-aos="fade-up">
        <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id" 
            class="testimonial-card"
          >
            <div class="testimonial-card-inner">
              <div class="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p class="testimonial-text">{{ testimonial.text }}</p>
              
              <div class="testimonial-rating">
                <span 
                  v-for="star in 5" 
                  :key="star" 
                  class="star"
                  :class="{ 'filled': star <= testimonial.rating }"
                >★</span>
              </div>
              
              <div class="testimonial-author">
                <div class="author-avatar">
                  <img :src="testimonial.avatar" :alt="testimonial.name" />
                </div>
                <div class="author-info">
                  <strong>{{ testimonial.name }}</strong>
                  <span>{{ testimonial.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="carousel-nav">
          <button class="nav-btn" @click="prevSlide" :disabled="currentSlide === 0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
          
          <div class="carousel-dots">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              class="dot"
              :class="{ 'active': currentSlide === index }"
              @click="goToSlide(index)"
            ></button>
          </div>
          
          <button class="nav-btn" @click="nextSlide" :disabled="currentSlide === testimonials.length - 1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Rating Summary -->
      <div class="rating-summary" data-aos="fade-up">
        <div class="rating-card">
          <div class="rating-score">4.9</div>
          <div class="rating-stars">
            <span class="star filled" v-for="n in 5" :key="n">★</span>
          </div>
          <p>Based on 500+ Reviews</p>
        </div>
        
        <div class="rating-sources">
          <div class="source">
            <strong>Google Reviews</strong>
            <span>4.9 ★</span>
          </div>
          <div class="source">
            <strong>Booking.com</strong>
            <span>9.2/10</span>
          </div>
          <div class="source">
            <strong>TripAdvisor</strong>
            <span>4.8 ★</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoplayInterval = null

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Absolutely wonderful experience! The staff went above and beyond to make our stay memorable. The breakfast was incredible with authentic Ghanaian dishes. Will definitely return!'
  },
  {
    id: 2,
    name: 'Michael Osei',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'As a frequent business traveler, I appreciate the attention to detail here. Fast WiFi, comfortable workspace, and the airport shuttle service is a lifesaver. Perfect for professionals.'
  },
  {
    id: 3,
    name: 'Amara Diallo',
    location: 'Dakar, Senegal',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The family suite was perfect for us! Kids loved the space and the staff provided toys and games. It truly felt like a home away from home. Highly recommend for families.'
  },
  {
    id: 4,
    name: 'David Chen',
    location: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The location is fantastic - close to everything yet peaceful. The Executive Suite exceeded my expectations. Clean, modern, and the service is impeccable.'
  },
  {
    id: 5,
    name: 'Emma Williams',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    text: 'Lovely guest house with genuine Ghanaian hospitality. The outdoor spaces are beautiful for morning coffee. A gem in Accra that offers great value for money.'
  }
]

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.testimonials {
  background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
  position: relative;
  overflow: hidden;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
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

/* Carousel */
.testimonials-wrapper {
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-16);
  width: 100%;
}

.testimonials-track {
  display: flex;
  transition: transform var(--transition-slow);
  width: 100%;
}

.testimonial-card {
  flex: 0 0 100%;
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-10);
}

.testimonial-card-inner {
  max-width: 700px;
  width: 100%;
  padding: var(--space-10);
  background: var(--bg-card);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  text-align: center;
}

.quote-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--space-6);
  color: var(--color-primary);
  opacity: 0.3;
}

.quote-icon svg {
  width: 100%;
  height: 100%;
}

.testimonial-text {
  font-size: var(--text-xl);
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  font-style: italic;
}

.testimonial-rating {
  margin-bottom: var(--space-6);
}

.star {
  font-size: var(--text-xl);
  color: var(--color-gray-300);
  margin: 0 2px;
}

.star.filled {
  color: #FFD700;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-primary);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  text-align: left;
}

.author-info strong {
  display: block;
  font-size: var(--text-lg);
  color: var(--text-primary);
}

.author-info span {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

/* Navigation */
.carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);
  margin-top: var(--space-8);
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.nav-btn:hover:not(:disabled) {
  background: var(--color-primary);
  color: var(--color-white);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn svg {
  width: 24px;
  height: 24px;
}

.carousel-dots {
  display: flex;
  gap: var(--space-2);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-gray-300);
  transition: all var(--transition-fast);
}

.dot.active {
  background: var(--color-primary);
  transform: scale(1.2);
}

/* Rating Summary */
.rating-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  padding: var(--space-10);
  background: var(--bg-card);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

.rating-card {
  text-align: center;
  padding-right: var(--space-12);
  border-right: 1px solid var(--color-gray-200);
}

.rating-score {
  font-family: var(--font-heading);
  font-size: var(--text-6xl);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.rating-stars {
  margin: var(--space-2) 0;
}

.rating-card p {
  font-size: var(--text-sm);
  margin: 0;
}

.rating-sources {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.source {
  display: flex;
  justify-content: space-between;
  gap: var(--space-8);
}

.source strong {
  color: var(--text-primary);
}

.source span {
  color: var(--color-primary);
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .testimonial-card-inner {
    padding: var(--space-6);
  }
  
  .testimonial-text {
    font-size: var(--text-lg);
  }
  
  .rating-summary {
    flex-direction: column;
    gap: var(--space-6);
  }
  
  .rating-card {
    padding-right: 0;
    padding-bottom: var(--space-6);
    border-right: none;
    border-bottom: 1px solid var(--color-gray-200);
  }
}
</style>

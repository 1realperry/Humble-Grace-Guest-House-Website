<template>
  <section id="hero" class="hero">
    <!-- Background with Parallax -->
    <div class="hero-bg" :style="{ transform: `translateY(${scrollY * 0.5}px)` }">
      <div class="hero-overlay"></div>
    </div>

    <!-- Floating Decorations -->
    <div class="decorations">
      <div class="decoration decoration-1"></div>
      <div class="decoration decoration-2"></div>
      <div class="decoration decoration-3"></div>
    </div>

    <!-- Content -->
    <div class="container hero-content">
      <div class="hero-badge" data-aos="fade-down">
        <span class="badge-icon">✦</span>
        <span>Premium Hospitality in Accra</span>
      </div>

      <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
        Welcome to<br>
        <span class="text-gradient">Humble Grace</span><br>
        Guest House
      </h1>

      <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
        Experience the perfect blend of Ghanaian hospitality and modern luxury. 
        Your home away from home in the heart of Accra.
      </p>

      <div class="hero-actions" data-aos="fade-up" data-aos-delay="300">
        <a href="#rooms" class="btn btn-primary" @click.prevent="scrollTo('#rooms')">
          <span>Explore Rooms</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#about" class="btn btn-secondary" @click.prevent="scrollTo('#about')">
          <span>Our Story</span>
        </a>
      </div>

      <!-- Stats -->
      <div class="hero-stats" data-aos="fade-up" data-aos-delay="400">
        <div class="stat">
          <span class="stat-number">15+</span>
          <span class="stat-label">Luxury Rooms</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-number">500+</span>
          <span class="stat-label">Happy Guests</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-number">4.9</span>
          <span class="stat-label">Guest Rating</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="500">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll to explore</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const scrollTo = (selector) => {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: -50px;
  background: 
    linear-gradient(135deg, rgba(26, 83, 92, 0.9) 0%, rgba(26, 26, 46, 0.8) 100%),
    url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80') center/cover;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 70%, rgba(212, 165, 116, 0.2) 0%, transparent 50%);
}

/* Decorations */
.decorations {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.decoration {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  opacity: 0.1;
}

.decoration-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.decoration-2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.decoration-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 60%;
  animation: float 6s ease-in-out infinite;
}

/* Content */
.hero-content {
  text-align: center;
  color: var(--color-white);
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  margin-bottom: var(--space-8);
}

.badge-icon {
  color: var(--color-primary);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-6);
  color: var(--color-white);
}

.hero-title .text-gradient {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--text-lg);
  max-width: 600px;
  margin: 0 auto var(--space-10);
  opacity: 0.9;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}

/* Actions */
.hero-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-16);
}

.btn-icon {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-fast);
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  padding: var(--space-6) var(--space-10);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-2xl);
  max-width: fit-content;
  margin: 0 auto;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--space-1);
}

.stat-label {
  font-size: var(--text-sm);
  opacity: 0.8;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--text-sm);
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 4px;
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.5; }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-6);
  }
  
  .stat-divider {
    width: 60px;
    height: 1px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>

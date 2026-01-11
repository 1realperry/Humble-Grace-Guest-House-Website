<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="about-grid">
        <!-- Image Side -->
        <div class="about-image" data-aos="fade-right">
          <div class="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" 
              alt="Humble Grace Guest House Interior"
              loading="lazy"
            />
            <div class="image-decoration"></div>
          </div>
          
          <!-- Experience Badge -->
          <div class="experience-badge">
            <span class="exp-number">10+</span>
            <span class="exp-text">Years of<br>Excellence</span>
          </div>
        </div>

        <!-- Content Side -->
        <div class="about-content" data-aos="fade-left">
          <span class="section-label">Nina Barnes</span>
          <h2>A Legacy of Warmth &<br><span class="text-gradient">Ghanaian Hospitality</span></h2>
          
          <p class="about-lead">
            Nestled in the vibrant heart of Accra, Humble Grace Guest House has been 
            welcoming travelers from around the world since 2014.
          </p>
          
          <p>
            Our name reflects our philosophy: we believe true luxury lies in genuine 
            care and humble service. Whether you're here for business or leisure, 
            our dedicated team ensures every moment of your stay is memorable.
          </p>

          <div class="about-features">
            <div class="feature" v-for="feature in features" :key="feature.title">
              <div class="feature-icon" v-html="feature.icon"></div>
              <div class="feature-content">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <a href="#rooms" class="btn btn-primary" @click.prevent="scrollTo('#rooms')">
            Discover Our Rooms
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Prime Location',
    description: 'Minutes from Kotoka International Airport and major attractions.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  },
  {
    title: 'Authentic Experience',
    description: 'Immerse yourself in rich Ghanaian culture and traditions.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
  },
  {
    title: '24/7 Service',
    description: 'Round-the-clock assistance for all your needs.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>'
  }
]

const scrollTo = (selector) => {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.about {
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

/* Image Side */
.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.image-wrapper img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.image-decoration {
  position: absolute;
  inset: 0;
  border: 3px solid var(--color-primary);
  border-radius: var(--radius-2xl);
  transform: translate(20px, 20px);
  z-index: -1;
}

.experience-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  box-shadow: var(--shadow-lg);
  animation: pulse-glow 3s ease-in-out infinite;
}

.exp-number {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: 1;
}

.exp-text {
  font-size: var(--text-xs);
  text-align: center;
  line-height: 1.3;
  margin-top: var(--space-1);
}

/* Content Side */
.about-content {
  padding-left: var(--space-8);
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

.about-content h2 {
  margin-bottom: var(--space-6);
}

.about-lead {
  font-size: var(--text-lg);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

/* Features */
.about-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin: var(--space-8) 0;
}

.feature {
  display: flex;
  gap: var(--space-4);
}

.feature-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: rgba(212, 165, 116, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.feature-icon svg {
  width: 24px;
  height: 24px;
}

.feature-content h4 {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.feature-content p {
  font-size: var(--text-sm);
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
  
  .about-content {
    padding-left: 0;
  }
  
  .image-wrapper img {
    height: 400px;
  }
  
  .experience-badge {
    bottom: 20px;
    right: 20px;
    width: 120px;
    height: 120px;
  }
  
  .exp-number {
    font-size: var(--text-3xl);
  }
}
</style>

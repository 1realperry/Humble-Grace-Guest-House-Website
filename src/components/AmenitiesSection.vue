<template>
  <section id="amenities" class="amenities section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header" data-aos="fade-up">
        <span class="section-label">What We Offer</span>
        <h2>World-Class<br><span class="text-gradient">Amenities</span></h2>
        <p>Every detail is designed to make your stay exceptional, from our facilities to our personalized services.</p>
      </div>

      <!-- Amenities Grid -->
      <div class="amenities-grid">
        <div 
          v-for="(amenity, index) in amenities" 
          :key="amenity.title"
          class="amenity-card glass-card"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <div class="amenity-icon" v-html="amenity.icon"></div>
          <h4>{{ amenity.title }}</h4>
          <p>{{ amenity.description }}</p>
        </div>
      </div>

      <!-- Feature Highlight -->
      <div class="feature-highlight" data-aos="fade-up">
        <div class="highlight-content">
          <h3>Experience Authentic <span class="text-gradient">Ghanaian Cuisine</span></h3>
          <p>
            Start your day with our complimentary breakfast featuring both continental 
            and traditional Ghanaian dishes. From fresh tropical fruits to local favorites 
            like waakye and kelewele, our chefs prepare everything with love and the 
            finest local ingredients.
          </p>
          <ul class="highlight-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Farm-fresh local ingredients
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Traditional & continental options
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Dietary accommodations available
            </li>
          </ul>
        </div>
        <div class="highlight-image">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" 
            alt="Delicious breakfast spread"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const amenities = [
  {
    title: 'Free High-Speed WiFi',
    description: 'Stay connected with complimentary premium WiFi throughout the property.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>'
  },
  {
    title: 'Airport Shuttle',
    description: 'Complimentary pickup and drop-off to Kotoka International Airport.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17h2l.4-2M3 17a2 2 0 0 0 4 0M3 17H1m20 0h-2l-.4-2m.4 2a2 2 0 0 1-4 0m4 0h2M7 17l.5-2.5m0 0L8 12l4-7 4 7 .5 2.5m-9 0h9M5 5h14"/></svg>'
  },
  {
    title: '24/7 Security',
    description: 'Round-the-clock security personnel and CCTV for your peace of mind.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>'
  },
  {
    title: 'Breakfast Included',
    description: 'Start each day with our delicious complimentary breakfast buffet.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>'
  },
  {
    title: 'Laundry Service',
    description: 'Professional laundry and dry cleaning services available daily.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2"/><line x1="6" y1="7" x2="6" y2="7"/></svg>'
  },
  {
    title: 'Climate Control',
    description: 'Individual air conditioning units in every room for your comfort.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>'
  },
  {
    title: 'Meeting Room',
    description: 'Professional meeting space for business travelers and small events.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M17 2v5M7 2v5"/><path d="M2 12h20"/></svg>'
  },
  {
    title: 'Room Service',
    description: 'Enjoy dining in the comfort of your room with our menu options.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20"/><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8"/><circle cx="12" cy="12" r="3"/><path d="M12 15v6"/></svg>'
  }
]
</script>

<style scoped>
.amenities {
  background: var(--bg-primary);
  position: relative;
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

/* Amenities Grid */
.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-16);
}

.amenity-card {
  padding: var(--space-8);
  text-align: center;
  transition: all var(--transition-base);
}

.amenity-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.amenity-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto var(--space-6);
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(255, 107, 107, 0.1) 100%);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all var(--transition-base);
}

.amenity-card:hover .amenity-icon {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  color: var(--color-white);
  transform: rotateY(180deg);
}

.amenity-icon svg {
  width: 32px;
  height: 32px;
}

.amenity-card h4 {
  font-size: var(--text-lg);
  margin-bottom: var(--space-2);
  font-family: var(--font-body);
  font-weight: 600;
}

.amenity-card p {
  font-size: var(--text-sm);
  margin: 0;
}

/* Feature Highlight */
.feature-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  padding: var(--space-12);
  background: var(--bg-secondary);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

.highlight-content h3 {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-6);
}

.highlight-content > p {
  font-size: var(--text-lg);
  line-height: 1.8;
  margin-bottom: var(--space-6);
}

.highlight-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.highlight-features li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: 500;
  color: var(--text-primary);
}

.highlight-features svg {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.highlight-image {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.highlight-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.highlight-image:hover img {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 1024px) {
  .feature-highlight {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  
  .highlight-image {
    order: -1;
  }
  
  .highlight-image img {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .amenities-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .amenity-card {
    padding: var(--space-6);
  }
  
  .feature-highlight {
    padding: var(--space-6);
  }
}

@media (max-width: 480px) {
  .amenities-grid {
    grid-template-columns: 1fr;
  }
}
</style>

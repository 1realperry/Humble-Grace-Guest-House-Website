<template>
  <section id="rooms" class="rooms section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header" data-aos="fade-up">
        <span class="section-label">Accommodations</span>
        <h2>Luxurious Rooms &<br><span class="text-gradient">Suites</span></h2>
        <p>Each room is thoughtfully designed to provide comfort, style, and a peaceful retreat after your adventures in Accra.</p>
      </div>

      <!-- Room Cards -->
      <div class="rooms-grid">
        <article 
          v-for="(room, index) in rooms" 
          :key="room.id" 
          class="room-card"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 100"
        >
          <div class="room-image">
            <img :src="room.image" :alt="room.name" loading="lazy" />
            <div class="room-badge" v-if="room.popular">
              <span>✦ Most Popular</span>
            </div>
          </div>
          
          <div class="room-content">
            <div class="room-header">
              <h3>{{ room.name }}</h3>
              <div class="room-price">
                <span class="price-amount">{{ room.price }}</span>
                <span class="price-period">/night</span>
              </div>
            </div>
            
            <p class="room-description">{{ room.description }}</p>
            
            <ul class="room-features">
              <li v-for="feature in room.features" :key="feature">
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
            
            <div class="room-actions">
              <a href="#contact" class="btn btn-primary" @click.prevent="scrollTo('#contact')">
                Book Now
              </a>
              <button class="btn btn-secondary" @click="openModal(room)">
                View Details
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Room Modal -->
    <Teleport to="body">
      <div class="modal-overlay" v-if="selectedRoom" @click.self="closeModal">
        <div class="modal" data-aos="zoom-in">
          <button class="modal-close" @click="closeModal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          
          <div class="modal-image">
            <img :src="selectedRoom.image" :alt="selectedRoom.name" />
          </div>
          
          <div class="modal-content">
            <h3>{{ selectedRoom.name }}</h3>
            <p>{{ selectedRoom.fullDescription }}</p>
            
            <div class="modal-features">
              <h4>Room Amenities</h4>
              <ul>
                <li v-for="feature in selectedRoom.allFeatures" :key="feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="modal-price">
              <span class="price-label">Starting from</span>
              <span class="price-value">{{ selectedRoom.price }}</span>
              <span class="price-period">/night</span>
            </div>
            
            <a href="#contact" class="btn btn-primary btn-full" @click.prevent="scrollTo('#contact'); closeModal()">
              Reserve This Room
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedRoom = ref(null)

const rooms = [
  {
    id: 1,
    name: 'Deluxe King Room',
    price: '$95',
    description: 'Spacious room featuring a king-size bed, premium linens, and a stunning city view.',
    fullDescription: 'Our Deluxe King Room offers the perfect blend of comfort and elegance. Wake up to panoramic views of Accra while enjoying morning coffee on your private balcony. The room features premium memory foam mattress, Egyptian cotton sheets, and a modern en-suite bathroom.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included'],
    allFeatures: ['King-size bed with premium linens', 'Private balcony', 'City panoramic view', 'High-speed WiFi', 'Complimentary breakfast', '55" Smart TV', 'Mini refrigerator', 'In-room safe', 'Air conditioning', 'Daily housekeeping']
  },
  {
    id: 2,
    name: 'Executive Suite',
    price: '$145',
    description: 'Premium suite with separate living area, workstation, and enhanced amenities for business travelers.',
    fullDescription: 'The Executive Suite is designed for discerning travelers who need space to work and relax. Featuring a separate living area, dedicated workspace, and premium amenities, this suite ensures productivity without sacrificing comfort.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: ['Living Area', 'Work Desk', 'Minibar', 'Premium WiFi'],
    allFeatures: ['King-size bed', 'Separate living area', 'Executive work desk', 'Ergonomic chair', 'Premium high-speed WiFi', 'Complimentary minibar', 'Nespresso machine', '65" Smart TV', 'Rainfall shower', 'Bathrobe & slippers', 'Turn-down service']
  },
  {
    id: 3,
    name: 'Family Suite',
    price: '$175',
    description: 'Ideal for families, featuring two bedrooms, a living space, and kid-friendly amenities.',
    fullDescription: 'Our Family Suite provides the perfect home away from home for traveling families. With two separate bedrooms, a spacious living area, and thoughtful amenities for children, everyone can enjoy their stay in comfort.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: ['2 Bedrooms', 'Living Room', 'Kid-Friendly', 'Kitchenette'],
    allFeatures: ['Master bedroom with king bed', 'Second bedroom with twin beds', 'Full living room', 'Kitchenette with essentials', 'Kid-friendly amenities', 'Board games available', 'Two full bathrooms', 'Dining area', 'Extra crib upon request', 'Childproofed on request']
  }
]

const scrollTo = (selector) => {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const openModal = (room) => {
  selectedRoom.value = room
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedRoom.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.rooms {
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

/* Rooms Grid */
.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
}

/* Room Card */
.room-card {
  background: var(--bg-card);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.room-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.room-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.room-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.room-card:hover .room-image img {
  transform: scale(1.1);
}

.room-badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  padding: var(--space-2) var(--space-4);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  color: var(--color-white);
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
}

.room-content {
  padding: var(--space-6);
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-4);
}

.room-header h3 {
  font-size: var(--text-xl);
  margin: 0;
}

.room-price {
  text-align: right;
}

.price-amount {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-primary);
}

.price-period {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.room-description {
  font-size: var(--text-sm);
  margin-bottom: var(--space-4);
}

.room-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.room-features li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.check-icon {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.room-actions {
  display: flex;
  gap: var(--space-3);
}

.room-actions .btn {
  flex: 1;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-sm);
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--space-6);
}

.modal {
  position: relative;
  background: var(--bg-card);
  border-radius: var(--radius-2xl);
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-xl);
}

.modal-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--color-accent);
  color: var(--color-white);
}

.modal-close svg {
  width: 20px;
  height: 20px;
}

.modal-image {
  height: 300px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-content {
  padding: var(--space-8);
}

.modal-content h3 {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
}

.modal-content p {
  margin-bottom: var(--space-6);
}

.modal-features h4 {
  font-size: var(--text-lg);
  margin-bottom: var(--space-4);
}

.modal-features ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.modal-features li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.modal-features svg {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.modal-price {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
  padding: var(--space-4);
  background: rgba(212, 165, 116, 0.1);
  border-radius: var(--radius-lg);
}

.modal-price .price-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.modal-price .price-value {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-primary);
}

.btn-full {
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .rooms-grid {
    grid-template-columns: 1fr;
  }
  
  .room-features {
    grid-template-columns: 1fr;
  }
  
  .modal-features ul {
    grid-template-columns: 1fr;
  }
}
</style>

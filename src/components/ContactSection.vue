<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Form -->
        <div class="contact-form-wrapper" data-aos="fade-right">
          <span class="section-label">Get in Touch</span>
          <h2>Book Your <span class="text-gradient">Stay</span></h2>
          <p>Fill out the form below and our team will get back to you within 24 hours.</p>
          
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  class="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  class="form-input"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
              <div class="form-group">
                <label for="room" class="form-label">Room Type</label>
                <select id="room" v-model="form.room" class="form-select">
                  <option value="">Select a room</option>
                  <option value="deluxe">Deluxe King Room - $95/night</option>
                  <option value="executive">Executive Suite - $145/night</option>
                  <option value="family">Family Suite - $175/night</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="checkin" class="form-label">Check-in Date</label>
                <input 
                  type="date" 
                  id="checkin" 
                  v-model="form.checkin"
                  class="form-input"
                  :min="minDate"
                  required
                />
              </div>
              <div class="form-group">
                <label for="checkout" class="form-label">Check-out Date</label>
                <input 
                  type="date" 
                  id="checkout" 
                  v-model="form.checkout"
                  class="form-input"
                  :min="form.checkin || minDate"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="guests" class="form-label">Number of Guests</label>
              <select id="guests" v-model="form.guests" class="form-select">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Special Requests</label>
              <textarea 
                id="message" 
                v-model="form.message"
                class="form-textarea"
                placeholder="Any special requests or questions?"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full" :disabled="isSubmitting">
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>
                Send Booking Request
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                </svg>
              </span>
            </button>
          </form>

          <!-- Success Message -->
          <div class="success-message" v-if="submitted">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <div>
              <strong>Thank you for your request!</strong>
              <p>We'll be in touch within 24 hours to confirm your booking.</p>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="contact-info" data-aos="fade-left">
          <div class="info-card glass-card">
            <div class="info-header">
              <h3>Contact Information</h3>
              <p>Reach out to us directly or visit our guest house in Accra.</p>
            </div>
            
            <div class="info-list">
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="info-content">
                  <strong>Address</strong>
                  <p>123 Airport Residential Area<br>Accra, Ghana</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <strong>Phone</strong>
                  <p>+233 XX XXX XXXX<br>+233 XX XXX XXXX</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="info-content">
                  <strong>Email</strong>
                  <p>info@humblegrace.com<br>bookings@humblegrace.com</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div class="info-content">
                  <strong>Hours</strong>
                  <p>Reception: 24/7<br>Check-in: 2:00 PM | Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div class="map-wrapper glass-card">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.143551398974!2d-0.23419672564485444!3d5.692388332264452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f8bc37c8a3b%3A0xd5624343759e54c3!2sHumble%20Grace%20Guest%20House!5e0!3m2!1sen!2sgh!4v1768088178007!5m2!1sen!2sgh" 
            width="100%" 
            height="450" 
            style="border:0; border-radius: 12px; display: block;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  room: '',
  checkin: '',
  checkout: '',
  guests: '2',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitting.value = false
  submitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    submitted.value = false
    form.value = {
      name: '',
      email: '',
      phone: '',
      room: '',
      checkin: '',
      checkout: '',
      guests: '2',
      message: ''
    }
  }, 5000)
}
</script>

<style scoped>
.contact {
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-12);
  align-items: start;
}

/* Form Wrapper */
.contact-form-wrapper h2 {
  margin-bottom: var(--space-4);
}

.contact-form-wrapper > p {
  margin-bottom: var(--space-8);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.btn-full {
  width: 100%;
  margin-top: var(--space-4);
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin-left: var(--space-2);
}

/* Success Message */
.success-message {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: var(--radius-lg);
  margin-top: var(--space-6);
}

.success-message svg {
  width: 48px;
  height: 48px;
  color: #4CAF50;
  flex-shrink: 0;
}

.success-message strong {
  display: block;
  color: #4CAF50;
  margin-bottom: var(--space-1);
}

.success-message p {
  margin: 0;
  font-size: var(--text-sm);
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.info-card {
  padding: var(--space-8);
}

.info-header {
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-gray-200);
}

.info-header h3 {
  margin-bottom: var(--space-2);
}

.info-header p {
  font-size: var(--text-sm);
  margin: 0;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.info-item {
  display: flex;
  gap: var(--space-4);
}

.info-icon {
  width: 48px;
  height: 48px;
  background: rgba(212, 165, 116, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  flex-shrink: 0;
}

.info-icon svg {
  width: 24px;
  height: 24px;
}

.info-content strong {
  display: block;
  font-size: var(--text-sm);
  margin-bottom: var(--space-1);
  color: var(--text-primary);
}

.info-content p {
  font-size: var(--text-sm);
  margin: 0;
  line-height: 1.6;
}

/* Social Links */
.social-links {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  width: 44px;
  height: 44px;
  background: rgba(212, 165, 116, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Map */
.map-wrapper {
  overflow: hidden;
}

.map-placeholder {
  height: 200px;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  text-align: center;
}

.map-placeholder svg {
  width: 48px;
  height: 48px;
  margin-bottom: var(--space-3);
  opacity: 0.7;
}

.map-placeholder p {
  font-weight: 500;
  margin-bottom: var(--space-1);
  color: var(--color-white);
}

.map-placeholder span {
  font-size: var(--text-sm);
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .info-card {
    padding: var(--space-6);
  }
}
</style>

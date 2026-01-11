<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer -->
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand" data-aos="fade-up">
          <a href="#" class="logo">
            <div class="logo-icon">
              <span>HG</span>
            </div>
            <div class="logo-text">
              <span class="logo-name">Humble Grace</span>
              <span class="logo-tagline">Guest House</span>
            </div>
          </a>
          <p>
            Experience authentic Ghanaian hospitality in the heart of Accra. 
            Your comfort is our priority.
          </p>
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
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links" data-aos="fade-up" data-aos-delay="100">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero" @click.prevent="scrollTo('#hero')">Home</a></li>
            <li><a href="#about" @click.prevent="scrollTo('#about')">About Us</a></li>
            <li><a href="#rooms" @click.prevent="scrollTo('#rooms')">Rooms</a></li>
            <li><a href="#amenities" @click.prevent="scrollTo('#amenities')">Amenities</a></li>
            <li><a href="#gallery" @click.prevent="scrollTo('#gallery')">Gallery</a></li>
            <li><a href="#contact" @click.prevent="scrollTo('#contact')">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-links" data-aos="fade-up" data-aos-delay="200">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Airport Shuttle</a></li>
            <li><a href="#">Room Service</a></li>
            <li><a href="#">Laundry</a></li>
            <li><a href="#">Tour Arrangement</a></li>
            <li><a href="#">Event Hosting</a></li>
            <li><a href="#">Car Rental</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter" data-aos="fade-up" data-aos-delay="300">
          <h4>Newsletter</h4>
          <p>Subscribe for exclusive offers and travel tips.</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input 
              type="email" 
              v-model="email"
              placeholder="Your email address"
              class="newsletter-input"
              required
            />
            <button type="submit" class="newsletter-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22,2 15,22 11,13 2,9 22,2"/>
              </svg>
            </button>
          </form>
          <p class="newsletter-note" v-if="subscribed">
            ✓ Thank you for subscribing!
          </p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ currentYear }} Humble Grace Guest House. All rights reserved.</p>
        </div>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>

    <!-- Scroll to Top -->
    <button 
      class="scroll-top" 
      :class="{ 'visible': showScrollTop }"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="18,15 12,9 6,15"/>
      </svg>
    </button>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const email = ref('')
const subscribed = ref(false)
const showScrollTop = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const scrollTo = (selector) => {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const subscribeNewsletter = () => {
  subscribed.value = true
  email.value = ''
  
  setTimeout(() => {
    subscribed.value = false
  }, 3000)
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.footer {
  background: var(--color-dark);
  color: var(--color-light);
  padding-top: var(--space-20);
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: var(--space-12);
  padding-bottom: var(--space-16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Brand */
.footer-brand .logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.logo-icon {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--text-lg);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--text-lg);
  color: var(--color-light);
  line-height: 1.2;
}

.logo-tagline {
  font-size: var(--text-xs);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-brand > p {
  color: var(--color-gray-400);
  margin-bottom: var(--space-6);
  line-height: 1.7;
}

.social-links {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-light);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

/* Links */
.footer-links h4 {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--space-6);
  color: var(--color-light);
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-links a {
  color: var(--color-gray-400);
  transition: all var(--transition-fast);
  display: inline-block;
}

.footer-links a:hover {
  color: var(--color-primary);
  transform: translateX(5px);
}

/* Newsletter */
.footer-newsletter h4 {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--space-4);
  color: var(--color-light);
}

.footer-newsletter > p {
  color: var(--color-gray-400);
  margin-bottom: var(--space-4);
  font-size: var(--text-sm);
}

.newsletter-form {
  display: flex;
  gap: var(--space-2);
}

.newsletter-input {
  flex: 1;
  padding: var(--space-3) var(--space-4);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  color: var(--color-light);
  font-size: var(--text-sm);
}

.newsletter-input::placeholder {
  color: var(--color-gray-400);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.newsletter-btn {
  width: 48px;
  height: 48px;
  background: var(--color-primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: all var(--transition-fast);
}

.newsletter-btn:hover {
  background: var(--color-primary-dark);
  transform: scale(1.05);
}

.newsletter-btn svg {
  width: 20px;
  height: 20px;
}

.newsletter-note {
  margin-top: var(--space-3);
  font-size: var(--text-sm);
  color: #4CAF50;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-8) 0;
}

.copyright p {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: var(--space-6);
}

.footer-legal a {
  font-size: var(--text-sm);
  color: var(--color-gray-400);
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: var(--color-primary);
}

/* Scroll to Top */
.scroll-top {
  position: fixed;
  bottom: var(--space-8);
  right: var(--space-8);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all var(--transition-base);
  z-index: var(--z-sticky);
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.scroll-top:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
}

.scroll-top svg {
  width: 24px;
  height: 24px;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
  
  .footer-brand {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-brand {
    grid-column: span 1;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }
  
  .footer-legal {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .scroll-top {
    bottom: var(--space-4);
    right: var(--space-4);
  }
}
</style>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="container navbar-container">
      <!-- Logo -->
      <a href="#" class="logo" @click.prevent="scrollToTop">
        <div class="logo-icon">
          <span>HG</span>
        </div>
        <div class="logo-text">
          <span class="logo-name">Humble Grace</span>
          <span class="logo-tagline">Guest House</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.id">
          <a :href="link.href" @click.prevent="scrollToSection(link.href)">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Actions -->
      <div class="nav-actions">
        <!-- Theme Toggle -->
        <button class="theme-toggle" @click="$emit('toggle-theme')" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <svg v-if="isDark" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- Book Now Button -->
        <a href="#contact" class="btn btn-primary nav-cta" @click.prevent="scrollToSection('#contact')">
          Book Now
        </a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" @click="toggleMobileMenu" :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
          <span class="hamburger" :class="{ 'active': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <a :href="link.href" @click.prevent="scrollToSection(link.href); toggleMobileMenu()">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  isDark: Boolean
})

defineEmits(['toggle-theme'])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'rooms', label: 'Rooms', href: '#rooms' },
  { id: 'amenities', label: 'Amenities', href: '#amenities' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  padding: var(--space-4) 0;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
  padding: var(--space-3) 0;
}

[data-theme="dark"] .navbar.scrolled {
  background: rgba(26, 26, 46, 0.9);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
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
  color: var(--text-primary);
  line-height: 1.2;
}

.logo-tagline {
  font-size: var(--text-xs);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Nav Links */
.nav-links {
  display: flex;
  gap: var(--space-1);
}

.nav-links a {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.nav-links a:hover {
  color: var(--color-primary);
  background: rgba(212, 165, 116, 0.1);
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.theme-toggle {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  color: var(--text-primary);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.theme-toggle:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: rotate(180deg);
}

.theme-toggle .icon {
  width: 20px;
  height: 20px;
}

.nav-cta {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
}

.hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  padding: var(--space-6);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
  transition: all var(--transition-base);
}

.mobile-menu.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.mobile-menu a {
  display: block;
  padding: var(--space-4);
  font-weight: 500;
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.mobile-menu a:hover {
  background: rgba(212, 165, 116, 0.1);
  color: var(--color-primary);
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .nav-cta {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo-text {
    display: none;
  }
}
</style>

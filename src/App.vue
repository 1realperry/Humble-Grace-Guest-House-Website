<template>
  <div id="app" :data-theme="isDark ? 'dark' : 'light'">
    <NavBar :isDark="isDark" @toggle-theme="toggleTheme" />
    <HeroSection />
    <AboutSection />
    <RoomsSection />
    <AmenitiesSection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import RoomsSection from './components/RoomsSection.vue'
import AmenitiesSection from './components/AmenitiesSection.vue'
import GallerySection from './components/GallerySection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>

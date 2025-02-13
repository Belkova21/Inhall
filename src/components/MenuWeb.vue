<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const activeMenuIndex = ref(0);
const route = useRoute();

const menuItems = [
  { name: "Domov", path: "/" },
  { name: "Produkty", path: "/products" },
  { name: "Služby", path: "/services" },
  { name: "Kontakt", path: "/contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const setActiveMenuItem = (index, closeMenu = false) => {
  activeMenuIndex.value = index;
  if (closeMenu) toggleMenu();
};

// Watch for route changes and update active menu index accordingly
watch(
  () => route.path,
  (newPath) => {
    const index = menuItems.findIndex((item) => item.path === newPath);
    if (index !== -1) {
      activeMenuIndex.value = index;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="menu">
    <!-- Logo -->
    <router-link to="/" class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </router-link>

    <!-- Desktop Menu Links -->
    <nav v-if="!isMenuOpen" class="menu-links">
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        class="menuLink"
        :class="{ active: activeMenuIndex === index }"
        @click="setActiveMenuItem(index)"
      >
        {{ item.name }}
      </router-link>
    </nav>

    <!-- Language Selection -->
    <div class="localization">
      <!--      <button class="localization-button" @click="toggleLanguageDropdown">-->
      <!--        <span class="flag-icon flag-icon-sk"></span> SK-->
      <!--      </button>-->
      <!--      <div v-if="showLanguageDropdown" class="dropdown">-->
      <!--        <button class="dropdown-item">EN</button>-->
      <!--        <button class="dropdown-item">SK</button>-->
      <!--        <button class="dropdown-item">CZ</button>-->
      <!--      </div>-->
    </div>

    <!-- Mobile Menu Button -->
    <button class="menu-button" @click="toggleMenu">☰</button>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <button class="close-button" @click="toggleMenu">✕</button>
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        class="menuLink"
        :class="{ active: activeMenuIndex === index }"
        @click="setActiveMenuItem(index, true)"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo img {
  height: 50px;
  cursor: pointer;
}

.menu-links {
  display: flex;
  gap: 40px;
}

.menuLink {
  font-size: 18px;
  font-weight: 600;
  color: #252636;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.menuLink:hover {
  transform: scale(1.1);
}

.menuLink.active {
  color: #ffc300;
}

.menu-button {
  display: none;
  background: none;
  font-size: 24px;
  border: none;
  cursor: pointer;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 1000;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  font-size: 24px;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-links {
    display: none;
  }
  .menu-button {
    display: block;
  }
}

/* Localization Dropdown */
.localization {
  position: relative;
}

.localization-button {
  font-size: 18px;
  font-weight: 600;
  color: #252636;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.localization-button:hover {
  transform: scale(1.1);
}

.flag-icon {
  margin-right: 8px;
  font-size: 1.2rem;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 8px;
  z-index: 1001;
}

.dropdown-item {
  padding: 10px 20px;
  font-size: 16px;
  color: #252636;
  text-align: left;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f4f4f4;
}
</style>

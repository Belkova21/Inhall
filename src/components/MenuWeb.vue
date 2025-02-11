<script setup>
import { ref } from "vue";

const showMenu = ref(false);
// const showLanguageDropdown = ref(false);
const activeMenuItem = ref("O nás");

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  document.body.style.overflow = showMenu.value ? "hidden" : ""; // Disable scrolling when menu is open
};

// const toggleLanguageDropdown = () => {
//   showLanguageDropdown.value = !showLanguageDropdown.value;
// };

const setActiveMenuItem = (item) => {
  activeMenuItem.value = item;
};

const setActiveMenuMobilItem = (item) => {
  activeMenuItem.value = item;
  toggleMenu(); // Close menu after selecting an item
};
</script>

<template>
  <div class="menu">
    <!-- Logo -->
    <router-link to="/" class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </router-link>

    <!-- Menu Links -->
    <div v-if="!showMenu" class="menu-links">
      <router-link
        to="/"
        class="menuLink"
        :class="{ active: activeMenuItem === 'Domov' }"
        @click="setActiveMenuItem('Domov')"
      >
        Domov
      </router-link>
      <!--      <router-link-->
      <!--        to="/"-->
      <!--        class="menuLink"-->
      <!--        :class="{ active: activeMenuItem === 'O nás' }"-->
      <!--        @click="setActiveMenuItem('O nás')"-->
      <!--      >-->
      <!--        O nás-->
      <!--      </router-link>-->
      <router-link
        to="/products"
        class="menuLink"
        :class="{ active: activeMenuItem === 'Produkty' }"
        @click="setActiveMenuItem('Produkty')"
      >
        Produkty
      </router-link>
      <router-link
        to="/services"
        class="menuLink"
        :class="{ active: activeMenuItem === 'Služby' }"
        @click="setActiveMenuItem('Služby')"
      >
        Služby
      </router-link>
      <router-link
        to="/contact"
        class="menuLink"
        :class="{ active: activeMenuItem === 'Kontakt' }"
        @click="setActiveMenuItem('Kontakt')"
      >
        Kontakt
      </router-link>
    </div>

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

    <!-- Fullscreen Mobile Menu -->
    <div v-if="showMenu" class="mobile-menu">
      <button class="close-button" @click="toggleMenu">✕</button>
      <router-link
        to="/"
        class="menuLink"
        :class="{ active: activeMenuItem === 'O nás' }"
        @click="setActiveMenuMobilItem('O nás')"
      >
        O nás
      </router-link>
      <router-link
        to="/products"
        class="menuLink"
        :class="{ active: activeMenuItem === 'Produkty' }"
        @click="setActiveMenuMobilItem('Produkty')"
      >
        Produkty
      </router-link>
      <router-link
        to="/"
        class="menuLink"
        :class="{ active: activeMenuItem === 'Služby' }"
        @click="setActiveMenuMobilItem('Služby')"
      >
        Služby
      </router-link>
      <router-link
        to="/"
        class="menuLink"
        :class="{ active: activeMenuItem === 'Kontakt' }"
        @click="setActiveMenuMobilItem('Kontakt')"
      >
        Kontakt
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Main Menu */
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white; /* White background */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Shadow */
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Logo */
.logo img {
  height: 50px;
  width: auto;
  cursor: pointer;
  margin-right: -90px;
}

/* Menu Links */
.menu-links {
  display: flex;
  gap: 40px;
}

.menuLink {
  font-size: 18px;
  font-weight: 600;
  color: #252636; /* Text color */
  text-decoration: none;
  transition: transform 0.3s ease; /* Hover effect */
}

.menuLink:hover {
  transform: scale(1.1);
}

.menuLink.active {
  color: #ffc300; /* Highlight active menu item */
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

/* Mobile Menu Button */
.menu-button {
  display: none;
  background-color: transparent;
  font-size: 24px;
  border: none;
  cursor: pointer;
}

.menu-button:hover {
  transform: scale(1.2);
}

/* Mobile Fullscreen Menu */
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
  overflow: hidden; /* Prevent scrolling */
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.close-button:hover {
  transform: scale(1.2);
}

.mobile-menu .menuLink {
  font-size: 24px;
  color: #252636;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.mobile-menu .menuLink:hover {
  transform: scale(1.1);
}

.mobile-menu .menuLink.active {
  color: #ffc300; /* Highlight active menu item */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .menu-links {
    display: none;
  }

  .menu-button {
    display: block;
  }

  .localization {
    display: none;
  }
}
</style>

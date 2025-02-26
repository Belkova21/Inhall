<template>
  <div class="page">
    <div class="image-container">
      <img
        :src="require('@/assets/option1.png')"
        alt="Inhall"
        class="main-img"
      />
      <div class="main-title">
        <h1>Využívame priestor efektívne</h1>
        <router-link to="/contact" class="cta-button">
          Získajte cenovú ponuku
        </router-link>
      </div>
    </div>

    <div class="three-columns">
      <a href="/products" class="column">
        <div class="column-content">
          <h2>Vstavky do hál</h2>
          <img :src="require('@/assets/vstavky.png')" alt="Inhall" />
          <p>
            Oddelené priestory v hale umožňujú efektívnejšie využitie dostupného
            priestoru. Vytvorte ideálne pracovné prostredie pre vaše potreby.
          </p>
          <router-link to="/products" class="info-button"
            >Viac informácií</router-link
          >
        </div>
      </a>
      <a href="/services" class="column">
        <div class="column-content">
          <h2>Interiérové priečky</h2>
          <img :src="require('@/assets/zariadenie.png')" alt="Inhall" />
          <p>
            Pomáhame vám vytvoriť moderné a funkčné interiérové priečky podľa
            vašich predstáv, od návrhu až po realizáciu.
          </p>
          <router-link to="/services" class="info-button"
            >Viac informácií</router-link
          >
        </div>
      </a>
      <a href="/services" class="column">
        <div class="column-content">
          <h2>Zariadenia priestorov</h2>
          <img :src="require('@/assets/kancelaria.png')" alt="Inhall" />
          <p>
            Kompletné zariadenia priestorov pre profesionálny vzhľad a maximálnu
            funkčnosť. Zmodernizujte váš priestor s našou pomocou.
          </p>
          <router-link to="/services" class="info-button"
            >Viac informácií</router-link
          >
        </div>
      </a>
    </div>
    <div v-if="showDialog" class="modal-overlay" @click="closeDialog">
      <div class="modal-content" @click.stop>
        <h2>Vyplňte formulár na cenovú ponuku</h2>
        <form @submit.prevent="sendEmail">
          <label for="name">Meno:</label>
          <input type="text" id="name" v-model="form.name" required />

          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="form.email" required />

          <label for="message">Správa:</label>
          <textarea id="message" v-model="form.message" required></textarea>

          <button type="submit" class="submit-button">Odoslať</button>
        </form>
        <button class="close-button" @click="closeDialog">Zatvoriť</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showDialog = ref(false);
const form = ref({
  name: "",
  email: "",
  message: "",
});

const closeDialog = () => {
  showDialog.value = false;
};

const sendEmail = () => {
  const subject = encodeURIComponent("Cenová ponuka");
  const body = encodeURIComponent(
    `Meno: ${form.value.name}\nE-mail: ${form.value.email}\nSpráva: ${form.value.message}`
  );
  window.location.href = `mailto:inhall@inhall.sk?subject=${subject}&body=${body}`;
};
</script>
<style scoped>
/* General styles */
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #252636; /* Dark Blue from the logo */
}

/* Hero section */
.image-container {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start; /* Align content to the left */
  align-items: center;
}

.main-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the container */
  object-position: center; /* Align the image to the left */
  filter: brightness(0.7);
}

.main-title {
  position: absolute;
  width: 100%;
  text-align: center;
  color: white;
  z-index: 1;
}

.main-title h1 {
  font-size: clamp(
    2rem,
    5vw,
    4rem
  ); /* Dynamically resize between 2rem and 4rem */
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
}

.cta-button {
  background: #252636; /* Solid Dark Blue */
  border: none;
  color: white;
  font-size: clamp(1rem, 2vw, 1.2rem); /* Dynamic resizing for button text */
  padding: clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 30px); /* Dynamic padding */
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

/* Columns section */
.three-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px 20px;
  margin: 0 auto;
  max-width: 1200px;
}

.column {
  text-decoration: none;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  position: relative;
}

.column:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.column:hover .info-button {
  text-decoration: none;
  background: #a4c5ed; /* Light Blue on hover */
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.column-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.column img {
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.column h2 {
  font-size: clamp(
    1.2rem,
    2.5vw,
    2rem
  ); /* Dynamic resizing for column headers */
  margin-bottom: 15px;
  color: #252636; /* Dark Blue */
}

.column p {
  flex-grow: 1;
  font-size: clamp(
    0.8rem,
    1.5vw,
    1rem
  ); /* Dynamic resizing for column paragraphs */
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
}

.info-button {
  --webkit-text-stroke-width: thin;
  text-decoration: none;
  background: #252636; /* Solid Dark Blue */
  border: none;
  color: white;
  font-size: clamp(0.9rem, 1.5vw, 1rem); /* Dynamic resizing for button text */
  padding: clamp(8px, 1.5vw, 10px) clamp(15px, 4vw, 20px); /* Dynamic padding */
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.info-button:hover {
  text-decoration: none;
  background: #a4c5ed; /* Light Blue on hover */
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive styles */
@media (max-width: 768px) {
  .three-columns {
    grid-template-columns: 1fr; /* Stack columns vertically */
  }

  .main-title h1 {
    font-size: clamp(
      1.5rem,
      4vw,
      3rem
    ); /* Reduce font size for smaller screens */
  }

  .cta-button {
    font-size: clamp(
      0.9rem,
      1.5vw,
      1rem
    ); /* Adjust button size for smaller screens */
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  position: relative;
}

.modal-content h2 {
  margin-bottom: 20px;
}

.modal-content label {
  display: block;
  margin: 10px 0 5px;
}

.modal-content input,
.modal-content textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background: #252636;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background: #3e4c98;
}

.close-button {
  background: #ccc;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-button:hover {
  background: #999;
}
</style>

<template>
  <div class="contact-page">
    <div class="contact-container">
      <div class="contact-info">
        <h2 class="contact-title">Kontaktujte nás</h2>
        <p><strong>Názov:</strong> INHALL s.r.o.</p>
        <p><strong>DIČ:</strong> 2121930756</p>
        <p><strong>IČO:</strong> 55214134</p>
        <p><strong>Adresa:</strong> Centrum 26, 017 01 Považská Bystrica</p>
        <p><strong>Email:</strong> inhall@inhall.sk</p>
        <p><strong>Telefón:</strong> +421 902 672 525, +421 944 224 282</p>
      </div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4332024460636!2d18.44782411567565!3d49.11756407911725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47148b3df57b5433%3A0x8232823b205da3f8!2sINHALL%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1707645999453!5m2!1ssk!2ssk"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <!--    <div class="contact-form-container">-->
    <!--      <h2 class="form-title">Napíšte nám</h2>-->
    <!--      <form class="contact-form">-->
    <!--        <label for="name">Meno</label>-->
    <!--        <input type="text" id="name" name="name" required />-->

    <!--        <label for="email">E-mail</label>-->
    <!--        <input type="email" id="email" name="email" required />-->

    <!--        <label for="message">Správa</label>-->
    <!--        <textarea id="message" name="message" rows="5" required></textarea>-->

    <!--        <button type="submit" class="info-button">Odoslať</button>-->
    <!--      </form>-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 10%;
  background-color: #f5f7fa;
  align-items: center;
  text-align: left;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
}

.contact-info {
  width: 50%;
  font-size: 1.2rem;
  color: #252636;
}

.map-container {
  width: 50%;
}

.contact-form-container {
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-title {
  font-size: 2rem;
  color: #252636;
  margin-bottom: 10px;
}

.contact-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
  background: #eef2f7;
  padding: 15px;
  border-radius: 10px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.contact-form label {
  font-size: 1rem;
  color: #252636;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
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

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    gap: 30px;
  }
  .contact-info,
  .map-container {
    width: 100%;
  }
}
</style>
<script setup lang="ts"></script>

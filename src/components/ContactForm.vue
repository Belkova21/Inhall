<script setup></script>

<template>
  <form @submit.prevent="sendEmail">
    <label for="name">Meno:</label>
    <input type="text" id="name" v-model="form.name" required />

    <label for="email">E-mail:</label>
    <input type="email" id="email" v-model="form.email" required />

    <label for="message">Správa:</label>
    <textarea id="message" v-model="form.message" required></textarea>

    <button type="submit" class="submit-button">Odoslať</button>
  </form>
</template>

<style scoped></style>

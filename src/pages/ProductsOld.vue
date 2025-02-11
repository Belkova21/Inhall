<template>
  <div class="products">
    <div
      class="product-container"
      v-for="(product, index) in products"
      :key="index"
    >
      <!-- Nadpis a zoznam vedľa obrázka -->
      <div class="product-row">
        <div class="product-title-list">
          <h1>{{ product.title }}</h1>
          <ul v-if="product.features">
            <li v-for="(feature, fIndex) in product.features" :key="fIndex">
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="product-image">
          <img :src="product.image" :alt="product.title" />
        </div>
      </div>

      <!-- Text pod nimi -->
      <div class="product-description">
        <p v-for="(paragraph, pIndex) in product.description" :key="pIndex">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import glassVstavok from "../assets/GLASS-vstavok.jpg";
import sdkVstavok from "../assets/SDK-vstavok.jpg";
import variabilVstavok from "../assets/VARIABIL-vstavok.jpg";

const products = ref([
  {
    title: "SDK Vstávok – Najpopulárnejší u našich zákazníkov",
    description: [
      "SDK Vstávok patrí medzi naše najpredávanejšie produkty a je u zákazníkov mimoriadne obľúbený. Ide o vstávok vyrobený zo sadrokartónu v kombinácii s CW a UW profilmi, ktoré zaručujú vysokú pevnosť, odolnosť a dlhú životnosť.",
      "Tento vstávok je ideálnou voľbou pre moderné interiéry, kde je kladený dôraz na funkčnosť a estetiku. Jednoduchá montáž a všestranné využitie ho predurčujú na použitie v domácnostiach, kanceláriách, ale aj v komerčných priestoroch.",
      "Vďaka svojim vlastnostiam si SDK Vstávok získal dôveru širokej škály zákazníkov. Ak hľadáte spoľahlivé riešenie, ktoré skvele zapadne do vášho priestoru, SDK Vstávok je tou správnou voľbou!",
    ],
    features: [
      "Vysoká kvalita spracovania",
      "Najlepšia cena",
      "Moderný a čistý dizajn",
      "Možnosť prispôsobenia rôznym potrebám",
    ],
    image: sdkVstavok,
  },
  {
    title: "GLASS Vstávok – Moderné a elegantné riešenie",
    description: [
      "GLASS Vstávok predstavuje dokonalé spojenie hliníkových profilov a sklenenej výplne, vďaka čomu ponúka moderný, elegantný a nadčasový vzhľad. Tento produkt je ideálny pre tých, ktorí hľadajú svetlé, priestranné a vizuálne atraktívne riešenie do svojich interiérov.",
      "GLASS Vstávok je skvelou voľbou pre kancelárie, obchodné priestory, ale aj moderné domácnosti, kde je dôležité zachovať otvorený priestor, zároveň však oddeliť jednotlivé zóny.\n" +
        "Tento vstávok ponúka ideálnu kombináciu praktickosti a estetického zážitku. Ak hľadáte štýlový a praktický doplnok do vášho interiéru, GLASS Vstávok je riešenie, ktoré si obľúbite!",
    ],
    features: [
      "Kombinácia hliníkových profilov a kvalitného skla",
      "Úplne presklený dizajn",
      "Estetický a funkčný doplnok pre moderné interiéry",
      "Jednoduchá montáž a variabilita využitia",
    ],
    image: glassVstavok,
  },
  {
    title: "VARIABIL Vstávok – Univerzálne riešenie pre každý priestor",
    description: [
      "VARIABIL Vstávok je skutočne všestranný produkt, ktorý kombinuje hliníkové profily s pevnou výplňou. Tento vstávok je navrhnutý tak, aby ponúkol maximálnu flexibilitu a funkčnosť, pričom zároveň zaisťuje moderný a elegantný vzhľad.",
      "GLASS Vstávok je skvelou voľbou pre kancelárie, obchodné priestory, ale aj moderné domácnosti, kde je dôležité zachovať otvorený priestor, zároveň však oddeliť jednotlivé zóny.\n" +
        "Tento vstávok ponúka ideálnu kombináciu praktickosti a estetického zážitku. Ak hľadáte štýlový a praktický doplnok do vášho interiéru, GLASS Vstávok je riešenie, ktoré si obľúbite!",
    ],
    features: [
      "Odolná konštrukcia z hliníkových profilov",
      "Pevná plná výplň, poskytujúca vysokú mieru súkromia a izolácie",
      "Variabilita dizajnu – možnosť prispôsobiť vzhľad podľa potrieb",
    ],
    image: variabilVstavok,
  },
]);
</script>

<style scoped>
.products {
  padding: 4vw 2vw;
  font-family: "Roboto", sans-serif;
  background-color: #f9f9f9;
  color: #252636;
  max-width: 1500px;
  margin: 0 auto;
}

.product-container {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 3vw;
  padding: 2vw;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.product-container:hover {
  transform: translateY(-0.5vw);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.product-row {
  display: flex;
  gap: 3vw;
  margin-bottom: 2vw;
}

.product-title-list {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title-list h1 {
  font-size: 1.8vw;
  font-weight: bold;
  color: #252636;
  margin-bottom: 1.5vw;
  text-align: left;
}

.product-title-list ul {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding-left: 1.5vw;
  font-size: 1vw;
  color: #555;
  line-height: 3;
}

.product-title-list ul li {
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 0;
  position: relative;
  padding-left: 2vw;
}

.product-title-list ul li::before {
  content: "\2713";
  margin-right: 0.5vw;
  color: #252636;
  font-size: 1.2vw;
  line-height: 1;
}

.product-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  max-width: 100%;
  border-radius: 1vw;
  object-fit: cover;
  box-shadow: 0 0.4vw 1vw rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
/*
.product-image img:hover {
  transform: scale(1.05);
}
*/
.product-description {
  margin-top: 2vw;
  font-size: 1.1vw;
  line-height: 1.8;
  color: #555;
  text-align: justify;
}

@media (max-width: 768px) {
  .product-row {
    flex-direction: column;
  }

  .product-image img {
    max-width: 100%;
  }

  .product-title-list h1 {
    font-size: 2.5vw;
  }

  .product-title-list ul {
    font-size: 1.5vw;
  }

  .product-description {
    font-size: 1.4vw;
  }
}

/* Button styles */
button {
  background: #252636;
  color: white;
  border: none;
  padding: 1vw 2vw;
  border-radius: 0.5vw;
  font-size: 1vw;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

button:hover {
  background: #a4c5ed;
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
</style>

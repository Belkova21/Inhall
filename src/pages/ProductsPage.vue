<template>
  <div class="image-container">
    <img :src="MainPicture" alt="Inhall" class="main-img" />
    <div class="main-title">
      <router-link to="/contact" class="cta-button">
        Získajte cenovú ponuku
      </router-link>
    </div>
  </div>

  <div class="services">
    <div
      class="service-container"
      v-for="(service, index) in services"
      :key="index"
      :class="{
        'reverse-layout': (index + 1) % 2 === 0,
        'blue-container': (index + 1) % 2 === 0,
      }"
    >
      <!-- Service Content -->
      <div class="service-content">
        <div class="service-description">
          <h2 class="service-title">{{ service.title }}</h2>

          <component :is="service.description" />
        </div>
        <div class="service-image">
          <img :src="service.image" :alt="service.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h, ref } from "vue";
import MainPicture from "@/assets/ProductsMain.png";
import sdkVstavok from "@/assets/hladky.jpg";
import glassVstavok from "@/assets/skelenny.jpg";
import variabilVstavok from "@/assets/oddeleny.jpg";
import DoubleVstavok from "@/assets/dvojposchodovy.jpg";

const services = ref([
  {
    title: "SDK vstavok – Najpopulárnejší u našich zákazníkov",
    description: () =>
      h("div", [
        h(
          "p",
          "SDK vstavok patrí medzi naše najpredávanejšie produkty a je u zákazníkov mimoriadne obľúbený. Ide o vstavok vyrobený zo sadrokartónu v kombinácii s CW a UW profilmi, ktoré zaručujú vysokú pevnosť, odolnosť a dlhú životnosť. " +
            "Je ideálnou voľbou pre moderné priestory, kde je kladený dôraz na funkčnosť a efektivitu. Vďaka jednoduchej montáži a všestrannému využitiu je vhodný najmä pre haly alebo logistické centrá."
        ),
        h("p", "SDK vstavok ponúka: "),
        h("ul", [
          h("li", "Vysokú kvalitu spracovania"),
          h("li", "Najlepšia cena"),
          h("li", "Moderný a čistý dizajn"),
          h("li", "Možnosť prispôsobenia rôznym potrebám"),
        ]),
        h(
          "p",
          "Vďaka jeho vlastnostiam si získal dôveru širokej škály zákazníkov. Ak hľadáte spoľahlivé riešenie, ktoré skvele zapadne do vášho priestoru, SDK vstavok je tou správnou voľbou!"
        ),
      ]),

    image: sdkVstavok,
  },
  {
    title: "GLASS Vstávok – Moderné a elegantné riešenie",
    description: () =>
      h("div", [
        h(
          "p",
          "GLASS Vstávok predstavuje dokonalé spojenie hliníkových profilov a sklenenej výplne, vďaka čomu ponúka moderný, elegantný a nadčasový vzhľad. Tento produkt je ideálny pre tých, ktorí hľadajú svetlé, priestranné a vizuálne atraktívne riešenie do svojich interiérov. " +
            "Je skvelou voľbou pre moderné kancelárie a obchodné priestory, kde je dôležité zachovať otvorený priestor, zároveň však oddeliť jednotlivé zóny."
        ),
        h("p", "Hlavné prednosti GLASS Vstávku:"),
        h("ul", [
          h("li", "Kombinácia hliníkových profilov a kvalitného skla"),
          h(
            "li",
            "Úplne presklený dizajn, ktorý zabezpečuje maximálny prienik svetla"
          ),
          h("li", "Estetický a funkčný doplnok pre moderné interiéry"),
          h("li", "Jednoduchá montáž a variabilita využitia"),
        ]),
        h(
          "p",
          "Tento vstavok ponúka ideálnu kombináciu praktického využitia priestoru a atraktívneho dizajnu. Ak hľadáte štýlový a praktický doplnok do vášho interiéru, GLASS vstavok je riešenie, ktoré si obľúbite!"
        ),
      ]),

    image: glassVstavok,
  },
  {
    title: "VARIABIL vstavok –  Riešenie pre každý priestor",
    description: () =>
      h("div", [
        h(
          "p",
          "VARIABIL vstavok je skutočne všestranný produkt, ktorý kombinuje hliníkové profily s pevnou výplňou. Tento vstavok je navrhnutý tak, aby ponúkol maximálnu flexibilitu a funkčnosť, pričom zároveň zaisťuje moderný a elegantný vzhľad. " +
            "Je ideálny pre kancelárie, skladové priestory alebo komerčné prevádzky, kde je potrebné dosiahnuť diskrétnosť alebo oddelenie priestorov. "
        ),
        h("p", "Hlavné výhody VARIABIL Vstávku:"),
        h("ul", [
          h("li", "Odolná konštrukcia z hliníkových profilov"),
          h(
            "li",
            "Pevná plná výplň, ktorá poskytuje vysokú mieru súkromia a izolácie"
          ),
          h(
            "li",
            "Variabilita dizajnu – možnosť prispôsobiť vzhľad podľa potrieb zákazníka"
          ),
        ]),
        h(
          "p",
          "Robustné prevedenie vstavku zabezpečuje dlhú životnosť a spoľahlivú funkčnosť v každom prostredí. " +
            "Ak hľadáte spoľahlivé a praktické riešenie, VARIABIL Vstávok je tou správnou voľbou pre váš interiér!"
        ),
      ]),

    image: variabilVstavok,
  },
  {
    title: "Dvojposchodové vstavky – Maximálne využitie priestoru",
    description: () =>
      h("div", [
        h(
          "p",
          "Pre tých, ktorí potrebujú efektívne a funkčné riešenie pre svoje priestory, ponúkame aj dvojposchodové vstavky. Toto praktické riešenie umožňuje maximálne využiť dostupnú plochu, pričom zachováva moderný a estetický dizajn." +
            "Dvojposchodové vstavky sú ideálne pre každého, kto chce optimalizovať využitie priestoru bez kompromisov na kvalite alebo estetike."
        ),
        h("p", "Výhody dvojposchodových vstávkov:"),
        h("ul", [
          h(
            "li",
            "Efektívne využitie priestoru – ideálne pre priestory, kde je potrebné vytvoriť dodatočné podlažie."
          ),
          h(
            "li",
            "Kvalitné materiály a pevná konštrukcia – naše vstávky sú vyrobené z robustných hliníkových profilov, CW a UW profilov alebo iných špičkových materiálov podľa zvoleného typu."
          ),
          h(
            "li",
            "Možnosť prispôsobenia – navrhneme a zrealizujeme riešenie presne podľa vašich potrieb, vrátane rozmerov, dizajnu a výplní (sadrokartón, sklo alebo pevná výplň)."
          ),
          h(
            "li",
            "Jednoduchá montáž a údržba – naše vstávky sú navrhnuté pre rýchlu inštaláciu a nenáročnú starostlivosť."
          ),
        ]),
        h(
          "p",
          " Nech už potrebujete viac skladovacieho miesta, oddelené pracovné zóny alebo multifunkčné priestory, dvojposchodové vstávky sú riešením, ktoré splní všetky vaše požiadavky!"
        ),
      ]),

    image: DoubleVstavok,
  },
]);
</script>

<style scoped>
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

/* Main container styles */
.services {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f4;
}

/* Service container styles */
.service-container {
  width: 100%;
  padding: 3rem 2rem;
  box-sizing: border-box;
  background: #fff;
  color: #555;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.service-container:nth-child(odd) {
  background-color: #ffffff;
}

.service-container:nth-child(even) {
  background-color: #252636;
}

.service-container.blue-container {
  color: white;
}

/* Title styles */
.service-title {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: bold;
  margin-bottom: 1rem;
  color: inherit;
  transition: color 0.3s ease;
}

/* Content styles */
.service-content {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.service-container.reverse-layout .service-content {
  flex-direction: row-reverse;
}

/* Image styles */
.service-image {
  flex: 1;
  text-align: center;
}

.service-image img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-image img:hover {
  transform: scale(1.05);
}

/* Description styles */
.service-description {
  flex: 2;
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  line-height: 1.8;
  color: inherit;
  text-align: justify;
}

/* Responsiveness */
@media (max-width: 768px) {
  .service-content {
    flex-wrap: wrap; /* Povolenie zalomenia na menších obrazovkách */
    flex-direction: column; /* Zoradenie prvkov pod seba */
    gap: 1rem; /* Zníženie medzier na menších obrazovkách */
  }

  .service-container.reverse-layout .service-content {
    flex-direction: column; /* Pre reverse-layout tiež pod seba */
  }

  .service-title {
    font-size: 1.8rem;
  }

  .service-description {
    font-size: 1rem;
  }

  .service-image img {
    max-width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .service-container {
    padding: 1.5rem;
  }

  .service-title {
    font-size: 1.5rem;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .service-image img {
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>

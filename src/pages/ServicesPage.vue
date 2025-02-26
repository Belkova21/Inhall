<!--<template>-->
<!--  <div class="page">-->
<!--    <div class="three-columns">-->
<!--      <a class="column">-->
<!--        <div class="column-content">-->
<!--          <h2>Grafické návrhy</h2>-->
<!--          <img src="../assets/navrh.png" alt="Inhall" />-->
<!--          <p>-->
<!--            Každý úspešný stavebný projekt začína kvalitným grafickým návrhom.-->
<!--            Kladieme dôraz na vaše potreby a požiadavky, aby sme vám priniesli-->
<!--            vizuálne atraktívne a funkčné riešenia, ktoré spĺňajú najvyššie-->
<!--            estetické aj technické štandardy. Naši skúsení dizajnéri vás prevedú-->
<!--            celým procesom – od úvodnej koncepcie až po finálnu realizáciu. S-->
<!--            naším profesionálnym a kreatívnym prístupom získate návrh, ktorý-->
<!--            nielen dobre vyzerá, ale aj dokonale funguje.-->
<!--          </p>-->
<!--        </div>-->
<!--      </a>-->
<!--      <a class="column">-->
<!--        <div class="column-content">-->
<!--          <h2>Realizácia</h2>-->
<!--          <img src="../assets/Realizacia.png" alt="Inhall" />-->
<!--          <p>-->
<!--            Úspešná realizácia projektu si vyžaduje skúsenosti, spoľahlivý tím a-->
<!--            kvalitné materiály. Vďaka našim dlhoročným skúsenostiam, odbornému-->
<!--            tímu a spolupráci s poprednými dodávateľmi na trhu vám zabezpečíme-->
<!--            vysoký štandard prevedenia. Počas celého procesu s vami konzultujeme-->
<!--            každý krok, aby výsledok presne zodpovedal vašim predstavám a-->
<!--            požiadavkám. S nami máte istotu, že váš projekt bude dokončený-->
<!--            precízne, efektívne a včas.-->
<!--          </p>-->
<!--        </div>-->
<!--      </a>-->
<!--      <a class="column">-->
<!--        <div class="column-content">-->
<!--          <h2>Zariadenie priestorov</h2>-->
<!--          <img src="../assets/kancelaria.png" alt="Inhall" />-->
<!--          <p>-->
<!--            Každý pracovný priestor by mal byť nielen funkčný, ale aj pohodlný a-->
<!--            reprezentatívny. Kladieme dôraz na vaše potreby a požiadavky, aby-->
<!--            sme vytvorili moderné, funkčné a pohodlné prostredie pre kancelárie,-->
<!--            vstupné priestory, zasadacie miestnosti, spoločenské priestory či-->
<!--            jedálne. Vďaka kombinácii kvalitných materiálov a premysleného-->
<!--            dizajnu vám pomôžeme vytvoriť priestory, ktoré spĺňajú vysoké-->
<!--            estetické aj praktické nároky.-->
<!--          </p>-->
<!--        </div>-->
<!--      </a>-->
<!--      <a class="column">-->
<!--        <div class="column-content">-->
<!--          <h2>Montáž interierových priečok</h2>-->
<!--          <img src="../assets/zariadenie.png" alt="Inhall" />-->
<!--          <p>-->
<!--            Ponúkame montáž interiérových priečok z rôznych materiálov, ktoré sa-->
<!--            prispôsobia vašim potrebám. Nepriehľadné a zvukotesné priečky-->
<!--            zabezpečia maximálne súkromie a akustický komfort, ideálne pre-->
<!--            kancelárie, rokovacie miestnosti či oddychové zóny. Sklenené priečky-->
<!--            naopak vytvoria moderný a otvorený priestor, ktorý prepúšťa-->
<!--            prirodzené svetlo a dodáva interiéru vzdušnosť.-->
<!--          </p>-->
<!--        </div>-->
<!--      </a>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup></script>-->
<!--<style scoped>-->
<!--/* General styles */-->
<!--body {-->
<!--  font-family: "Roboto", sans-serif;-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  background-color: #f9f9f9;-->
<!--  color: #252636; /* Dark Blue from the logo */-->
<!--}-->

<!--/* Hero section */-->
<!--.image-container {-->
<!--  position: relative;-->
<!--  width: 100%;-->
<!--  height: 50vh;-->
<!--  overflow: hidden;-->
<!--  display: flex;-->
<!--  justify-content: flex-start; /* Align content to the left */-->
<!--  align-items: center;-->
<!--}-->

<!--.main-img {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover; /* Ensures the image fills the container */-->
<!--  object-position: left; /* Align the image to the left */-->
<!--  filter: brightness(0.7);-->
<!--}-->

<!--.main-title {-->
<!--  position: absolute;-->
<!--  width: 100%;-->
<!--  text-align: center;-->
<!--  color: white;-->
<!--  z-index: 1;-->
<!--}-->

<!--.main-title h1 {-->
<!--  font-size: clamp(-->
<!--    2rem,-->
<!--    5vw,-->
<!--    4rem-->
<!--  ); /* Dynamically resize between 2rem and 4rem */-->
<!--  text-transform: uppercase;-->
<!--  margin-bottom: 20px;-->
<!--  letter-spacing: 2px;-->
<!--  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);-->
<!--}-->

<!--.cta-button {-->
<!--  background: #252636; /* Solid Dark Blue */-->
<!--  border: none;-->
<!--  color: white;-->
<!--  font-size: clamp(1rem, 2vw, 1.2rem); /* Dynamic resizing for button text */-->
<!--  padding: clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 30px); /* Dynamic padding */-->
<!--  border-radius: 50px;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s ease;-->
<!--  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);-->
<!--}-->

<!--/* Columns section */-->
<!--.three-columns {-->
<!--  display: grid;-->
<!--  grid-template-columns: repeat(3, 1fr);-->
<!--  gap: 30px;-->
<!--  padding: 40px 20px;-->
<!--  margin: 0 auto;-->
<!--  max-width: 1200px;-->
<!--}-->

<!--.column {-->
<!--  text-decoration: none;-->
<!--  background-color: white;-->
<!--  border-radius: 15px;-->
<!--  overflow: hidden;-->
<!--  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);-->
<!--  transition: all 0.3s ease;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  text-align: center;-->
<!--  padding: 20px;-->
<!--  position: relative;-->
<!--}-->

<!--.column:hover .info-button {-->
<!--  text-decoration: none;-->
<!--  background: #a4c5ed; /* Light Blue on hover */-->
<!--  transform: scale(1.1);-->
<!--  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);-->
<!--}-->

<!--.column-content {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  justify-content: space-between;-->
<!--  height: 100%;-->
<!--}-->

<!--.column img {-->
<!--  width: 100%;-->
<!--  object-fit: cover;-->
<!--  border-bottom: 1px solid #ddd;-->
<!--  margin-bottom: 15px;-->
<!--}-->

<!--.column h2 {-->
<!--  font-size: clamp(-->
<!--    1.2rem,-->
<!--    2.5vw,-->
<!--    2rem-->
<!--  ); /* Dynamic resizing for column headers */-->
<!--  margin-bottom: 15px;-->
<!--  color: #252636; /* Dark Blue */-->
<!--}-->

<!--.column p {-->
<!--  flex-grow: 1;-->
<!--  font-size: clamp(-->
<!--    0.8rem,-->
<!--    1.5vw,-->
<!--    1rem-->
<!--  ); /* Dynamic resizing for column paragraphs */-->
<!--  line-height: 1.6;-->
<!--  margin-bottom: 20px;-->
<!--  color: #555;-->
<!--}-->

<!--.info-button {-->
<!--  &#45;&#45;webkit-text-stroke-width: thin;-->
<!--  text-decoration: none;-->
<!--  background: #252636; /* Solid Dark Blue */-->
<!--  border: none;-->
<!--  color: white;-->
<!--  font-size: clamp(0.9rem, 1.5vw, 1rem); /* Dynamic resizing for button text */-->
<!--  padding: clamp(8px, 1.5vw, 10px) clamp(15px, 4vw, 20px); /* Dynamic padding */-->
<!--  border-radius: 30px;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s ease;-->
<!--  margin-top: 20px;-->
<!--}-->

<!--.info-button:hover {-->
<!--  text-decoration: none;-->
<!--  background: #a4c5ed; /* Light Blue on hover */-->
<!--  transform: scale(1.1);-->
<!--  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);-->
<!--}-->

<!--/* Responsive styles */-->
<!--@media (max-width: 768px) {-->
<!--  .three-columns {-->
<!--    grid-template-columns: 1fr; /* Stack columns vertically */-->
<!--  }-->

<!--  .main-title h1 {-->
<!--    font-size: clamp(-->
<!--      1.5rem,-->
<!--      4vw,-->
<!--      3rem-->
<!--    ); /* Reduce font size for smaller screens */-->
<!--  }-->

<!--  .cta-button {-->
<!--    font-size: clamp(-->
<!--      0.9rem,-->
<!--      1.5vw,-->
<!--      1rem-->
<!--    ); /* Adjust button size for smaller screens */-->
<!--  }-->
<!--}-->

<!--.modal-overlay {-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  background: rgba(0, 0, 0, 0.5);-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  z-index: 1000;-->
<!--}-->

<!--.modal-content {-->
<!--  background: white;-->
<!--  padding: 20px;-->
<!--  border-radius: 10px;-->
<!--  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);-->
<!--  width: 90%;-->
<!--  max-width: 500px;-->
<!--  position: relative;-->
<!--}-->

<!--.modal-content h2 {-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.modal-content label {-->
<!--  display: block;-->
<!--  margin: 10px 0 5px;-->
<!--}-->

<!--.modal-content input,-->
<!--.modal-content textarea {-->
<!--  width: 100%;-->
<!--  padding: 10px;-->
<!--  margin-bottom: 15px;-->
<!--  border: 1px solid #ccc;-->
<!--  border-radius: 5px;-->
<!--}-->

<!--.submit-button {-->
<!--  background: #252636;-->
<!--  color: white;-->
<!--  padding: 10px 20px;-->
<!--  border: none;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.submit-button:hover {-->
<!--  background: #3e4c98;-->
<!--}-->

<!--.close-button {-->
<!--  background: #ccc;-->
<!--  color: white;-->
<!--  padding: 5px 10px;-->
<!--  border: none;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--  position: absolute;-->
<!--  top: 10px;-->
<!--  right: 10px;-->
<!--}-->

<!--.close-button:hover {-->
<!--  background: #999;-->
<!--}-->
<!--</style>-->

<template>
  <div class="page">
    <div class="services-grid">
      <div
        class="service-card"
        v-for="service in services"
        :key="service.title"
      >
        <img :src="service.image" :alt="service.title" class="service-image" />
        <h2 class="service-title">{{ service.title }}</h2>
        <p class="service-description">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import graphicDesign from "@/assets/navrh.png";
import realization from "@/assets/Realizacia.png";
import interiorDesign from "@/assets/kancelaria.png";
import interiosSeparators from "@/assets/zariadenie.png";
const services = [
  {
    title: "Grafické návrhy",
    image: graphicDesign,
    description:
      "Každý úspešný stavebný projekt začína kvalitným grafickým návrhom. \n" +
      "Kladieme dôraz na vaše potreby a požiadavky, aby sme vám priniesli \n" +
      "vizuálne atraktívne a funkčné riešenia, ktoré spĺňajú najvyššie \n" +
      "estetické aj technické štandardy. Naši skúsení dizajnéri vás prevedú \n" +
      "celým procesom – od úvodnej koncepcie až po finálnu realizáciu. S \n" +
      "naším profesionálnym a kreatívnym prístupom získate návrh, ktorý \n" +
      "nielen dobre vyzerá, ale aj dokonale funguje.",
  },
  {
    title: "Realizácia",
    image: realization,
    description:
      "            Úspešná realizácia projektu si vyžaduje skúsenosti, spoľahlivý tím a\n" +
      "            kvalitné materiály. Vďaka našim dlhoročným skúsenostiam, odbornému\n" +
      "            tímu a spolupráci s poprednými dodávateľmi na trhu vám zabezpečíme\n" +
      "            vysoký štandard prevedenia. Počas celého procesu s vami konzultujeme\n" +
      "            každý krok, aby výsledok presne zodpovedal vašim predstavám a\n" +
      "            požiadavkám. S nami máte istotu, že váš projekt bude dokončený\n" +
      "            precízne, efektívne a včas.",
  },
  {
    title: "Zariadenie priestorov",
    image: interiorDesign,
    description:
      "            Každý pracovný priestor by mal byť nielen funkčný, ale aj pohodlný a\n" +
      "            reprezentatívny. Kladieme dôraz na vaše potreby a požiadavky, aby\n" +
      "            sme vytvorili moderné, funkčné a pohodlné prostredie pre kancelárie,\n" +
      "            vstupné priestory, zasadacie miestnosti, spoločenské priestory či\n" +
      "            jedálne. Vďaka kombinácii kvalitných materiálov a premysleného\n" +
      "            dizajnu vám pomôžeme vytvoriť priestory, ktoré spĺňajú vysoké\n" +
      "            estetické aj praktické nároky.",
  },
  {
    title: "Montáž interiérových priečok",
    image: interiosSeparators,
    description:
      "            Ponúkame montáž interiérových priečok z rôznych materiálov, ktoré sa\n" +
      "            prispôsobia vašim potrebám. Nepriehľadné a zvukotesné priečky\n" +
      "            zabezpečia maximálne súkromie a akustický komfort, ideálne pre\n" +
      "            kancelárie, rokovacie miestnosti či oddychové zóny. Sklenené priečky\n" +
      "            naopak vytvoria moderný a otvorený priestor, ktorý prepúšťa\n" +
      "            prirodzené svetlo a dodáva interiéru vzdušnosť.",
  },
];
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #f5f7fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
}

.service-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: justify;
  padding: 20px;
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.service-title {
  font-size: 1.5rem;
  color: #252636;
  margin-bottom: 10px;
  text-align: center;
}

.service-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 15px;
  text-align: justify;
}

.info-button {
  background: #252636;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>

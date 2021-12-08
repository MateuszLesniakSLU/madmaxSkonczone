<template>
  <div class="services">
    <h1>Serwis</h1>
    <div class="description">
      <div class="professionalService">
        <div class="textContent">
          <h1>Profesjonalny Serwis IT</h1>
          <p>
            "Profesjonalny Serwis IT" to nie tylko reklamowy slogan, wyposażenie
            zaplecza serwisowego w odpowiedni sprzęt najwyższej klasy oraz
            wiedza i umiejętności personelu a przede wszystkim doświadczenie to
            nasze atuty. Cokolwiek stanie się z Twoim sprzętem my prawdopodobnie
            będziemy w stanie mu pomóc, przywrócić funkcjonalność, odzyskać dane
            lub jeśli się to nie powiedzie pomożemy Państwu w doborze nowego
            spełniającego wszystkie wymagania 😁
          </p>
        </div>
        <div class="imageContent">
          <img src="../assets/Service/photo1.jpg" alt="Nasz sklep" />
        </div>
      </div>
    </div>

    <div class="repairing">
      <div class="imageContent">
        <img src="../assets/Service/photo2.jpg" alt="Nasz sklep" />
      </div>

      <div class="textContent">
        <h1>Naprawa elektroniki</h1>
        <p>
          Przydarzył się wypadek... zalałeś laptopa, uszkodziłeś matrycę, Twoja
          ulubiona konsola nie wyświetla obrazu a może Twój sprzęt po prostu się
          nie uruchamia i nie wiesz co z tym zrobić, zapraszamy do nas. Czym
          różni się nasz serwis od wielu innych które oferują swoją pomoc...
          tylko my jako nieliczni jesteśmy w stanie zająć się Twoim sprzętem
          kompleksowo a wszystko na miejscu przy użyciu najlepszego sprzętu,
          naprawy są wykonywane przez wykwalifikowanego elektronika którego
          pasja i dociekliwość sprawia że jesteśmy w stanie usunąć 99% usterek.
        </p>
      </div>
    </div>
    <div class="dataRecovery">
      <div class="textContent">
        <h1>Odzyskiwanie danych</h1>
        <p>
          W dobie "cyfrowego świata" dla każdego z nas dane są bardzo istotne,
          dziś zazwyczaj wszystkie zdjęcia, filmy i inne dokumenty przechowujemy
          jedynie w formie elektronicznej w związku z powyższym każda awaria
          sprzętowa może nas pozbawić do nich dostępu. Powiedzenie mówi, że
          użytkownicy dzielą się jedynie na tych którzy już je archiwizują i na
          tych którzy dopiero będą je archiwizować... Jeśli jesteś w pierwszej
          grupie możesz spać spokojnie jeśli natomiast właśnie straciłeś dostęp
          do swoich danych to prawdopodobnie będziemy w stanie Ci pomóc w ich
          odzyskaniu.
        </p>
      </div>
      <div class="imageContent">
        <img src="../assets/Service/photo3.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: black;
  font-size: 64px;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 1vmin;
  transition: transform 0.8s;
}

img:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transform: scale(1.05);
}

p {
  color: gray;
}

.description {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.professionalService,
.repairing,
.dataRecovery {
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textContent {
  text-align: left;
  width: 50%;
  height: 40vh;
  padding-left: 40px;
}

.imageContent {
  width: 40%;
  padding-right: 60px;
  height: 40vh;
  margin: 10px;
}

.imageContent img {
  padding: 3px;
  border-radius: 1vmin;
}
</style>

<template>
  <div class="aboutUs">
    <h1>O Nas</h1>

    <div class="description">
      <div class="textContent">
        <h1>O Firmie Madmax</h1>
        <p>
          Od początku działalności oferta naszej firmy skierowana była do
          entuzjastów sprzętu IT, w związku z dynamicznym rozwojem tego sektora
          ta nieliczna wówczas grupa na przestrzeni 17 lat istnienia firmy
          znacznie się powiększyła. Przez ten czas zdobyliśmy ogromną wiedzę w
          sprzedaży i tak potrzebne doświadczenie w serwisowaniu sprzętu
          komputerowego, dziś z dumą możemy powiedzieć że nasze zaplecze
          techniczne i jego wyposażenie a przede wszystkim wykształcona w
          kierunku elektroniki kadra pozwala na wykonanie najbardziej
          skomplikowanych napraw. Od zawsze główna siedziba naszej firmy
          znajdowała się w CH "Manhatan", gdzie serdeczne Was zapraszamy 😁
          znajdziecie nas I piętro box 16-17 tuż przy głównych schodach.
        </p>
      </div>

      <div class="imageContent">
        <img src="../assets/aboutUs/zdjecie4.jpg" />
      </div>
    </div>

    <ul>
      <li><img src="../assets/aboutUs/zdjecie1.jpg" /></li>

      <li><img src="../assets/aboutUs/zdjecie2.jpg" /></li>

      <li><img src="../assets/aboutUs/zdjecie5.jpg" /></li>

      <li><img src="../assets/aboutUs/zdjecie6.jpg" /></li>

      <li><img src="../assets/aboutUs/zdjecie7.jpg" /></li>

      <li><img src="../assets/aboutUs/zdjecie9.jpg" /></li>

      <li><img src="../assets/aboutUs/zdjecie10.jpg" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: black;
  font-size: 64px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  margin: 2vmin;
}

li {
  height: 40vh;
  flex-grow: 1;
  margin: 2vmin;
  list-style: none;
}

li:last-child {
  flex-grow: 10;
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

.textContent {
  background-color: white;
  text-align: left;
  width: 60%;
  height: 40vh;
  padding-left: 40px;
}

.imageContent {
  background-color: white;
  width: 40%;
  padding-right: 60px;
  height: 40vh;
}

.imageContent img {
  padding: 2vh;
  width: 100%;
}
</style>
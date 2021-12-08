<template>
  <div class="contact">
    <h1>Kontakt</h1>
    <h3>
      Możecie się skontaktować z nami poprzez:
      <br />
      Telefon: <phone-icon /> 59 722 02 00 lub <cellphone-icon /> 516 506 400
      <br />
      GSM: <message-icon /> 509 35 50 10
      <br />
      E-Mail: <email-icon /> biuro@madmax.pl
    </h3>
  </div>
</template>
<script>
import CellphoneIcon from "vue-material-design-icons/Cellphone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import MessageIcon from "vue-material-design-icons/Message.vue";
export default {
  components: {
    PhoneIcon,
    MessageIcon,
    CellphoneIcon,
    EmailIcon,
  },
};
</script>

<style scoped>
.contact {
  padding: 20px;
  text-align: center;
}
.contact h1 {
  color: black;
  font-size: 102px;
}
.contact h3 {
  color: white;
  font-size: 46px;
}
</style>
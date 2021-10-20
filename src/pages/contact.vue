<template>
  <Layout>
    <div data-v-78e0b360="" class="container">
      <div data-v-78e0b360="" class="contact-header">
        <h1 data-v-78e0b360="" class="contact-title">Say hi!</h1>
        <p data-v-78e0b360="">
          Leave me a note with any questions you might have, I'll get back to
          you as soon as possible.
        </p>
      </div>
      <form data-v-78e0b360="" name="contact" class="contact-form">
        <div data-v-78e0b360="" class="sender-info">
          <div data-v-78e0b360="">
            <label data-v-78e0b360="" for="name" class="label">Your name</label>
            <input data-v-78e0b360="" v-model="form.name" type="text" name="name" />
          </div>
          <div data-v-78e0b360="">
            <label data-v-78e0b360="" for="email" class="label">Your email</label>
            <input data-v-78e0b360="" v-model="form.email" type="email" name="email" />
          </div>
        </div>
        <div data-v-78e0b360="" class="message">
          <label data-v-78e0b360="" for="message" class="label">Message</label>
          <textarea data-v-78e0b360="" v-model="form.message" name="message"></textarea>
        </div>
        <button data-v-78e0b360="" class="button" @click.prevent="onSubmit">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  name: "contactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await axios({
          url: `${GRIDSOME_API_URL}/contacts`,
          methods: "POST",
          data: this.form,
        });
        console.log("data===>", data);
        window.alert("提交成功");
      } catch (err) {
        console.log("err===>", err);
        window.alert("提交失败，请稍侯重试");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

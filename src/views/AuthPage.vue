<template>
  <div class="login-wrapper">
    <img :src="baseImage" alt="" class="login-wrapper__bg">
    <content-block>
      <v-chip label class="login-wrapper__chip" color="#50B053" dark>Авторизация</v-chip>
      <login-form @login="handleLogin" :authError="authError"></login-form>
    </content-block>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    LoginForm,
    ContentBlock
  },
  data: () => ({
    baseImage: require('@/assets/images/bg.jpeg')
  }),
  computed: {
    ...mapGetters('auth', ['authError'])
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleLogin(credentials) {
      try {
        await this.login(credentials);
        this.$router.push({ name: "home" })
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
};
</script>

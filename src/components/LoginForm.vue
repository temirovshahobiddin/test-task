<template>
    <v-form class="login_form">
        <v-row>
            <v-col cols="12">

                <v-text-field v-model="username" label=" Логин или Телефон" prepend-inner-icon="mdi-phone"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'" name="input-10-1" label="Пароль" hint="At least 8 characters"
                    counter @click:append="show1 = !show1" prepend-inner-icon="mdi-lock"></v-text-field>
            </v-col>

            <div class="login_btn">
                <v-btn color="#50B053" dark style="max-width: 110px; width: 100%;" @click="submitLogin()">Войти</v-btn>
            </div>
            <p v-if="authError" class="error-message">{{ authError }}</p>

        </v-row>

    </v-form>
</template>

<script>

export default {
    name: 'App',
    props: {
        authError: String,

    },
    data: () => ({
        show1: false,
        username: '',
        password: ''
    }),
    methods: {
        submitLogin() {
            const credentials = {
                username: this.username,
                password: this.password
            };
            this.$emit('login', credentials);
        }
    }
};
</script>

<style lang="scss">
.login_form {
    width: 100%;
}

.login_btn {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
}
</style>

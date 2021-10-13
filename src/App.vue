<template lang="pug">
    #app.theme-light
        header-component
        #nav
            router-link(to="/") Home
            | &nbsp;|&nbsp;
            router-link(to="/login") Login
            | &nbsp;|&nbsp;
            router-link(to="/about") About

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/blanks/TheHeader.vue'

@Component({
    components: {
        'header-component': Header
    }
})
export default class App extends Vue {/**/}
</script>

<style lang="scss">
@import "assets/scss/critical";
@import "assets/scss/main";
</style>
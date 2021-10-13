<template lang="pug">
    include ../../tools/mixins

    +b.HEADER.header(
        data-scroll-lock-fill-gap
    )
        transition(
            name="fade"
        )
            +e.overlay(
                v-if="device.size.mobile/* && notification.active*/"
            )
        +e.container
            +e.left
                +e.BUTTON-COMPONENT.hamburger(
                    v-if="!device.size.desktop && !device.size.tabletLate && init"
                    view="ghost"
                    size="s"
                    textSize="m"
                    icon="hamburger"
                    ariaLabel=""
                )
                //
                    @click="showSidebar"
                +e.ROUTER-LINK.logo(
                    to="/"
                )
                    img(
                        src="/images/header/logo.svg"
                        alt="Логотип"
                    )
            +e.right
                template(
                    v-if="/*isAuth*/false"
                )
                    +e.BUTTON-COMPONENT.notify(
                        view="ghost"
                        size="s"
                        textSize="m"
                        icon="notify"
                        ariaLabel="show latest notifications"
                    )
                    //
                        v-bind:disabled="disableNotificationsListToggle"
                        @click="onToggleNotification"
                    transition(
                        name="popup"
                   )
                        +e.NOTIFICATION-COMPONENT.notification()
                        //
                            v-if="showNotificationPopupCondition"
                            v-click-outside="toggleNotification"
                            v-bind:list="notifications.list"
                            v-bind:arrow="!device.size.mobile"
                            @click="toggleNotification"
                    +e.AVATAR-CIRCLE-COMPONENT.avatar(
                        tag="router-link"
                        size="s"
                   )
                    //
                        v-bind:photo="imageSrc"
                        v-bind:link="`/company/${auth.userId}`"
                        @click="onAvatarClick"
                template(
                    v-else
                )
                    +e.BUTTON-COMPONENT.authorize(
                        v-show="init"
                        v-bind:iconLeft="true"
                        view="brand-secondary"
                        size="s"
                        textSize="m"
                        icon="user"
                        ariaLabel="Вход"
                        @click="$emit('openAuthorizationPopup')"
                    )
                        template(
                            v-if="!device.size.mobile"
                       ) Вход или регистрация

</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'

// import AvatarCircle from './AvatarCircle.vue'
// import Notification from './Notification.vue'

import Device from '@/mixins/utility/device.ts'

// import { notifyItem } from '@/types/types'
// import { getterNotificationStorageType } from '../../store/modules/layout/getters'
// import { actionToggleNotificationType } from '../../store/modules/layout/actions'
// import { actionFetchUserNotificationsType } from '../../store/modules/profile/actions'
// import { actionAuthLogoutType } from '../../store/modules/auth/actions'
// import { getterAuthType } from '../../store/modules/auth/getters'
// import { getterStorageType } from '../../store/modules/general/getters'
// import { getterProfileCompanyType } from '../../store/modules/profile/getters'

@Component({
    components: {
        // 'avatar-circle-component': AvatarCircle,
        // 'notification-component': Notification
    },
    computed: {
        ...mapGetters({
            // notification: 'layout/notification',
            // notifications: 'profile/notifications',
            // isAuth: 'auth/isAuth',
            // auth: 'auth/getAuth',
            // storage: 'general/storage',
            // company: 'profile/getCompany'
        })
    },
    methods: {
        ...mapActions({
            // showSidebar: 'layout/showSidebar',
            // toggleNotification: 'layout/toggleNotification',
            // hideNotification: 'layout/hideNotification',
            // logout: 'auth/logout',
            // fetchNotifications: 'profile/fetchUserNotifications'
        })
    }
})
export default class Header extends Mixins(Device) {
    @Prop() readonly notifyList!: []

    @Emit('clickNotification') clickNotification(): void {/**/}

    @Emit('clickBurger') clickBurger(): void {/**/}

    @Emit('clickAuth') clickAuth(): void {/**/}

    init = false

    mounted(): void {
        this.init = true
    }

    // get avatarUrl(): string | undefined {
    //     return this.company?.avatar
    //         ? `${ this.storage.images }/users/${ this.auth.userId }/${ this.company.avatar }`
    //         : undefined
    // }
    //
    // onAvatarClick(): void {
    //     this.$router.push('/profile')
    // }
    //
    // get imageSrc(): string | undefined {
    //     return this.company?.avatar && this.auth.userId
    //         ? `${ this.storage.images }/users/${ this.auth.userId }/${ this.company?.avatar }`
    //         : undefined
    // }
    //
    // get disableNotificationsListToggle(): boolean {
    //     return this.$route.name === 'notifications'
    // }
    //
    // get showNotificationPopupCondition(): boolean {
    //     return this.notification.active && this.$route.name !== 'notifications'
    // }
}

</script>

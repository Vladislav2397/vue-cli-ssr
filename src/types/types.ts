// import Router, { Route } from 'vue-router'
// import { Store } from 'vuex'

// import { moduleLayoutTypes } from '../store/modules/layout/state'
// import { stateProfileType } from '../store/modules/profile/state'

// import { moduleGeneralTypes } from '../store/modules/general/state'

// F = typeof fetchReviewModeration
export type ActionType<F> = F extends (state: infer S, payload: infer P) => infer R ? (payload?: P) => R : never
export type MutationType<F> = F extends (state: infer S, payload: infer P) => infer R ? (payload: P) => R : never

// export type rootStateType = {
//     layout: moduleLayoutTypes.state
//     profile: stateProfileType
//     user: {
//         isAuthorized: boolean
//     }
// }

// export type asyncDataArgument = {
//     store: Store<rootStateType>
//     route: Route
//     router: Router,
// }

export type iconNameType = 'pause'
    | 'play'
    | 'eagle'
    | 'create-post'

export type sizeNameTypes = 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'

export type badgeStateNameTypes = 'success'
    | 'base'
    | 'critical'
    | 'brand-secondary'

export type tagNameTypes = 'div'
    | 'a'
    | 'button'
    | 'span'
    | 'router-link'
    | 'form'

export type buttonViewNameTypes = 'brand-primary'
    | 'brand-secondary'
    | 'critical'
    | 'base'
    | 'ghost'
    | 'ghost-brand'

export type platformNameTypes = 'ios' | 'android'

export type inputNameTypes = 'base'
    | 'password'
    | 'phone'
    | 'textarea'

export type imageExtensionNameTypes = 'png' | 'jpg'

export type notifyItem = {
    image: string
    user: string
    text: string
    data: string
}

export type User = {
    avatar: string | null
    name: string | null
    nick: string | null
    link: string | null
}
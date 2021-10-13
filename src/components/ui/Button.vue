<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import { buttonViewNameTypes, iconNameType, sizeNameTypes, tagNameTypes } from '@/types/types'

@Component
export default class Button extends Vue {
    @Prop({
        default: 'button'
    }) readonly tag!: Exclude<tagNameTypes, 'span'>

    @Prop({
        default: 'brand-primary'
    }) readonly view!: buttonViewNameTypes

    @Prop({
        default: 'm'
    }) readonly size!: Extract<sizeNameTypes, 'l' | 'm' | 's'>

    @Prop({
        default: 'm'
    }) readonly textSize!: Extract<sizeNameTypes, 'l' | 'm' | 's'>

    @Prop() readonly icon!: iconNameType

    @Prop({default: false}) readonly iconLeft!: boolean

    @Prop() readonly href!: string

    @Prop() readonly disabled!: boolean

    @Prop({required: true}) readonly ariaLabel!: string

    @Prop({default: 'center'}) readonly align!: 'center' | 'left'

    @Prop({default: false}) readonly isNavigation!: boolean

    @Prop() readonly loading!: boolean

    classes(): string[] {
        const classes: string[] = ['button']

        if (this.view) {
            classes.push(`button--view-${this.view}`)
        }

        if (this.size) {
            classes.push(`button--size-${this.size}`)
        }

        if (this.textSize) {
            classes.push(`button--text-size-${this.textSize}`)
        }

        if(this.loading) {
            classes.push('button--loading')
        }

        if (this.icon) {
            classes.push(`button--icon`)

            if (!this.$slots?.default || !this.$slots?.default[0].text) {
                classes.push('button--icon-only')
            } else if (this.iconLeft) {
                classes.push(`button--icon-left`)
            } else {
                classes.push(`button--icon-right`)
            }
        }

        if(this.isNavigation) {
            classes.push(`button--icon-navigation`)
        }

        if (this.disabled) {
            classes.push('button--disabled')
        }

        if(this.align) {
            classes.push(`button--align-${this.align}`)
        }

        return classes
    }

    get isSimpleLink(): boolean{
        return Boolean(this.href && (this.href.indexOf('tel:') === -1 || this.href.indexOf('mailto:') === -1))
    }

    get hasTarget(): boolean {
        return this.tag === 'a' && this.isSimpleLink
    }

    render(createElement: CreateElement): VNode {

        const settings = {
            class: this.classes(),
            attrs: {
                key: this.$slots.default && this.$slots.default[0].text || '',

                ...this.tag === 'button' && {
                    type: 'button',
                    role: 'button',
                    'aria-label': this.ariaLabel,
                    disabled: this.disabled || this.loading
                },
                ...this.tag === 'a' && {
                    href: this.href
                },
                ...this.tag === 'router-link' && {
                    to: this.href
                },
                ...this.hasTarget && {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            },
            on: {
                click: (e:MouseEvent) => this.$emit('click', e),
                mouseenter: (e:MouseEvent) => this.$emit('mouseenter',e)
            },
            ...this.tag === 'router-link' && {
                nativeOn: {
                    click: () => this.$emit('click')
                }
            }
        }

        const iconClasses = []

        if (this.icon) {
            iconClasses.push(['icon', `icon--${this.icon}`])
        }

        const content = []

        const i = createElement('i', {class: iconClasses})
        const slot = createElement('span', this.$slots.default)
        // const spinner = createElement(Spinner, {
        //     class: 'button__spinner',
        //     props: {
        //         view: this.view
        //     }
        // })


        if (this.icon) {
            if (this.iconLeft) {
                content.push(i)
            }

            if(this.$slots.default) {
                content.push(slot)
            }

            if (!this.iconLeft) {
                content.push(i)
            }
        } else if(this.$slots.default) {
            content.push(slot)
        }

        // if(this.loading) {
        //     content.push(spinner)
        // }



        return createElement(this.tag, settings, content)
    }
}
</script>

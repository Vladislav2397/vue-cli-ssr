import { Vue, Component } from 'vue-property-decorator'

const device = {
    size: {
        mobile: false,
        mobileLate: false,
        tablet: false,
        tabletLate: false,
        desktop: false,
    },
    breakpoints: {
        tablet: 650,
        tabletLate: 768,
        desktop: 1200,
    },
    type: null as null | string,
}

export type deviceNames = keyof typeof device.size

@Component
class Device extends Vue {
    device = device

    mounted(): void {
        this.getDeviceSize()
        this.getDeviceType()

        window.addEventListener('resize', this.getDeviceSize)
    }

    beforeDestroy(): void {
        window.removeEventListener('resize', this.getDeviceSize)
    }

    getDeviceSize(): void {
        this.device.size.mobile = window.innerWidth < this.device.breakpoints.tablet
        this.device.size.mobileLate = window.innerWidth < this.device.breakpoints.tabletLate
        this.device.size.tablet =
            window.innerWidth >= this.device.breakpoints.tablet && window.innerWidth < this.device.breakpoints.desktop
        this.device.size.tabletLate =
            window.innerWidth >= this.device.breakpoints.tabletLate && window.innerWidth < this.device.breakpoints.desktop
        this.device.size.desktop = window.innerWidth >= this.device.breakpoints.desktop
    }

    getDeviceType(): void {
        this.device.type = document.querySelector('meta[property="device"]')
            ? (document.querySelector('meta[property="device"]') as HTMLMetaElement).content
            : null
    }
}

export default Device

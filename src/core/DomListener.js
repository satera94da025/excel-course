import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener!')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
                const menthod = getMethodName(listener)
                const name = this.name
                if (!this[menthod]) {
                    throw new Error(`Method ${menthod} 
                    is not implemented in ${name}`)
                }
                this[menthod] = this[menthod].bind(this)
                this.$root.on(listener, this[menthod])
            }
        )
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const menthod = getMethodName(listener)
            this.$root.off(listener, this[menthod])
        })
    }
}

function getMethodName(eName) {
    return 'on' + capitalize(eName)
}
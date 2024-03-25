export interface LuxuryEvent<T> {
    type: string
    data: T
    executor: (data: T) => void
}

export interface LuxuryEventData {
    type: keyof LuxuryEvents
    data: any
}

export interface VibrateEventData {
    strength: number
}

export interface InfoEventData {
    strength: number
}

export interface VibrateEvent extends LuxuryEvent<VibrateEventData> {}
export interface InfoEvent extends LuxuryEvent<InfoEvent> {}

export type LuxuryEvents = {
    vibrate: VibrateEvent
    info: InfoEvent
}
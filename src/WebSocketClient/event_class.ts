import { InfoEventData, VibrateEventData } from "./events";

export class LuxuryInfoEvent extends Event {
    public data: InfoEventData;
    constructor(data: InfoEventData) {
        super("info")
        this.data = data;
    }

    public get strength(): number {
        return this.data.strength;
    }
}

export class LuxuryVibrateEvent extends Event {
    public data: VibrateEventData;
    constructor(data: VibrateEventData) {
        super("vibrate")
        this.data = data;
    }

    public get strength(): number {
        return this.data.strength;
    }
}
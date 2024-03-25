import { LuxuryInfoEvent, LuxuryVibrateEvent } from "./event_class";
import { InfoEventData, LuxuryEventData, VibrateEventData } from "./events";
import { vibrateControl } from "./utils";

const CLIENT_HOST = "localhost";
const CLIENT_PORT = "3500";
const client = new WebSocket(`ws://${CLIENT_HOST}:${CLIENT_PORT}`);

export {
    client
}

client.addEventListener("open", () => {
    console.log("Conexion establecida");
    window.dispatchEvent(new Event("connected"));
})

client.addEventListener("message", message => {
    const data = message.data;
    console.log(data)

    try {
        const parsed_data: LuxuryEventData = JSON.parse(data as unknown as string);
        if (parsed_data.type === "vibrate") {
            const data: number = parsed_data.data;
            vibrateControl(data);
            window.dispatchEvent(new LuxuryVibrateEvent(parsed_data.data as VibrateEventData));
        } else if (parsed_data.type === "info") {
            window.dispatchEvent(new LuxuryInfoEvent(parsed_data.data as InfoEventData));
        }
    } catch (e) {
        console.log("Ha ocurridon error al intentar convertir los datos\nError: %s", e)
    }
})
import { useState } from "react"
import Section from "./Section";
import { client } from "../WebSocketClient/client";

export default function SlideBar() {
    const [value, setValue] = useState(0);

    const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const _value = Number(event.target.value);
        client.send(JSON.stringify({
            type: "vibrate",
            data: {
                strength: _value
            }
        }))
        setValue(_value)
    }


    return (
        <Section>
            <input type="range" max="1" min="0" step="0.01" className="input" onChange={onchangeHandler}/>
            <Section padding="0.5rem 0">
                Vibracion: {(value / 1 * 100).toFixed()}%
            </Section>
        </Section>
    )
}
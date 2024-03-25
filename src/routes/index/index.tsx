import { useState } from "react";
import Section from "../../components/Section";
import { LuxuryVibrateEvent } from "../../WebSocketClient/event_class";
import { vibrateControl } from "../../WebSocketClient/utils";

export default function IndexRoute() {
  const [currentVibration, setVibration] = useState(0);
  const [statusControl, setStatusControl] = useState(0);
  const [statusConnection, setStatusConnection] = useState(0);

  window.addEventListener("vibrate", (event) => {
    const _event = (event as LuxuryVibrateEvent)
    setVibration(_event.strength);
    vibrateControl(_event.strength)
  })

  window.addEventListener("gamepadconnected", () => {
    setStatusControl(1);
    console.log("xd")
  });

  window.addEventListener("connected", () => {
    setStatusConnection(1);
  })

  return (
    <Section padding="1em" filled={true}>
      <Section textCenter>
        <span style={{ fontWeight: "bolder", fontSize: "14pt" }}>
          Vibracion : {(currentVibration / 1 * 100).toFixed()}%
        </span>
        <Section>
          <Section>
            Control: {statusControl === 0 ? "no detectado" : "detectado"}
          </Section>
          <Section>
            Conexion: {statusConnection === 0 ? "desconectado" : "conectado"}
          </Section>
        </Section>
      </Section>
    </Section>
  )
}
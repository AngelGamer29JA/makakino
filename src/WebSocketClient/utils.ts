export function isController() {
    if (window.location.pathname === "/controller") {
        return true;
    } else {
        return false;
    }
}

export function vibrateControl(strength: number) {
    localStorage.setItem("strength", strength.toString());
}

export function startVibration() {
    const strength = localStorage.getItem("strength");
    if (strength === null) {
        localStorage.setItem("strength", "0");
    }

    playVibration();
}

export function playVibration() {
    if (!navigator.getGamepads) {
        alert("Navegador no compatible");
        return;
    }

    const gamepads = navigator.getGamepads()!;
    if (gamepads.length === 0 || !gamepads[0]) {
        window.dispatchEvent(new Event("anygamepad"));
        console.log("SIn controles disponibles")
        return;
    }

    const gamepad = gamepads[0];
    if (!gamepad.vibrationActuator) {
        window.dispatchEvent(new Event("nocompatible"));
        return;
    }

    const strength = 0;
    const weakMagnitude = strength;
    const strongMagnitude = strength;

    gamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: Infinity,
        weakMagnitude: weakMagnitude,
        strongMagnitude: strongMagnitude
    }).then(() => {
        window.dispatchEvent(new Event("playing"));
    }).catch(error => {
        console.log("Ha ocurrido un error\nError: %s", error);
    });

    setInterval(() => {
        let _strength = Number(localStorage.getItem("strength"))
        if (_strength === null) _strength = strength;

        gamepad.vibrationActuator!.playEffect("dual-rumble", {
            startDelay: 0,
            duration: Infinity,
            weakMagnitude: _strength,
            strongMagnitude: _strength
        }).catch(error => {
            alert("Ha ocurrido un error al mantener la vibracion");
            console.log("Error: %s", error);
        })
    }, 500)
}
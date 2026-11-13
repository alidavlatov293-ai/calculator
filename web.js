
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Эффекти пахш кардани тугма
        button.classList.add("pressed");

        setTimeout(() => {
            button.classList.remove("pressed");
        }, 180);

        let value = button.textContent;

        if (value === "C") {
            display.value = "";
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                if (!display.value.trim()) return;

                let result = eval(display.value);

                if (!Number.isFinite(result)) {
                    throw new Error();
                }

                display.value = result;

            } catch {
                display.value = "Error";
            }
        }

        else {
            if (display.value === "Error") {
                display.value = "";
            }

            display.value += value;
        }

    });

});


const vstup1 = document.getElementById("vstup1");
const vstup2 = document.getElementById("vstup2");
const vysledek = document.getElementById("vysledek");

function getCisla() {
    const a = Number(vstup1.value);
    const b = Number(vstup2.value);

    if (isNaN(a) || isNaN(b)) {
        vysledek.textContent = "Zadej čísla, ne hieroglyfy.";
        return null;
    }
    return { a, b };
}

document.getElementById("tlPlus").onclick = () => {
    const data = getCisla();
    if (!data) return;
    vysledek.textContent = data.a + data.b;
};

document.getElementById("tlMinus").onclick = () => {
    const data = getCisla();
    if (!data) return;
    vysledek.textContent = data.a - data.b;
};

document.getElementById("tlKrat").onclick = () => {
    const data = getCisla();
    if (!data) return;
    vysledek.textContent = data.a * data.b;
};

document.getElementById("tlDeleno").onclick = () => {
    const data = getCisla();
    if (!data) return;
    if (data.b === 0) {
        vysledek.textContent = "Dělení nulou není znak inteligence.";
        return;
    }
    vysledek.textContent = data.a / data.b;
};

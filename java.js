import { pokemons } from './pokemons.js';

const ota = document.getElementById('ota');
const input = document.getElementById('input');
const select = document.getElementById('select');
const sortSelect = document.getElementById('sort-select');

function hw(data) {
    ota.innerHTML = '';
    data.map(pokimon => {
        const div = document.createElement('div');
        div.classList.add("card")
        div.classList.add('pokimon');
        div.innerHTML = `
            <h2>${pokimon.name}</h2>
            <img src="${pokimon.img}" alt="${pokimon.name}">
            <button>${pokimon.type}</button>
            <h3>candy count: ${pokimon.candy_count || 0}</h3>
            <h3>weight: ${pokimon.weight}</h3>
            <h4>${pokimon.weaknesses}</h4>
            <div class="p-id">${pokimon.num}</div>
            <div class="time">${pokimon.spawn_time}</div>
        `;
        ota.appendChild(div);
    })
};

hw(pokemons);

input.addEventListener("input", () => {
    const a = pokemons.filter(pok => pok.name.toLowerCase().includes(input.value.toLowerCase()));
    hw(a)
});

select.addEventListener ("change", () => {
    select.addEventListener("change", () => {
        if (select.value === "All") {
            hw(pokemons);
        } else {
            const poks = pokemons.filter(pok => pok.type.includes(select.value));
            hw(poks);
        }
    });
});

sortSelect.addEventListener("change", () => {
    if (sortSelect.value === "az") {
        pokemons.sort((pok1, pok2,) => pok1.localeCompare(pok2));
        hw(pokemons);
    } else {
        pokemons.sort((pok1, pok2,) => pok2.localeCompare(pok1));
        hw(pokemons);
    }
});
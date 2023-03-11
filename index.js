console.log('funguju!');

/* MINUTKA
Naklonujte si repozitář pro stránku s kuchyňskou minutkou. Využijte funkci setTimeout ke splnění následujících úkolů.

Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.
*/

let secInput = Number(prompt('Zadej počet sekund, než budík začne zvonit'))
let milsecInput = (secInput * 1000)

const setAlarm = () => {
    let alarmStart = document.querySelector('.alarm')
    alarmStart.classList.add('alarm--ring')
    let myAudio = document.querySelector('.audio')
    myAudio.play()
}

const timerId = setTimeout(setAlarm, milsecInput)

const resetAlarm = document.querySelector('.reset')
resetAlarm.addEventListener('click', () => {
    clearTimeout(timerId)
})





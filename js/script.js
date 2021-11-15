// LYSSNA EFTER KLICK
// leta reda på knappen "button", spara ref i variabel
let btn = document.querySelector('button');
// leta reda på input-fältet, spara ref i variabel
let input = document.querySelector('input');

// lyssna efter ett "click"-event på button
btn.addEventListener(`click`, () => {     // vid registrerat "click", kör en funktion

    // kika värdet av input-fältet och spara i en variabel
    let val = input.value;

    // leta reda på h1
    // ersätt inre texten med värdet i variabeln
    document.querySelector('h1').innerText = val;
 
    // leta reda på inputfältet igen
    // rensa input-fältet
    input.value = '';

})


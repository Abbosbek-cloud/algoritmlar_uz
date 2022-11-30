// for aylanmasi yordamida yechish usuli
function fibanochchiForAylanmasi(son) {
  const fibanochchiSonlari = [0, 1];
  for (let tartib = 2; tartib < son; tartib++) {
    fibanochchiSonlari[tartib] =
      fibanochchiSonlari[tartib - 1] + fibanochchiSonlari[tartib - 2];
  }

  return fibanochchiSonlari;
}

// fibanochchi sonlarini while aylanmasi orqali topish usuli
function fibanochchiWhileAylanmasi(son) {
  const fibanochchiSonlari = [0, 1];
  // while aylanmasi bilan ishlaganda tartibni aylanmadan tashqarida
  // yaratib olish kerak bo'ladi
  let tartib = 2;
  while (tartib < son) {
    fibanochchiSonlari[tartib] = fibanochchiSonlari[tartib - 1] + fibanochchiSonlari[tartib - 2];
    // tartibni aylanmaning eng oxirgi qatoriga yozishni unutmang!
    tartib++;
  }

  return fibanochchiSonlari;
}

const sonlar = fibanochchiForAylanmasi(4);
const sonlar2 = fibanochchiWhileAylanmasi(8);

console.log(sonlar);
console.log(fibanochchiForAylanmasi(4));
console.log(sonlar2);
console.log(fibanochchiWhileAylanmasi(4));

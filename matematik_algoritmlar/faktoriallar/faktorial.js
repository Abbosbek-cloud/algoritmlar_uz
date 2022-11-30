// for aylanmasi orqali faktorialni topish
function sonFaktorialiForAylanmasi(son) {
  let natija = 1;
  for (let tartib = 1; tartib <= son; tartib++) {
    natija = natija * tartib;
  }

  return natija;
}

const fakt = sonFaktorialiForAylanmasi(10);
console.log(fakt);
// while aylanmasi orqali faktorialni topish
function sonFaktorialiWhileAylanmasi(son) {
  let natija = 1;
  // sonning o'zini tekshiruvchi qiymat sifatida qabul qildik
  while (son) {
    // har safar aylanma sihga tushganda natijaga sonnin ko'paytirdik
    natija = natija * son;
    // faqat bir xil songa ko'paytirish orqali while aylanmasi cheksiz
    // harakatga kelishini oldini olish uchun sondan har safar while
    // aylanmasi aylanganda 1ni ayiramz
    son = son - 1;
    // yakunida son 0ga teng bo'lib qoladi va while aylanmasi to'xtaydi
  }

  return natija;
}

const faktorialWhile1 = sonFaktorialiWhileAylanmasi(1);
const faktorialWhile10 = sonFaktorialiWhileAylanmasi(10);
const faktorialWhile50 = sonFaktorialiWhileAylanmasi(50);

console.log(faktorialWhile1);
console.log(faktorialWhile10);
console.log(faktorialWhile50);

const faktorial2 = sonFaktorialiForAylanmasi(2);
const faktorial3 = sonFaktorialiForAylanmasi(3);
const faktorial4 = sonFaktorialiForAylanmasi(4);

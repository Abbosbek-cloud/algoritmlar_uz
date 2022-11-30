// for aylanmasi orqali tub sonlarni topish
function sonTubmiFor(son) {
  //agar son ikkidan kichik bo'lsa bunday sonlar tub bo'la olmaydi
  if (son < 2) return "Yo'q";
  // 2-tartibdan boshlab aylanmani ishga tushiramiz
  for (let tartib = 2; tartib < son; tartib++) {
    // agar son biror tartibdagi raqamga qoldiqsiz bo'linsa
    // demak u tub son emas
    if (son % tartib === 0) return "Yo'q";
  }
  // yuqoridagi aylanma shartlaridan o'tib kelsa demak
  // bu son tub son hisoblanadi
  return "Ha";
}

const tub2 = sonTubmiFor(2); // ha
const tub5 = sonTubmiFor(5); // ha
const tub6 = sonTubmiFor(6); // yo'q
const tub7 = sonTubmiFor(7); // ha
const tub13 = sonTubmiFor(13); // ha
console.log(tub2);
console.log(tub5);
console.log(tub6);
console.log(tub7);
console.log(tub13);

// while aylanmasi orqali tub sonni topish
function sonTubmiWhile(son) {
  let tartib = 2;
  if (son < tartib) return "Yo'q";
  while (tartib < son) {
    if (son % tartib === 0) return "Yo'q";
    tartib++;
  }

  return "Ha";
}

const tub2 = sonTubmiWhile(2); // ha
const tub5 = sonTubmiWhile(5); // ha
const tub6 = sonTubmiWhile(6); // yo'q
const tub7 = sonTubmiWhile(7); // ha
const tub13 = sonTubmiWhile(13); // ha
console.log(tub2);
console.log(tub5);
console.log(tub6);
console.log(tub7);
console.log(tub13);
// while aylanmasi ham for aylanmasi kabi ishlaydi
// ikkisining ham ishlash tartibi o'xshash
// ikkinchi funksiyani o'zingiz sharhlashga harakat qilib ko'ring

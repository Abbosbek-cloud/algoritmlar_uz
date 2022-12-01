## Qaytariluvchi funksiyalar

```
    Qaytariluvchi funksiyalar deb shunday funksiyalarga aytiladiki, asosli shartga muvofiq ayni vaqtda
    ishlab turgan funksiyani shu funksiyaning ichida qo'llashga aytiladi.

    Shart hech qachon ROST qiymatga tekshirilib qolmasligi kerak. Agar shunday holat yuzaga kelsa
    funksiya o'zini chaqirishdan to'xtamaydi, va natijada stackoverflow(stakning haddan tashqari
    ortishi) yuzaga keladi va butun bir dastur ishdan to'xtaydi.
```

```JavaScript
// fibanochchi sonini topish uchun rekursiv funksiya yozamiz
function rekursiveFibanochchi(son){
  if (son < 2) {
    return son;
  }
  return rekursiveFibanochchi(son - 1) + rekursiveFibanochchi(son - 2);
}
```

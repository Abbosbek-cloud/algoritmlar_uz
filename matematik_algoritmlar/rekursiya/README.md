## Qaytariluvchi funksiyalar

```
    Qaytariluvchi funksiyalar deb shunday funksiyalarga aytiladiki, asosli shartga muvofiq ayni vaqtda ishlab turgan funksiyani shu funksiyaning ichida qo'llashga aytiladi.

    Shart hech qachon ROST qiymatga tekshirilib qolmasligi kerak. Agar shunday holat yuzaga kelsa funksiya o'zini chaqirishdan to'xtamaydi, va natijada stackoverflow(stakning haddan tashqari ortishi) yuzaga keladi va butun bir dastur ishdan to'xtaydi.
```

```JavaScript
function buSonTubmi(son) {
  // 2dan kichik tub son mavjud emas
  if (son < 2) return false;
  for (let tartib = 2; tartib < son; tartib++){
    if (n % tartib == 0) return false;
  }
  return true;
}
```

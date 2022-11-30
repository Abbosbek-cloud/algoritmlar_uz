## Fibanochchi sonlari

```
  Fibanochchi sonlari shunday sonlarki, har bir raqam o'zidan oldingi ikkitasining yig'indisi bo'lgan ketma-ketlik.
```
```JavaScript
  const fibanochchiSonlari = [0, 1];
  // eng dastlabki fibanochchi ketma-ketligiga misol bo'la oladi.

  // fibanochchi sonlarini berilgan ketma-ketlikda qaytaruvchi funksiya tuzib ko'ramiz
  function fibanochchiKetmaKetligi(son) {
    const fibanochchiSonlari = [0, 1];
    // dastlab fibanochchi sonlarini ro'yxat shakliga keltirib oldik
    for (let tartib = 2; tartib < son; tartib++) {
    // keyingi bosqich 2-tartibdan boshlab fibanochchi sonlarini topib olamiz
      fibanochchiSonlari[tartib] = fibanochchiSonlari[tartib - 1] + fibanochchiSonlari[tartib - 2];
      // yuqoridagi qoidaga muvofiq o'zidan oldingi ikkitasining yig'indisiga teng bo'lgan sonlar fibanochchi sonlaridir va bu funksiyada aynan fibanochchi ketma-ketligidagi sonlar qaytariladi 
    }

    return fibanochchiSonlari;
  }

  const natija3 = fibanochchiKetmaKetligi(3); // [0, 1, 1]
  const natija4 = fibanochchiKetmaKetligi(4); // [0, 1, 1, 2]
  const natija5 = fibanochchiKetmaKetligi(5); // [0, 1, 1, 2, 3]
```

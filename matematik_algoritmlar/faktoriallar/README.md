## Sonning faktoriali

```
    Biror sonning faktoriali deb shu sondan 0 gacha bo'lgan sonlarning ko'paytmasiga aytiladi. n! shaklida yoziladi.

    2! = 2 * 1;
    3! = 3 * 2 * 1;
    4! = 4 * 3 * 2 * 1;

    Shu tartibda ixtiyoriy sonning faktorialini topish mumkin.
```

```JavaScript
function sonFaktoriali(son) {
  let natija = 1;
  for (let tartib = 1; tartib <= son; tartib++) {
    natija = natija * tartib;
  }

  return natija;
}
```

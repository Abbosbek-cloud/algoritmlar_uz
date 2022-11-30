## Tub sonlar

```
    Tub son deb faqat o'ziga va 1ga bo'linuvchi sonlarga aytiladi.


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

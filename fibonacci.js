const s = [];
for (let i = 2; i < 12; i++) {
  s[0] = 0;
  s[1] = 1;
  s[i] = s[i - 1] + s[i - 2];
  console.log(s[i]);
}

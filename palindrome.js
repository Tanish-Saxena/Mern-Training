var s = "hannah";
var l = s.length;
for (let i = 0; i < l / 2; i++) {
  if (s[i] !== s[l - i - 1]) {
    console.log("not a pallindrome");
  } else {
    console.log("is a pallindrome");
  }
}

function reverse(str) {
  console.log(typeof str);
  let rev = "";
  for (let char of str) {
    rev = char + rev;
  }
  console.log(rev);
  // for (let i = 0; i < str.length; i++) {
  //   rev = str[i] + rev;
  // }
  // console.log(rev);
}
const reverse2 = str => [...str].reverse().join("");

function reverse3(str) {
  return str.split("").reduce((acc, cv) => {
    return cv + acc;
  });
}

reverse("Hi There");
console.log(reverse2("yo check it"));
console.log(reverse3("for real?"));

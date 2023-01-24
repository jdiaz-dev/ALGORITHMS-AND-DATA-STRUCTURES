const arrReference = ['Bien', 'Mal', 'A practicar', 'A comer'];

const arrOb = [
  {
    n: 'Mal',
    v: 1,
  },
  {
    n: 'Bien',
    v: 0,
  },
  {
    n: 'A comer',
    v: 3,
  },
  {
    n: 'A practicar',
    v: 2,
  },
];

const result = arrOb.sort(function (a, b) {
  return arrReference.indexOf(a.n) - arrReference.indexOf(b.n);
});
result;

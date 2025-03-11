const words = ['reduce', 'concatenate', 'JavaScript', 'checkoslovakia', 'fun', ];
const res = words.reduce((a, c) => c.length > a.length ? c : a)
console.log(res);

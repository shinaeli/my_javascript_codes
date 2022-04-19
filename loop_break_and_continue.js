let x = 0;
for(let i=0; i<201; i++) {
  x++;
  if(x%2 != 0) continue;
  if(x==150) break;
  console.log(x);
}

const desktops = ["Dell", "Hewlett Packard", "Sony", "Alien Ware", "Apple", "Macintosh", "Asus", "Acer", "Lenovo", "Windows", "Microsoft", "Linux", "Ubuntu"];
// desktops.forEach(function(value, valueIndex, wholeArray) {
//   console.log(value);
// })
for(let i = desktops.length-1; i>-1; i--) {
  console.log(desktops[i]);
}

for(let exercise=1; exercise<4; exercise++) {
  console.log(`-----------Starting Exercise ${exercise}-----------`);
  for(let routine=1; routine<6; routine++) {
    console.log(`Repeat exercise routine ${routine}`);
  }
}
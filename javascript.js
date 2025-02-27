const addNewFroyo = (obj, key) => {
  obj[key] = 1;
  return obj;
};
const addMoreFroyo = (obj, key) => {
  obj[key]++;
};

const makeFroyo = () => {
  for (let i = 0; i < flavors.length; i++) {
    if (flavors[i] in Froyo) {
      addMoreFroyo(Froyo, flavors[i]);
    } else {
      addNewFroyo(Froyo, flavors[i]);
    }
  }
};

let UserPrompt = prompt(
  "Insert list of froyo flavors separated by commas here:"
);
console.log("ScoopsAhoy", UserPrompt);
const flavors = UserPrompt.split(",");
console.log("flavors", flavors);
Froyo = {};
makeFroyo();
console.table(Froyo);



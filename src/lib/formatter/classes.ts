export function classes(
  staticClasses: string,
  dynamicClasses: (string | null | boolean)[]
) {
  if (dynamicClasses) {
    var dynamicClassesJoin = "";
    for (let dynamicClass of dynamicClasses) {
      if (dynamicClass) {
        dynamicClassesJoin += " " + dynamicClass;
      }
    }
    if (dynamicClassesJoin.length > 0) {
      return staticClasses + " " + dynamicClassesJoin;
    }
  }

  return staticClasses;
}

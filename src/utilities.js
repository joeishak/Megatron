export function convertFilterList(arrayList) {
  return "'" + arrayList.join("\', \'") + "' ";
}
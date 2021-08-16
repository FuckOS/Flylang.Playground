export default (text: string): string => {
  let node = document.createElement("div");
  node.innerHTML = text;
  return node.innerText;
}
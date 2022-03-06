// Update this file to use Named Exports
// See: https://www.w3schools.com/js/js_modules.asp
export const greta = () => {
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    if (btn.innerHTML === "Click me") btn.innerHTML = "How dare you?";
    else btn.innerHTML = "Click me";
  });
};

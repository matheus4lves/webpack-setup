const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  if (btn.innerHTML === "Click me") btn.innerHTML = "How dare you?";
  else btn.innerHTML = "Click me";
});

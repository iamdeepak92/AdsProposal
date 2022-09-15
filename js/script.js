var input = document.querySelector(".tagify--outside");

// init Tagify script on the above inputs
var tagify = new Tagify(input, {
  whitelist: ["foo", "bar", "baz"],
  dropdown: {
    position: "input",
    enabled: 0, // always opens dropdown when input gets focus
  },
});

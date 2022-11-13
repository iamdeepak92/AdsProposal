var input = document.querySelector(".tagify--outside");

// init Tagify script on the above inputs
var tagify = new Tagify(input, {
  whitelist: ["foo", "bar", "baz"],
  dropdown: {
    position: "input",
    enabled: 0, // always opens dropdown when input gets focus
  },
});

//range slider

var slider = document.getElementById("slider");

noUiSlider.create(slider, {
  start: [1000, 25000],
  connect: true,
  range: {
    min: 500,
    max: 100000,
  },
  step: 100,
});

var setMin = document.getElementById("setMin");
var setMax = document.getElementById("setMax");

slider.noUiSlider.on("update", function (values, handle) {
  setMin.value = values[0];
  setMax.value = values[1];
});

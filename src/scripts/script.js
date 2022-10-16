// Document Ready Function
$(function () {
  // Color Generate Logic
  $(".code_generator").click(function () {
    let RandomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    RandomColor = "#" + RandomColor;
    $(".color_box").css("background-color", RandomColor);
    $(".color_code").text(RandomColor);
    $(".code_copier").text("copy");

    // Function For Copy Hex Code \
    $(".code_copier").click(function () {
      copy(RandomColor);

      $(".code_copier").text("success");
    });
  });

  const copy = (text) => navigator.clipboard.writeText(text);
});

// Document Ready Function
$(function () {
  // Color Generate Logic
  $(".code_generator").click(function () {
    let RandomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    RandomColor = "#" + RandomColor;
    $(".color_box").css("background-color", RandomColor);
    $(".color_code").text(RandomColor);
    $(".code_copier").css("background-color", "#f8f9fa");
    $(".code_copier").text("copy");

    // Function For Copy Hex Code \
    $(".code_copier").click(function () {
      copy(RandomColor);

      $(".code_copier").text("success");
      $(".code_copier").css("background-color", "green");
      $(".code_copier").css("border", "none");

      setTimeout(() => {
        $(".code_copier").css("background-color", "#f8f9fa");
        $(".code_copier").text("copy");
      }, 500);
    });
  });

  const copy = (text) => navigator.clipboard.writeText(text);
});

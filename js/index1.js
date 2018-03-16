var focusInput = ".input__w-placeholder input";

$(focusInput).focus(function() {
  $(this).parent().addClass("focus");
});

$(focusInput).blur(function() {
  if( !this.value ) {
    $(this).parent().removeClass("focus");
  }
});

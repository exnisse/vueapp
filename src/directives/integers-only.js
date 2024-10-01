const integersOnly = {
  mounted(el, binding) {
    if (binding.modifiers.upper) {
      // Convert the displayed field to uppercase with an initial value
      el.value = el.value.toUpperCase();
      // Simulate the input event to update the v-model
      el.dispatchEvent(new Event("input"));
    }
    el.addEventListener("keydown", (event) => {
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const moves = [
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Tab",
        "Home",
        "End",
      ];
      const letters = [ "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F", ];
      let authorized; // Allowed keys in the input field
      authorized = [...numbers, ...moves];
      if (binding.modifiers.hexa) authorized = [...authorized, ...letters];
      // If the key is not allowed, do not take it into account.
      // The event object is available here.
      if (!authorized.includes(event.key)) event.preventDefault();

      if (binding.modifiers.upper) {
        if (letters.includes(event.key)) {
          const start = el.selectionStart;
          const end = el.selectionEnd;
          const text = el.value;

          // Insert the character at the cursor position
          const newText = `${text.substring(0, start)}${event.key.toUpperCase()}${text.substring(end)}`;
          // Update the value of the input field (in uppercase)
          el.value = newText;
          // Move the cursor to the right
          el.setSelectionRange(start + 1, start + 1);

          // Prevent the event from being processed by the browser
          event.preventDefault();

          // Simulate the input event to update the v-model
          el.dispatchEvent(new Event("input"));
        }
      }
    });
  },
};

export default integersOnly;

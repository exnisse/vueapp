const setColorBasedOnValue = (el, binding) => {
    const maxValue = binding.value || 100;  // default value is 100
    const value = parseFloat(el.value) || 0;
    if (value > maxValue) {
        el.style.color = "red";
        if (binding.modifiers.bold) {
            el.style.fontWeight = "bold";
            el.style.fontFamily = "arial";
        }
    } else {
        el.style.color = "white";
        el.style.fontWeight = "";
        el.style.fontFamily = "";
    }
};

const maxValue = {
    mounted(el, binding) {
        setColorBasedOnValue(el, binding);
    },

    updated(el, binding) {
        setColorBasedOnValue(el, binding);
    },
};

export default maxValue;

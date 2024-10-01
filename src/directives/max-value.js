const setColorBasedOnValue = (el) => {
    const value = parseFloat(el.value) || 0;
    if (value > 100) {
        el.style.color = "red";
    } else {
        el.style.color = "";
    }
};

const maxValue = {
    mounted(el) {
        setColorBasedOnValue(el);
    },

    updated(el) {
        setColorBasedOnValue(el);
    },
};

export default maxValue;

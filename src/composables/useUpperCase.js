import { customRef } from "vue";

const useUppderCase = (initValue) => {
  return customRef((track, trigger) => {
    let value = initValue;
    return {
      get() {
        // track the dependency when the value is read
        track();
        return value.toUpperCase();
      },
      set(newValue) {
        // updte the value and trigger reactivity
        value = newValue;
        trigger();
      },
    };
  });
};

export default useUppderCase;
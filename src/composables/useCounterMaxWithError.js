import useCounter from "./useCounter";
import { ref, onMounted } from 'vue';

const useCounterMaxWithError = (init, max) => {
    const [ count, increment, decrement ] = useCounter(init);
    const error = ref('');

    const incrementMax = () => {
        if (count.value < max) {
            increment();
            error.value = '';
        } else {
            error.value = 'Reached maximum count';
        }
    }

    const decrementMax = () => {
        decrement();
        if (count.value <= max) {
            error.value = '';
        }
    }

    onMounted(() => {
        if (init > max) {
            error.value = 'Initial count exceeds maximum count';
        }
    });

    return [ count, incrementMax, decrementMax, error ];
}

export default useCounterMaxWithError;
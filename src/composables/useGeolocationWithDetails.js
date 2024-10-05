import useGeolocation from "./useGeolocation";
import { ref, watchEffect } from 'vue';

const useGeolocationWithDetails = () => {
    const [latitude, longitude] = useGeolocation();
    const country = ref('');
    const city = ref('');

    watchEffect(async () => {
        if (latitude.value && longitude.value) {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude.value}&lon=${longitude.value}`);
            const json = await res.json();
            if (json && json.address && json.address.country)
                country.value = json.address.country;
            if (json && json.address && json.address.city)
                city.value = json.address.city;
        }
    });

    return [latitude, longitude, country, city];
}

export default useGeolocationWithDetails;
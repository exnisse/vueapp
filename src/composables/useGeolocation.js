import {ref, onMounted } from 'vue';

const useGeolocation = () => {
    const latitude = ref(null);
    const longitude = ref(null);

    const handleGelocation = (position) => {
        latitude.value = position.coords.latitude;
        longitude.value = position.coords.longitude;
    };

    const errorGeolocation = (error) => {
        console.log("Geolocation error:", error.message);
    };

    onMounted(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleGelocation, errorGeolocation);
        } else {
            console.log("Geolocation not available");
        }
    });

    return [latitude, longitude];
}

export default useGeolocation;
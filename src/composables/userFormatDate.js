import { customRef } from 'vue';

const formatDate = (date, format) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    if (format  == "MM-DD-YYYY") {
        return date.toLocaleDateString('en-US', options).replace(/\//g, '-');
    } else if (format == "DD-MM-YYYY") {
        return date.toLocaleDateString('en-GB', options).replace(/\//g, '-');
    } else if (format == "MM/DD/YYYY") {
        return date.toLocaleDateString('en-US', options);
    } else if (format == "DD/MM/YYYY") {
        return date.toLocaleDateString('en-GB', options);
    } else {
        return date.toLocaleDateString('en-US', options);
    }
}

const useFormatDate = (date, format) => {
    const formattedDate = customRef((track, trigger) => {
        let value = date; // value will be the tracked variable
        return {
            get() {
                track();
                return formatDate(value, format);
            },
            set(newValue) {
                value = newValue;
                trigger();
            }
        }
    });

    return formattedDate;
}

export default useFormatDate;
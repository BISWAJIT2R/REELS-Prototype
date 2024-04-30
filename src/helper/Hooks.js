import { useState, useEffect } from 'react';

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('desktop');

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 600px)").matches) {
                setDeviceType('mobile');
            } else if (window.matchMedia("(max-width: 1025px)").matches) {
                setDeviceType('tablet');
            } else {
                setDeviceType('desktop');
            }
        };

        handleResize(); // Call on initial render

        // Debounce resize function for performance improvement
        const debouncedHandleResize = debounce(handleResize, 100);

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, []);

    return deviceType;
};

export default useDeviceType;

function debounce(fn, ms) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
} 

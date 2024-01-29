import debounce from 'lodash/debounce';

    
    const debouncedUnloadMap = debounce(handleUnloadMap, 1000); // Adjust the delay as needed
    
    useEffect(() => {
        window.addEventListener("beforeunload", debouncedUnloadMap);
    
        return () => {
            window.removeEventListener("beforeunload", debouncedUnloadMap);
        };
    }, []);


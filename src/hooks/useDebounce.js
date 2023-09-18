function useDebounce(callback, delay = 2000) {
    let timerId;
    return (...args) => {
        //console.log(...args);
        // we want to clear TimeOut
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

export default useDebounce;
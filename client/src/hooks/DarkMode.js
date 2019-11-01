import { useEffect } from 'react';

import  useLocalStorage  from './LocalStorage';

function useDarkMode(key, initialValues)  {
    const [value, setValue] = useLocalStorage(key, initialValues)
    

    useEffect(() => {
        const body = document.querySelector('body');

        if(value) {
            body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode');
        }
    }, [value])

    return [value, setValue];

    
}
export default useDarkMode;
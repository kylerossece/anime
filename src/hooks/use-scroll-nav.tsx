

import { useEffect, useState } from 'react';

const useScrollNav = ({threshold =10} : {threshold?:number} = {}) => {
 const [isScrolled, setIsScrolled] = useState(false);
 useEffect(() => {
    const updateIsScrolled = () => {
        setIsScrolled(window.scrollY > threshold);
    }
    updateIsScrolled();
    window.addEventListener('scroll', updateIsScrolled, {
        capture: true, passive: true
    });
    return () => {
        window.removeEventListener('scroll', updateIsScrolled);
    }
 }, []);
    return {isScrolled};
}

export {useScrollNav};
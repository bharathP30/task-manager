import { useState, useEffect } from 'react';

export default function useLocalStorage(key , initialValue){

        const [isloaded, setIsloaded] = useState(false);
        const [value, setValue] = useState(()=> {
         try {
          const storedValue = localStorage.getItem(key);
          return storedValue ? JSON.parse(storedValue) : initialValue;
         } catch (error) {
           console.error("Error reading localStorage key “" + key + "”: ", error);
           return initialValue;
         }
        });
      
        useEffect(()=>{
          setIsloaded(true);
        },[]);

        useEffect(()=>{
         if(isloaded){
          try {
           localStorage.setItem(key, JSON.stringify(value));
          } catch (error) {
           console.error("Error setting localStorage key “" + key + "”: ", error);
          } 
        }
        }, [key, value, isloaded])
        return [value, setValue];
    } 
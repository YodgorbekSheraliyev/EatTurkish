import {useState} from 'react'

const useFormHook = (initialValue) => {
    const [value, setvalue] = useState(initialValue);

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setvalue({[name]:value});
    }
  return [value, handleChange];
}

export default useFormHook
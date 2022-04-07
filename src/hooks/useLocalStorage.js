// import { useState } from 'react'

// export function useLocalStorage(key, initialValue) {
//     const [storedValue, setStorageValue] = useState(() => {
//         try {
//             const item = window.localStorage.getItem(key)
//             return item ? JSON.parse(item) : initialValue
//         } catch (e) {
//             return initialValue
//         }
//     })

//     const setValue = value => {
//         try {
//             setStorageValue(value)
//             window.localStorage.setItem(key, JSON.stringify(value))
//         } catch (e) {
//             console.error(e)
//         }
//     }
// }
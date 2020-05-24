// import { useState, useEffect } from "react";

// // const [state, setState] = usePersistentState(null, 'token')
// const usePersistentState = (initialValue, key) => {
//   const [value, setValue] = useState(() => {
//     try {
//       const { value } = JSON.parse(localStorage.getItem(key));
//       return value;
//     } catch {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify({ value }));
//   }, [key, value]);

//   return [value, setValue];
// };

// export default usePersistentState;


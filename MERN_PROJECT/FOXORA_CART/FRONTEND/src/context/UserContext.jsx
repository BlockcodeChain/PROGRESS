// import { createContext, useContext, useEffect, useState } from "react"
// import axios from "axios"

// const UserContext = createContext()

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   // ✅ current user fetch karna
//   const fetchUser = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/user/me", {
//         withCredentials: true
//       })
//       setUser(res.data.data)
//     } catch (err) {
//       setUser(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchUser()
//   }, [])

//   return (
//     <UserContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </UserContext.Provider>
//   )
// }

// // custom hook
// export const useUser = () => useContext(UserContext)




import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/auth/me",
        { withCredentials: true }
      );
      setUser(res.data.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
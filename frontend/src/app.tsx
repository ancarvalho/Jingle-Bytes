import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { routes } from "./utils/routes";


export default function App() {

  return (

    // <AuthProvider>

    <Layout >
      <Routes>
        {Object.values(routes).map((l) => <Route key={l.route} path={l.route} element={<l.element />} />)}
      </Routes>
    </Layout>

  );
  {/* </AuthProvider> */ }



}

// interface AuthContextType {
//   user: string | null;
//   signin: (user: string, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

// const AuthContext = React.createContext<AuthContextType>(null!);

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = React.useState<string | null>(null);

//   const signin = (newUser: string, callback: VoidFunction) => {
//     // return AuthProvider.signin(() => {
//     setUser(newUser);
//     callback();
//     // });
//   };

//   const signout = (callback: VoidFunction) => {
//     // return AuthProvider.signout(() => {
//     setUser(null);
//     callback();
//     // });
//   };

//   const value = { user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   return React.useContext(AuthContext);
// }

// // function AuthStatus() {
// //   const auth = useAuth();
// //   const navigate = useNavigate();

// //   if (!auth.user) {
// //     return <p>You are not logged in.</p>;
// //   }

// //   return (
// //     <p>
// //       Welcome {auth.user}!{" "}
// //       <button
// //         onClick={() => {
// //           auth.signout(() => navigate("/"));
// //         }}
// //       >
// //         Sign out
// //       </button>
// //     </p>
// //   );
// // }

// function RequireAuth({ children }: { children: JSX.Element }) {
//   const auth = useAuth();
//   const location = useLocation();

//   if (!auth.user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }

// function LoginPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const auth = useAuth();

//   const from = location.state?.from?.pathname || "/";

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const username = formData.get("username") as string;

//     auth.signin(username, () => {
//       // Send them back to the page they tried to visit when they were
//       // redirected to the login page. Use { replace: true } so we don't create
//       // another entry in the history stack for the login page.  This means that
//       // when they get to the protected page and click the back button, they
//       // won't end up back on the login page, which is also really nice for the
//       // user experience.
//       navigate(from, { replace: true });
//     });
//   }

//   return (
//     <div>
//       <p>You must log in to view the page at {from}</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username: <input name="username" type="text" />
//         </label>{" "}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }
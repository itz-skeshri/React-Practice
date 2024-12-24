import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

export default function App() {
  return (
    <div className="bg-slate-500 w-full h-screen flex justify-center items-center ">
      <div className=" ">
        <UserContextProvider>
          <h1 className="text-3xl font-bold underline text-white">
            Hello world!
          </h1>
          <Login />
          <Profile />
        </UserContextProvider>
      </div>
    </div>
  );
}

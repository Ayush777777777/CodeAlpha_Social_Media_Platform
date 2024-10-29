import "./App.css";
import Homepage from "./Homepage";
import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./timeline/Timeline";
import Messages from './navcomponents/Messages';
import Notifications from './navcomponents/Notifications';
import Search from './navcomponents/Search';
import Explore from './navcomponents/Explore';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          <>{user ? <Homepage /> : <Authenticate />}</>
        )} >
          <Route index element={<Timeline />} />
          <Route path="/home" element={<Timeline />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

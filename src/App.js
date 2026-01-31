import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import ViewPastes from "./components/ViewPastes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/pastes",
    element: (
      <>
        <Navbar />
        <Pastes />
      </>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <>
        <Navbar />
        <ViewPastes />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

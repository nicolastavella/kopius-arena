import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Game from './Pages/Game';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game/:gameId",
    element: <Game />,
  },
]);

function App() {
  return (
    <div style={{position:'absolute', width:'100%', height:'100%'}}>        
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;

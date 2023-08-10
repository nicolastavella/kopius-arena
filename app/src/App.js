import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Game from './Pages/Game';
import Scoreboard from './Pages/Scoreboard';
import Games from './Pages/Games';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/game/:gameId",
    element: <Game />,
  },
  {
    path: "/score/:gameId",
    element: <GameScore />,
  },
  {
    path: "/final-score",
    element: <FinalScore />,
  },
  {
    path: "/scoreboard",
    element: <Scoreboard />,
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

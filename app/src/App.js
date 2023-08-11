import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Game from './Pages/Game';
import Scoreboard from './Pages/Scoreboard';
import Games from './Pages/Games';
import FinalScore from './Pages/FinalScore';
import GameScore from './Pages/GameScore';
import { UserProvider } from './Context/UserProvider';


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
    <UserProvider>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  );
}

export default App;

import Homepage from "./pages/Homepage";
import PostDetailPage from "./pages/PostDetailPage";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostsPage from "./pages/PostsPage";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/posts/:id' component={PostDetailPage}/>
        <Route exact path='/posts' component={PostsPage}/>
      </Router>
    </div>
  );
}

export default App;

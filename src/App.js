import Homepage from "./pages/Homepage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BlogDetailPage from "./pages/PostDetailPage";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostsPage from "./pages/PostsPage";

function getGraphQlServerUrl() {
  return "http://localhost:8000/api/graphql"
}
function App() {
  const client = new ApolloClient(
    {uri: getGraphQlServerUrl(),
  cache: new InMemoryCache()}
  )
  return (
    <ApolloProvider client={client}><div className="App">
      <Router>
      <Navbar/>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/posts/:id' component={BlogDetailPage}/>
        <Route exact path='/posts' component={PostsPage}/>
      </Router>
    </div></ApolloProvider>
  );
}

export default App;

import './App.css';
// import AllBlog from './component/AllBlog'
// import {Switch, Route} from 'react-router-dom'
import Reply from './component/Reply'
import Cart from './component/Cart'
function App() {

  return (
    <>
    <Cart />
    {/* <Reply/> */}
      {/* <Switch>
      <Route exact path="/">
        <AllBlog cat={"Technology"}/>
      </Route>
      <Route exact path="/all-blogs/health">
        <AllBlog cat={"Health"}/>
      </Route>
      <Route exact path="/all-blogs/travel">
        <AllBlog cat={"Travel"}/>
      </Route>
      <Route exact path="/all-blogs/technology">
        <AllBlog cat={"Technology"}/>
      </Route>
      <Route exact path="/all-blogs/religion">
        <AllBlog cat={"Religion"}/>
      </Route>
    </Switch> */}
    </>
  );
}

export default App;

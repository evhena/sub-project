import { Link } from 'react-router-dom';
import Pages from './Pages';
const MainPage = () => {
  return (
    <div>
      <h1> Main Page</h1>
      <Link to="/second_page">to Second Page</Link>
      <br />
      <Link to="/third_page">to Third Page</Link>
      <Pages />
    </div>
  );
};

export default MainPage;

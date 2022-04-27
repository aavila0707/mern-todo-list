import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
          <Header />

          <Body />

          <Footer />
      </div>
    </div>
  );
}

export default App;

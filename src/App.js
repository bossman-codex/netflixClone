
import './App.css';
import Row from "./Row"
import requests from "./request";
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav></Nav>
     <Banner/>
      <Row title="Now Trending" fetchUrl={requests.fetchTrending} isLargeRow={true}></Row>
      <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixoriginal}></Row>
      <Row title="Top-Rated" fetchUrl={requests.fetchToprated}></Row>
      <Row title="Romance" fetchUrl={requests.fetchRomance}></Row>
      <Row title="Action" fetchUrl={requests.fetchAction}></Row>
      <Row title="Comedy" fetchUrl={requests.fetchComedy}></Row>
      <Row title="Horror" fetchUrl={requests.fetchHorror}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row> 
      
    </div>
  );
}

export default App;

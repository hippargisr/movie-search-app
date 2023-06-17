import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
// import ResultDetail from './components/ResultDetail';

const App: React.FC = () => {
  // const { imdbID } = useParams<{ imdbID: string|undefined }>();

  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<SearchBar />}/> */}
    //     {/* <Route path='/' element={<ResultList />} /> */}
    //     <Route path='/' element={<>HELLOW</>}/>
    //     {/* <Route path="/details/:imdbID" element={<ResultDetail imdbID={imdbID} />} /> */}
    //   </Routes>
    // </Router>
    <div>
      <SearchBar />
      <ResultList />
    </div>
  );
};

export default App;

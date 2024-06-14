import React from 'react';
import SideBar from './Dashboard/SideBar';
import ContentWrapper from './Dashboard/ContentWrapper';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;

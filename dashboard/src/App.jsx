import React from 'react';
import SideBar from './components/Dashboard/SideBar';
import ContentWrapper from './components/Dashboard/ContentWrapper';
import Users from './pages/Users';
import LatestUser from './pages/LatestUser'; 

function App() {
  return (
    <div id="wrapper">
      <SideBar>
        <LatestUser /> {}
      </SideBar>
      <ContentWrapper>
        <Users /> {}
      </ContentWrapper>
    </div>
  );
}

export default App;

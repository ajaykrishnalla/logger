import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechs";
import TechListModal from "./components/techs/TechListModal";

import {Provider} from 'react-redux';
import store from './store';
const App = () => {
  useEffect(() => {
    M.AutoInit();
    //eslint-disable-next-line
  });
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </div>
    </Fragment>
    </Provider>
  );
};

export default App;

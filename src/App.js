import React from 'react';
import SearchAppBar from './Components/AppBar';
import { CustomPaginationActionsTable } from './Components/PaginatioonTable';


export const App = () => {


  return <>
    <SearchAppBar />
    <h1>Star Wars</h1>
    <CustomPaginationActionsTable type="people" />
    <CustomPaginationActionsTable type="starships" />
    <CustomPaginationActionsTable type="planets" />
  </>
} 
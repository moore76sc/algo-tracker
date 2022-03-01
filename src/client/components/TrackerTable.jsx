import React from 'react';
import { useTable } from 'react-table';

const columns = React.useMemo( () => 
  [
    {
      Header: 'Algo Tracker',
      columns: 
        [
          {
            Header: 'Name',
            accessor: 'name', //what is this?
          },
          {
            Header: 'Category',
            accessor: 'category'
          },
          {
            Header: 'LeetCode Link',
            accessor: 'leetcode link',
          },
          {
            Header: 'Solved Time Complexity',
            accessor: 'solved time complexity',
          },
          {
            Header: 'Best Possible Time Complexity',
            accessor: 'best possible time complexity',
          },
          {
            Header: 'Notes',
            accessor: 'notes',
          },
          {
            Header: 'Video Solution',
            accessor: 'video solution',
          },
          
          ]}]




)
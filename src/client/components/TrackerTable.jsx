import React from 'react';
import { useTable } from 'react-table';
import './TrackerTable.css';




function Table ({ data }) {

  const columns = React.useMemo( () => //creates our column headers...but what is an accessor?
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
              accessor: 'link',
            },
            {
              Header: 'Solved Time Complexity',
              accessor: 'solved time complexity',
            },
            {
              Header: 'Best Possible Time Complexity', //maybe use "Best BigO" for short?
              accessor: 'bigO',
            },
            {
              Header: 'Notes',
              accessor: 'notes',
            },
            {
              Header: 'Video Solution',
              accessor: 'solution',
            },
            
          ]
      }
    ],
    []
  );//below is an example style from react table. I put it in just to show the structure if we want to move it to global styles

  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
    })

  return (
  <div className='tableContainer'>
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Table;
  
  

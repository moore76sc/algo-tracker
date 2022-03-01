import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components'

const data = //insert redux state. redux does the fetch?


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
              accessor: 'leetcode link',
            },
            {
              Header: 'Solved Time Complexity',
              accessor: 'solved time complexity',
            },
            {
              Header: 'Best Possible Time Complexity', //maybe use "Best BigO" for short?
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
            
          ]
      }
    ],
    []
  );//below is an example style from react table. I put it in just to show the structure if we want to move it to global styles

  const Styles = styled.div`
    padding: 1rem;
    table {
      border-spacing: 0;
      border: 1px solid black;

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
          border-right: 0;
        }
      }
    }
  `
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
  )
}

export default Table;
  
  

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function DataTable({dataRow, changeProp}) {

  const [myData, setMyData] = React.useState({})

  let arr = dataRow.forEach(element => {
    // console.log(element)
    for(let x in element[0]){
      let myKeys = element[x]
      console.log(x)
    }
  });

  

  const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: changeProp, type: 'number', width: 90,},
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  { field: 'radio', headerName: 'Gender', width: 100 },
];


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dataRow}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

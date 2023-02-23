
import React, { useCallback, useMemo, useRef, useState, useContext } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { getReportData } from './mockData'
import ClickableCell from './Cell'
import './styles.css'
import { TransactionsContext } from './TransactionsContext'
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

const Reports = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext)
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState(getReportData());
  const [columnDefs, setColumnDefs] = useState([
    { field: 'field', rowGroup: true, hide: true },
    { field: 'subfield', headerName: "" },
    { field: 'Oct 2022', aggFunc: 'sum', cellRenderer: ClickableCell },
    { field: 'Nov 2022', aggFunc: 'sum', cellRenderer: ClickableCell },
    { field: 'Dec 2022', aggFunc: 'sum', cellRenderer: ClickableCell },
    { field: 'Jan 2023', aggFunc: 'sum', cellRenderer: ClickableCell },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      sortable: true,
      resizable: true,
    };
  }, []);

  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 300,
      cellRendererParams: {
        footerValueGetter: params => {
          const isRootLevel = params.node.level === -1;
          if (isRootLevel) {
            return 'Net Income';
          }
          return 'Sub Total'
        },
      }
    };
  }, []);

  let showPanel = "panel-wrap "
  if (transactions) {
    showPanel = "panel-wrap show-panel"
  }
  const handleDrag = (e, data) => {
    e.dataTransfer.setData("mydata",JSON.stringify(data));
    console.log(data)
  }

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          groupIncludeFooter={true}
          groupIncludeTotalFooter={true}
          animateRows={true}
          rowHeight={50}
          groupDefaultExpanded={1}
        ></AgGridReact>
      </div>
      <div class={showPanel} >
        <div class="panel">
          <div style={{marginBottom: '2rem'}}>
          <Button variant="outlined"  onClick={() => setTransactions(null)}>Close X</Button >
          </div>
          
          {transactions && <div className='flex flex-c'>

            <div style={{marginBottom: '2rem', borderBottom: '1px solid grey'}}>
              <Typography>{transactions.month}</Typography>
              <Typography>{transactions.total}</Typography>
              <Typography>{transactions.field}</Typography>
              <Typography variant="body2" color="text.secondary">{transactions.subfield}</Typography>
            </div>
            <div>
              {transactions.transactions.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='flex flex-j center-y item' 
                    draggable 
                    onDragStart={(e) => handleDrag(e, {item,transactions} )} >
                    <div className='flex flex-c  center' style={{width: '8rem'}}>
                      <Typography>{item.date}</Typography>
                      <Typography>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{item.subtitle}</Typography>
                    </div>
                    <Typography>{item.total}</Typography>
                  </div>

                )
              })}
            </div>

          </div>}

          <div>

          </div>

        </div>
      </div>
    </div>
  );
};


export default Reports

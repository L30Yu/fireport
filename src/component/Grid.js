import React, { useState, useRef, useEffect, useMemo, useCallback, useContext } from 'react';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import { GridContext } from '../context';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';
import Report from './Report';
import {TransactionsProvider} from './TransactionsContext';
import { StyledEngineProvider } from '@mui/material/styles';

export const Grid = () => {

  return (
    <div>
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ width: 1200, height: 1500 }}>

      <StyledEngineProvider injectFirst>
        <TransactionsProvider>
          <Report />
          </TransactionsProvider>
    </StyledEngineProvider>
      </div>
    </div>
  );
};


import React, { useContext } from 'react';
import { TransactionsContext } from './TransactionsContext'
import './styles.css'

export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const { column, data } = props;
  const { setSelectedCell } = useContext(TransactionsContext)

  const clickedable = data?.field === 'Expense'

  const buttonClicked = () => {
    if (column && data) {
      setSelectedCell({
        colId: column.colId,
        field: data.field,
        subfield: data.subfield
      })
    }
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (ev) => {
    ev.preventDefault();
    if (clickedable) {

      const mydata = ev.dataTransfer.getData("mydata");
      const {item, transactions} = JSON.parse(mydata);
      const {title, subtitle, date, total, id} = item;
      if (transactions.subfield === data.subfield) {
        alert(`Nothing will change, its the same category: ${data.subfield}`);
      } else {
        const text = `Following transaction will updated from ${transactions.subfield} to ${data.subfield}: 
        \n ${title}\n ${subtitle}\n ${date}\n Total: ${total}`;
        alert(text)
        console.log('POST to update transcation with id and new subfield', id, data.subfield)
        
      }
       
    }

  }
  const style = clickedable && data ? { height: '100%', width: '100%', cursor: 'pointer' } : {}
  
  return (
    <div
      onDrop={clickedable && handleDrop}
      onDragOver={clickedable && handleOnDragOver}
      onClick={() => clickedable && buttonClicked()}
      style={style}
      className={clickedable && 'onhover-color'}
    >
      <span>{cellValue}</span>&nbsp;
    </div>
  );
};
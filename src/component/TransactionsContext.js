import {createContext, useState, useEffect} from 'react'
import {getTransactionData} from './mockData'

const TransactionsContext = createContext(null)

const TransactionsProvider = ({children}) => {
    const [transactions, setTransactions] = useState(null)
    const [selectedCell, setSelectedCell] = useState(null)
    const {colId, field, subfield} = selectedCell || {}

    useEffect(() => {
        const fetchTrans = async () => {
            const data = getTransactionData(colId, field, subfield)
            setTransactions(data);
        }
        if(colId && field && subfield)
        fetchTrans();
    }, [colId, field, subfield])

    const values = { 
        setSelectedCell,
        transactions,
        setTransactions
    }

    return (
        <TransactionsContext.Provider value={values}>
            {children}
        </TransactionsContext.Provider>
    )
}

export {TransactionsProvider, TransactionsContext}
export function getReportData() {
  return [
    {
      field: 'Banks',
      subfield: 'First Republic Savings',
      "Oct 2022": 1100,
      "Nov 2022": 2200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Banks',
      subfield: 'Chase Checking',
      "Oct 2022": 100,
      "Nov 2022": 200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Banks',
      subfield: 'Chime',
      "Oct 2022": 100,
      "Nov 2022": 200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Banks',
      subfield: 'Chase',
      "Oct 2022": 100,
      "Nov 2022": 200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Income',
      subfield: 'Sale Income',
      "Oct 2022": 100,
      "Nov 2022": 200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Income',
      subfield: 'Rental Income',
      "Oct 2022": 100,
      "Nov 2022": 200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Income',
      subfield: 'Interest Income',
      "Oct 2022": 100,
      "Nov 2022": 200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Income',
      subfield: 'Investment Income',
      "Oct 2022": 100,
      "Nov 2022": 200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    },
    {
      field: 'Cost of Goods Sold',
      subfield: 'Cost 1',
      "Oct 2022": -200,
      "Nov 2022": -300,
      "Dec 2022": -300,
      "Jan 2023": -300,
    },
    {
      field: 'Cost of Goods Sold',
      subfield: 'Cost of rental',
      "Oct 2022": -200,
      "Nov 2022": -300,
      "Dec 2022": -300,
      "Jan 2023": -300,
    },
    {
      field: 'Cost of Goods Sold',
      subfield: 'Cost 2',
      "Oct 2022": -200,
      "Nov 2022": -300,
      "Dec 2022": -300,
      "Jan 2023": -300,
    },
    {
      field: 'Expense',
      subfield: 'Bank Charge & Fees',
      "Oct 2022": -100,
      "Nov 2022": -100,
      "Dec 2022": -100,
      "Jan 2023": -100,
    },
    {
      field: 'Expense',
      subfield: 'Legal Services',
      "Oct 2022": -200,
      "Nov 2022": -300,
      "Dec 2022": -300,
      "Jan 2023": -300,
    },
    {
      field: 'Expense',
      subfield: 'Taxes & Licenses',
      "Oct 2022": -300,
      "Nov 2022": -300,
      "Dec 2022": -300,
      "Jan 2023": -300,
    },
  ]
}

export function getTransactionData(month, field, subfield) {
  return {
    month,
    field,
    subfield,
    total: '-212.96',
    transactions:  [
      {
        id: '111',
        title: 'Google',
        subtitle: 'Google Ads',
        date: '10/01/22',
        total: '-188.96',
      },
      {
        id: '222',
        title: 'Google',
        subtitle: 'Google Workspace',
        date: '10/01/22',
        total: '-6',
      },
      {
        id: '333',
        title: 'Google',
        subtitle: 'Google Domains',
        date: '10/01/22',
        total: '-18',
      }
    ]
  }
}

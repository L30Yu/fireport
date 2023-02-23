# This is my Financial Report project

## Available Scripts

In the project directory, you can run:

### `npm install && npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

<img width="1635" alt="image" src="https://user-images.githubusercontent.com/12931325/221016506-01bf96aa-88d2-4317-8ec3-d301576df8d5.png">


# Task 1: Write the APIs you’d like from your backend
## getReport
  getReport endpoint takes user Id to fetch the financial report data
  - endpoint name: getReport
  - request method: GET
  - request params: userId
  - expected response: an array of object 
  ```
    {
      field: 'Banks',
      subfield: 'First Republic Savings',
      "Oct 2022": 1100,
      "Nov 2022": 2200,
      "Dec 2022": 300,
      "Jan 2023": 4000,
    }
  ```
  the `field` could be "Banks", "Income", "COGS", "Expenses"
  

## getTransaction
  getTransaction end point takes `field`, `subfield`, `month` to fetch transaction details
  - endpoint name: getTransaction
  - request method: GET
  - request params: `field`, `subfield`, `month` 
  - expected response: an object with transactions array
  ```{
    month,
    field,
    subfield,
    total: '-212.96',
    transactions: [
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
    ```

## updateTransaction
  updateTransaction end point takes `transactionId`, `newSubfield` to update transaction to a different subfield
  - endpoint name: updateTransaction
  - request method: POST
  - request params:  `transactionId`, `newSubfield`
  - expected response: an empty object with http response 200 code if updated successfully 
  ```{}```


# Task 2: generate the UI for the report
- This report has the ability to group categories and provide total sum
- Net Income is calculated and on the bottom
- Gross Profit not provided yet on this report, need extra time to figure out how to customize this on the report
- be able to show the expanded dropdown UX above

# Task 3: user clicks on a particular cell display the transactions that contributed 
- For now, only enabled Expense cells able to clickable, this is extra code added to demo how to make cell clicable
- when hover Expense cells, background color updated
- when click Expense cells, a slide panel showing with animation
- when slide panel shows, it fetched transactions details data and displayed on the panel
- slide panel can be closed by click Close button


# Task 4: Darp and Drop to re-categorize transactions
- the transactions on the panel now able to drag and drop
- when it drop to the same category, it won't chagne anything
- when it drop to different category, it will simulate sending request to `updateTransaction`
- typically, we would update the report by calling the `getReport` after update succeed, so, no aggrecation calculation needed on front end


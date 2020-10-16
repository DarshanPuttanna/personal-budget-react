const express = require ('express');
const app = express();
const port= 3001; 
const dataPath = require ('./budgetData.json');
const cors = require('cors');

app.use(cors());

// app.use('/', express.static('public'));

// const budget = {
//     myBudget: [
//     {
//         title: 'Eat Out',
//         budget : 25
//     },

//     {
//         title: 'Rent',
//         budget : 375
//     },

//     {
//         title: 'Grocery',
//         budget : 110
//     },
// ]};

// app.get('/hello', (req, res) =>{
//     res.send('Hello WOrld');
// });

app.get('/budget', (req, res) =>{
    res.json(dataPath);

});

app.listen(port, () =>{
// eslint-disable-next-line no-template-curly-in-string
console.log('Example app listening at http://localhost:${port}')
});

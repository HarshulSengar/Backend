import express from 'express'; //module js(in package.json "type" : "module", )
const app = express();
//  app.get('/' , (req , res)=>{
//      res.send('Service is started');
//  })


app.get('/api/jokes' , (req , res) =>{
    const jokes = [
        {
            id : 1 ,
            name : 'Sadhna',
            Content : 'funny'
        },
        {
            id : 2 ,
            name : 'pragya',
            Content : 'emotional'
        },
        {
            id : 3 ,
            name : 'rahul',
            Content : 'disco'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 6000;

app.listen(port , () =>{
    console.log(`Server at http://localhost:${port}`);
});


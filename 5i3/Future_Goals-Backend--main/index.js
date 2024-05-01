const app = require('./Require');

const port = process.env.PORT || 3022;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.static('public'));

app.listen(3000, () => { console.log('Server is running');
});
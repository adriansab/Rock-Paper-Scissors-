import express, { urlencoded } from 'express';
import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import resultRouter from './routes/result.js';

const app = express();
const port = 3005;

app.set('view engine', 'ejs');
app.use(express.static(`public`));

app.use(urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/result', resultRouter);

app.listen(port, () => {
  console.log(`RPS app listening at http://localhost:${port}`)
});

export default app;
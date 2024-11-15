import express from 'express';
import restaurantRouter from './routes/restaurants';
import cuisineRouter from './routes/cuisines';
import { errorHandler } from './middlewares/errorHandler';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/restaurants', restaurantRouter);
app.use('/cuisines', cuisineRouter);
app.use(errorHandler);

app
  .listen(PORT, () => {
    console.log(`Appluication running on port ${PORT}`);
  })
  .on('error', (error) => {
    throw new Error(error.message);
  });

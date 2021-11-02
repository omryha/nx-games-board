import * as express from 'express';
import { getGames } from './app/game';
import { createReview, getReviews } from './app/review';
import { addItemToCart, getCart, updateItemInCart } from './app/store';

const app = express();
app.use(express.json());

// Get games
app.get('/api/game', getGames);

// Get reviews
app.get('/api/review/:game', getReviews);

// Create review
app.post('/api/review/:game', createReview);

// Get cart
app.get('/api/cart', getCart);

// Add item to cart
app.post('/api/cart', addItemToCart);

// Update item in cart
app.put('/api/cart', updateItemInCart);

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

server.on('error', console.error);

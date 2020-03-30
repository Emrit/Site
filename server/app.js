const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const helmet = require('helmet');
const compression = require('compression');
const devRoutes = require('./routes/devRoutes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// GLOBAL MIDDLE WARES
// Implement cors
app.use('*', cors());
app.use(helmet());

// Set security HTTP headers
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this ip, please try again in an hour'
});

// app.use('/api', limiter);

// Body parser, reading data from the body into req.body, limits the size of the data
app.use(express.json({ limit: '10kb' }));

// Data sanitization against XSS
app.use(xss());

// Test middlewares
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(compression());
app.use('/api/v1/dev', devRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(globalErrorHandler);

module.exports = app;

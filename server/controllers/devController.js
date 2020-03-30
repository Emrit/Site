const { GoogleSpreadsheet } = require('google-spreadsheet');
const shortId = require('shortid');
const moment = require('moment');
const _ = require('lodash');
const catchAsync = require('../utils/catchAsync');

const doc = new GoogleSpreadsheet(
  '16JZKd8J7oRrebWDp_j3SeINQ6BGeRY8pV_wAB1X5Mqc'
);

const memId = 'MemberId';
const createdAt = 'Created At';

exports.signupSheet = catchAsync(async (req, res, next) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.GServiceClientEmail,
    private_key: process.env.GServicePrivateKey
  });

  const form = [...req.body.signup];

  const formHeader = [
    'First Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Number of Installations',
    'Shipping Address',
    'Address Line 1',
    'Address Line 2',
    'City',
    'Zip Code',
    'State',
    'Country',
    'Final Addresses',
    'Final Cities',
    'Final Zip Codes',
    'Final States',
    'Final Countries',
    'Final Longitudes',
    'Final Latitudes',
    'Final Heights'
  ];

  const row = {};
  form.map((data, index) => {
    if (_.isArray(data) && !_.isEmpty(data) && data.length < 1) {
      row[`${formHeader[index]}`] = data;
    } else if (_.isArray(data) && !_.isEmpty(data) && data.length >= 1) {
      row[`${formHeader[index]}`] = data[0];
    } else if (!_.isArray(data)) {
      row[`${formHeader[index]}`] = data;
    }
  });

  row[`${createdAt}`] = moment().format('YYYY-MM-DD');
  row[`${memId}`] = shortId.generate();

  // console.log(row);

  await doc.loadInfo();
  const sheet = await doc.sheetsByIndex[0];
  await sheet.addRow(row);

  form.map(async (data, index) => {
    // console.log(data);
    if (_.isArray(data) && !_.isEmpty(data) && data.length >= 2) {
      data.map(async (arr, i) => {
        await sheet.addRow({ [`${formHeader[index]}`]: data[i + 1] });
      });
    }
  });

  res.status(201).json({
    status: 'success'
  });
});

exports.contactSheet = catchAsync(async (req, res, next) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.GServiceClientEmail,
    private_key: process.env.GServicePrivateKey
  });

  const form = [...req.body.contact];

  const formHeader = ['First Name', 'Email', 'Subject', 'Comment'];

  const row = {};
  form.map((data, index) => {
    row[`${formHeader[index]}`] = data;
  });

  row[`${createdAt}`] = moment().format('YYYY-MM-DD');
  row[`${memId}`] = shortId.generate();

  await doc.loadInfo();
  const sheet = await doc.sheetsByIndex[1];
  await sheet.addRow(row);

  res.status(201).json({
    status: 'success'
  });
});

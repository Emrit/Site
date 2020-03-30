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
    client_email: 'codetraxx@emrit-271820.iam.gserviceaccount.com',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6Vu0hNt3t+d/W\nIe6T+wQD6P2LXhxFLK1frKMb9WaS3XjmvbZRC4GtnliF+HMusecvjJJVFAwQOxx3\nF6QueYG3h1CJjxAbshXYcK+fmjIL/Tt4ILyK0hXi70Ou+LXJlwp2TpWrcAPjLjIt\nizDUidjh/hplmyqO/aT9wOrN8H614CGxERUKPDaB2jNmPqogfMB+ViDL9SZq/ddX\nu4qkSND2grn87l5PnT56eKheUUl52V7SyOEhvw8ZZqdjERw+ttK5/8nfDP3I9RFR\nqts9zLXYD0Bap+eDFjGiohE3HE7qfHwdDHZ5vpIyHZPdEBQ7NF8SU0SgHC482gRB\nydfl9UfjAgMBAAECggEAHFt9M9hLNtuXfllkmt2Q811iNHLqf3Z4nf5CRk92wDP3\nIbpORBApuHfIBf9U3A7T3W8Zl9v4qAGu58rPwAjavkjX7083xtc3rtwbRgEry5pK\nkhH9T20ASqxZ0wdjdt3HCFEWQuRFmy2dEkRD9pxRxraqYrsV43PjR4Cz2wpV5iyG\nb4OaNPeEDJs18p9AFwbV83stu6QeDqPOBXjxHgv5JvJdGtBHS9KEdwFkdhtUMRFl\n3E33CI4G+rTBchE5TE9FgHOjQJuYaI3t6ojibzVgAySMKENH9EP1ZFSz2K+1YKLM\nRIDZtbGghgg4W3mjA/PsdC7ZLL4/6oTGuqDQ9zoRxQKBgQDyH+wrA38xgDFtPvaE\nG7d+L2BkkNKRGS8jfPb803NOh0YZzG7wDEJzj1FZdYJ+Dj2t1jM1voy6kTN/mDrQ\naUtxaM0pd2PDgJ1/EnV8mCFrFlNZlh9IAuA+N4xKu7eaOdlzPyWzzPEFvL3RQEWq\nnL7N0ddA/wspqoVP/ujhgCf1hwKBgQDFBJxeEdWE7sle/DFmtTBSJnplGwPxgzI9\nLycAWMT/9012b5R2fLOpKh7w+jC/uzCHee0SwIlrwW74isPvKI5vRly+GLXKr+DR\npdjgND88oEYxaklYhw2zCRUGwfDGShavM191dud+UvxJYJy1/euQ0BOP01bX926p\nNq9vArWxxQKBgQCxan7NTfSnuv18xYQxbXXZOrHxPsVsmP2XjXwV6oM1aZ4OTWSE\n9RbEQqIjYR3LbHf5p1lC6muIUdlgh5WhHWawpVCgL+GkYdwGPupj772dEHDm1j/5\nrlHOhTmBkWeJ1RXngsAHrgZ2Y8TbTbM+vzh47GhEMh5l25Nv+KOAiT2+hQKBgQCk\ngX8XRQjmYIQgHbAaNHxOe/aC6ZXXWVbfo7mLHpQPrq0tkWmDrghN3e/MAvwle+W/\nmV0M5VtZcEB6o1OLJHAaFcRmrjdNMKImK7b1LmsG8kTqCfeIRex4a8L0y4eB6mca\nj2jLqicNYblqg5MWmxjQ6A0NcMf4uI/cFt9RcA/KiQKBgDtenDhOqt9AdniMNQAJ\nc6PioWqMigPPyuqjk2EvbV3z/pPLLyUtLE3Q/qOyse9+inCu8N2oXNz2qTswcDa2\nfNJCxM7BTM26p1FxcbxAERME/proWUTT0BL4sQHj7dz4k8HwrVDyEGNOHQjDaaYG\nFI98S5ho/bx87e8VBO/5t4C7\n-----END PRIVATE KEY-----\n'
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
    client_email: 'codetraxx@emrit-271820.iam.gserviceaccount.com',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6Vu0hNt3t+d/W\nIe6T+wQD6P2LXhxFLK1frKMb9WaS3XjmvbZRC4GtnliF+HMusecvjJJVFAwQOxx3\nF6QueYG3h1CJjxAbshXYcK+fmjIL/Tt4ILyK0hXi70Ou+LXJlwp2TpWrcAPjLjIt\nizDUidjh/hplmyqO/aT9wOrN8H614CGxERUKPDaB2jNmPqogfMB+ViDL9SZq/ddX\nu4qkSND2grn87l5PnT56eKheUUl52V7SyOEhvw8ZZqdjERw+ttK5/8nfDP3I9RFR\nqts9zLXYD0Bap+eDFjGiohE3HE7qfHwdDHZ5vpIyHZPdEBQ7NF8SU0SgHC482gRB\nydfl9UfjAgMBAAECggEAHFt9M9hLNtuXfllkmt2Q811iNHLqf3Z4nf5CRk92wDP3\nIbpORBApuHfIBf9U3A7T3W8Zl9v4qAGu58rPwAjavkjX7083xtc3rtwbRgEry5pK\nkhH9T20ASqxZ0wdjdt3HCFEWQuRFmy2dEkRD9pxRxraqYrsV43PjR4Cz2wpV5iyG\nb4OaNPeEDJs18p9AFwbV83stu6QeDqPOBXjxHgv5JvJdGtBHS9KEdwFkdhtUMRFl\n3E33CI4G+rTBchE5TE9FgHOjQJuYaI3t6ojibzVgAySMKENH9EP1ZFSz2K+1YKLM\nRIDZtbGghgg4W3mjA/PsdC7ZLL4/6oTGuqDQ9zoRxQKBgQDyH+wrA38xgDFtPvaE\nG7d+L2BkkNKRGS8jfPb803NOh0YZzG7wDEJzj1FZdYJ+Dj2t1jM1voy6kTN/mDrQ\naUtxaM0pd2PDgJ1/EnV8mCFrFlNZlh9IAuA+N4xKu7eaOdlzPyWzzPEFvL3RQEWq\nnL7N0ddA/wspqoVP/ujhgCf1hwKBgQDFBJxeEdWE7sle/DFmtTBSJnplGwPxgzI9\nLycAWMT/9012b5R2fLOpKh7w+jC/uzCHee0SwIlrwW74isPvKI5vRly+GLXKr+DR\npdjgND88oEYxaklYhw2zCRUGwfDGShavM191dud+UvxJYJy1/euQ0BOP01bX926p\nNq9vArWxxQKBgQCxan7NTfSnuv18xYQxbXXZOrHxPsVsmP2XjXwV6oM1aZ4OTWSE\n9RbEQqIjYR3LbHf5p1lC6muIUdlgh5WhHWawpVCgL+GkYdwGPupj772dEHDm1j/5\nrlHOhTmBkWeJ1RXngsAHrgZ2Y8TbTbM+vzh47GhEMh5l25Nv+KOAiT2+hQKBgQCk\ngX8XRQjmYIQgHbAaNHxOe/aC6ZXXWVbfo7mLHpQPrq0tkWmDrghN3e/MAvwle+W/\nmV0M5VtZcEB6o1OLJHAaFcRmrjdNMKImK7b1LmsG8kTqCfeIRex4a8L0y4eB6mca\nj2jLqicNYblqg5MWmxjQ6A0NcMf4uI/cFt9RcA/KiQKBgDtenDhOqt9AdniMNQAJ\nc6PioWqMigPPyuqjk2EvbV3z/pPLLyUtLE3Q/qOyse9+inCu8N2oXNz2qTswcDa2\nfNJCxM7BTM26p1FxcbxAERME/proWUTT0BL4sQHj7dz4k8HwrVDyEGNOHQjDaaYG\nFI98S5ho/bx87e8VBO/5t4C7\n-----END PRIVATE KEY-----\n'
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

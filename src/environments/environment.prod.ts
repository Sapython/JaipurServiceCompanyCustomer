export const environment = {
  firebase: {
    projectId: 'jaipurservicecompany-demo',
    appId: '1:592897926378:web:745b9967d8c4c55442a393',
    storageBucket: 'jaipurservicecompany-demo.appspot.com',
    apiKey: 'REPLACEMENT_STRING',
    authDomain: 'jaipurservicecompany-demo.firebaseapp.com',
    messagingSenderId: '592897926378',
    measurementId: 'G-51TVQ41FLB',
    functionURL: 'https://us-central1-jaipurservicecompany-demo.cloudfunctions.net/',
  },
  cloudFunctions : {
    createOrder: 'https://us-central1-jaipurservicecompany.cloudfunctions.net/createOrder',
    capturePayment: 'https://us-central1-jaipurservicecompany.cloudfunctions.net/capturePayments',
    createSubscription: 'https://us-central1-jaipurservicecompany.cloudfunctions.net/createSubscription',
    verifySubscription:'https://us-central1-jaipurservicecompany.cloudfunctions.net/verifySubscription',
    checkSubscriptionStatus:'https://us-central1-jaipurservicecompany.cloudfunctions.net/checkSubscriptionStatus',
  },
  RAZORPAY_KEY_ID: 'REPLACEMENT_STRING_8cTBlk022y2EDq',
  production: true
};

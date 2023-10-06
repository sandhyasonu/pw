var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF1TxUyiUNodL6X6oMczLiANRrNYrJo_BFPec3ltyYrGiDjPG4qlTDgxti80_F9nrxLTWGMb-423z1Vchhua0O8',
    privateKey: 'pscrRqYFDedgTCl-ACFqqonzTU8n6omaQJaxMPPb_yA'
  }

  push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

  let sub={};
  
  push.sendNotification(sub,'test message')
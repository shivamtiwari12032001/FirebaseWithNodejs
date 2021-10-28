const firebase = require("firebase-admin");

const firebaseConfig = {
  type: "service_account",
  project_id: "fir-withnodejs-a0804",
  private_key_id: "278a4d8bff58fd24960d32bad8f15544b3926eaf",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHtOTEk7fU+3oh\nhasTwEHqr0AfMZKJcguIVj9XpYEr+nuYzYCIlFdldx4v4u84I3Bw7jXpndjLbVW4\nMhVXMDJxQrT65i1jtyKBIiJHqmUerHJf4IL076WYXdDK9r7zDTpjwkEFjQYrKCnO\nJMkizSGYk+kX9DX/AIdhnIF+2rymu29q26Ose6YBG7Hd0djhYLXn/iNbsN0nISgx\nw5Gd+zoiVxIxMC4PRlLueOGyQyqLgYadM521ZXzBmIZmjyl9G+LxowYkq4GleTF0\n4xWoX3ocIjFjaGad9s2X3KCQrQujVNJ2czdzRM3TermvOGrjb9mMRaCrCFgQOXLN\nGIy70E97AgMBAAECggEAEVSDelg+noG42PoyXN3qZR+9Ju0p2WSSAfbzZeXhCOci\nh6GPCGB7Gb0rBkkhV5P3uM0V1PE+NB+yTcWG2uXoqAcmZmlyweb4BxBmZ3quw2kq\nlGMKv4+g+qZq19oZZZpzGTTCaLq9W3cPnanNNzMUOcXdd0HZgl384ZMacl7apSCS\nd8kGAxda22vvd4QG9XvcBPZlS9N22yCD0LT0kP2hnYoZDLPrbZTlwPVue4eva6Nu\nb06VWJmphWc0Z25nOHjsbA699ArZJOnOha6MoAjAYNZZSelLwNugYKYBdTOb76pW\nlnHuGdpvVtPtA77pMaFQh378MTZAakDcM9CcayB3IQKBgQD1IWsCvRLGSb8kOP2k\nISuhxxOuNn61+l6JDf2m2iU+IzQSmnh8dHnqGf4jII3BbeLZbSlat23QaRkV+1fD\nX2ho0/pJXwB8dxJqAWPUnvdTgL8MFqFQZCK/Bp4WRcYLWEt7aZ3PnVGkAwmlbajF\nJO72mEsLO3QKrew3uYPVlGlymwKBgQDQj9libblQyRlHJ5vZop56VwxuZfVzkujT\nZ9Q77U6Z4bnIVBddRYcrwq7pDHu2fpu9ZZcplq7u6RBcl3k1oH8nRtETnPZP6DhO\nMUV1Lmf1rkC2TLLn4ot6Ee2yzZLqv83yu2VKIvGtPgAd9ND1GfDV89+Hkf6oAPKD\n6mjLTUN0oQKBgQCTv0Gtk+KWC2se3Q7b93ZB+yi8j3IOI0sJlpo1EDT0X+mJ8PsA\nIIA+/s2zxHJMjPv3Cxmq6PZScJZDLow2YPIghOvNf2pemrJJnG7cf7gY53e/RICU\nYNakhsuQJxv4SI6uYvlQYsULcx1ETXU05k716NMKgRovOacv6ywv9lUcUwKBgEYo\nfboMqxAv9d7nxheaCrGg4r+ocL8mJkgnX0+hbpV5R2PKVem8X9IqtWgUGPG0+XLm\n38jPtZ0MrcJX+iA+E0gFHIP6gykyNu6myHS43aPZsE8i0fQLU1wG9+z0Fn39c6w5\nucMMqjva5XMuTbSFu2xdk04poH6ngu05R3NMVGrBAoGAOnW+2gh1NzgoVy/a8/OV\n8ZXzNLlCxcj/BMxr9T6OHZ9WKL87RntpgSBwrPnLFvnet9copL/EhpJlXG2WWeSV\n3p5XgbRW/j0TqzWCswan7+RjU3ntEuYlSNPiPIA17E4mWr2q625jfm/pFBVEKjs6\nQAGXYB/kEIziZqAsDdzDGQY=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-5ux6m@fir-withnodejs-a0804.iam.gserviceaccount.com",
  client_id: "100508056774931722120",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5ux6m%40fir-withnodejs-a0804.iam.gserviceaccount.com",
};

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig),
  // databaseURL: "https://glyderides-55911.firebaseio.com",
});
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;

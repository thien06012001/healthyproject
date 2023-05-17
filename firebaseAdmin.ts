// firebaseAdmin.ts

import * as firebaseAdmin from 'firebase-admin';
import {getApps} from 'firebase-admin/app'
// get this JSON from the Firebase board
// you can also store the values in environment variables
import serviceAccount from './permissions.json';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id,
    }),
    databaseURL: 'https://sign-form-d586a.firebaseio.com',
  });
}
const adminDb = firebaseAdmin.firestore();
export { firebaseAdmin };
export {adminDb}
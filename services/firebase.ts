import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from '@firebase/database'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAINE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firestore
const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)

// Initialize Realtime DB

const rtApp = initializeApp(
  {
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  },
  'rtdb'
)
export const rtdb = getDatabase(rtApp)

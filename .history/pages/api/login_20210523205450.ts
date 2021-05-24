import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";
import jwt from "jsonwebtoken";

const login = async (req: NextApiRequest, res: NextApiResponse) => {

    if(!req.body) {
        res.status(400).end('Input required')
    }

    const { db } = await connectToDatabase();

    const {username, password} = req.body

    if (req.method === 'POST') {
        try {
            const user = await db.collection('users').find({username: username})
            user.update({$set: {signedIn : true}})
            res.json(user)
            
            // if (!user) {
            //     res.json({message: 'do again'})
            // }
            // if (user.password === password) {
            //     user.update({
            //         $set: {signedIn: true}
            //     })
            //     res.json({message: 'OK', ...user})
                
            // } else {
            //     res.json({message: "username or password is wrong"})
            // }
        } catch {
            res.status(401).json({message: 'something went wrong'})
        }
    } else {
        res.status(405).json({message: "Only accepts POST"})
    }
        

}

export default login

// =<!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyAFW6nAw4Bdvi4IfhBQuzX2gqxUueCfEbo",
//     authDomain: "nextjs-with-firebaseauth-69fb7.firebaseapp.com",
//     projectId: "nextjs-with-firebaseauth-69fb7",
//     storageBucket: "nextjs-with-firebaseauth-69fb7.appspot.com",
//     messagingSenderId: "379624332736",
//     appId: "1:379624332736:web:03ed39a27926cfeca13c25"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
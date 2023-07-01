import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { CredentialsProvider } from "next-auth/providers/credentials";


// export const options = {
//     Providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET
//         }),
//         // Providers.Email({
//         //     server: {
//         //         host:"",
//         //         port:"",
//         //         auth:{
//         //             user:"",
//         //             pass:""
//         //         }
//         //     },
//         //     form:"",
//         // })
//     ],
// };

// export default NextAuth(options);

export const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    // pages: {
    //     signIn: "/signin"
    // }
}

export default NextAuth(authOptions)
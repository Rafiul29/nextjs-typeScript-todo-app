import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export const authOptions={
    provider:[
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,     
          clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
   
}

export default NextAuth(authOptions as any)
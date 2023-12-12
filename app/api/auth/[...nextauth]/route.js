import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import nextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const {email, password} = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({email});

                    if(!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if(!passwordMatch) return null;

                    return user;

                } catch (error) {
                    console.log("Error", error);
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages:{
        signIn: "/",
    }
}

const handler = nextAuth(authOptions);

export {handler as GET, handler as POST}
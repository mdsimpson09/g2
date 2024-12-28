//api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth";


const handler = NextAuth(authOptions
    )

    export { handler as GET, handler as POST, handler as PUT, handler as DELETE }

// import NextAuth from "next-auth"
// import { authOptions } from "@/lib/auth";


// // const handler = NextAuth(authOptions
// //     )

// //     export { handler as GET, handler as POST, handler as PUT, handler as DELETE }


// export default NextAuth(authOptions);
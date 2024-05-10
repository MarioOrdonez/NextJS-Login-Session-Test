import NextAuth, {type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'
import prisma from './lib/prisma';
import { redirect } from 'next/navigation'
import { Console } from 'console';
// import { pool } from '../db';
// import {sql} from '@vercel/postgres'
//const secretAuth = "q6O1LLWpJVIZZKtJ9+nxKgsPdxsGNnXjGH+vQhQyhx0="
 
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    
  },
  callbacks:{
    jwt({token, user}) {
      // console.log({token, user})
      if (user) {
        token.data = user
      }
      return token
    },
    session({session, token, user}){
      // console.log({session, token, user})
      session.user = token.data as any

      return session
    }
    // authorized({auth, request: {nextUrl}}) {
    //   const isLoggedIn = !!auth?.user
    //   const isOnHome = nextUrl.pathname.startsWith('/dashboard');

    //   if (isOnHome) {
    //     if (isLoggedIn) return true;
    //     return false;
    //   } else if (isLoggedIn) {
    //     return redirect('/dashboard');
    //   }

    //   return true;
    // },
    
  },
  providers: [
    Credentials({
        async authorize(credentials){
          const parsedCredentials = z
            .object({ user: z.string(), password: z.string() })
            .safeParse(credentials);
            
            // console.log(parsedCredentials.error)

            if (!parsedCredentials.success) return null;

            const {user, password} = parsedCredentials.data;
            // console.log('AuthConfig.ts')
            // console.log({user, password})

            //Buscar usuario
            const userInfo = await prisma.bocUsuarios.findFirst({
              where : {
                usuario: user.toUpperCase(),
                contrasena: password
              }
            })

            //Buscar permisos de usuario
            // const userPermission = await prisma.;

            // console.log(userInfo)
            if(!userInfo) return null;
            
            const {usuario,nombres, apellidos,correo,codigo_rol} = userInfo
            const rest = {
              userName: usuario, 
              names: nombres, 
              lastNames: apellidos,
              email: correo, 
              role: codigo_rol}
            console.log(rest)
            return rest
        },
      }),

  ],
  session: {
    maxAge: 30 * 60
  }
  // secret: secretAuth
};

// async function getUserInfo(user:string, password: string): Promise<User | undefined> {
//   try {
//     const userInfo = await pool.sql<User> `SELECT USUARIO, CORREO, CODIGO_ROL FROM TBL_BOC_USUARIOS WHERE USUARIO = ${user} AND CONTRASENA = ${password}`
//     return userInfo.rows[0]
//   } catch (error) {
//     console.error('Error al traer el usuario de la base de datos:', error)
//     throw new Error ('Error al traer el usuario de la base de datos.')
//   }
// }

// export const authConfig: NextAuthConfig = {
//   pages:{
//     signIn: '/auth/login',
//   },
//   callbacks:{
//     authorized({auth, request: {nextUrl}}) {
//       const isLoggedIn = !!auth?.user
//       const isOnHome = nextUrl.pathname.startsWith('/home');

//       if (isOnHome) {
//         if (isLoggedIn) return true;
//         return false;
//       } else if (isLoggedIn) {
//         return redirect('/home');
//       }

//       return true;
//     }
//   },
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         //Validaciones de credenciales
//         const parsedCredentials = z
//             .object({ user: z.string(), password: z.string().min(6) })
//             .safeParse(credentials);
//         if (!parsedCredentials.success) return null;

//         //Validación si existe el usuario
//         const {user, password} = parsedCredentials.data
//         const userInfo = await getUserInfo(user, password)
//         if (!userInfo) return null;

//         return userInfo;
//       }
//     })
//   ]
// };

export const {signIn, signOut, auth, handlers} = NextAuth(authConfig)
import NextAuth, {type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod'
import prisma from './lib/prisma';
import { User } from './interfaces';
const secretAuth = "q6O1LLWpJVIZZKtJ9+nxKgsPdxsGNnXjGH+vQhQyhx0="
 
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login'
  },
  providers: [
    Credentials({
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ user: z.string(), password: z.string().min(6) })
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
            // console.log(userInfo)
            if(!userInfo) return null;
            
            //Comparar las contaseñas
            // const userPass = await prisma.tbl_boc_usuarios.findFirst({where:{contrasena:password}})
            // if (!userPass) return null;

            //Regresar el usuario sin el password
            // const userReturn:User = {
            //   usuario: userInfo.usuario,
            //   correo: userInfo.correo,
            //   nombre_rol: userInfo.codigo_rol
            // };
            // console.log(userReturn)
            const {contrasena:_, ...rest} = userInfo
            console.log(rest)
            return rest
        },
      }),

  ],
  secret: secretAuth
};

export const {signIn, signOut, auth} = NextAuth(authConfig)
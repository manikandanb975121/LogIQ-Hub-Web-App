import { loginSchema } from "./schema";
import type { ILogin } from "./types";

export const login: { values: ILogin; schema: typeof loginSchema } = {
    values: {
        email: '',
        password: ''
    },
    schema: loginSchema
}
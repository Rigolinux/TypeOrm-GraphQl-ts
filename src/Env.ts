
import {config} from 'dotenv';

config();


export const host = process.env.HOST;
export const username = process.env.USERDATABASE;
export const password = process.env.USERPASSWORD;
export const database = process.env.DATABASE_NAME;
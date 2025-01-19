// this code can be used for any project
import config from "../config/config";
import { Client, Account, ID}  from "appwrite";

/* insead of this:
const client = new Client().setEndpoint("api").setProject("Proj ID")
const account = new Account(client);
const user = await account.create(ID.unique(), "email", "password") */

// creating class so that diff codes remain separate
export class AuthService {
    client = new Client().setEndpoint().setProject()
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
            
            if (user) {
                return this.login({email, password})
            } else return user

        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() { // to check if you are currently logged in or not
        try {
            const acc =  await this.account.get()
            if (acc) {
                return acc;
            } else return null;   
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const auth = new AuthService()

// exporting object of this class
export default auth
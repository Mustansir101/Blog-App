import config from "../config/config";
import { Client, ID, Databases, Storage, Query}  from "appwrite";

export class Service{
    client=new Client()
    databases;
    storage;
    
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImg, status, userID}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,   //or use ID.unique() - Document ID
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userID
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImg, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            config.log(error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            config.log(error)
            return false
        }
    }

    async getPosts() { // gives all post with active status
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [ Query.equal("status", "active") ]
            );
        } catch (error) {
            config.log(error)
            return false
        }
    }

    async uploadFile(file) { // this returns file ID
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            config.log(error)
            return false
        }
    }

    async deleteFile(fileId) { 
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true
        } catch (error) {
            config.log(error)
            return false
        }
    }

    getFilePreview(fileId){ // no need for async-await
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service
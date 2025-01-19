// production grade approach to access System Variabled from .env

const config = {
    appwriteUrl: import.meta.env.VITE_APWRITE_URL,
    appwriteProjectId: import.meta.env.VITE_APWRITE_PROJECT_ID,
    appwriteDatabaseId: import.meta.env.VITE_APWRITE_DATABASE_ID,
    appwriteCollectionId: import.meta.env.VITE_APWRITE_COLLECTION_ID,
    appwriteBucketId: import.meta.env.VITE_APWRITE_BUCKET_ID,
}

export default config
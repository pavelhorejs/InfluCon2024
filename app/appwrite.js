import { Client, Account, Databases, ID } from 'appwrite';

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66329460003701abe30c")

export const account = new Account(client);
export const databases = new Databases(client);
export {  ID };

export const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1"
export const APPWRITE_PROJECT_ID = "66329460003701abe30c"
export const APPWRITE_DATABASE_ID = "66392c30001b34fefa14" 
export const APPWRITE_USERS_COLLECTION_ID = "66392c62001ed202eeb8" 
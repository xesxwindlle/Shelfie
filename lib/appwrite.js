import {Client, Account, ID, Avatars} from 'react-native-appwrite';

export const client = new Client()
.setProject('6a073bc3000a0d5b08da')
.setPlatform('xesxwindlle.shelfie');

export const account = new Account(client); 

export const avatars = new Avatars(client);
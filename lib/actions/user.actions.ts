"use server";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";

export const createUser = async (user: CreateUserType) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (clerkId: string, user: UpdateUserType) => {
  try {
    await connectToDatabase();
    const filter = { clerkId };
    const update = { ...user };
    const updatedUser = await User.updateOne(filter, update, { new: true });
    return updatedUser;
  } catch (error) {
    console.error(error);
  }
};


export const deleteUser = async (clerkId: string) => {
    try{
        await connectToDatabase();
        const result = await User.deleteOne({clerkId});
        if (result.deletedCount === 0) {
            throw new Error('User not found');
        }
        return result;
    }catch(error){
        console.error(error)
    }
} 
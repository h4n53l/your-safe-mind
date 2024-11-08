"use server";

import { IUser } from "@/interfaces";
import UserModel from "@/model/user-model";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const createUser = async () => {
  try {
    const user = await currentUser();
    const mongoDBUserObj = {
      name: `${user?.firstName} ${user?.lastName}`,
      clerkUserId: user?.id,
      email: user?.emailAddresses[0].emailAddress,
      profilePic: user?.imageUrl,
      isApproved: false,
      isSuperAdmin: false,
    };

    const newUser = new UserModel(mongoDBUserObj);
    await newUser.save();
    return {
      success: true,
      message: "User created successfully",
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getUserDataFromMongoDB = async () => {
  try {
    const user = await currentUser();

    // check if user exists in MongoDB , if yes return user data
    const userFromMongoDB = await UserModel.findOne({ clerkUserId: user?.id });
    if (userFromMongoDB) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(userFromMongoDB)),
      };
    }

    // if user does not exist in MongoDB, create user and return user data
    const newUser = await createUser();
    if (newUser.success) {
      return {
        success: true,
        data: newUser.data,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getAllUsers = async (searchParams: {
  name: string;
  email: string;
  isApproved: boolean;
}) => {
  try {
    let filtersToApply: any = {};
    if (searchParams.name) {
      filtersToApply.name = { $regex: searchParams.name, $options: "i" };
    }
    if (searchParams.email) {
      filtersToApply.email = { $regex: searchParams.email, $options: "i" };
    }
    if (searchParams.isApproved) {
      filtersToApply.isApproved = searchParams.isApproved;
    }
    const users = await UserModel.find(filtersToApply).sort({ createdAt: -1 });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(users)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const updateUser = async ({
  userId,
  updatedData,
}: {
  userId: string;
  updatedData: Partial<IUser>;
}) => {
  try {
    await UserModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });
    revalidatePath("/admin/users");
    return {
      success: true,
      message: "User updated successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
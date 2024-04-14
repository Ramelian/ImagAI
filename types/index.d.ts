declare type CreateUserType = {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName?: string;
    lastName?: string;
}

declare type UpdateUserType = {
    username: string;
    photo: string;
    firstName?: string;
    lastName?: string;
}
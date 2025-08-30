export interface ILoginResponse {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;
    otp: string;
    phone: string;
    role: 'SUPER_ADMIN' | 'ADMIN' | 'USER'; // adjust roles as needed
    designation: string;
    isActive: boolean;
    isDeleted: boolean;
    isVerified: boolean;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
    sessionId: string;
    token: string;
    expiredAt: number; // UNIX timestamp
}
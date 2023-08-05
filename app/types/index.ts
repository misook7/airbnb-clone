import { User } from "@prisma/client";
import { StringLiteral } from "typescript";

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
  > & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
  };
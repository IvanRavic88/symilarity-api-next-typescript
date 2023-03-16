import { type ZodIssue } from "zod";

export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokeApiData {
  error: string | ZodIssuse[] | null;
  success: boolean;
}

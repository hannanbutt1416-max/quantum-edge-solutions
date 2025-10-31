import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "./info";

// Create a singleton Supabase client for use in the frontend
export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

// API base URL for server functions
export const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-398bae6f`;

// Helper function to get auth headers
// IMPORTANT: Always use publicAnonKey for Authorization to pass Supabase validation
// Custom access tokens go in X-Access-Token header
export const getAuthHeaders = (accessToken?: string) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${publicAnonKey}`, // Always use anon key for Supabase
  };
  
  if (accessToken) {
    headers["X-Access-Token"] = accessToken; // Custom token in separate header
  }
  
  return headers;
};

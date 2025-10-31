import { useState, useEffect } from "react";
import { AdminLogin } from "./AdminLogin";
import { AdminDashboard } from "./AdminDashboard";
import { supabase } from "../utils/supabase/client";
import { Loader2 } from "lucide-react";

export function AdminPage() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Check if user already has an active session
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.access_token) {
          setAccessToken(session.access_token);
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkSession();
  }, []);

  const handleLoginSuccess = (token: string) => {
    setAccessToken(token);
  };

  const handleLogout = () => {
    setAccessToken(null);
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#14141A] via-[#1A1A24] to-[#14141A] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#00D0FF] animate-spin mx-auto mb-4" />
          <p className="text-[#C2C2CC]">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!accessToken) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard accessToken={accessToken} onLogout={handleLogout} />;
}

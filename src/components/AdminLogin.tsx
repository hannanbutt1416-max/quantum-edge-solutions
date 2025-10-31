import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { API_URL, getAuthHeaders } from "../utils/supabase/client";
import { QuantomEdgeLogo } from "./QuantomEdgeLogo";

interface AdminLoginProps {
  onLoginSuccess: (accessToken: string) => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to login");
      }

      if (data.access_token) {
        console.log("Admin login successful");
        onLoginSuccess(data.access_token);
      } else {
        throw new Error("No access token received");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to login. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14141A] via-[#1A1A24] to-[#14141A] flex items-center justify-center p-4 relative overflow-hidden font-['Poppins']">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D0FF]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#75FF00]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-5 hex-pattern"></div>

      {/* Login card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#1A1A24]/80 backdrop-blur-xl border border-[#00D0FF]/20 rounded-3xl shadow-2xl shadow-[#00D0FF]/10 overflow-hidden">
          {/* Header with logo */}
          <div className="bg-gradient-to-br from-[#00D0FF]/10 via-[#75FF00]/5 to-transparent p-8 border-b border-[#00D0FF]/20">
            <div className="flex flex-col items-center space-y-4">
              <QuantomEdgeLogo size="lg" />
              <div className="text-center">
                <h1 className="text-white text-2xl mb-1">Admin Portal</h1>
                <p className="text-[#C2C2CC] text-sm">Quantum Edge Solutions</p>
              </div>
            </div>
          </div>

          {/* Login form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error message */}
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#C2C2CC]">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D0FF]/60" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@quantomedge.io"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-12 bg-[#0A0A0D]/50 border border-[#00D0FF]/30 text-white rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#C2C2CC]">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D0FF]/60" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-11 h-12 bg-[#0A0A0D]/50 border border-[#00D0FF]/30 text-white rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00D0FF]/60 hover:text-[#00D0FF] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#00D0FF] to-[#0099CC] hover:from-[#00E5FF] hover:to-[#00AADD] text-white rounded-xl shadow-lg shadow-[#00D0FF]/20 hover:shadow-[#00D0FF]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </div>

          {/* Footer */}
          <div className="px-8 pb-8">
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-[#75FF00] rounded-full animate-pulse"></div>
              <p className="text-[#C2C2CC] text-xs">Secure Admin Access</p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center mt-6 text-[#C2C2CC]/60 text-xs">
          Protected by enterprise-grade encryption
        </p>
      </div>
    </div>
  );
}

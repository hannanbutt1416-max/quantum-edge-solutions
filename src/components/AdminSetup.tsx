import { useState } from "react";
import { UserPlus, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { API_URL, getAuthHeaders } from "../utils/supabase/client";
import { QuantomEdgeLogo } from "./QuantomEdgeLogo";

export function AdminSetup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/admin/signup`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create admin user");
      }

      console.log("Admin user created successfully:", data);
      setSuccess(true);
      setEmail("");
      setPassword("");
      setName("");
    } catch (err) {
      console.error("Error creating admin user:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to create admin user. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14141A] via-[#1A1A24] to-[#14141A] flex items-center justify-center p-4 font-['Poppins']">
      <Card className="bg-[#1A1A24]/80 backdrop-blur-xl border border-[#00D0FF]/20 rounded-3xl shadow-2xl shadow-[#00D0FF]/10 w-full max-w-md">
        <CardHeader className="pb-8 border-b border-[#00D0FF]/10">
          <div className="flex flex-col items-center space-y-4">
            <QuantomEdgeLogo size="lg" />
            <CardTitle className="text-white text-2xl text-center">
              Create Admin Account
            </CardTitle>
            <p className="text-[#C2C2CC] text-sm text-center">
              Set up your first administrator account to access the dashboard
            </p>
          </div>
        </CardHeader>

        <CardContent className="pt-8">
          {success ? (
            <div className="text-center py-8 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-[#75FF00] mx-auto mb-4 animate-bounce-once" />
              <h3 className="text-white text-xl mb-2">Account Created!</h3>
              <p className="text-[#C2C2CC] mb-6">
                You can now login with your credentials at /admin
              </p>
              <Button
                onClick={() => setSuccess(false)}
                className="bg-gradient-to-r from-[#00D0FF] to-[#0099CC] hover:from-[#00E5FF] hover:to-[#00AADD] text-white rounded-xl"
              >
                Create Another Account
              </Button>
            </div>
          ) : (
            <form onSubmit={handleCreateAdmin} className="space-y-6">
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#C2C2CC]">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-[#0A0A0D]/50 border border-[#00D0FF]/30 text-white rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#C2C2CC]">
                  Email Address <span className="text-[#75FF00]">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@quantomedge.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-[#0A0A0D]/50 border border-[#00D0FF]/30 text-white rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#C2C2CC]">
                  Password <span className="text-[#75FF00]">*</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-[#0A0A0D]/50 border border-[#00D0FF]/30 text-white rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30"
                  required
                  minLength={6}
                />
                <p className="text-[#C2C2CC]/60 text-xs">
                  Minimum 6 characters
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#00D0FF] to-[#0099CC] hover:from-[#00E5FF] hover:to-[#00AADD] text-white rounded-xl shadow-lg shadow-[#00D0FF]/20 hover:shadow-[#00D0FF]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  "Create Admin Account"
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

import { useState, useEffect, useMemo } from "react";
import {
  LogOut,
  RefreshCw,
  Mail,
  Phone,
  Building2,
  DollarSign,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2,
  AlertCircle,
  CheckCircle,
  Clock,
  Briefcase,
  Search,
  Download,
  X,
  Sun,
  Moon,
  Filter,
  ChevronsLeft,
  ChevronsRight,
  TrendingUp,
  Users,
  FileText,
  Activity,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { API_URL, getAuthHeaders } from "../utils/supabase/client";
import { QuantomEdgeLogo } from "./QuantomEdgeLogo";
import { ThemeProvider, useTheme } from "./ThemeProvider";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  created_at: string;
  status: string;
}

interface PaginationInfo {
  page: number;
  limit: number;
  total_count: number;
  total_pages: number;
  has_next: boolean;
  has_prev: boolean;
}

interface AdminDashboardProps {
  accessToken: string;
  onLogout: () => void;
}

function AdminDashboardContent({ accessToken, onLogout }: AdminDashboardProps) {
  const { theme, toggleTheme } = useTheme();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [allSubmissions, setAllSubmissions] = useState<Submission[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 10,
    total_count: 0,
    total_pages: 0,
    has_next: false,
    has_prev: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [pageSize, setPageSize] = useState(10);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    setError("");

    try {
      console.log("Fetching submissions from API...");
      console.log("API URL:", `${API_URL}/admin/submissions?page=1&limit=1000`);
      console.log("Access Token:", accessToken ? "Present" : "Missing");
      
      const response = await fetch(
        `${API_URL}/admin/submissions?page=1&limit=1000`,
        {
          headers: getAuthHeaders(accessToken),
        }
      );

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.error || "Failed to fetch submissions");
      }

      const data = await response.json();
      console.log("Received data:", data);
      console.log("Number of submissions:", data.data?.length || 0);
      
      setAllSubmissions(data.data || []);
      console.log(`✅ Successfully fetched ${data.data?.length || 0} submissions`);
    } catch (err) {
      console.error("❌ Error fetching submissions:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to fetch submissions. Please check console for details."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
  };

  const updateStatus = async (submissionId: string, newStatus: string) => {
    try {
      const response = await fetch(
        `${API_URL}/admin/submissions/${submissionId}/status`,
        {
          method: "PUT",
          headers: getAuthHeaders(accessToken),
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update status");
      }

      // Update local state
      setAllSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === submissionId ? { ...sub, status: newStatus } : sub
        )
      );
      
      if (selectedSubmission?.id === submissionId) {
        setSelectedSubmission({ ...selectedSubmission, status: newStatus });
      }
    } catch (err) {
      console.error("Error updating status:", err);
      setError(
        err instanceof Error ? err.message : "Failed to update status"
      );
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Helper functions (defined before use in useMemo)
  const getServiceLabel = (service: string) => {
    const serviceMap: Record<string, string> = {
      digitalmarketing: "Digital Marketing",
      marketingautomation: "Marketing Automation",
      saasdevelopment: "SaaS Development",
      dataanalytics: "Data Analytics",
      technicalconsulting: "Technical Consulting",
      other: "Other",
    };
    return serviceMap[service] || service;
  };

  const getBudgetLabel = (budget: string) => {
    const budgetMap: Record<string, string> = {
      under10k: "Under $10K",
      "10k50k": "$10K–$50K",
      "50k100k": "$50K–$100K",
      "100k500k": "$100K–$500K",
      "500k": "$500K+",
    };
    return budgetMap[budget] || budget || "Not specified";
  };

  // Filter and search logic
  const filteredSubmissions = useMemo(() => {
    console.log('🔍 Filtering submissions:', {
      totalSubmissions: allSubmissions.length,
      searchQuery,
      serviceFilter,
      budgetFilter,
      statusFilter
    });

    let filtered = [...allSubmissions];

    // Search filter with null/undefined safety
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      console.log('🔍 Applying search filter:', query);
      
      filtered = filtered.filter((sub) => {
        const name = (sub.name || '').toLowerCase();
        const email = (sub.email || '').toLowerCase();
        const phone = (sub.phone || '').toLowerCase();
        const company = (sub.company || '').toLowerCase();
        const message = (sub.message || '').toLowerCase();
        const service = getServiceLabel(sub.service || '').toLowerCase();
        
        const matches = (
          name.includes(query) ||
          email.includes(query) ||
          phone.includes(query) ||
          company.includes(query) ||
          message.includes(query) ||
          service.includes(query)
        );
        
        return matches;
      });
      
      console.log(`🔍 Search results: ${filtered.length} matches out of ${allSubmissions.length} total`);
    }

    // Service filter
    if (serviceFilter !== "all") {
      console.log('🔍 Applying service filter:', serviceFilter);
      filtered = filtered.filter((sub) => sub.service === serviceFilter);
    }

    // Budget filter
    if (budgetFilter !== "all") {
      console.log('🔍 Applying budget filter:', budgetFilter);
      filtered = filtered.filter((sub) => sub.budget === budgetFilter);
    }

    // Status filter
    if (statusFilter !== "all") {
      console.log('🔍 Applying status filter:', statusFilter);
      filtered = filtered.filter((sub) => sub.status === statusFilter);
    }

    console.log(`✅ Final filtered results: ${filtered.length} submissions`);
    return filtered;
  }, [allSubmissions, searchQuery, serviceFilter, budgetFilter, statusFilter]);

  // Pagination logic
  const paginatedSubmissions = useMemo(() => {
    const startIndex = (pagination.page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredSubmissions.slice(startIndex, endIndex);
  }, [filteredSubmissions, pagination.page, pageSize]);

  // Update pagination info when filters change
  useEffect(() => {
    const totalPages = Math.ceil(filteredSubmissions.length / pageSize);
    setPagination({
      page: 1,
      limit: pageSize,
      total_count: filteredSubmissions.length,
      total_pages: totalPages,
      has_next: 1 < totalPages,
      has_prev: false,
    });
  }, [filteredSubmissions.length, pageSize]);

  const goToPage = (page: number) => {
    const totalPages = Math.ceil(filteredSubmissions.length / pageSize);
    setPagination({
      page,
      limit: pageSize,
      total_count: filteredSubmissions.length,
      total_pages: totalPages,
      has_next: page < totalPages,
      has_prev: page > 1,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-gradient-to-r from-[#75FF00]/20 to-[#75FF00]/10 text-[#75FF00] border-[#75FF00]/40 dark:bg-gradient-to-r dark:from-[#75FF00]/20 dark:to-[#75FF00]/10 dark:text-[#75FF00] shadow-[0_0_20px_rgba(117,255,0,0.15)]";
      case "in-progress":
        return "bg-gradient-to-r from-[#00D0FF]/20 to-[#00D0FF]/10 text-[#00D0FF] border-[#00D0FF]/40 dark:bg-gradient-to-r dark:from-[#00D0FF]/20 dark:to-[#00D0FF]/10 dark:text-[#00D0FF] shadow-[0_0_20px_rgba(0,208,255,0.15)]";
      case "completed":
        return "bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-600 border-green-500/40 dark:text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.15)]";
      default:
        return "bg-gradient-to-r from-gray-500/20 to-gray-500/10 text-gray-600 border-gray-500/40 dark:text-gray-400 shadow-[0_0_20px_rgba(107,114,128,0.15)]";
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Service", "Budget", "Message", "Status", "Created At"];
    const rows = filteredSubmissions.map((sub) => [
      sub.name,
      sub.email,
      sub.phone,
      sub.company,
      getServiceLabel(sub.service),
      getBudgetLabel(sub.budget),
      sub.message.replace(/"/g, '""'), // Escape quotes
      sub.status,
      formatDate(sub.created_at),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `submissions_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get unique services and budgets for filters
  const uniqueServices = useMemo(() => {
    const services = new Set(allSubmissions.map((sub) => sub.service));
    return Array.from(services);
  }, [allSubmissions]);

  const uniqueBudgets = useMemo(() => {
    const budgets = new Set(allSubmissions.map((sub) => sub.budget).filter(Boolean));
    return Array.from(budgets);
  }, [allSubmissions]);

  const statsData = useMemo(() => {
    const newCount = allSubmissions.filter((sub) => sub.status === "new").length;
    const inProgressCount = allSubmissions.filter((sub) => sub.status === "in-progress").length;
    const completedCount = allSubmissions.filter((sub) => sub.status === "completed").length;

    return { newCount, inProgressCount, completedCount };
  }, [allSubmissions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-[#0A0A0F] dark:via-[#14141A] dark:to-[#0A0A0F] transition-colors duration-300 font-['Poppins']">
      {/* Header */}
      <header className="bg-white/80 dark:bg-[#1A1A24]/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-[#00D0FF]/10 sticky top-0 z-50 transition-all duration-300 shadow-sm dark:shadow-[0_4px_30px_rgba(0,208,255,0.05)]">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 dark:from-[#00D0FF]/20 dark:to-[#75FF00]/20 shadow-lg dark:shadow-[0_0_20px_rgba(0,208,255,0.2)]">
                <QuantomEdgeLogo size="sm" />
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-white text-2xl font-semibold tracking-tight">Admin Dashboard</h1>
                <p className="text-gray-500 dark:text-[#C2C2CC]/80 text-sm mt-0.5">Manage your contact submissions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={toggleTheme}
                className="h-11 w-11 p-0 bg-gradient-to-br from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-gray-700 dark:text-[#00D0FF] border border-gray-300/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(0,208,255,0.1)]"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </Button>
              <Button
                onClick={fetchSubmissions}
                disabled={isLoading}
                className="h-11 px-5 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-blue-700 dark:text-[#00D0FF] border border-blue-200/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(0,208,255,0.1)]"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button
                onClick={handleLogout}
                className="h-11 px-5 bg-gradient-to-br from-red-50 to-red-100/50 hover:from-red-100 hover:to-red-200/50 dark:from-red-500/10 dark:to-red-500/5 dark:hover:from-red-500/20 dark:hover:to-red-500/10 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-500/30 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-8">
        {/* Premium Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Inquiries Card */}
          <Card className="group relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1A1A24] dark:to-[#14141A] border border-gray-200/50 dark:border-[#00D0FF]/20 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] dark:shadow-[0_8px_40px_rgba(0,208,255,0.1)] hover:dark:shadow-[0_8px_60px_rgba(0,208,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent dark:from-[#00D0FF]/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-[#00D0FF]/20 dark:to-[#00D0FF]/10 rounded-xl shadow-lg dark:shadow-[0_0_30px_rgba(0,208,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 text-blue-600 dark:text-[#00D0FF]" />
                </div>
                <div className="p-2 bg-blue-50/50 dark:bg-[#00D0FF]/5 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-blue-500 dark:text-[#00D0FF]" />
                </div>
              </div>
              <div>
                <p className="text-gray-500 dark:text-[#C2C2CC]/70 text-sm mb-2 tracking-wide uppercase">Total Inquiries</p>
                <p className="text-gray-900 dark:text-white text-4xl font-bold tracking-tight">{pagination.total_count}</p>
                <p className="text-gray-400 dark:text-[#C2C2CC]/50 text-xs mt-2">All time submissions</p>
              </div>
            </CardContent>
          </Card>

          {/* New Submissions Card */}
          <Card className="group relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1A1A24] dark:to-[#14141A] border border-gray-200/50 dark:border-[#75FF00]/20 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] dark:shadow-[0_8px_40px_rgba(117,255,0,0.1)] hover:dark:shadow-[0_8px_60px_rgba(117,255,0,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent dark:from-[#75FF00]/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-lime-100 to-lime-50 dark:from-[#75FF00]/20 dark:to-[#75FF00]/10 rounded-xl shadow-lg dark:shadow-[0_0_30px_rgba(117,255,0,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-lime-600 dark:text-[#75FF00]" />
                </div>
                <Badge className="bg-gradient-to-r from-lime-500/20 to-lime-500/10 text-lime-700 dark:text-[#75FF00] border-0 px-3 py-1 rounded-full text-xs">
                  New
                </Badge>
              </div>
              <div>
                <p className="text-gray-500 dark:text-[#C2C2CC]/70 text-sm mb-2 tracking-wide uppercase">New Submissions</p>
                <p className="text-gray-900 dark:text-white text-4xl font-bold tracking-tight">{statsData.newCount}</p>
                <p className="text-gray-400 dark:text-[#C2C2CC]/50 text-xs mt-2">Awaiting review</p>
              </div>
            </CardContent>
          </Card>

          {/* In Progress Card */}
          <Card className="group relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1A1A24] dark:to-[#14141A] border border-gray-200/50 dark:border-blue-500/20 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] dark:shadow-[0_8px_40px_rgba(59,130,246,0.1)] hover:dark:shadow-[0_8px_60px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent dark:from-blue-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:to-blue-500/10 rounded-xl shadow-lg dark:shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-700 dark:text-blue-400 border-0 px-3 py-1 rounded-full text-xs">
                  Active
                </Badge>
              </div>
              <div>
                <p className="text-gray-500 dark:text-[#C2C2CC]/70 text-sm mb-2 tracking-wide uppercase">In Progress</p>
                <p className="text-gray-900 dark:text-white text-4xl font-bold tracking-tight">{statsData.inProgressCount}</p>
                <p className="text-gray-400 dark:text-[#C2C2CC]/50 text-xs mt-2">Currently processing</p>
              </div>
            </CardContent>
          </Card>

          {/* Completed Card */}
          <Card className="group relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1A1A24] dark:to-[#14141A] border border-gray-200/50 dark:border-green-500/20 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] dark:shadow-[0_8px_40px_rgba(34,197,94,0.1)] hover:dark:shadow-[0_8px_60px_rgba(34,197,94,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent dark:from-green-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-500/20 dark:to-green-500/10 rounded-xl shadow-lg dark:shadow-[0_0_30px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <Badge className="bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-700 dark:text-green-400 border-0 px-3 py-1 rounded-full text-xs">
                  Done
                </Badge>
              </div>
              <div>
                <p className="text-gray-500 dark:text-[#C2C2CC]/70 text-sm mb-2 tracking-wide uppercase">Completed</p>
                <p className="text-gray-900 dark:text-white text-4xl font-bold tracking-tight">{statsData.completedCount}</p>
                <p className="text-gray-400 dark:text-[#C2C2CC]/50 text-xs mt-2">Successfully closed</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-white/80 dark:bg-[#1A1A24]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#00D0FF]/20 rounded-2xl mb-6 transition-all duration-300 shadow-lg dark:shadow-[0_8px_40px_rgba(0,208,255,0.1)]">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-[#00D0FF]/60" />
                  <Input
                    placeholder="Search by name, email, company, message..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 bg-gray-50/50 dark:bg-[#0A0A0D]/50 border border-gray-300/50 dark:border-[#00D0FF]/30 text-gray-900 dark:text-white rounded-xl focus:border-blue-500 dark:focus:border-[#00D0FF] focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-[#00D0FF]/20 transition-all shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#00D0FF]/60 hover:text-gray-600 dark:hover:text-[#00D0FF] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-[200px] h-12 bg-gray-50/50 dark:bg-[#0A0A0D]/50 border border-gray-300/50 dark:border-[#00D0FF]/30 text-gray-900 dark:text-white rounded-xl shadow-sm">
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#1A1A24] border border-gray-200 dark:border-[#00D0FF]/30 rounded-xl shadow-xl">
                    <SelectItem value="all">All Services</SelectItem>
                    {uniqueServices.map((service) => (
                      <SelectItem key={service} value={service}>
                        {getServiceLabel(service)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={budgetFilter} onValueChange={setBudgetFilter}>
                  <SelectTrigger className="w-[200px] h-12 bg-gray-50/50 dark:bg-[#0A0A0D]/50 border border-gray-300/50 dark:border-[#00D0FF]/30 text-gray-900 dark:text-white rounded-xl shadow-sm">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#1A1A24] border border-gray-200 dark:border-[#00D0FF]/30 rounded-xl shadow-xl">
                    <SelectItem value="all">All Budgets</SelectItem>
                    {uniqueBudgets.map((budget) => (
                      <SelectItem key={budget} value={budget}>
                        {getBudgetLabel(budget)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px] h-12 bg-gray-50/50 dark:bg-[#0A0A0D]/50 border border-gray-300/50 dark:border-[#00D0FF]/30 text-gray-900 dark:text-white rounded-xl shadow-sm">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#1A1A24] border border-gray-200 dark:border-[#00D0FF]/30 rounded-xl shadow-xl">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  onClick={exportToCSV}
                  className="h-12 px-6 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 dark:from-[#75FF00]/10 dark:to-[#75FF00]/5 dark:hover:from-[#75FF00]/20 dark:hover:to-[#75FF00]/10 text-green-700 dark:text-[#75FF00] border border-green-300/50 dark:border-[#75FF00]/30 rounded-xl transition-all shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(117,255,0,0.1)]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>

            {/* Search results counter */}
            <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-[#C2C2CC] text-sm font-semibold">
                  Showing {filteredSubmissions.length} of {allSubmissions.length} submissions
                </span>
                {filteredSubmissions.length !== allSubmissions.length && (
                  <Badge className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-[#00D0FF]/20 dark:to-[#00D0FF]/10 text-blue-700 dark:text-[#00D0FF] border-0 rounded-full px-2 py-0.5 text-xs">
                    Filtered
                  </Badge>
                )}
              </div>

              {/* Active filters indicator */}
              {(searchQuery || serviceFilter !== "all" || budgetFilter !== "all" || statusFilter !== "all") && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-gray-600 dark:text-[#C2C2CC] text-sm font-medium">Active filters:</span>
                {searchQuery && (
                  <Badge className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-[#00D0FF]/20 dark:to-[#00D0FF]/10 text-blue-700 dark:text-[#00D0FF] border-0 rounded-full px-3 py-1.5 shadow-sm">
                    Search: {searchQuery}
                  </Badge>
                )}
                {serviceFilter !== "all" && (
                  <Badge className="bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-500/20 dark:to-purple-500/10 text-purple-700 dark:text-purple-400 border-0 rounded-full px-3 py-1.5 shadow-sm">
                    Service: {getServiceLabel(serviceFilter)}
                  </Badge>
                )}
                {budgetFilter !== "all" && (
                  <Badge className="bg-gradient-to-r from-green-100 to-green-50 dark:from-[#75FF00]/20 dark:to-[#75FF00]/10 text-green-700 dark:text-[#75FF00] border-0 rounded-full px-3 py-1.5 shadow-sm">
                    Budget: {getBudgetLabel(budgetFilter)}
                  </Badge>
                )}
                {statusFilter !== "all" && (
                  <Badge className="bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-500/20 dark:to-orange-500/10 text-orange-700 dark:text-orange-400 border-0 rounded-full px-3 py-1.5 shadow-sm">
                    Status: {statusFilter}
                  </Badge>
                )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Error message */}
        {error && (
          <div className="mb-6 flex items-start gap-3 p-5 bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-500/10 dark:to-red-500/5 border border-red-200/50 dark:border-red-500/30 rounded-2xl animate-fade-in shadow-lg">
            <div className="p-2 bg-red-100 dark:bg-red-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />
            </div>
            <div>
              <p className="text-red-700 dark:text-red-400 font-medium">Error Loading Data</p>
              <p className="text-red-600 dark:text-red-400/80 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Loading state */}
        {isLoading && allSubmissions.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D0FF] to-[#75FF00] rounded-full blur-xl opacity-30 animate-pulse" />
              <Loader2 className="w-16 h-16 text-blue-600 dark:text-[#00D0FF] animate-spin relative z-10" />
            </div>
            <p className="text-gray-600 dark:text-[#C2C2CC] mt-6 text-lg">Loading submissions...</p>
            <p className="text-gray-400 dark:text-[#C2C2CC]/60 text-sm mt-2">Please wait while we fetch your data</p>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filteredSubmissions.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="p-6 bg-gray-100 dark:bg-[#00D0FF]/10 rounded-2xl mb-6">
              {allSubmissions.length === 0 ? (
                <FileText className="w-20 h-20 text-gray-300 dark:text-[#00D0FF]/30" />
              ) : (
                <Search className="w-20 h-20 text-gray-300 dark:text-[#00D0FF]/30" />
              )}
            </div>
            <p className="text-gray-700 dark:text-[#C2C2CC] text-xl mb-3 font-medium">
              {allSubmissions.length === 0 ? "No submissions yet" : "No results found"}
            </p>
            <p className="text-gray-500 dark:text-[#C2C2CC]/60 text-sm max-w-md text-center mb-4">
              {allSubmissions.length === 0 
                ? "Contact form submissions will appear here once customers start reaching out"
                : `No submissions match your search "${searchQuery}" or current filters`}
            </p>
            {(searchQuery || serviceFilter !== "all" || budgetFilter !== "all" || statusFilter !== "all") && (
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setServiceFilter("all");
                  setBudgetFilter("all");
                  setStatusFilter("all");
                }}
                className="mt-4 h-11 px-6 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-blue-700 dark:text-[#00D0FF] border border-blue-200/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-md"
              >
                <X className="w-4 h-4 mr-2" />
                Clear all filters
              </Button>
            )}
          </div>
        )}

        {/* Data Table */}
        {!isLoading && paginatedSubmissions.length > 0 && (
          <Card className="bg-white/80 dark:bg-[#1A1A24]/60 backdrop-blur-xl border border-gray-200/50 dark:border-[#00D0FF]/20 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg dark:shadow-[0_8px_40px_rgba(0,208,255,0.1)]">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200/50 dark:border-[#00D0FF]/10 hover:bg-gray-50/50 dark:hover:bg-[#00D0FF]/5">
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Name</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Email</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Phone</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Company</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Service</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Budget</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Status</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Created</TableHead>
                    <TableHead className="text-gray-700 dark:text-white font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedSubmissions.map((submission) => (
                    <TableRow
                      key={submission.id}
                      className="border-b border-gray-200/50 dark:border-[#00D0FF]/5 hover:bg-gray-50/80 dark:hover:bg-[#00D0FF]/5 transition-all duration-200 cursor-pointer group"
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <TableCell className="text-gray-900 dark:text-white font-medium">
                        {submission.name}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-[#C2C2CC]">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-blue-100 dark:bg-[#00D0FF]/20 rounded-lg">
                            <Mail className="w-3.5 h-3.5 text-blue-500 dark:text-[#00D0FF]" />
                          </div>
                          {submission.email}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-[#C2C2CC]">
                        {submission.phone ? (
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-green-100 dark:bg-[#75FF00]/20 rounded-lg">
                              <Phone className="w-3.5 h-3.5 text-green-500 dark:text-[#75FF00]" />
                            </div>
                            {submission.phone}
                          </div>
                        ) : (
                          <span className="text-gray-400 dark:text-[#C2C2CC]/50">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-[#C2C2CC]">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-purple-100 dark:bg-purple-500/20 rounded-lg">
                            <Building2 className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                          </div>
                          {submission.company}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 text-blue-700 dark:text-[#00D0FF] border border-blue-200/50 dark:border-[#00D0FF]/30 rounded-lg px-3 py-1.5 shadow-sm">
                          {getServiceLabel(submission.service)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {submission.budget ? (
                          <Badge className="bg-gradient-to-r from-green-50 to-green-100/50 dark:from-[#75FF00]/10 dark:to-[#75FF00]/5 text-green-700 dark:text-[#75FF00] border border-green-200/50 dark:border-[#75FF00]/30 rounded-lg px-3 py-1.5 shadow-sm">
                            <DollarSign className="w-3 h-3 mr-1" />
                            {getBudgetLabel(submission.budget)}
                          </Badge>
                        ) : (
                          <span className="text-gray-400 dark:text-[#C2C2CC]/50">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(submission.status)} border rounded-full px-3 py-1.5`}>
                          {submission.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-[#C2C2CC] text-sm">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-orange-100 dark:bg-orange-500/20 rounded-lg">
                            <Calendar className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
                          </div>
                          {formatDate(submission.created_at)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1.5">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateStatus(submission.id, "new");
                            }}
                            className={`h-9 w-9 p-0 ${
                              submission.status === "new"
                                ? "bg-gradient-to-br from-lime-100 to-lime-50 dark:from-[#75FF00]/20 dark:to-[#75FF00]/10 text-lime-700 dark:text-[#75FF00] border-lime-300 dark:border-[#75FF00]/40 shadow-md dark:shadow-[0_0_15px_rgba(117,255,0,0.2)]"
                                : "bg-gray-50 dark:bg-[#75FF00]/10 text-gray-600 dark:text-[#75FF00]/60 border-gray-200 dark:border-[#75FF00]/20"
                            } border rounded-lg transition-all hover:scale-110 active:scale-95`}
                          >
                            <Clock className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateStatus(submission.id, "in-progress");
                            }}
                            className={`h-9 w-9 p-0 ${
                              submission.status === "in-progress"
                                ? "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-[#00D0FF]/20 dark:to-[#00D0FF]/10 text-blue-700 dark:text-[#00D0FF] border-blue-300 dark:border-[#00D0FF]/40 shadow-md dark:shadow-[0_0_15px_rgba(0,208,255,0.2)]"
                                : "bg-gray-50 dark:bg-[#00D0FF]/10 text-gray-600 dark:text-[#00D0FF]/60 border-gray-200 dark:border-[#00D0FF]/20"
                            } border rounded-lg transition-all hover:scale-110 active:scale-95`}
                          >
                            <Loader2 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateStatus(submission.id, "completed");
                            }}
                            className={`h-9 w-9 p-0 ${
                              submission.status === "completed"
                                ? "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-500/20 dark:to-green-500/10 text-green-700 dark:text-green-400 border-green-300 dark:border-green-500/40 shadow-md dark:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                                : "bg-gray-50 dark:bg-green-500/10 text-gray-600 dark:text-green-400/60 border-gray-200 dark:border-green-500/20"
                            } border rounded-lg transition-all hover:scale-110 active:scale-95`}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        )}

        {/* Pagination */}
        {!isLoading && paginatedSubmissions.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-600 dark:text-[#C2C2CC] text-sm font-medium">
                Showing {(pagination.page - 1) * pageSize + 1} to{" "}
                {Math.min(pagination.page * pageSize, filteredSubmissions.length)} of{" "}
                {filteredSubmissions.length} results
              </p>
              <Select
                value={pageSize.toString()}
                onValueChange={(value) => {
                  setPageSize(parseInt(value));
                  goToPage(1);
                }}
              >
                <SelectTrigger className="w-[140px] h-11 bg-gray-50/50 dark:bg-[#0A0A0D]/50 border border-gray-300/50 dark:border-[#00D0FF]/30 text-gray-900 dark:text-white rounded-xl shadow-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-[#1A1A24] border border-gray-200 dark:border-[#00D0FF]/30 rounded-xl shadow-xl">
                  <SelectItem value="10">10 per page</SelectItem>
                  <SelectItem value="50">50 per page</SelectItem>
                  <SelectItem value="100">100 per page</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => goToPage(1)}
                disabled={!pagination.has_prev}
                className="h-11 w-11 p-0 bg-gradient-to-br from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-gray-700 dark:text-[#00D0FF] border border-gray-300/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronsLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => goToPage(pagination.page - 1)}
                disabled={!pagination.has_prev}
                className="h-11 px-4 bg-gradient-to-br from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-gray-700 dark:text-[#00D0FF] border border-gray-300/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <span className="text-gray-700 dark:text-white px-4 font-medium">
                Page {pagination.page} of {pagination.total_pages}
              </span>
              <Button
                onClick={() => goToPage(pagination.page + 1)}
                disabled={!pagination.has_next}
                className="h-11 px-4 bg-gradient-to-br from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-gray-700 dark:text-[#00D0FF] border border-gray-300/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                onClick={() => goToPage(pagination.total_pages)}
                disabled={!pagination.has_next}
                className="h-11 w-11 p-0 bg-gradient-to-br from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-gray-700 dark:text-[#00D0FF] border border-gray-300/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronsRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Submission detail modal */}
      {selectedSubmission && (
        <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
          <DialogContent className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A24] dark:to-[#14141A] border border-gray-200/50 dark:border-[#00D0FF]/30 rounded-3xl max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl dark:shadow-[0_20px_80px_rgba(0,208,255,0.2)]">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-white text-2xl mb-4">
                Submission Details
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-[#C2C2CC]">
                View and manage contact form submission information
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-gray-900 dark:text-white text-xl mb-2 font-semibold">{selectedSubmission.name}</h2>
                  <Badge className={`${getStatusColor(selectedSubmission.status)} border rounded-full px-4 py-2`}>
                    {selectedSubmission.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-[#0A0A0D]/50 rounded-xl border border-gray-200/50 dark:border-[#00D0FF]/10">
                  <p className="text-gray-600 dark:text-[#C2C2CC] text-sm mb-2 font-medium">Email</p>
                  <p className="text-gray-900 dark:text-white">{selectedSubmission.email}</p>
                </div>
                {selectedSubmission.phone && (
                  <div className="p-4 bg-gray-50 dark:bg-[#0A0A0D]/50 rounded-xl border border-gray-200/50 dark:border-[#00D0FF]/10">
                    <p className="text-gray-600 dark:text-[#C2C2CC] text-sm mb-2 font-medium">Phone</p>
                    <p className="text-gray-900 dark:text-white">{selectedSubmission.phone}</p>
                  </div>
                )}
                <div className="p-4 bg-gray-50 dark:bg-[#0A0A0D]/50 rounded-xl border border-gray-200/50 dark:border-[#00D0FF]/10">
                  <p className="text-gray-600 dark:text-[#C2C2CC] text-sm mb-2 font-medium">Company</p>
                  <p className="text-gray-900 dark:text-white">{selectedSubmission.company}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-[#0A0A0D]/50 rounded-xl border border-gray-200/50 dark:border-[#00D0FF]/10">
                  <p className="text-gray-600 dark:text-[#C2C2CC] text-sm mb-2 font-medium">Service</p>
                  <p className="text-gray-900 dark:text-white">{getServiceLabel(selectedSubmission.service)}</p>
                </div>
                {selectedSubmission.budget && (
                  <div className="p-4 bg-gray-50 dark:bg-[#0A0A0D]/50 rounded-xl border border-gray-200/50 dark:border-[#00D0FF]/10">
                    <p className="text-gray-600 dark:text-[#C2C2CC] text-sm mb-2 font-medium">Budget</p>
                    <p className="text-gray-900 dark:text-white">{getBudgetLabel(selectedSubmission.budget)}</p>
                  </div>
                )}
                <div className="p-4 bg-gray-50 dark:bg-[#0A0A0D]/50 rounded-xl border border-gray-200/50 dark:border-[#00D0FF]/10">
                  <p className="text-gray-600 dark:text-[#C2C2CC] text-sm mb-2 font-medium">Submitted</p>
                  <p className="text-gray-900 dark:text-white">{formatDate(selectedSubmission.created_at)}</p>
                </div>
              </div>

              {selectedSubmission.message && (
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-[#C2C2CC] text-sm font-medium">Message</p>
                  <div className="bg-gray-50 dark:bg-[#0A0A0D]/50 border border-gray-200/50 dark:border-[#00D0FF]/20 rounded-xl p-5">
                    <p className="text-gray-900 dark:text-white whitespace-pre-wrap leading-relaxed">{selectedSubmission.message}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => {
                    updateStatus(selectedSubmission.id, "new");
                  }}
                  className="flex-1 h-12 bg-gradient-to-br from-lime-50 to-lime-100/50 hover:from-lime-100 hover:to-lime-200/50 dark:from-[#75FF00]/10 dark:to-[#75FF00]/5 dark:hover:from-[#75FF00]/20 dark:hover:to-[#75FF00]/10 text-lime-700 dark:text-[#75FF00] border border-lime-300/50 dark:border-[#75FF00]/30 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  Mark as New
                </Button>
                <Button
                  onClick={() => {
                    updateStatus(selectedSubmission.id, "in-progress");
                  }}
                  className="flex-1 h-12 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 dark:from-[#00D0FF]/10 dark:to-[#00D0FF]/5 dark:hover:from-[#00D0FF]/20 dark:hover:to-[#00D0FF]/10 text-blue-700 dark:text-[#00D0FF] border border-blue-300/50 dark:border-[#00D0FF]/30 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  In Progress
                </Button>
                <Button
                  onClick={() => {
                    updateStatus(selectedSubmission.id, "completed");
                  }}
                  className="flex-1 h-12 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 dark:from-green-500/10 dark:to-green-500/5 dark:hover:from-green-500/20 dark:hover:to-green-500/10 text-green-700 dark:text-green-400 border border-green-300/50 dark:border-green-500/30 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  Mark Done
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export function AdminDashboard(props: AdminDashboardProps) {
  return (
    <ThemeProvider>
      <AdminDashboardContent {...props} />
    </ThemeProvider>
  );
}

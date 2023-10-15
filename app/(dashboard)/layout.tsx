import Navbar from "@/components/nav/navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full relative">
      <Navbar />
      <main className="p-10">{children}</main>
    </div>
  );
};

export default DashboardLayout;

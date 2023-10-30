import Navbar from "@/components/nav/navbar";
import VFooter from "@/components/nav/v-nav/v-footer";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="flex-grow h-full min-h-screen">{children}</main>
      <VFooter />
    </div>
  );
};

export default DashboardLayout;

import { NavigationMenuDemo } from "@/components/nav/navbar-demo";
import VFooter from "@/components/v-ui/v-nav/v-footer";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <NavigationMenuDemo />
      <main className="relative h-full min-h-screen p-20 pt-24">
        {children}
      </main>
      <VFooter />
    </div>
  );
};

export default DashboardLayout;

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { OwnerProvider } from "@/components/contexts/owner-context";
import { NavigationMenuDemo } from "@/components/nav/navbar-demo";
import VFooter from "@/components/v-ui/v-nav/v-footer";

/**
 * Renders the DashboardLayout component.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children nodes to be rendered.
 * @return {React.ReactNode} The rendered component.
 */
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col">
      <NavigationMenuDemo />
      <main className="relative h-full min-h-screen p-10 pt-24">
        <OwnerProvider>{children}</OwnerProvider>
      </main>
      <VFooter />
    </div>
  );
};

export default DashboardLayout;

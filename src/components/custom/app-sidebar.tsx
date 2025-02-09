import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Info, Mail } from "lucide-react";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: () => <Home size={16} />,
    },
    {
      title: "About",
      url: "/about",
      icon: () => <Info size={16} />,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: () => <Mail size={16} />,
    },
  ];
  return (
    <Sidebar className="bg-transparent rounded-md overflow-hidden">
      <SidebarHeader className="drag">
        <SidebarMenu>
          <SidebarMenuItem className="text-center font-semibold text-lg">
            Xplore
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

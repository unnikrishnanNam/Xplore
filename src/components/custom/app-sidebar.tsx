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
import { cn } from "@/lib/utils";
import {
  Clapperboard,
  FolderDown,
  Image,
  Monitor,
  RotateCcw,
} from "lucide-react";

export function AppSidebar() {
  const QuickAccessItems = [
    {
      title: "Recents",
      url: "/",
      icon: () => <RotateCcw size={16} />,
    },
    {
      title: "Desktop",
      url: "/desktop",
      icon: () => <Monitor size={16} />,
    },
    {
      title: "Downloads",
      url: "/downloads",
      icon: () => <FolderDown size={16} />,
    },
    {
      title: "Pictures",
      url: "/pictures",
      icon: () => <Image size={16} />,
    },
    {
      title: "Videos",
      url: "/videos",
      icon: () => <Clapperboard size={16} />,
    },
  ];
  const PinnedFoldersItem = [
    {
      title: "Red",
      color: "bg-red-500",
    },
    {
      title: "Yellow",
      color: "bg-yellow-500",
    },
    {
      title: "Green",
      color: "bg-green-500",
    },
    {
      title: "Blue",
      color: "bg-blue-500",
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
          <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {QuickAccessItems.map((item) => (
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
        <SidebarGroup>
          <SidebarGroupLabel>Pinned Folders</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {PinnedFoldersItem.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <div className="flex items-center gap-2">
                      <div className={cn("p-1 rounded-full", item.color)}></div>
                      <span>{item.title}</span>
                    </div>
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

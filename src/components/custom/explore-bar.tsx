import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function ExploreBar() {
  const [editMode, setEditMode] = useState(false);
  const [path, setPath] = useState<string[]>([
    "Home",
    "Documents",
    "Local Projects",
  ]);

  return (
    <ScrollArea
      onDoubleClick={() => setEditMode(!editMode)}
      className="relative whitespace-nowrap bg-secondary w-full rounded-md no-drag"
    >
      <input
        className={cn(
          "absolute px-4 w-full h-full bg-transparent transition-all border-none focus:outline-none",
          !editMode && "opacity-0"
        )}
        placeholder="Breadcrumb"
        value={path.join("/")}
        onChange={(e) => {
          setPath(e.target.value.split("/"));
        }}
        onBlur={() => setEditMode(false)}
      />
      <Breadcrumb
        className={cn("transition-all w-max mx-4", editMode && "opacity-0")}
      >
        <BreadcrumbList>
          {path.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink className="no-drag">
                  <Button
                    className="p-0"
                    variant={"link"}
                    onClick={() => {
                      console.log(item);
                    }}
                  >
                    {item}
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== path.length - 1 && (
                <BreadcrumbSeparator className="no-drag" />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

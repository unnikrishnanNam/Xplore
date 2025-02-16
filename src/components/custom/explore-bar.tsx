// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Button } from "../ui/button";
// import React, { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import { ScrollArea, ScrollBar } from "../ui/scroll-area";
// import { usePath } from "@/hooks/use-path";

// export function ExploreBar() {
//   const [editMode, setEditMode] = useState(false);
//   // const [path, setPath] = useState<string[]>([
//   //   "Home",
//   //   "Documents",
//   //   "Local Projects",
//   // ]);

//   const { path, setPath } = usePath();
//   useEffect(() => {
//     setPath(path);
//   }, [path]);
//   return (
//     <ScrollArea
//       onDoubleClick={() => setEditMode(!editMode)}
//       className="relative whitespace-nowrap bg-secondary w-full rounded-md no-drag"
//     >
//       <input
//         className={cn(
//           "absolute px-4 w-full h-full bg-transparent transition-all border-none focus:outline-none",
//           !editMode && "opacity-0"
//         )}
//         placeholder="Breadcrumb"
//         value={path.join("/")}
//         onChange={(e) => {
//           setPath(e.target.value.split("/"));
//         }}
//         onBlur={() => setEditMode(false)}
//       />
//       <Breadcrumb
//         className={cn("transition-all w-max mx-4", editMode && "opacity-0")}
//       >
//         <BreadcrumbList>
//           {path.map((item, index) => (
//             <React.Fragment key={index}>
//               <BreadcrumbItem>
//                 <BreadcrumbLink className="no-drag">
//                   <Button
//                     className="p-0"
//                     variant={"link"}
//                     onClick={() => {
//                       console.log(item);
//                     }}
//                   >
//                     {item}
//                   </Button>
//                 </BreadcrumbLink>
//               </BreadcrumbItem>
//               {index !== path.length - 1 && (
//                 <BreadcrumbSeparator className="no-drag" />
//               )}
//             </React.Fragment>
//           ))}
//         </BreadcrumbList>
//       </Breadcrumb>
//       <ScrollBar orientation="horizontal" />
//     </ScrollArea>
//   );
// }

import { ChevronRight, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFileManager } from "@/hooks/use-file-manager";
import { initialPath } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function ExploreBar() {
  const { path, setPath } = useFileManager();
  return (
    <ScrollArea className="flex w-full whitespace-nowrap bg-secondary rounded-md no-drag">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 ">
        {path.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index === 0 ? (
              <Button
                variant="ghost"
                className="inline-flex items-center text-sm"
                onClick={() => setPath([initialPath])}
              >
                <HardDrive className="w-4 h-4" />
                {/* {item} */}
              </Button>
            ) : (
              <>
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
                <Button
                  variant="ghost"
                  className="ml-1 text-sm md:ml-2"
                  onClick={() => setPath(path.slice(0, index + 1))}
                >
                  {item}
                </Button>
              </>
            )}
          </li>
        ))}
      </ol>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

// import { ChevronRight, HardDrive } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { usePath } from "@/hooks/use-path";
// import { initialPath } from "@/lib/utils";

// export function ExploreBar() {
//   const { path, setPath } = usePath();
//   return (
//     <div className="flex overflow-x-auto bg-secondary rounded-md no-drag">
//       <ol className="inline-flex items-center space-x-1 md:space-x-3 ">
//         {path.map((item, index) => (
//           <li key={index} className="inline-flex items-center">
//             {index === 0 ? (
//               <Button
//                 variant="ghost"
//                 className="inline-flex items-center text-sm"
//                 onClick={() => setPath([initialPath])}
//               >
//                 <HardDrive className="w-4 h-4" />
//                 {/* {item} */}
//               </Button>
//             ) : (
//               <>
//                 <ChevronRight className="w-6 h-6 text-muted-foreground" />
//                 <Button
//                   variant="ghost"
//                   className="ml-1 text-sm md:ml-2"
//                   onClick={() => setPath(path.slice(0, index + 1))}
//                 >
//                   {item}
//                 </Button>
//               </>
//             )}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href?: string;
  }[];
}

export function Sidebar({ links, isCollapsed }: NavProps) {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-8 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) => (
            <>
              {isCollapsed ? (
                <Tooltip key={index} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({ variant: link.href === pathname ? "default" : "ghost", size: "icon" }),
                        "h-9 w-9",
                        link.variant === "default" &&
                          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                        hoveredIndex === index && "hover:bg-gray-200" // Add hover effect
                      )}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <link.icon className="h-4 w-4" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="flex items-center gap-4">
                    {link.title}
                    {link.label && (
                      <span className="ml-auto text-muted-foreground">
                        {link.label}
                      </span>
                    )}
                  </TooltipContent>
                </Tooltip>
              ) : (
                <>
                  <Link
                    key={index}
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: link.href === pathname ? "default" : "ghost", size: "sm" }),
                      link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-[#1f2937] dark:hover:text-white",
                      "justify-start",
                      hoveredIndex === index && "hover:bg-gray-200" // Add hover effect
                    )}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.title}
                    {link.label && (
                      <span
                        className={cn(
                          "ml-auto",
                          link.variant === "default" &&
                            "text-background dark:text-white"
                        )}
                      >
                        {link.label}
                      </span>
                    )}
                  </Link>
                  {index === 2 && <div className="border-t border-gray-300 my-64" />} {/* Add separator after the 3rd nav */}
                </>
              )}
            </>
          ))}
        </nav>
      </div>
    </TooltipProvider>
  );
}

export default Sidebar;

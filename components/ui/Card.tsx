import { LucideIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
type Props = {};

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};
export default function Card(props: CardProps) {
  return (
    
    <CardContent>
      <section className="flex justify-between gap-2">
        <p className="text-sm">{props.label}</p>
        <props.icon className="h-5 w-5 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w--56 flex-col gap-5 rounded-xl border p-8 shadow h-56",
        props.className
      )}
    />
  );
}

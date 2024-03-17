import React from "react";

import Navlinks from "@/components/ui/navlinks";
import PageTitle from "@/components/ui/PageTitle";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/ui/Card";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity
  }
];

function App() {
  return (
    <div className="min-h-screen w-full flex">
      <Navlinks />
      <div className="p-10">
      <PageTitle title="Help Desk Dashboard" />
      <h2 className="text-gray-600"> Lets get started</h2>
      <div className="w-full flex flex-col gap-5">
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
{cardData.map((d, i) => (
  <Card key={i}
    label={d.label}
    amount={d.amount}
    description={d.description}
    icon={d.icon}
  />
))}
      </section>
      </div>
      </div>
    </div>
  );
}

export default App;

"use client";
import type { Media } from "@/types/types";
import { Header, Caption } from "@/components/ui/typography";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { capitalize } from "@/lib/utils";
// import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { Icons } from "@/components/ui/icons";
import type { ApexOptions } from "apexcharts";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface GridTwoProps {
  item: Media;
}
const GridTwo = ({ item }: GridTwoProps) => {
  const relations = item.relations.nodes;
  const [showRelations, setShowRelations] = useState<boolean>(false);
  const status = item.stats.statusDistribution;
  const series: number[] = status.map((stat) => stat.amount);

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: status.map((stat) => capitalize(stat.status)), 
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return `${Math.round(val)}%`;
      },
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: ['#fff'], 
      },
    },
  };

  const visibleRelations = showRelations ? relations : relations.slice(0, 5);

  return (
    <div className="lg:w-4/5 w-full  z-50 px-8 py-6 text-gray-700 flex flex-col">
      {relations && relations.length > 0 && (
        <>
          <Caption className="font-semibold text-base pb-1">Relations</Caption>
          <div className="flex flex-wrap lg:justify-start justify-center gap-2">
            {visibleRelations.map((relation, index) => (
              <Card key={index} className="p-0 w-[20rem] shadow-2xs">
                {relation.coverImage.extraLarge ? (
                  <div className="flex gap-3 w-full  h-full items-start">
                    <div className="relative w-[80px] h-[100px] shrink-0">
                      <Image
                        src={relation.coverImage.extraLarge}
                        alt={item.title.english || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Header className="text-wrap text-xs text-gray-700 font-medium mt-2 pe-2">
                      {relation.title.userPreferred}
                    </Header>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </>
      )}
      {relations.length > 5 && (
        <div className="flex justify-center mt-2">
          <button
            onClick={() => setShowRelations(!showRelations)}
            className="text-xs ps-1 text-center text-gray-700 hover:underline w-fit cursor-pointer flex gap-1 items-center"
          >
            {showRelations ? "Show less" : "Show more"}{" "}
            {showRelations ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
          </button>
        </div>
      )}
      <div className="flex lg:flex-row flex-col grow gap-2 pt-8" >
        <div className="lg:w-1/2">
        <Caption className="font-semibold text-base pb-1">Status Distribution</Caption>
        <div className="p-0 w-full flex justify-center pt-2">
            <ApexChart  type="donut" series={series || []} options={options}  width={175}
  height={175}></ApexChart>
        </div>
        </div>
        <div className="lg:w-1/2">
        <Caption className="font-semibold text-base pb-1">Score Distribution</Caption>
        <div className="p-0">
          
        </div>
        </div>
      </div>
    </div>
  );
};
export { GridTwo };

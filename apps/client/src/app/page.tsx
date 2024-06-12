/* eslint-disable @next/next/no-img-element */
"use client";
import MainContentWrapper from "./components/MainContentWrapper";
import Navbar from "./components/Navbar";
import PreconfBanner from "./components/PreconfBanner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SquareCard from "@/components/ui/squarecard";
import EpochRow from "./components/EpochRow";
import { Relayers } from "@/models/preconf";
import LogsDisplay from "./components/LogsDisplay";
import { useEffect } from "react";

const getCurrentRelayer = () => {
  return Relayers[0];
};

export default function Home() {
  const { data, isLoading, isPending, error } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: process.env.NEXT_PUBLIC_PRECONF_DASHBOARD_API_BASE_URL + "/data",
      });
      return data;
    },
    refetchInterval: 400,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    // console.log(data);
    // isPending && console.log("Pending");
  }, [data, isPending]);


  const currentRelayer = getCurrentRelayer();
  return (
    <main>
      <img src="/gradient.png" className="absolute top-0 right-0 w-fukll h-auto" alt="orb" />
      <Navbar />
      <MainContentWrapper>
        <EpochRow data={data} />
        <PreconfBanner relayer={currentRelayer} />
        <LogsDisplay />
      </MainContentWrapper>
    </main>
  );
}

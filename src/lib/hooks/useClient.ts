import { useQuery } from "@tanstack/react-query";
import { GetLeadById, GetLeads } from "../api/leadsApi";
import { useEffect, useState } from "react";
import { ILead } from "../../types/leadTypes";

export const useClient = (id?: number) => {
  const [page, setPage] = useState(1);

  const { data: leads, refetch: refetchLeads } = useQuery<ILead[]>({
    queryKey: ["leads"],
    queryFn: () => GetLeads(page),
  });

  useEffect(() => {
    if (!!leads) {
      setPage(page + 1);
      setTimeout(() => {
        refetchLeads();
      }, 1000);
    }
  }, [leads]);

  const {
    data: lead,
    refetch: getLeadById,
    isLoading,
  } = useQuery<ILead>({
    queryKey: [`lead-${id}`],
    queryFn: () => GetLeadById(id ? id : 0),
    enabled: false,
  });

  return {
    leads,
    lead,
    getLeadById,
    isLoading,
  };
};

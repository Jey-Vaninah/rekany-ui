import { useQuery } from "@tanstack/react-query";
import { produitService } from "@/services/produitService";

export const PRODUITS_QUERY_KEY = ["produits"] as const;

export function useProduits() {
  return useQuery({
    queryKey: PRODUITS_QUERY_KEY,
    queryFn: produitService.list,
  });
}

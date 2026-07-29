import { api } from "@/lib/axios";
import type { ApiItemResponse, ApiListResponse, Produit, ProduitPayload } from "@/types/api";

export const produitService = {
  list: async () => {
    const { data } = await api.get<ApiListResponse<Produit>>("/produit");
    return data.data;
  },

  get: async (id: number) => {
    const { data } = await api.get<ApiItemResponse<Produit>>(`/produit/${id}`);
    return data.data;
  },

  create: async (payload: ProduitPayload) => {
    const { data } = await api.post<ApiItemResponse<Produit>>("/produit", payload);
    return data.data;
  },

  update: async (id: number, payload: ProduitPayload) => {
    const { data } = await api.put<ApiItemResponse<Produit>>(`/produit/${id}`, payload);
    return data.data;
  },

  remove: async (id: number) => {
    await api.delete(`/produit/${id}`);
  },
};

import { api } from "@/lib/axios";
import type { ApiItemResponse, ApiListResponse, Contact, ContactPayload } from "@/types/api";

export const contactService = {
  list: async () => {
    const { data } = await api.get<ApiListResponse<Contact>>("/contact");
    return data.data;
  },

  get: async (id: number) => {
    const { data } = await api.get<ApiItemResponse<Contact>>(`/contact/${id}`);
    return data.data;
  },

  create: async (payload: ContactPayload) => {
    const { data } = await api.post<ApiItemResponse<Contact>>("/contact", payload);
    return data.data;
  },

  update: async (id: number, payload: ContactPayload) => {
    const { data } = await api.put<ApiItemResponse<Contact>>(`/contact/${id}`, payload);
    return data.data;
  },

  remove: async (id: number) => {
    await api.delete(`/contact/${id}`);
  },
};

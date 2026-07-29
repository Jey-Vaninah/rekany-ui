export type Contact = {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  sujet: string;
  message: string;
  lu: boolean;
  created_at: string;
  updated_at: string;
};

export type ContactPayload = {
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  sujet: string;
  message: string;
};

export type Produit = {
  id: number;
  nom: string;
  categorie: string;
  prix: number;
  unite: string;
  certification: string;
  origine: string;
  disponible: boolean;
  description: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type ProduitPayload = {
  nom: string;
  categorie: string;
  prix: number;
  unite: string;
  certification: string;
  origine: string;
  disponible: boolean;
  description: string;
  image_url?: string | null;
};

export type ApiListResponse<T> = {
  success: boolean;
  message?: string;
  status?: number;
  data: T[];
};

export type ApiItemResponse<T> = {
  success: boolean;
  message?: string;
  status?: number;
  data: T;
};

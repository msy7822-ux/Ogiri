export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      answers: {
        Row: {
          answer: string
          created_at: string
          evaluation: string | null
          id: string
          ogiri_id: string
          score: number | null
          status: string
          user_id: string
        }
        Insert: {
          answer: string
          created_at?: string
          evaluation?: string | null
          id: string
          ogiri_id: string
          score?: number | null
          status: string
          user_id: string
        }
        Update: {
          answer?: string
          created_at?: string
          evaluation?: string | null
          id?: string
          ogiri_id?: string
          score?: number | null
          status?: string
          user_id?: string
        }
      }
      groups: {
        Row: {
          created_at: string
          icon_url: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          icon_url: string
          id: string
          name: string
        }
        Update: {
          created_at?: string
          icon_url?: string
          id?: string
          name?: string
        }
      }
      hc: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
      }
      ogiris: {
        Row: {
          created_at: string
          ended_at: string
          group_id: string
          id: string
          odai: string
          status: string
        }
        Insert: {
          created_at?: string
          ended_at: string
          group_id: string
          id: string
          odai: string
          status: string
        }
        Update: {
          created_at?: string
          ended_at?: string
          group_id?: string
          id?: string
          odai?: string
          status?: string
        }
      }
      users: {
        Row: {
          created_at: string
          group_id: string | null
          icon_url: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          group_id?: string | null
          icon_url?: string | null
          id: string
          name: string
        }
        Update: {
          created_at?: string
          group_id?: string | null
          icon_url?: string | null
          id?: string
          name?: string
        }
      }
      webhooks: {
        Row: {
          created_at: string
          group_id: string | null
          id: number
          memo: string | null
          type: string
          url: string
        }
        Insert: {
          created_at?: string
          group_id?: string | null
          id?: number
          memo?: string | null
          type: string
          url: string
        }
        Update: {
          created_at?: string
          group_id?: string | null
          id?: number
          memo?: string | null
          type?: string
          url?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

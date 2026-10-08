import { supabase } from "./supabase";

export type EventScheduleItem = {
  time: string;
  title: string;
};

export type StudioEvent = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  location: string | null;

  event_date: string;
  end_date: string | null;
  event_time: string | null;
  end_time: string | null;

  duration: string | null;
  price: number;
  capacity: number;

  image_url: string | null;

  host_name: string | null;
  host_craft: string | null;
  host_bio: string | null;
  host_image_url: string | null;

  level: string | null;
  language: string | null;

  about: string | null;
  what_you_make: string | null;

  schedule: EventScheduleItem[];
  amenities: string[];
  what_to_bring: string[];

  cancellation_policy: string | null;

  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export async function getEvents(): Promise<StudioEvent[]> {
    const { data, error } = await supabase
  .from("events")
  .select("*")
  .order("event_date", { ascending: true });
  
    if (error) {
      console.error("Error fetching events:", error);
      return [];
    }
  
    return (data ?? []) as StudioEvent[];
  }

export async function getEventById(id: string): Promise<StudioEvent | null> {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("slug", id)
      .eq("is_active", true)
      .maybeSingle();
  
    if (error) {
      console.error("Error fetching event:", error);
      return null;
    }
  
    return data as StudioEvent | null;
  }
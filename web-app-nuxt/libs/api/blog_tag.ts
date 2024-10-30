import { API_URL } from "@/libs/api/config";
import type { BlogTag } from "@/libs/types/types";

async function Count(): Promise<number> {
  let returnData: number = 0;
  try {
    const response = await fetch(`${API_URL}/blogtag/count`);
    console.log(response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    const valueInt = parseInt(result.data);
    if (!isNaN(valueInt)) {
      returnData = valueInt;
    } else {
      console.warn("Parsed value is not a valid number");
    }
  } catch (error) {
    console.error("Error fetching count:", error);
  }
  
  return returnData;
}

async function GetAll(): Promise<BlogTag[]> {
  let returnData: BlogTag[] = []
  try {
    const response = await fetch(`${API_URL}/blogtag/count`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    if (Array.isArray(result.data)) {
      returnData = result.data as BlogTag[]; // Cast result.data to BlogTag[] type
    } else {
      console.warn("Received data is not an array");
    }
  } catch (error) {
    console.error("Error fetching count:", error);
  }
  
  return returnData;
}

export default {
  Count,
  GetAll,
};

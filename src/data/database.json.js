import { config } from "../config/supabase.js";
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env

const supabaseUrl = config.SUPABASE_URL;
const supabaseKey = config.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchData() {
  const { data, error, status, statusText } = await supabase.from("inflationData").select("*");

  if (error) {
    console.error("Error:", error.message);
    console.error("Status:", status, "Status Text:", statusText);
    return;
  }

  process.stdout.write(JSON.stringify(data || [], null, 2));
  
}

fetchData();

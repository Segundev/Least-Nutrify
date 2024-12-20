import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchData() {
  const { data, error, status, statusText } = await supabase.from("inflationData").select("*");

  if (error) {
    console.error("Error:", error.message);
    console.error("Status:", status, "Status Text:", statusText);
    return;
  }

  console.log("Data fetched successfully");

  process.stdout.write(JSON.stringify(data || [], null, 2));
  
}

fetchData();

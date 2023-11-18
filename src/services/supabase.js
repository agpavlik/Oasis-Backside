import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qemdqbskhzstbqzdmpil.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbWRxYnNraHpzdGJxemRtcGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNTU0MTcsImV4cCI6MjAxNTgzMTQxN30.ZBOQRp3JOchfFTUIqFUkMj25xXhMKqKaFN10K5Xj8H4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

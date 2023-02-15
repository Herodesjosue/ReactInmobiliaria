import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

export const supabase = createClient(
  "https://hlknwqtmpjxsfwsiaxha.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsa253cXRtcGp4c2Z3c2lheGhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NTI3OTk5NCwiZXhwIjoxOTkwODU1OTk0fQ.C2LDllqKKFVNyteXHxNmnknFJCkkxYuH5M3JagbVXv8"
);

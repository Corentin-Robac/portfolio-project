import { $saeData } from "@/store/Store.js";
import { supabase } from '@/lib/supabase';


// TODO add real user id verification & sae
export default async function updateTextareaTreemap() {
    
    const userData = {
        contexte: $saeData.get()['contexte'],
        demarche: $saeData.get()['demarche'],
        livrable: $saeData.get()['livrable']
    };

    console.log($saeData.get()['contexte']);

    try {
      const { data, error } = await supabase
        .from('sae_data')
        .update(userData)
        .eq('userid', 1)
        .eq('saeid', 101);
      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Erreur lors de la mise à jour des données:', err);
    }
}

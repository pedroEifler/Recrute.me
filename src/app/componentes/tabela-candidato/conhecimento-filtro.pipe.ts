import { Pipe, PipeTransform } from "@angular/core";
import { Candidato } from "src/app/models/candidato/Candidato";

@Pipe({
    name: 'conhecimentoFiltro'
})
export class ConhecimentoFiltroPipe implements PipeTransform {
    transform(candidatos: Candidato[], cbFiltro: string): Candidato[] {
        if (!candidatos || !cbFiltro)
            return candidatos

        return candidatos.filter(conhecimento =>
            console.log(conhecimento.cbConhecimentos))
            
            //conhecimento.cbConhecimentos[0].toLowerCase().indexOf(cbFiltro.toLowerCase()) !== -1);
    }
}

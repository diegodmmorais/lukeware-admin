import { TemplateType } from "../../types/Types";
import Titulo from "./Titulo";

export default function Cabecalho(props: TemplateType) {
  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
    </div>
  );
}

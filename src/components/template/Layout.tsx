import { TemplateType } from "../../types/Types";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

export default function Layout(props: TemplateType) {
  return (
    <div className={`dark flex h-screen w-screen`}>
      <MenuLateral menuItens={props.menuItens} />
      <div className={`flex w-full p-7 flex-col bg-gray-100 dark:bg-slate-800`}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}

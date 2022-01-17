import { ConteudoType } from "../../types/Types";

export default function Conteudo(props: ConteudoType) {
  return <div className={`flex flex-col mt-7 dark:text-gray-200`}>{props.children}</div>;
}

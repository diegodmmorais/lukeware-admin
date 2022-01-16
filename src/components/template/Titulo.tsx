import { TemplateType } from "../../types/Types";

export default function Titulo(props: TemplateType) {
  return (
    <div>
      <h1 className={`font-black text-3xl text-gray-900`}>{props.titulo}</h1>
      <h2 className={`font-light text-sm text-gray-600`}>{props.subtitulo}</h2>
    </div>
  );
}

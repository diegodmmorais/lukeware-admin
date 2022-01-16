import { TemplateType } from "../../types/Types";

export default function Titulo(props: TemplateType) {
  return (
    <div>
      <h1 className={``}>{props.titulo}</h1>
      <h2 className={``}>{props.subtitulo}</h2>
    </div>
  );
}

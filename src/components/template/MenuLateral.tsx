import { IAjuste, ICasa, ISino } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" icone={ICasa} texto="Início"/>
        <MenuItem url="/ajustes" icone={IAjuste} texto="Ajustes"/>
        <MenuItem url="/notificacoes" icone={ISino} texto="Notificações"/>
      </ul>
    </aside>
  );
}

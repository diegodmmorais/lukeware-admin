export type ConteudoType = {
  readonly children?: any;
};

export type MenuItemType = {
  readonly url: string;
  readonly texto: string;
  readonly icone: any;
};

export type TemplateType = {
  readonly titulo: string;
  readonly menuItens?: MenuItemType[];
  readonly subtitulo: string;
  readonly children?: any;
};

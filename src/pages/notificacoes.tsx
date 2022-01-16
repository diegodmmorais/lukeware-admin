import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/template/Layout";

const Notificacoes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lukeware Admin</title>
        <meta name="description" content="Notificaçoes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout titulo="Notificações" subtitulo="Aqui esta suas notificações">
          <h3>Notificações</h3>
        </Layout>
      </main>
    </>
  );
};

export default Notificacoes;

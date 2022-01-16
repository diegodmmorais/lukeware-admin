import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/template/Layout";

const Notificacoes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lukeware Admin</title>
        <meta name="description" content="Ajustes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout titulo="Ajustes" subtitulo="Personalize o sistema aqui">
          <h3>Ajustes</h3>
        </Layout>
      </main>
    </>
  );
};

export default Notificacoes;

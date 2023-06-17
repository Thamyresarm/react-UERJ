function AboutPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl mb-4">Sobre a Ferramenta</h1>
        <p>
          Bem-vindo(a) à nossa ferramenta de monitoramento de focos de incêndio!
          Aqui, fornecemos informações em tempo real sobre os focos de incêndio
          ocorridos nas últimas 48 horas, utilizando dados fornecidos pelo INPE
          (Instituto Nacional de Pesquisas Espaciais).
        </p>

        <p>
          Nossa ferramenta foi desenvolvida para auxiliar no acompanhamento e na
          análise dos incêndios, oferecendo uma visão abrangente das áreas
          afetadas. Com base nos dados confiáveis e atualizados do INPE, exibimos
          no mapa a localização precisa dos focos de incêndio, permitindo uma
          compreensão clara da extensão e gravidade dos eventos.
        </p>
      </div>
    );
  }
  export default AboutPage;
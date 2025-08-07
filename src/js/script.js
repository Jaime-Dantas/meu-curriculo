const translations = {
  pt: {
    titulo:"Desenvolvedor Full Stack & Analista de BI",
    resumo: "Resumo Profissional",
    experiencia: "Experiência Profissional",
    formacao: "Formação Acadêmica",
    habilidades: "Habilidades Técnicas",
    idiomas: "Idiomas",
    contato: "Contato",
    idioma_pt: "Português: Nativo",
    idioma_en: "Inglês: Avançado (leitura, escrita e conversação)",
    resumo_cont:"Atuo como Analista de Dados na Empresa de Tecnologia e Informações da Previdência Social. Tenho experiência com dashboards, BI e foco na clareza e performance de dados para tomada de decisões. Utilizo Java Spring, JPA e JavaScript para integrar frontend e backend. Em times ágeis, traduzo necessidades de stakeholders em soluções técnicas de alto valor, assegurando entregas alinhadas à visão estratégica e com impacto real no negócio.",
    exp_data:`        
        <h3 class="font-bold">Dataprev – Estagiário de Análise de Dados</h3>
        <p class="text-sm text-slate-600">Sep/2023 – Sep/2025</p>
        <ul class='list-disc list-inside space-y-1'>
            <li>Dashboards com foco em clareza e performance.</li>
            <li>Interfaces com JavaScript e consumo de APIs com Java Spring e JPA.</li>
            <li>Gestão de dados com Oracle SQL e PostgreSQL.</li>
            <li>Integração com stakeholders e squads ágeis.</li>
            <li>Documentação e versionamento com Git.</li>
      </ul>
    `,
    exp_orb:`        
        <h3 class="font-bold">WFS | ORBITAL – Auxiliar de Serviços ao Passageiro</h3>
        <p class="text-sm text-slate-600">Aug/2019 – Aug/2023</p>
        <ul class='list-disc list-inside space-y-1'>
            <li>Planejamento e execução de embarque e desembarque de passageiros especiais.</li>
            <li>Atendimento completo desde check-in até a aeronave.</li>            
        </ul>
    `,
    form_cont:"",
    habi_cont:"",
  },
  en: {
    titulo:"Full Stack Developer and BI Analyst",
    resumo: "Professional Summary",
    experiencia: "Work Experience",
    formacao: "Academic Background",
    habilidades: "Technical Skills",
    idiomas: "Languages",
    contato: "Contact",
    idioma_pt: "Portuguese: Native",
    idioma_en: "English: Advanced (reading, writing, and speaking)",
    resumo_cont:"I work as a Data Analyst at the Social Security Technology and Information Company. I have experience with dashboards, BI, and a strong focus on data clarity and performance to support decision-making. I use Java Spring, JPA, and JavaScript to integrate frontend and backend. In agile teams, I translate stakeholder needs into high-value technical solutions, ensuring deliveries aligned with strategic goals and generating real business impact.",
    exp_data:`        
        <h3 class="font-bold">Dataprev – Data Analysis Intern</h3>
        <p class="text-sm text-slate-600">Sep/2023 – Sep/2025</p>
        <ul class='list-disc list-inside space-y-1'>
            <li>Dashboards focused on clarity and performance.</li>
            <li>Interfaces using JavaScript and API consumption with Java Spring and JPA.</li>
            <li>Data management with Oracle SQL and PostgreSQL.</li>
            <li>Integration with stakeholders and agile squads.</li>
            <li>Documentation and version control with Git.</li>
        </ul>
    `,
    exp_orb:`        
        <h3 class="font-bold">WFS | ORBITAL – Passenger Services Assistant</h3>
        <p class="text-sm text-slate-600">Aug/2019 – Aug/2023</p>
        <ul class='list-disc list-inside space-y-1'>
            <li>Planning and execution of boarding and disembarkation of special-needs passengers</li>
            <li>Full assistance from check-in to boarding the aircraft</li>            
        </ul>
    `,
    form_cont:"",
    habi_cont:"",
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach((el) => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // <-- AQUI ESTÁ A CORREÇÃO
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}


document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
  });
});

// Inicia com português
setLanguage('pt');

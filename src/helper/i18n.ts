import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          // NavBar.tsx and Header.tsx
          Resume: "Resume",
          resumeURL: "Luiz_Felipe_Junior_Full_Stack_Developer",
          About: "About",
          Experience: "Experience",
          Education: "Education",
          Contact: "Contact",
          "Full Stack Developer": "Full Stack Developer",
          "EMAIL ADDRESS": "EMAIL ADDRESS",

          //Main.tsx
          Full: "Full",
          Stack: "Stack",
          Dev: "Dev",
          Developer: "Developer",
          Projects: "Projects",
          year: "year",
          years: "years",

          //About.tsx
          AboutText: "Information Systems student with a technical background in IT and hands-on experience in web development and technical support. Focused on building and understanding scalable systems, with a strong ability to analyze complex problems and translate them into efficient, practical solutions. Learns new technologies quickly and approaches challenges with an engineering mindset grounded in real-world application.",

          //Experience.tsx
          Others: "Others",
          Testing: "Automated Testing",
          DataModeling: "Data Modeling",
          KeyProjects: "Key Projects",

          //Education.tsx
          Technical: "Integrated Technical Degree",
          Support: "Computer Maintence and Support",
          Bachelor: "Bachelor",
          InformationSystems: "Information Systems",
          API: "Academic Performance Index",
          Languages: "Languages",
          Portuguese: "Portuguese",
          Native: "Native",
          English: "English",
          Courses: "Courses",

          //Contact.tsx
          CTA: "Let's Talk?",
          CTAText: "I am currently available for new projects. Feel free to get in touch, and we can schedule a conversation.",
          CTAButton: "Contact me",

          //Footer.tsx
          SocialMedia: "Social Media",
          LocalTime: "Local Time"
        }
      },
      pt: {
        translation: {
          // NavBar.tsx and Header.tsx
          Resume: "Currículo",
          resumeURL: "Luiz_Felipe_Desenvolvedor_Full_Stack_Junior",
          About: "Sobre",
          Experience: "Experiência",
          Education: "Formação",
          Contact: "Contato",
          "Full Stack Developer": "Desenvolvedor Full Stack",
          "EMAIL ADDRESS": "ENDEREÇO DE E-MAIL ",

          //Main.tsx
          Full: "Dev.",
          Stack: "Full",
          Dev: "Stack",
          Developer: "Stack",
          Projects: "Projetos",
          year: "ano",
          years: "anos",

          //About.tsx
          AboutText: "Estudante de Sistemas de Informação com formação técnica em Informática e experiência prática em desenvolvimento web e suporte técnico. Focado em construir e compreender sistemas escaláveis, com forte capacidade de analisar problemas complexos e transformá-los em soluções eficientes e práticas. Aprende novas tecnologias rapidamente e enfrenta desafios com uma mentalidade de engenharia fundamentada na aplicação real.",

          //Experience.tsx
          Others: "Outros",
          Testing: "Testes Automatizados",
          DataModeling: "Modelagem de Dados",
          KeyProjects: "Principais Projetos",

          //Education.tsx
          Technical: "Técnico Integrado",
          Support: "Manutenção e Suporte em Informática",
          Bachelor: "Bacharelado",
          InformationSystems: "Sistemas de Informação",
          API: "Índice de Desempenho Acadêmico",
          Languages: "Idiomas",
          Portuguese: "Português",
          Native: "Nativo",
          English: "Inglês",
          Courses: "Cursos",

          //Contact.tsx
          CTA: "Vamos Conversar?",
          CTAText: "Estou disponível para novos projetos. Fique à vontade para entrar em contato e podemos agendar uma conversa.",
          CTAButton: "Enviar e-mail",

          //Footer.tsx
          SocialMedia: "Redes Sociais",
          LocalTime: "Horário Local"
        }
      }
    }
  });

export default i18n;
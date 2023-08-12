export type WorkItemData = {
  year: number;
  title: string;
  duration: string;
  datails: string;
  techs: any[] | undefined;
}

export const WorkData : WorkItemData[] = [
  {
    year: 2022,
    title: 'INOVVATI TECNOLOGIA LTDA',
    duration: 'Atual',
    datails: 'Desenvolvimento de Sistema para Malhas Fiscais SEFAZ MS; '+
             'Desenvolvimento de Sistema para Fiscalização Rodoviária Detran MS; '+
             'Métodologia ágil scrum com cerimônias e quadro de tarefas Azure Devops; '+
             'Integração com ICMS Transparente; '+
             'Clean Code, Solid, DDD;',
    techs: ['C#','GraphQL','HotChocolate','Entity EF','ReactJs','Typescript','SQL Server','Ag Grid','KeyCloak','Xunit','Swagger','Dapper',
            'React Leaflet','Git','Azure']
  },
  {
    year: 2020,
    title: 'CM COMANDOS LINEARES LTDA',
    duration: '2 anos e 5 meses',
    datails: 'Desenvolvimento de novas funcionalidade no ERP Dynamics AX; '+
              'Elaboração de relatórios; '+
              'Elaboração de Planilhas; '+
              'Atualização do sistema : Tabela de preços em PHP e MySQL; '+
              'Consultas Avançadas em SQL Server; '+
              'Atualização de sistema : Envio de cobranças em C# + Pacote BoletoNet + CNB400 Itaú; '+
              'Integração do ERP Dynamics AX com WMS Inovatech; '+
              'Integração de sistema de Tickets Confirm8 com API C# .NET Core + Pacote Swagger (Documentação API); '+
              'Desenvolvimento de sistema para listagem de contatos de colaboradores EM C# WPF + Sockets; '+
              'Desenvolvimento de Funcionalidade para PPB (Fiscal). ',
              techs: ['C#','X++','Entity EF','ReactJs','Typescript','SQL Server','ReactNative','Vue', 'Vuetify','WPF','REST API','PHP','MySQL',
              'Report Builder 3.0','React Leaflet','Pipefy Kanban']
  },
  {
    year: 2019,
    title: 'INTERMEIO SOLUCOES DE PAGAMENTO S/A',
    duration: '9 meses',
    datails: 'Desenvolvimento de API Restful com ASP NET.Core, Testes da API com Postman , front-end com VueJs + Vuetify, Testes Unitários com xUnit e Selenium. '+
              'Integração com API Itaú para geração de boletos e API da intermeio para pagamentos Split. '+
              'Versionamento de código com Git e GitHub. ',
    techs: ['C#','Postman','SQL SERVER','Selenium','Flutter','Vue', 'TypeScript','Xunit']
  },
  {
    year: 2017,
    title: 'ECO POSTO BANDEIRANTES LTDA',
    duration: '1 ano e 3 meses',
    datails: 'Vendedor de Pista, Caixa e Abastecedor de veiculos',
    techs: undefined
  },
  {
    year: 2014,
    title: 'CONCREMAT ENGENHARIA E TECNOLOGIA S/A - CAMP JABAQUARA',
    duration: '1 ano e 3 meses',
    datails: 'Office Boy, criador de relátorio com Word/Excel, troca de galões de água e envio de documentos internos e externos.',
    techs: undefined
  },
];
  
# Horários de Transporte - Curionópolis
# Alunos: Patricia e Ismael

## 1. Ideia e Objetivo

Este protótipo resolve um problema comum no interior do Pará: a falta de informação centralizada sobre os horários de transporte intermunicipal. Em Curionópolis, muitas pessoas precisam viajar para cidades vizinhas como Parauapebas e Marabá para trabalhar, estudar ou resolver questões pessoais, mas não têm acesso fácil aos horários das vans e ônibus disponíveis.

A aplicação "Horários de Transporte" funciona como um guia digital que centraliza informações sobre os horários de partida, pontos de embarque e contatos dos transportadores, facilitando o planejamento de viagens dos moradores de Curionópolis.

## 2. Funcionalidades Implementadas

- **Listagem de horários**: Exibe todos os horários disponíveis de transporte para as principais cidades vizinhas
- **Filtro por destino**: Permite filtrar os horários por cidade de destino (Parauapebas, Marabá ou ver todos)
- **Informações detalhadas**: Para cada horário, mostra:
  - Horário de partida
  - Local de embarque
  - Nome da empresa/transportador
  - Botão de contato direto
- **Interface responsiva**: Layout otimizado para dispositivos móveis
- **Contato direto**: Botão que simula a funcionalidade de contato com os transportadores

## 3. Funcionalidades a serem Implementadas

- **Integração com WhatsApp**: Abertura direta do WhatsApp para contato com os transportadores
- **Cadastro de novos horários**: Permitir que transportadores cadastrem seus próprios horários
- **Notificações**: Alertas sobre mudanças de horários ou cancelamentos
- **Avaliação de transportadores**: Sistema de avaliação e comentários dos usuários
- **Mapa dos pontos de embarque**: Localização visual dos locais de partida
- **Histórico de viagens**: Registro das consultas do usuário
- **Preços das passagens**: Informação sobre valores cobrados por cada transportador
- **Status em tempo real**: Informações sobre atrasos ou cancelamentos

## 4. Stack de Tecnologias

- **Frontend**: React Native com Expo
- **Ícones**: Lucide React (para ícones modernos e consistentes)
- **Styling**: StyleSheet nativo do React Native
- **Desenvolvimento**: Expo CLI
- **Build**: Expo EAS Build (para geração do APK)
- **Versionamento**: Git/GitHub

## 5. Como Executar o Ambiente de Desenvolvimento

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Expo CLI instalado globalmente (`npm install -g @expo/cli`)
- Dispositivo Android ou emulador configurado

### Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/PattyAlencar/Ava02.git
cd ava02/app-horarios-transporte
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
expo start
```

4. Para visualizar no dispositivo:
   - Instale o app Expo Go no seu smartphone
   - Escaneie o QR code exibido no terminal ou navegador
   - Ou pressione 'a' para abrir no emulador Android

### Geração do APK

Para gerar o arquivo APK para distribuição:

1. Configure o Expo EAS:
```bash
npx eas build:configure
```

2. Execute o build para Android:
```bash
npx eas build --platform android
```

3. Aguarde o processo de build ser concluído
4. Baixe o APK através do link fornecido pelo Expo

---

**Nota**: Este é um protótipo educacional desenvolvido para a disciplina de Desenvolvimento de Aplicações Móveis, focado na realidade local de Curionópolis-PA.
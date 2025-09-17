import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  SafeAreaView,
  StatusBar
} from 'react-native';

// Dados simulados dos horários de transporte
const initialSchedules = [
  {
    id: 1,
    destination: 'Parauapebas',
    departure: '06:00',
    location: 'Praça Central',
    company: 'Van do João',
    phone: '(94) 99999-1234'
  },
  {
    id: 2,
    destination: 'Parauapebas',
    departure: '14:00',
    location: 'Terminal Rodoviário',
    company: 'Expresso Carajás',
    phone: '(94) 99999-5678'
  },
  {
    id: 3,
    destination: 'Marabá',
    departure: '05:30',
    location: 'Praça Central',
    company: 'Van da Maria',
    phone: '(94) 99999-9012'
  },
  {
    id: 4,
    destination: 'Marabá',
    departure: '16:30',
    location: 'Terminal Rodoviário',
    company: 'Ônibus Tocantins',
    phone: '(94) 99999-3456'
  },
  {
    id: 5,
    destination: 'Parauapebas',
    departure: '18:00',
    location: 'Praça Central',
    company: 'Van Noturna',
    phone: '(94) 99999-7890'
  }
];

// Componente principal da aplicação
export default function App() {
  // Estado para controlar o filtro selecionado
  const [selectedDestination, setSelectedDestination] = useState('Todos');

  // Lista de destinos disponíveis para filtro
  const destinations = ['Todos', 'Parauapebas', 'Marabá'];

  // Filtra os horários baseado no destino selecionado
  const filteredSchedules = selectedDestination === 'Todos' 
    ? initialSchedules 
    : initialSchedules.filter(schedule => schedule.destination === selectedDestination);

  // Função para lidar com o contato (simula abertura do WhatsApp/telefone)
  const handleContact = (phone, company) => {
    Alert.alert(
      'Contato',
      `Entrar em contato com ${company}?\nTelefone: ${phone}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Ligar', 
          onPress: () => Alert.alert('Sucesso', 'Abrindo aplicativo de telefone...') 
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Configuração da barra de status */}
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* Cabeçalho da aplicação */}
      <View style={styles.header}>
        <Text style={styles.title}>Horários de Transporte</Text>
        <Text style={styles.subtitle}>Curionópolis - PA</Text>
      </View>

      {/* Seção de filtros por destino */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filtrar por destino:</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterScrollView}
        >
          {destinations.map(dest => (
            <TouchableOpacity
              key={dest}
              style={[
                styles.filterButton,
                selectedDestination === dest && styles.filterButtonActive
              ]}
              onPress={() => setSelectedDestination(dest)}
            >
              <Text style={[
                styles.filterButtonText,
                selectedDestination === dest && styles.filterButtonTextActive
              ]}>
                {dest}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Lista de horários */}
      <ScrollView 
        style={styles.schedulesList}
        showsVerticalScrollIndicator={false}
      >
        {filteredSchedules.length > 0 ? (
          filteredSchedules.map(schedule => (
            // Card individual de cada horário
            <View key={schedule.id} style={styles.scheduleCard}>
              {/* Cabeçalho do card com destino e horário */}
              <View style={styles.scheduleHeader}>
                <Text style={styles.destination}>{schedule.destination}</Text>
                <View style={styles.timeContainer}>
                  <Text style={styles.timeEmoji}>🕐</Text>
                  <Text style={styles.time}>{schedule.departure}</Text>
                </View>
              </View>
              
              {/* Informações do transporte */}
              <View style={styles.scheduleInfo}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoEmoji}>📍</Text>
                  <Text style={styles.infoText}>Saída: {schedule.location}</Text>
                </View>
                
                <View style={styles.infoRow}>
                  <Text style={styles.infoEmoji}>🚐</Text>
                  <Text style={styles.company}>{schedule.company}</Text>
                </View>
                
                {/* Botão de contato */}
                <TouchableOpacity 
                  style={styles.contactButton}
                  onPress={() => handleContact(schedule.phone, schedule.company)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.contactEmoji}>📞</Text>
                  <Text style={styles.contactText}>Contato</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          // Mensagem quando não há horários
          <View style={styles.noSchedulesContainer}>
            <Text style={styles.noSchedulesEmoji}>😔</Text>
            <Text style={styles.noSchedules}>
              Nenhum horário encontrado para este destino.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Rodapé com dica */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💡 Dica: Entre em contato diretamente com os transportadores para confirmar horários
        </Text>
      </View>
    </SafeAreaView>
  );
}

// Estilos da aplicação (equivalente ao CSS)
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
  // Cabeçalho
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },
  
  // Seção de filtros
  filterContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  filterScrollView: {
    flexGrow: 0,
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  filterButtonActive: {
    backgroundColor: '#4A90E2',
  },
  filterButtonText: {
    color: '#666',
    fontWeight: '500',
    fontSize: 14,
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  
  // Lista de horários
  schedulesList: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  
  // Card de horário individual
  scheduleCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#4A90E2',
  },
  
  // Cabeçalho do card
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  destination: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  timeEmoji: {
    fontSize: 14,
    marginRight: 5,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  
  // Informações do horário
  scheduleInfo: {
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoEmoji: {
    fontSize: 14,
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  company: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  
  // Botão de contato
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25D366',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  contactEmoji: {
    fontSize: 14,
    marginRight: 6,
  },
  contactText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  
  // Mensagem de horários não encontrados
  noSchedulesContainer: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  noSchedulesEmoji: {
    fontSize: 48,
    marginBottom: 15,
  },
  noSchedules: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  
  // Rodapé
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
});
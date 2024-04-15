import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [appointments, setAppointments] = useState({
    '2024-03-01': [{ name: 'Rendez-vous 1' }, { name: 'Rendez-vous 2' }],
    '2024-03-10': [{ name: 'Rendez-vous 3' }],
  });

  const renderAppointmentItem = (item) => {
    return (
      <View style={styles.appointmentItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      />
      <Agenda
        items={appointments}
        selected={selectedDate}
        renderItem={renderAppointmentItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appointmentItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Solved: {solved}</Text>

      {/* Conditional rendering for Requirement #6 */}
      {solved >= 5 && <Text style={styles.congratsText}>Great job!</Text>}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.solveButton} onPress={onSolve}>
          <Text style={styles.buttonText}>Solve +1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    width: '100%',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  congratsText: {
    color: '#28a745',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  solveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
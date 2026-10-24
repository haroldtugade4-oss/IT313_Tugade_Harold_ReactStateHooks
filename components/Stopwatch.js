import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Stopwatch({ seconds, isRunning }) {
  // Format seconds into MM:SS display
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      
      {/* Conditional rendering for timer status */}
      {isRunning ? (
        <Text style={styles.runningText}>Running...</Text>
      ) : (
        <Text style={styles.pausedText}>Paused</Text>
      )}
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
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  runningText: {
    color: '#28a745',
    fontWeight: 'bold',
    marginTop: 5,
  },
  pausedText: {
    color: '#dc3545',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
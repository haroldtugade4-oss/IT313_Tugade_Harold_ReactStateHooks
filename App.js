import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import PracticeTracker from './components/PracticeTracker';
import Stopwatch from './components/Stopwatch';
import useStopwatch from './hooks/useStopwatch';

export default function App() {
  // Requirement #2: Solved state starting at 0 & isRunning state starting at false
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Requirement #3 & #4: Call custom stopwatch hook internally
  const seconds = useStopwatch(isRunning);

  // Requirement #2: Functional-update form for solved
  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  // Event handlers for Start/Stop
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerTitle}>Lab Tracker & Stopwatch</Text>

        {/* Practice Tracker Component (Lifting state up) */}
        <PracticeTracker 
          solved={solved} 
          onSolve={handleSolve} 
          onReset={handleReset} 
        />

        {/* Stopwatch Component (Lifting state up) */}
        <Stopwatch 
          seconds={seconds} 
          isRunning={isRunning} 
        />

        {/* Start and Stop Buttons for LabScreen */}
        <View style={styles.timerControlRow}>
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  timerControlRow: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 15,
  },
  startButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  stopButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
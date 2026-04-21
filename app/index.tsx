import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const findArea = (value) => {
    let numValue = Number(value);
    if (isNaN(numValue) || numValue <= 0) {
      setResult(null);
      return;
    }
    // Fixed to 2 decimal places for better readability
    const calculatedArea = (numValue * 10.7639104);
    setResult(calculatedArea);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Land Area</Text>
        <Text style={styles.subtitle}>
          Calculate your area of land within seconds
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter the area in square meters"
        placeholderTextColor="#a0b4d0"
        value={value}
        onChangeText={setValue}
        keyboardType='numeric'
      />

      
      <View style={styles.resultWrapper}>
        {result !== null && (
          <Text style={styles.result}>
            {result} square feet
          </Text>
        )}
      </View>

      <Pressable onPress={() => findArea(value)} style={styles.btnContainer}>
        <Text style={styles.btn}>
          Calculate
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1c2d4',
    paddingTop: 20,
  },
  content: {
    padding: 22,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
  },
  input: {
    padding: 15,
    backgroundColor: '#1b1f28',
    borderRadius: 9,
    marginHorizontal: 24, 
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'rgb(234, 231, 231)',
  },
  resultWrapper: {
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  result: {
    padding: 12,
    backgroundColor: '#1b1f28',
    borderRadius: 9,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fbbf24', 
    overflow: 'hidden', 
  },
  btnContainer: {
    marginHorizontal: 24,
  },
  btn: {
    padding: 15,
    backgroundColor: '#0f172a',
    borderRadius: 9,
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
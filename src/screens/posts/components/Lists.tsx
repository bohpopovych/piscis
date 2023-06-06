import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CombinedPicker = () => {
  const [selectedCategory, setSelectedCategory] = useState('Weight');
  const [selectedItem, setSelectedItem] = useState('');
  const [options, setOptions] = useState([]);

  const handleCategoryChange = category => {
    setSelectedCategory(category);

    // Set options based on selected category
    switch (category) {
      case 'weight':
        setOptions(['10 lbs', '20 lbs', '30 lbs']);
        break;
      case 'length':
        setOptions(['10 cm', '20 cm', '30 cm']);
        break;
      case 'volume':
        setOptions(['10 ml', '20 ml', '30 ml']);
        break;
      // Add more cases for different categories
      default:
        setOptions([]);
    }

    setSelectedItem('');
  };

  return (
    <View style={styles.container}>
      <Text>Select a category:</Text>
      <Picker selectedValue={selectedCategory} onValueChange={handleCategoryChange}>
        <Picker.Item label="Weight" value="weight" />
        <Picker.Item label="Length" value="length" />
        <Picker.Item label="Volume" value="volume" />
      </Picker>

      {options.length > 0 && (
        <View style={styles.pickerContainer}>
          <Text>Select an item:</Text>
          <Picker
            selectedValue={selectedItem}
            onValueChange={itemValue => setSelectedItem(itemValue)}>
            {options.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        </View>
      )}

      <Text>Selected category: {selectedCategory}</Text>
      <Text>Selected item: {selectedItem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  pickerContainer: {
    marginVertical: 10,
  },
});

export default CombinedPicker;

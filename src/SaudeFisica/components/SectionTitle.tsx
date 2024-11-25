import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <Text style={styles.sectionTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
});

export default SectionTitle;


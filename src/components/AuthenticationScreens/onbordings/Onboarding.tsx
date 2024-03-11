import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Onboarding = () => {
  const [consultationType, setConsultationType] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [name, setName] = useState('');

  const handleConsultationTypeChange = (type: React.SetStateAction<string>) => {
    setConsultationType(type);
  };

  return (
    <View>
      <Text>Choose Your Consultation Type</Text>
      <View>
        <TouchableOpacity
          onPress={() => handleConsultationTypeChange('CA Lawyer')}>
          <Text>CA Lawyer</Text>
        </TouchableOpacity>
        {/* Similar TouchableOpacity components for other consultation types */}
      </View>
      <Text>Select Service Sector</Text>
      <TextInput
        value={certificationNumber}
        onChangeText={setCertificationNumber}
        placeholder="Input Your Certification Number"
      />
      <Text>No. of Experience</Text>
      <TextInput
        value={experience}
        onChangeText={setExperience}
        placeholder="Enter Years of Experience"
      />
      <Text>Name/Business Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter Name or Business Name"
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});

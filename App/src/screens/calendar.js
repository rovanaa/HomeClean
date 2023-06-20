import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';


const Calendar = () => {

    const [date, setDate] = React.useState('');

    return (
        <View>
            <Button title='Selecione a Data' onPress={() => setOpen(true)} uppercase={false} mode="outlined" />
            <DatePickerInput
                locale="pt"
                label="Agendamento"
                value={date}
                onChange={(d) => setDate(d)}
                inputMode="start"
            />
        </View>
    );
};
export default Calendar;
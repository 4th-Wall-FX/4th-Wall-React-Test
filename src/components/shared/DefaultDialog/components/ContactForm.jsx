import { Button, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, styled, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ThemedForm = styled('form')({
    display: "flex",
    flexDirection: 'column'
})

const ThemedFormControl = styled(FormControl)({
    marginBottom: '1.25rem'
})

const ContactForm = ({ currentContact, submitFormHandler, locations }) => {
    const { register, handleSubmit } = useForm();
    const [selectValue, setSelectValue] = useState(currentContact ? currentContact.locationId : '')
    const onSubmit = data => submitFormHandler({ ...currentContact, ...data, locationId: +data.locationId });

    const contact = currentContact ? { ...currentContact } : {
        firstName: '',
        lastName: '',
        locationId: '',
        phone: '',
    }

    return (
        <ThemedForm onSubmit={handleSubmit(onSubmit)}>
            <ThemedFormControl variant="standard">
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input id="firstName" defaultValue={contact.firstName} {...register('firstName')} />
            </ThemedFormControl>
            <ThemedFormControl variant="standard">
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input id="lastName" defaultValue={contact.lastName} {...register('lastName')} />
            </ThemedFormControl>
            <ThemedFormControl>
                <InputLabel id="location-select">Location</InputLabel>
                <Select
                    labelId="location-select"
                    id="demo-simple-select"
                    value={selectValue}
                    {...register('locationId')}
                    label="Location"
                    onChange={(event) =>  setSelectValue(event.target.value)}
                >
                    {locations.map(({ id, name}) => {
                       return <MenuItem key={`select-${id}`} value={id}> {name}</MenuItem>
                    })}
                </Select>
            </ThemedFormControl>
            <ThemedFormControl variant="standard">
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <Input id="phone" defaultValue={contact.phone} {...register('phone')} />
            </ThemedFormControl>

            <Button type="submit" variant="contained" >Save Changes</Button>
        </ThemedForm>
    );
};

export default ContactForm;
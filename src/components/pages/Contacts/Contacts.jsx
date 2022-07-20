import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteContact, getContacts, getLocations, saveContact, updateContact } from "../../../async";
import ContactForm from "../../shared/DefaultDialog/components/ContactForm";
import ViewContactComponent from "../../shared/DefaultDialog/components/ViewContactComponent";
import DefaultDialog from "../../shared/DefaultDialog/DefaultDialog";
import Layout from "../../shared/Layout/Layout";
import ThemedDataGrid from "../../shared/ThemedDataGrid/ThemedDataGrid";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [locations, setLocations] = useState([]);
    const [dataArray, setDataArray] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalObject, setModalObject] = useState({
        title: '',
        content: null
    })
    const refetch = false;

    useEffect(() => {
        setLoading(true);
        getContacts().then(contactRes => {
            const contactsArray = contactRes.data;
            setContacts(contactsArray);
            getLocations().then(locationRes => {
                const locationsArray = locationRes.data;
                const formattedData = contactsArray.map(({id, firstName, lastName, locationId}) => ({ 
                    id, 
                    text: `${firstName} ${lastName} - ${locationsArray.length ? locationsArray.find(loc => loc.id === locationId ).name : ''}`,
                    viewIcon: <Visibility />,
                    editIcon: <Edit />,
                    removeIcon: <Delete />
                }))
                setDataArray(formattedData);
                setLocations(locationsArray)
                
                setLoading(false);
            })
        })
        // catch error
        
    }, [refetch]);

    const viewDetails = (event) => {
        const contact = contacts.find((c) => c.id === event);
        const modalContent = { ...contact, locationName: locations.find((l) => l.id === contact.locationId).name}
        const modal = {
            title: (<Typography> View Contact </Typography>),
            titleIcon: <Visibility sx={{ marginLeft: 1 }}/>,
            content: (
                <ViewContactComponent {...modalContent} />
            )
        }
        setModalObject(modal)
        setShowModal(true);
    }

    const editContact = (event) => {
        const contact = contacts.find((c) => c.id === event);
        const modal = {
            title: (<Typography> Edit Contact </Typography>),
            titleIcon: <Edit sx={{ marginLeft: 1 }}/>,
            content: (
                <ContactForm currentContact={contact} locations={locations} submitFormHandler={registerEditContact}/>
            )
        }
        setModalObject(modal)
        setShowModal(true);
    }

    const registerEditContact = (contact) =>{
        setShowModal(false);
        setLoading(true);
        updateContact(contact).then(() => {
            const contactIndex = contacts.findIndex((c) => c.id === contact.id);
            const dataArrayIndex = dataArray.findIndex((d) => d.id === contact.id);
            const updatedContacts = [...contacts];
            const updatedDataArray = [...dataArray];
            updatedContacts[contactIndex] = contact;
            updatedDataArray[dataArrayIndex] = {
                ...dataArray[dataArrayIndex],
                text: `${contact.firstName} ${contact.lastName} - ${locations.length ? locations.find(loc => loc.id === contact.locationId ).name : ''}`,
            }
            setContacts(updatedContacts)
            setDataArray(updatedDataArray)
            setLoading(false)
        });
    }

    const removeContact = (event) => {
        const contact = contacts.find((c) => c.id === event);
        const modal = {
            title: (<Typography> Remove Contact </Typography>),
            titleIcon: <Delete />,
            content: (
                <>
                    <DialogContentText>
                        Are you sure you want to remove {`${ contact.firstName} ${contact.lastName}`}'s contact?
                    </DialogContentText>
                    <DialogActions sx={{ marginTop: '16px'}}>
                        <Button variant="text" color="error" onClick={()=> setShowModal(false)}>Cancel</Button>
                        <Button variant="contained" color="success" onClick={() => registerRemoveContact(contact)}>Remove</Button>
                    </DialogActions>
                </>
            )
        }
        setModalObject(modal)
        setShowModal(true);
    }

    const registerRemoveContact = (contact) => {
        setShowModal(false);
        setLoading(true)
        deleteContact(contact).then(() => {
            const removeIndex = contacts.findIndex((c) => c.id === contact.id);
            const dataArrayIndex = contacts.findIndex((c) => c.id === contact.id);
            const updatedContacts =  [ ...contacts];
            const updatedDataArray = [...dataArray];
            updatedContacts.splice(removeIndex, 1);
            updatedDataArray.splice(dataArrayIndex, 1);
            setDataArray(updatedDataArray);
            setContacts(updatedContacts);
            setLoading(false);
        })
    }

    const createContact = () => {
        const modal = {
            title: (<Typography> Create Contact </Typography>),
            titleIcon: <Edit sx={{ marginLeft: 1 }}/>,
            content: (
                <ContactForm locations={locations} submitFormHandler={registerNewContact}/>
            )
        }
        setModalObject(modal)
        setShowModal(true);
    }
    const registerNewContact = (contact) => {
        setLoading(true);
        setShowModal(false);
        saveContact(contact).then(({data})=> {
            const updatedContacts = [...contacts];
            const updatedDataArray = [...dataArray];
            updatedContacts.push(data);
            updatedDataArray.push({
                id: data.id, 
                text: `${data.firstName} ${data.lastName} - ${locations.length ? locations.find(loc => loc.id === data.locationId ).name : ''}`,
                viewIcon: <Visibility />,
                editIcon: <Edit />,
                removeIcon: <Delete />
            })
            setDataArray(updatedDataArray);
            setContacts(updatedContacts);
            setLoading(false);
        })
    }

    return (
        <Layout currentMenuId={1} buttonClickHandler={() => createContact()}>
            {
                !loading && (
                    <ThemedDataGrid
                        headingText={'All Contacts'}
                        dataArray={dataArray}
                        viewHandler={viewDetails}
                        editHandler={editContact}
                        removeHandler={removeContact}
                    />
                )
            }
            {
                loading && (
                    <Typography> LOADING... </Typography>
                )
            }
            <DefaultDialog 
                isOpen={showModal}
                onCloseHandler={() => setShowModal(false)}
                title={modalObject.title}
                titleIcon={modalObject.titleIcon}
                content={modalObject.content}
            /> 
        </Layout>
    )
}

export default Contacts;
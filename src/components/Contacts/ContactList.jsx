import React from "react";
import PropTypes from 'prop-types';
import css from '../Contacts/Contacts.module.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactSlice";
import { getFilter, getContacts } from "../../redux/selectors";


const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

    return <li className={css.item} ><span>{name}: {number}</span>
        <button className={css.contactButton} type='button' onClick={() => { dispatch(deleteContact(id)) }}>
            Delete
        </button>
    </li>
}


export const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContactList = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  )
  return  <ul >
            {visibleContactList.map(contact => {
              return <Contact
                name = {contact.name}
                number = { contact.number}
                id = {contact.id}
                
                key={contact.id}
                ></Contact>  
            })}
      
          </ul>
}
ContactList.propTypes = {
  visibleContactList: PropTypes.array,
  handleDelete: PropTypes.func,
}
import * as React from "react";
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';
import { Create, SimpleForm, TextInput, DateInput,  } from 'react-admin';
import { Form,  RichTextInput, SaveButton } from 'react-admin';
import { Show, SimpleShowLayout, RichTextField } from 'react-admin';
import { Edit, ReferenceManyField, EditButton, required } from 'react-admin';

// import RichTextInput from 'ra-input-rich-text';
import { Grid } from '@mui/material';




export const MemberList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nick_name" />
            <TextField source="tg_user_name" />
            <TextField source="tg_user_id" />
            <TextField source="tg_user_description" />
            <TextField source="email" />
            <TextField source="created_at" />
        </Datagrid>
    </List>
);


export const MemberCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nick_name" validate={[required()]} fullWidth />
            <TextInput source="tg_user_name"  validate={[required()]} fullWidth />
            <TextInput source="tg_user_id" />
            <TextInput source="tg_user_description" />
            <TextInput source="email"  validate={[required()]} fullWidth />

        </SimpleForm>
    </Create>
);




export const MemberEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="nick_name" validate={required()} />
            <TextInput source="tg_user_name"  />
            <TextInput source="email"  />

        </SimpleForm>
    </Edit>
);


export const MemberShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="nick_name" />
            <TextField source="tg_user_name" />
            <TextField source="email" />

            <DateField label="Create date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);
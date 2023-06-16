import * as React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    DateField, 
    BooleanField, 
    Toolbar,
    Create, 
    SimpleForm, 
    TextInput, 
    DateInput, 
    BooleanInput,
    Form, 
    RichTextInput, 
    SaveButton, 
    DeleteButton,
    useNotify,
    useRedirect,
    Show, 
    SimpleShowLayout, 
    RichTextField, 
    Edit, 
    ReferenceManyField, 
    EditButton, 
    required, 
    FunctionField,
    ArrayInput,
    SimpleFormIterator,
    useRecordContext,
} from 'react-admin';

// 自定义一个FunctionField来展示数组
const ArrayField = ({ record = {}, source }) =>
    <span>{Array.isArray(record[source]) ? record[source].join(", ") : ""}</span>; // 这里假设数组元素为字符串，用逗号分隔

// import RichTextInput from 'ra-input-rich-text';
import { Grid } from '@mui/material';

const OptionsField = () => {
    const record = useRecordContext();
    return (
        <ul>
            {record.options.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
};


export const PollList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            {/* <FunctionField source="options" render={ArrayField} />  // 使用自定义的ArrayField来展示title */}
            <OptionsField source="options" />  // 使用自定义的OptionsField来展示options
            <TextField source="poll_description" />
            <BooleanField source="is_anonymous" />
            <BooleanField source="allows_multiple_answers" />
            <BooleanField source="only_members" />
            <TextField source="created_at" />
            <EditButton />
            {/* <DeleteButton /> */}
        </Datagrid>
    </List>
);

export const afterCreate = (response, variables) => { 
    const notify = useNotify();
    const redirect = useRedirect();
    notify(`Post "${response.data.title}" saved!`);
    redirect('/polls');
};

const PollSaveButton = props => {
    // const notify = useNotify();
    // const redirect = useRedirect();
    // const onSuccess = (response) => {
    //     notify(`Post "${response.data.title}" saved!`);
    //     redirect('/polls');
    // };
    return <SaveButton {...props} mutationOptions={{ afterCreate }} />;
};

const PollCreateToolbar = () => (
    <Toolbar>
        <PollSaveButton />
    </Toolbar>
);

export const PollCreate = () => (
    <Create>
        <SimpleForm toolbar={<PollCreateToolbar />}>
            <TextInput source="title" validate={[required()]}  fullWidth/>
            <ArrayInput source="options">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <BooleanInput source="is_anonymous" />
            <BooleanInput source="allows_multiple_answers" />
            <BooleanInput source="only_members" />
            <TextInput source="poll_description" fullWidth />
       
        </SimpleForm>
    </Create>
);

export const PollEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <ArrayInput source="options">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <BooleanField source="is_anonymous" />
            <BooleanField source="allows_multiple_answers" />
            <BooleanField source="only_members" />
        </SimpleForm>
    </Edit>
);


export const PollShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" />
            {/* <FunctionField label="Options" source="options" render={ArrayField} /> */}
            <OptionsField source="options" />  // 使用自定义的OptionsField来展示options
            <BooleanField source="is_anonymous" />
            <BooleanField source="allows_multiple_answers" />
            <BooleanField source="only_members" />
            <DateField label="Create date" source="created_at" />

        </SimpleShowLayout>
    </Show>
);

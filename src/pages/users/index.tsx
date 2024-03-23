import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import Menu from "../../components/layout/menu";
import Button from "../../components/button";
import TextInput from "../../components/form/textinput";
import { FormikProvider, useFormik } from "formik";

interface User {
    id: string; //uuid
    name: string;
    email:string;
}

export default function Users(){
    const [users, setUsers] = useState<User[]>([]);  //Generics

    const form = useFormik({
        initialValues: {
            name: '',
            email: ''
            // password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <>
            <Menu />
            <h1>Usuários - Login</h1>
            <div>
                    <FormikProvider value={form}>
                    <TextInput
                        name="name"
                        label="Nome"
                        placeholder="Digite o nome"
                    />
                    <TextInput
                        name="email"
                        label="E-mail"
                        placeholder="exemplo@exemplo.com"
                    />
                    <Button
                        type="button"
                        text="Salvar"
                        onClick={form.submitForm}
                    />
                </FormikProvider>
            </div>

            <div>
                <ul>
                    {users.map((usr) => (
                        <li key = {usr.id}>
                            Id: {usr.id} -
                            Nome: {usr.name} -
                            E-mail: {''}{usr.email}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
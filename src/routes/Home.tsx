import React from 'react';
import Layout from '../views/Layout';
import Button from '../components/Button';
import Table from '../components/Table';
import Fieldset from '../components/Fieldset';
import Input from '../components/Input';




const Home = () => {

    const tableColumns = ['Name', 'Age', 'City'];
    const tableData = [
        { Name: 'John', Age: 28, City: 'New York' },
        { Name: 'Jane', Age: 32, City: 'San Francisco' },
        { Name: 'Mike', Age: 25, City: 'Chicago' },
    ];

    return (
        <Layout>
            <Button text={"Button"}></Button>
            <Table columns={tableColumns} data={tableData}></Table>
            <Fieldset>
                <Input type={"text"} id={"one"} labelText={"Label text"}></Input>
                <Input type={"text"} id={"two"} placeholder={"Placeholder text"}></Input>
                <Input type={"email"} id={"three"} labelText={"Error input"} hasError={true}></Input>
            </Fieldset>
        </Layout>


    )

}

export default Home;
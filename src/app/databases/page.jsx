'use client';

import { useEffect, useState } from 'react';
import { Page, Card, Table } from '../../components';

const Databases = () => {

    const [databases, setDatabases] = useState([]);
    const fetchDBData = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/databases');
        const result = await response.json();

        if(result) {
            setDatabases(result);
        }
    };
    const actions = [
        {
            type: 'primary',
            label: 'Add'
        }
    ];

    useEffect(() => {
        fetchDBData();
    },[]);

    const columnsToShow = [
        {
            key: 'id',
            label: 'ID',
            width: '50px'
        },
        {
            key: 'name',
            label: 'Name',
            width: '100%'
        },
        {
            key: 'type',
            label: 'Type',
            width: '200px'
        },
        {
            key: 'solr_status',
            label: 'SOLR',
            width: '160px'
        }
    ];

    return(
        <Page title="Databases" actions={ actions }>
            <Card>
                <Table data={ databases } columns={ columnsToShow } />
            </Card>
        </Page>
    )
}

export default Databases;
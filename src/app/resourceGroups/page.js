'use client';

import { useState, useEffect } from 'react';
import { Page, Card, Table } from "../../components";

const ResourceGroups = () => {

    const [groups, setGroups] = useState([]);
    const fetchGroups = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/resourceGroups');
        const result = await response.json();

        setGroups(result);
    };
    const actions = [
        {
            type: 'primary',
            label: 'Add'
        },
        {
            type: null,
            label: 'Refresh'
        }
    ];

    useEffect(() => {
        fetchGroups();
    }, [])

    const columnsToShow = [
        {
            key: 'name',
            label: 'Application',
            width: '35%'
        },
        {
            key: 'storageService',
            label: 'StorageService',
            width: '65%'
        }
    ];

    return(
        <Page title="Resource groups" actions={ actions }>   
            <Card>
                <Table data={ groups } columns={ columnsToShow }/>
            </Card>
        </Page>
    )
}

export default ResourceGroups;
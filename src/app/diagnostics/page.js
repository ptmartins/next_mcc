'use client';

import { useState, useEffect } from 'react';
import { Page, Card, Table } from "../../components";

const Diagnostics = () => {

    const [diagnostics, setDiagnostics] = useState([]);
    const fetchDiagnostics = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/diagnostics');
        const result = await response.json();

        setDiagnostics(result);
    }

    useEffect(() => {
        fetchDiagnostics();
    }, [])

    const columnsToShow = [
        {
            key: 'name',
            label: 'Name',
            width: '30%'
        },
        {
            key: 'date',
            label: 'Date',
            width: '35%'
        },
        {
            key: 'size',
            label: 'Size',
            width: '35%'
        }
    ];

    return(
        <Page title="Diagnostics">   
            <Card>
                <Table data={ diagnostics } columns={ columnsToShow }/>
            </Card>
        </Page>
    )
}

export default Diagnostics;
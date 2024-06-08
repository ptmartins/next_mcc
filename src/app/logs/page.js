'use client';

import { useState, useEffect } from 'react';
import { Card, Page, TabMenu, Table} from '../../components';

export default function Logs() {

    const [data, setData] = useState({});
    const fetchData = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/tabs');
        const result = await response.json();

        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <Page title="Logs">
            <Card>

            </Card>
        </Page>
  
    )
}
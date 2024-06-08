'use client';

import { useState, useEffect } from "react";
import { Card, Page, Input, Button } from "../../components";
import { IoMdDownload } from "react-icons/io";

const RemoteTools = () => {

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/tools');
        const result = await response.json();

        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <Page title="Remote tools">
            <div className="thirds">
                <Card>
                    {
                        Object.keys(data).map((key, index) => {
                            return(
                                key === 'rdp_port' ?
                                    <div key={ index }>
                                        <Input label="RDP port number" value={ data[key] } onChange={() => false} readOnly={true} /> 
                                        <Button type="submit">Workflow editor <IoMdDownload /> </Button> 
                                    </div> 
                                    :  ''  
                            )
                        })
                    }
                </Card>
            </div>
        </Page>   
    )
}

export default RemoteTools;
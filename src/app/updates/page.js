'use client';

import { useState, useEffect } from "react";
import { Page, Card, Accordion } from "../../components";
import styles from './updates.module.css';

const Updates = () => {

    let [updates, setUpdates] = useState([]);
    const [releases, setReleases] = useState([]);
    const [accordionData, setAccordionData] = useState([]);
    const fetchUpdates = async () => {
        const response = await fetch('https://mcc-dataserver.vercel.app/api/updates');
        const res = await response.json();

        setUpdates(res);
    }


    /**
     * Fetch updates data
     */
    useEffect(() => {
        fetchUpdates();
    }, [])


    /**
     * On updatesData, set releases
     */
    useEffect(() => {
        setReleases(updates.releases);
    }, [updates])


    /**
     * On releases, set Accordion data
     */
    useEffect(() => {
        if(releases) {
            const updatedData = releases.map(release => {

                let result = {
                    title: null,
                    content: null
                }

                Object.keys(release).map(item => {
                    switch(item) {
                        case('version'):
                            result.title = release[item];
                            break;
                        case('release_notes'):
                            result.content = release[item][0].note;  
                            break;
                        default: break;                  
                    }
                })

                return result;
            })

            setAccordionData(updatedData);
        }

    }, [releases])

    return(
        <Page title="Updates">
            {
                accordionData.length > 0 ? <Accordion items={ accordionData } /> : ''
            }
        </Page>        
    )
}

export default Updates;
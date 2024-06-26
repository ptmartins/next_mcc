import { Page } from '../../components';
import { Card, KeyValue } from '../../components';
import { fetchInfoData, fetchLicenseData } from '@/actions/fetchData.js';
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { v4 as uuid } from 'uuid';
import styles from './about.module.css';

const About = async () => {

    const info = await fetchInfoData();
    const license = await fetchLicenseData();
    const plugins = await license.plugins;

    return(
        <Page title="About">
            <div className={ `half_half` }>
                <Card title="Created by">
                    <div className={ styles.address }>
                        <FaLocationDot className={ styles.icon } />
                        <div className="">
                            <p>Imagen Ltd.</p>
                            <p>1 Grange Court</p>
                            <p>Covent Garden, Willingham</p>
                            <p>CB24 5AH</p>
                        </div>
                    </div>
                    <div className={ styles.phone }>
                        <FaPhone className={ styles.icon } />
                        <span>+44 (0) 1954 2620000</span>
                    </div>
                </Card>
                <Card title="License information">
                    {info && info.map(item => <KeyValue key={ uuid() } label={item.title} value={ item.value } />)}
                </Card>
            </div>
            <div className={ `half_half` }>
                <Card title="Plugins" className={ styles.plugins }>
                    {plugins && plugins.map(plugin => {
                            return(
                                <KeyValue key={ uuid() } label={ plugin.title } value={ plugin.version } />
                            )
                        }) 
                    }
                </Card>
            </div>
        </Page>
    )
}

export default About;
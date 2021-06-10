import React from 'react';
import {  Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = (props:any) => {
    const {confirmedData, recoveredData, deathsData,lastUpdateData}=props.data;
    
        console.log('incard: '+confirmedData)
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md= {3}className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmedData}  duration={2.5} separator="," />
                            <label>{confirmedData}</label>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdateData).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md= {3}className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recoveredData} duration={2.5} separator="," />
                            <label>{recoveredData}</label>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdateData).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md= {3}className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deathsData} duration={2.5} separator="," />
                            <label>{deathsData}</label>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdateData).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid> 
        </div>
    )
    
}

export default Cards;
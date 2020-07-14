import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            paddingTop: 'calc(50vh - 100px)'
        },
        text: {
            fontSize: 20,
            fontWeight: 'normal'
        },
        '@keyframes move': {
            from: {
                backgroundPositionX: '0'
            },
            to: {
                backgroundPositionX: '200px'
            }
        },
        div: {
            background: 'url(progress.svg) #27AE60 repeat center',
            backgroundPositionX: '0',
            width: '50%',
            height: 36,
            borderRadius: 8,
            display: 'inline-block',
            margin: '0 auto',
            animationName: '$move',
            animationDuration: '4s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
        }
    })
)

const Loading = () => {

    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <h1 className={classes.text}>Загрузка ...</h1>
            <div className={classes.div}></div>
        </div>
    )
}

export default Loading;
import React from 'react'
import Grid from '@material-ui/core/Grid';


import Gauge from '../../UI elements/Gauge/Gauge'
const Score = (props) => {

    let color = null
    let scoreText = null

    const companyStatus = (statusCode, status) =>{
        if(!statusCode || !(statusCode.toLowerCase() === "active")){
            return <p>The company is not active: {status}</p>
        }
    }

    const companyScore = (score=props.score) => {   
        if(typeof parseInt(score) === "number"){
                if(score > 7){
                    color='green'
                    scoreText = <span>{score}/10 Great</span>
                    return
                }
                if(score >= 4){
                    color='#e5e500'
                    scoreText = <span>{score}/10 Average</span>
                    return
                }
                if(score < 4){
                    color='red'
                    scoreText = <span>{score}/10 Very Bad</span>
                    return
                }
            }else{
                color='#F2F2F2'
                scoreText = <span>"N/A"</span>
            }
            
    }

    companyScore()
    companyStatus(props.statusCode, props.status)

    return (
        <Grid container
        direction="column"
        justify="flex-end"
        alignItems="center"
      >
            {props.score ? <Gauge percent={props.score*10} color={color}/> : null }
            <p>Company's score: {scoreText}</p>
            <p>
            Risk assesment:{" "}
            {props.riskAssessment ? <span style={{fontWeight: 900,color: color}}>{props.riskCode}</span> : "N/A"}
      </p>
        </Grid>
    )
}

export default Score
import React from 'react'
import '../asset/codestyle.css'

function AboutContent() {
    return(
        <div className="flex justify-center sm:flex-col px-6 py-6 sm:pt-6 sm:px-32">
            <p className="font-gg text-gray-400 text-sm sm:text-xl">
            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                <br/><br/>
                <p className="sm:pl-6">Most people infected with the COVID-19 virus will experience mild to moderate</p>
                <p>
                    respiratory illness and recover without requiring special treatment.  Older people, and<br/>
                    those with underlying medical problems like cardiovascular disease, diabetes, chronic<br/> respiratory disease, 
                    and cancer are more likely to develop serious illness.
                </p> 
                <br/>
                <p className="sm:pl-6">The best way to prevent and slow down transmission is be well informed about the</p> 
                <p>
                    COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others<br/> 
                from infection by washing your hands or using an alcohol based rub frequently and not<br/>
                touching your face.
                </p>  
                <br/>
                <p className="sm:pl-6">The COVID-19 virus spreads primarily through droplets of saliva or discharge from the</p> 
                <p>
                    nose when an infected person coughs or sneezes, so it’s important that you also
                    <br/>
                    practice respiratory etiquette (for example, by coughing into a flexed elbow).
                </p>
            </p>
        </div>
    )
}

export default AboutContent
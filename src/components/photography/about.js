import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PhotographyHeader from './photography.header'
import HarshImage from '../../assets/images/harsh.jpg'
import '../../assets/css/photography.css'


export default class About extends React.Component {
    a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    inWords = (num) => {
        if (num.toString().length > 9) return 'many';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; let str = '';
        str += (n[1] !== '0') ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) : '';
        str += (n[2] !== '0') ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) : '';
        str += (n[3] !== '0') ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) : '';
        str += (n[4] !== '0') ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) : '';
        str += (n[5] !== '0') ? ((str !== '') ? '' : '') + (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) : '';
        return str.trim();
    }
    render () {
        const years = this.inWords(moment().diff(moment(2016, 'YYYY'), 'years'));
        return (
            <div className="photography-about">
                <PhotographyHeader />
                <section>
                    <div className="about-text">
                        <span>A bit about myself</span>
                        <p className="about-title">Harsh is a self-passionate, self-taught outdoor, travel and portrait photographer.</p>
                        <p className="about-subtitle">I became insterested in photography about {years} years ago when I started travelling across new places. It’s photos and memories who drives me to travel the world.</p>
                        <p className="about-connect">Connect me here
                            <a href="https://instagram.com/hiimharsh/" target="_blank" className="instagram" title="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
                            <a href="https://hiimharsh.tumblr.com/" target="_blank" className="tumblr" title="Tumblr"><FontAwesomeIcon icon={['fab', 'tumblr']}/></a>
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={HarshImage} alt="Harsh Thakkar" />
                    </div>
                </section>
            </div>
        );
    }
}
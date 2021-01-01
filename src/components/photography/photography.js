import React from 'react'
import moment from 'moment'
import PhotographyHeader from './photography.header';
import Loader from '../../assets/images/loader.gif';
import '../../assets/css/photography.css'

export default class Photography extends React.Component {
    state = {
        // collections: {
        //     'Leh 2018': {
        //         photos: []
        //     },
        //     'leh': {
        //         photos: [
        //             "https://firebasestorage.googleapis.com/v0/b/photos-d71d1.appspot.com/o/photography%2Fleh%2Fthiago-gomes-K0YuYMAwCTQ-unsplash.jpg?alt=media&token=88c45c8b-91c4-45af-a633-ff5ad20ae6dc"
        //         ]
        //     }
        // },
        collections: null,
        isloading: true,
    }
    constructor () {
        super();
        let finalData = localStorage.getItem('appspot');
        let emit = localStorage.getItem('emit');
        if (finalData && emit) {
            if (moment().diff(parseInt(emit, 10), 'day') > 1) this.getFiles();
            else this.state = { collections: JSON.parse(finalData), isloading: false };
        } else this.getFiles();
    }

    getFiles = async () => {
        if (window.firebase) {
            let app = window.firebase;
            let storage = app.storage();
            let gsReference = storage.refFromURL('gs://photos-d71d1.appspot.com');
            let photo = gsReference.child('photography');
            let photographyRef = await photo.list({ maxResults: 100 });
            if (photographyRef.items) {} // ignore for now
            if (photographyRef.prefixes) {
                let collection = {};
                photographyRef.prefixes.map(async prefix => {
                    const prefixRef = await prefix.list({ maxResults: 1 });
                    collection[prefix.name] = { photos: [] }
                    prefixRef.items.map(async (item, index) => {
                        const url = await item.getDownloadURL();
                        collection[prefix.name]['photos'].push(url);

                        if (index === prefixRef.items.length - 1)
                        setTimeout(() => {
                            this.setState({ collections: collection, isloading: false }, () => {
                                console.log(this.state.collections);
                                localStorage.setItem('appspot', JSON.stringify(this.state.collections));
                                localStorage.setItem('emit', `${+new Date()}`);
                            });
                        }, 1000);
                    });
                });
            }
        } else {
            localStorage.setItem('appspot', JSON.stringify(this.state.collections));
            localStorage.setItem('emit', `${+new Date()}`);
        }
    }

    textTrim = str => {
        return str.length > 32 ? str.substring(0, 32) + ' ..' : str;
    }

    render () {
        const { collections, isloading } = this.state;
        return (
            <div className="photography-main">
                {
                    isloading ? <div className="loader"><img src={Loader} alt="loader" /></div> :
                    <div>
                        <PhotographyHeader />
                        <section>
                            {
                                collections && Object.keys(collections) ?
                                Object.keys(collections).map((collection, i) => (
                                    <div key={i}>{
                                        collections[collection].photos && collections[collection].photos.length ?
                                        <div className="collection" style={{ backgroundImage: `url(${collections[collection].photos[0]})` }}>
                                            <div className="collection-name"><p>{this.textTrim(collection)}</p></div>
                                        </div> : null
                                    }</div>
                                )) : null
                            }
                        </section>
                    </div>
                }
            </div>
        );
    }
}
import React from 'react'
// import axios from 'axios'
// import ImageMasonry from 'react-image-masonry'
import ImageMasonry from './imageMasonry'
import '../assets/css/photographs.css'

export default class Photographs extends React.Component {
    state = {
        photos: null
    };

    componentDidMount () {
        // this.getPhotos();
    }

    // async getPhotos () {
    //     try {
    //         let response = await axios.get('http://localhost:8000/getphotos');
    //         if (response && response.data && response.data.status === 'success') {
    //             this.setState({ photos: response.data.message });
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    render () {
        return (
            <div className="photographs">
                <div className="gri">
                    {/* <div className="grid-one">
                        {
                            this.state.photos && this.state.photos.map((photo, index) => {
                                if (index % 2 === 0) {
                                    return <div key={index} className="item">
                                        <img src={photo} alt={index} />
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="grid-two">
                        {
                            this.state.photos && this.state.photos.map((photo, index) => {
                                if (index % 2 !== 0) {
                                    return <div key={index} className="item">
                                        <img src={photo} alt={index} />
                                    </div>
                                }
                            })
                        }
                    </div> */}
                    {/* {
                        this.state.photos && this.state.photos.map((photo, index) => {
                            // if (index % 2 !== 0) {
                                return <div key={index} className="item">
                                    <img src={photo} alt={index} />
                                </div>
                            // }
                        })
                    } */}
                    {
                        this.state.photos && <ImageMasonry
                            imageUrls={this.state.photos}
                            numCols={3}
                            className={'newimage'}
                            containerWidth={"80%"}
                        />
                    }
                </div>
            </div>
        )
    }

}
import Hotel from './hotel.jpg';
import React, {Component} from 'react';
import './App.css';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.match.params.id
        }
    }
    render() {
        return(
            <div className="container-fluid detail">
                <div className="header-detail">
                    <img src={Hotel} />
                </div>
                <div className="body-detail container">
                    <div className="main-detail">
                        <h1>{this.state.data}</h1>
                        <text>description</text>
                        <div className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className="facilities">
                            <div className="facilities-card">Kamar</div>
                            <div className="facilities-card">Tidur</div>
                            <div className="facilities-card">makan</div>
                        </div>
                    </div>
                    <div className="location">
                        <h3>location</h3>
                    </div>
                </div>
                <div className="detail-image container">
                    <img src="https://picsum.photos/id/1/5616/3744" />
                    <img src="https://picsum.photos/id/1/5616/3744" />
                    <img src="https://picsum.photos/id/1/5616/3744" />
                </div>
            </div>
        )
    }
}

export default Detail
import React, {useContext, useEffect} from "react";
import GoRestServiceContext from "../goRest-service-context/goRest-service-context";
import { connect } from "react-redux";
import classes from "./photos.css";
import { photosLoaded } from "../../store/actions";

const Photos = ({ photos, photosLoaded }) => {

    const goRestService = useContext(GoRestServiceContext);

    useEffect(() => {
        goRestService.getPhotos()
            .then(response => {
                photosLoaded(response.data.result);
            });
    }, []);


    const renderPhotos = photos.map(photo => {
        return (
            <div className="card mb-3" key={photo.id}>
                <img src={photo.url} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                </div>
            </div>
        );
    });

    return (
        <div className={classes["photo-page"]}>
            {renderPhotos}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    };
}

const mapDispatchToProps = {
    photosLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
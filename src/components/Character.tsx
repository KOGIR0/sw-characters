import React from 'react';
import { addToFavorites, removeFromFavorites } from '../actions/charactersActions';
import { connect } from 'react-redux';
import '../styles/Character.css';
import { 
    FaStar, 
    FaRegStar, 
    FaVenus,
    FaMars,
    FaTransgender,
    FaGenderless,
    FaBirthdayCake,
    FaEye
} from 'react-icons/fa';
import { 
    GiBodyHeight,
    GiWeight
} from 'react-icons/gi';
import { CharacterProps } from '../types/Character';

class Character extends React.Component<CharacterProps>
{
    findGender(gender: String) {
        switch(gender) {
            case 'male':
                return <FaMars />
            case 'female':
                return <FaVenus />
            case 'hermaphrodite':
                return <FaTransgender />
            default:
                return <FaGenderless />
        }
    }

    render() {
        const { info, isFavorite } = this.props;
        let genderIcon = this.findGender(info.gender);
        return (
            <div className="character">
                <h2>
                    {!isFavorite ?
                    <FaRegStar
                    className="favorite-add"
                    onClick={() => this.props.addToFavorites(info)}/>
                    :
                    <FaStar 
                    className="favorite-add"
                    onClick={() => this.props.removeFromFavorites(info)}/>}
                    {info.name ? info.name : "No name provided"}
                </h2>
                <div style={{marginLeft: "auto", textAlign: "left"}}>
                    <div><GiBodyHeight /> {info.height ? info.height : "No height provided"}</div>
                    <div><GiWeight /> {info.mass ? info.mass : "No mass provided"}</div>
                    <div><FaBirthdayCake /> {info.birth_year ? info.birth_year : "No birth year provided"}</div>
                    <div><FaEye fill={info.eye_color}/> {info.eye_color ? info.eye_color : "No eye color provided"}</div>
                    <div>{genderIcon} {info.gender ? info.gender : "No gender provided"}</div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addToFavorites, removeFromFavorites })(Character);
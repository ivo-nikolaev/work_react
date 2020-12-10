import PhoneNum from 'awesome-phonenumber';

const PhoneNumber = (props) =>{

    if(props.phone.hidden || !props.phone.phone_number){ return 'N/A'}
    const number = new PhoneNum(props.phone.phone_number)
    return "+" + number.getCountryCode( )+ " " + number.getNumber( 'national' )
}

export default PhoneNumber
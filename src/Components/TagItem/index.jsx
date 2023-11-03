import { Container } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi'

export function TagItem({ $isnew, value, onClick, ...rest }){
    return(
        <Container $isnew={$isnew}>
                <input 
                type="text" 
                value={ value }
                readOnly={!$isnew}
                placeholder="New tag"
                { ...rest }
                />
                
                <button type="button" onClick={onClick}>
                    {$isnew ? <FiPlus/> : <FiX/>}
                </button>
        </Container>
    )
}
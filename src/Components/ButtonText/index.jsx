import { Container } from "../ButtonText/styles";

export function ButtonText({ icon: Icon, children, ...rest }){
    return(
        <Container type="button" { ...rest }>
            {Icon && <Icon size={20}/>}
            { children }
        </Container>
    )
}
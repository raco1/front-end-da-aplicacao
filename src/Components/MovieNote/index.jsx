import { Container } from "./styles";
import { Tag } from '../tag';
import { Rate } from 'antd';

export function MovieNote({ data, ...rest }){
    return(
        <Container type="button" { ...rest } >
            <h3>{data.title}</h3>

            <Rate count={5} defaultValue={data.rating} disabled style={{color: `#FF859B`}} className="rating"/>

           <div>
             <p> {data.description } </p>
           </div>

           {
            data.tags && (

                <footer>
                        {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
                </footer>
                
                        )       
            }
        </Container>
    )
}
import { Container } from "./styles";
import { Rate } from 'antd';
import { Tag } from "../tag";
  
export function MovieDetail({ data, icon: Icon, tags, ...rest }) {
    return (
      <Container {...rest}>
        <header>
            <h3>{data.title}</h3>
            <Rate count={5} defaultValue ={data.value} disabled className="rating" style={{color: `#FF859B`}}/>

            <span>
                <img src="https://github.com/raco1.png" alt="User profile picture" />
                <p>By Rafael Coelho</p>
            </span>
            
            <span>
                {Icon && <Icon />}
                <p>{data.created_at}</p>
            </span>
        </header>

        {
            data.tags && (
            <footer className="tags">
                    {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
            </footer>
        )}

        <p>{data.description}</p>

      </Container>
    );
  }

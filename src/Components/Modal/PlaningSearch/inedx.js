import React from 'react';
import {
    Wrapper,
    BackDrop,
    ListContainer,
    Container,
    List,
    Title,
    Small,
    Popular

} from './style';

const PlaningSearch = ({ Countrys, visibilityHidde }) => {

    return (
        <Wrapper>
            <BackDrop onClick={visibilityHidde}></BackDrop>
            <Container>
                {Countrys && Countrys.map(Country => (
                    <ListContainer >
                        <List>
                            <Title>{Country.title}</Title>
                            <Small>{Country.area}</Small>
                        </List>
                        {Country.popular && <Popular>Popular</Popular>}
                    </ListContainer>
                ))}
            </Container>

        </Wrapper>
    )
}

export default PlaningSearch;

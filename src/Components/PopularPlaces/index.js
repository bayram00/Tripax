import React from 'react';
import {
    Wrapper,
    Container,
    Title,
    PlaceContainer,
    Place,
    PlaceTitleSection,
    PlaceTitle,
    Price
} from './style'

function Places() {
    return (
        <Wrapper>
            <Container>
                <Title>Popular Places</Title>
                <PlaceContainer>
                    <Place className='item1'>
                        <PlaceTitleSection>
                            <PlaceTitle >Netherlands</PlaceTitle>
                            <PlaceTitle>Amsterdam</PlaceTitle>
                            <Price><span>From</span> $2450</Price>  
                            <button type='button'>View Plan</button>
                        </PlaceTitleSection>
                        <img src="/Amsterdam.png" alt="" />
                    </Place>
                    <Place className='item2'>
                        <PlaceTitleSection>
                            <PlaceTitle>Jordan</PlaceTitle>
                            <PlaceTitle>Wadi Musa</PlaceTitle>
                            <Price><span>From</span> $2450</Price>
                            <button type='button'>View Plan</button>
                        </PlaceTitleSection>
                        <img src="/Wadi.png" alt="" />
                    </Place>
                    <Place className='item3' >
                        <PlaceTitleSection>
                            <PlaceTitle>Thailand</PlaceTitle>
                            <PlaceTitle>Phuket</PlaceTitle>
                            <Price><span>From</span> $2450</Price>
                            <button type='button'>View Plan</button>
                        </PlaceTitleSection>
                        <img src="/Phuket.png" alt="" />
                    </Place>
                    <Place className='item4' >
                        <PlaceTitleSection>
                            <PlaceTitle>Italy</PlaceTitle>
                            <PlaceTitle>Rome</PlaceTitle>
                            <Price><span>From</span> $2450</Price>
                            <button type='button'>View Plan</button>
                        </PlaceTitleSection>
                        <img src="/Rome.png" alt="" />
                    </Place>
                    <Place className='item5'>
                        <PlaceTitleSection>
                            <PlaceTitle>Frace</PlaceTitle>
                            <PlaceTitle>Paris</PlaceTitle>
                            <Price><span>From</span> $2450</Price>
                            <button type='button'>View Plan</button>
                        </PlaceTitleSection>
                        <img src="/Paris.png" alt="" />
                    </Place>
                    <Place className='item6' >
                        <PlaceTitleSection>
                            <PlaceTitle>United States</PlaceTitle>
                            <PlaceTitle>New York</PlaceTitle>
                            <Price><span>From</span> $2450</Price>
                            <button type='button'>View Plan</button>
                        </PlaceTitleSection>
                        <img src="/newYork.png" alt="" />
                    </Place>
                    <Place className='item7'>
                        <PlaceTitleSection>
                            <PlaceTitle>Spain</PlaceTitle>
                            <PlaceTitle>Barcelona</PlaceTitle>
                            <Price><span>From</span> $2450</Price>
                            <button type='button'>View Plan</button>
                        </PlaceTitleSection>
                        <img src="/Barcelona.png" alt="" />
                    </Place>
                </PlaceContainer>
            </Container>
        </Wrapper>
    )
}

export default Places;

import React from 'react';
import {
    Wrapper,
    Container,
    Title,
    BestUser,
    Userİnfo,
    UserName,
    UserTrip,
    MorePeople,
    İmgContainer,
    MoreButton
} from './style'
function BestTravelers() {

    const Data = [
        {
            Name: "Maud Fowler",
            trip: "2 trip Plan",
            profile: "/ProfilePicutre.jpg"
        },
        {
            Name: "Maud Fowler",
            trip: "3 trip Plan",
            profile: "/ProfilePicutre.jpg"
        },
        {
            Name: "Maud Fowler",
            trip: "4 trip Plan",
            profile: "/ProfilePicutre.jpg"
        },
        {
            Name: "Maud Fowler",
            trip: "2 trip Plan",
            profile: "/ProfilePicutre.jpg"
        },
        {
            Name: "Maud Fowler",
            trip: "2 trip Plan",
            profile: "/ProfilePicutre.jpg"
        },
        {
            Name: "Maud Fowler",
            trip: "2 trip Plan",
            profile: "/ProfilePicutre.jpg"
        },
    ]

    return (

        <Wrapper>
            <Title>Best Planner Travelers</Title>
            <Container>

                <BestUser>
                    {Data.map(User => (
                        <Userİnfo>
                            <img src={User.profile} alt={User.Name} />
                            <UserName>{User.Name}</UserName>
                            <UserTrip>{User.trip}</UserTrip>
                        </Userİnfo>
                    ))}
                </BestUser>

                <MorePeople>

                    <İmgContainer>
                        {Data.slice(0, 4).map(i => {
                            return <img src={i.profile} alt="" />
                        })}
                    </İmgContainer>

                    <MoreButton >
                        More People
                    </MoreButton>

                </MorePeople>

            </Container>
        </Wrapper>
    )
}

export default BestTravelers;

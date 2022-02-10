import { useRef } from 'react';
import {
    Wrappper,
    Container,
    Title,
    Slider,
    Content,
    ContentText,
    Date,
    Text,
    Prive,
    ButtonContent,
    Button
} from './style'

function PopularPlace() {


    const SliderRef = useRef(null)


    const Carousel = (CarouselOffset) => {

        SliderRef.current.scrollLeft += CarouselOffset

    }

    const Data = [
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },
        {
            img: "/Rome.png"
        },

    ]



    return (
        <Wrappper>
            <Container>
                <Title>Popular Trip Plans</Title>
                <Slider ref={SliderRef} >
                    {
                        Data.map(item => (
                            <Content >
                                <img src={item.img} alt="" />
                                <ContentText>
                                    <Date>{`20.112019 > 25.11.2019 . 2 Traveler`}</Date>
                                    <Text>{`3 Days Popular Barcelona Tour Plan Trip `}</Text>
                                    <Prive>$750<span>/Average Price</span></Prive>
                                </ContentText>
                            </Content>
                        ))
                    }
                    <ButtonContent>
                        <Button onClick={() => Carousel(-297)}>
                            <i class="fas fa-chevron-left"></i>
                        </Button>
                        <Button onClick={() => Carousel(297)}>
                            <i class="fas fa-chevron-right"></i>
                        </Button>
                    </ButtonContent>
                </Slider>
            </Container>
        </Wrappper>
    )
}

export default PopularPlace;

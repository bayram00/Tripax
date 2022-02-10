import React from 'react';

import {
    Wrapper,
    Container,
    BigText,
    SmallText,
    İnputForm,
    İnputContainer,
    İnput,
    Button,
    GoUpButton
} from './style'

function EmailSave() {

    const GoUp = () => {
        window.scroll({
            behavior: 'smooth',
            top: 0
        })
    }

    return (

        <Wrapper>
            <GoUpButton onClick={() => GoUp()}><i class="fas fa-chevron-up"></i></GoUpButton>
            <Container>
                <BigText>Receive news of innovations and tour plans</BigText>
                <SmallText>Sed mollis augue, ut bibendum magna molestie quis, ut blandit id. </SmallText>
                <İnputForm>

                    <İnputContainer >
                        <label>FullName</label>
                        <İnput placeholder='Ex john Doe'></İnput>
                    </İnputContainer>

                    <İnputContainer >
                        <label>E-mail Address</label>
                        <İnput placeholder='Ex johndoe@gmail.com'></İnput>
                    </İnputContainer>
                    <Button>Save Email Address</Button>
                </İnputForm>
            </Container>
        </Wrapper>
    )
}

export default EmailSave;

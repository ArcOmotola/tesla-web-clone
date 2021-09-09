import React from 'react';
import styled from "styled-components";
import Section from './Section';

export default function Home() {
    return (
        <Container>
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`
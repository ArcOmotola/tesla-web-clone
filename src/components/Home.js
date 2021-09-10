import React from 'react';
import styled from "styled-components";
import Section from './Section';
import img2 from "../images/images/model-y.jpg";
import img1 from "../images/images/model-s.jpg";
import img3 from "../images/images/model-3.jpg";
import img4 from "../images/images/model-x.jpg";
import img5 from "../images/images/solar-panel.jpg";
import img6 from "../images/images/accessories.jpg";


export default function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={img1}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={img2}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={img3}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={img4}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg={img5}
                leftBtnText="Order now"
                rightBtnText="Learn more" 
            /> 
            <Section
                title="Accessories"
                description=""
                backgroundImg={img6}
                leftBtnText="Shop now"
            /> 
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`
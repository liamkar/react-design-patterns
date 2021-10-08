import styled from 'styled-components';


//styled component way of 
const Container = styled.div`
    display:flex;
`
const Pane = styled.div`
    flex: ${props=> props.weight}
`;

export const SplitScreen = ({
    //left:Left, //component displayed on the left side
    //right: Right, //
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [left, right] = children;
    //<left/><left/> replaced by {left} {right}
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
}
import styled from "styled-components";

const ShadowText = styled.p`
color: white;
font-size:${props=>props.textSize};
text-shadow:6px 6px 3px rgba(0,0,0,0.71);
`
export default ShadowText;
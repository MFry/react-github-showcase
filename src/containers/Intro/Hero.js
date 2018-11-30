import styled from 'styled-components';

// Set the hero image to change from a background to the image
const heroImg = null;
const img = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${heroImg}");`;

export default styled.div`
  ${heroImg ? img : `background-color: #282c34;`}
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

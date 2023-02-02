import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'
import { Link } from 'gatsby'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  /* background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); */
  color: #000;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 768px;
  height: 260px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 174px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #505050;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Title = styled.div`
  margin-bottom: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <Title>
            <Link to="/">힝입니다</Link>
          </Title>
          <SubTitle>subtitle 서브타이틀</SubTitle>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction

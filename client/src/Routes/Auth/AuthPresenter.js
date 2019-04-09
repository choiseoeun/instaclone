import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../../Components/Input'

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  width: 35rem;
  background-color: white;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem 3rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Heading = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 2.2rem auto 1.2rem;
`

const HeadingTwo = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.darkGreyColor};
  margin: 0 40px 10px;
`

const Content = styled.div`
  margin: 1.5rem 0;
  text-align: center;
`

const Button = styled.button`
  background-color: ${props => props.theme.blueColor};
  color: white;
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  text-decoration: none;
  border-radius: 3px;
`

const Break = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  font-size: 1.2rem;
`

const BreakLine = styled.div`
  display: inline-block;
  width: 40%;
  height: 1px;
  background-color: ${props => props.theme.darkGreyColor};
  margin-bottom: 0.2rem;
`

const BreakWord = styled.div`
  display: inline-block;
  width: 20%;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.blackColor};
  font-size: 1.2rem;
  display: inline-block;
  margin: 0 auto;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.blueColor};
  }

  &:focus {
    outline: none;
  }
`

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const GreyText = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${props => props.theme.darkGreyColor};
  display: inline-block;
  padding: 0 1rem;
`

export const LoginPresenter = ({ setShowLogin, onLogin, email }) => (
  <BoxWrapper>
    <Box>
      <Heading>Instagram</Heading>
      <Content>
        <form onSubmit={onLogin}>
          <Input {...email} />
          <Button>로그인</Button>
        </form>
        <Break>
          <BreakLine />
          <BreakWord>또는</BreakWord>
          <BreakLine />
        </Break>
        <StyledLink to="/">비밀번호를 잊으셨나요?</StyledLink>
      </Content>
    </Box>
    <Box>
      <Content>
        <GreyText>계정이 없으신가요?</GreyText>
        <StyledLink as="button" onClick={() => setShowLogin(false)}>
          가입하기
        </StyledLink>
      </Content>
    </Box>
  </BoxWrapper>
)

export const SignupPresenter = ({
  setShowLogin,
  email,
  username,
  firstName,
  lastName,
  onSignup
}) => (
  <BoxWrapper>
    <Box>
      <Heading>Instagram</Heading>
      <HeadingTwo>친구들의 사진과 동영상을 보려면 가입하세요.</HeadingTwo>
      <Content>
        <form onSubmit={onSignup}>
          <Input {...email} />
          <Input {...firstName} />
          <Input {...lastName} />
          <Input {...username} />

          <Button>가입</Button>
        </form>
      </Content>
      <Content>
        <GreyText>
          가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
        </GreyText>
      </Content>
    </Box>
    <Box>
      <Content>
        <GreyText>계정이 있으신가요?</GreyText>
        <StyledLink as="button" onClick={() => setShowLogin(true)}>
          로그인
        </StyledLink>
      </Content>
    </Box>
  </BoxWrapper>
)

const AuthPresenter = ({ children }) => <Wrapper>{children}</Wrapper>

export default AuthPresenter

import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import { Helmet } from 'react-helmet'


// Template 컴포넌트의 prop 타입 정의
type TemplateProps = {
    title: string
    description: string
    url: string
    image: string
    children: ReactNode
}

// 메인 컨테이너 스타일 지정
const Container = styled.main`
  display: flex;          // flexbox 레이아웃 사용
  flex-direction: column; // 자식 컴포넌트 수직 정렬
  height: 100%;           // 전체 높이 100%
`

// 
const Template: FunctionComponent<TemplateProps> = function ({
    title,
    description,
    url,
    image,
    children,
}) {
    return (
        <Container>
            <Helmet>
                <title>{title}</title>
        
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={title} />
        
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:site" content="@사용자이름" />
                <meta name="twitter:creator" content="@사용자이름" />
        
                <html lang="ko" />
            </Helmet>
    
            <GlobalStyle />
            {children}
            <Footer />
        </Container>
    )
}
  

export default Template
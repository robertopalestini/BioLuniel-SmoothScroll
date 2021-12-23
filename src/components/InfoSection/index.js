import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements'


const InfoSection = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, descriptiontwo, descriptionthree, descriptionfour, descriptionfive, descriptionsix, img, alt, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}> 
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading darkText={darkText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <Subtitle darkText={darkText}>{descriptiontwo}</Subtitle>
                    <Subtitle darkText={darkText}>{descriptionthree}</Subtitle>
                    <Subtitle darkText={darkText}>{descriptionfour}</Subtitle>
                    <Subtitle darkText={darkText}>{descriptionfive}</Subtitle>
                    <Subtitle darkText={darkText}>{descriptionsix}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt} />
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>    
          </InfoContainer>  
        </>
    )
}

export default InfoSection
